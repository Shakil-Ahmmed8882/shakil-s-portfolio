"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type Engine = {
  ctx: AudioContext;
  master: GainNode;
  cleanup: () => void;
};

const PENTATONIC = [440, 523.25, 587.33, 659.25, 783.99]; // A4, C5, D5, E5, G5

const buildEngine = (): Engine => {
  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext;
  const ctx = new Ctor();

  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  // Warm low-pass shaping the pad
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.6;
  filter.connect(master);

  // Slow filter LFO — gives gentle motion
  const lfo = ctx.createOscillator();
  const lfoDepth = ctx.createGain();
  lfo.frequency.value = 0.13;
  lfoDepth.gain.value = 500;
  lfo.connect(lfoDepth);
  lfoDepth.connect(filter.frequency);
  lfo.start();

  // 3-voice pad: A3, C#4, E4 — bright major triad
  const padFreqs = [220, 277.18, 329.63];
  const padOscs: OscillatorNode[] = [];
  padFreqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = (i - 1) * 6;
    g.gain.value = 0.18;
    osc.connect(g);
    g.connect(filter);
    osc.start();
    padOscs.push(osc);
  });

  // Periodic bell ping — pentatonic, soft attack, long decay
  const ping = () => {
    const t = ctx.currentTime;
    const freq = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.4);
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + 2.6);
  };
  const pingTimer = window.setInterval(ping, 4200);

  return {
    ctx,
    master,
    cleanup: () => {
      window.clearInterval(pingTimer);
      padOscs.forEach((o) => {
        try {
          o.stop();
        } catch {}
      });
      try {
        lfo.stop();
      } catch {}
      ctx.close().catch(() => {});
    },
  };
};

export const AmbientMusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const engineRef = useRef<Engine | null>(null);

  const start = async () => {
    if (!engineRef.current) {
      engineRef.current = buildEngine();
    }
    const { ctx, master } = engineRef.current;
    if (ctx.state === "suspended") {
      try {
        await ctx.resume();
      } catch {
        return;
      }
    }
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.linearRampToValueAtTime(0.32, now + 1.4);
    setPlaying(true);
  };

  const stop = () => {
    const engine = engineRef.current;
    if (!engine) return;
    const { ctx, master } = engine;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.linearRampToValueAtTime(0, now + 0.5);
    setPlaying(false);
  };

  useEffect(() => {
    setMounted(true);

    // Try autoplay; if blocked, arm a one-shot listener for first user gesture.
    let armed = true;
    const tryAutoplay = async () => {
      if (!armed) return;
      try {
        await start();
      } catch {}
    };
    tryAutoplay();

    const onFirstGesture = () => {
      if (!armed) return;
      const engine = engineRef.current;
      if (!engine || engine.ctx.state !== "running") {
        start();
      }
    };
    window.addEventListener("pointerdown", onFirstGesture, { once: true });
    window.addEventListener("keydown", onFirstGesture, { once: true });

    return () => {
      armed = false;
      window.removeEventListener("pointerdown", onFirstGesture);
      window.removeEventListener("keydown", onFirstGesture);
      engineRef.current?.cleanup();
      engineRef.current = null;
    };
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label={playing ? "Mute ambient music" : "Play ambient music"}
      aria-pressed={playing}
      onClick={() => (playing ? stop() : start())}
      className="fixed bottom-6 right-6 z-40 group flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/70 backdrop-blur-md text-foreground/85 transition-all duration-300 hover:scale-110 hover:text-[hsl(var(--accent-primary))] hover:border-[hsl(var(--accent-primary)/0.6)]"
      style={{
        boxShadow: playing
          ? "0 0 20px hsl(var(--accent-primary)/0.45), 0 0 0 1px hsl(var(--accent-primary)/0.35) inset"
          : "0 4px 18px -6px hsl(var(--background)/0.8)",
      }}
    >
      {/* Equalizer bars when playing */}
      {playing ? (
        <span className="flex items-end gap-[3px] h-[18px]">
          <span className="eq-bar w-[3px] rounded-full bg-[hsl(var(--accent-primary))]" style={{ animationDelay: "0s" }} />
          <span className="eq-bar w-[3px] rounded-full bg-[hsl(var(--accent-primary))]" style={{ animationDelay: "0.18s" }} />
          <span className="eq-bar w-[3px] rounded-full bg-[hsl(var(--accent-primary))]" style={{ animationDelay: "0.36s" }} />
          <span className="eq-bar w-[3px] rounded-full bg-[hsl(var(--accent-primary))]" style={{ animationDelay: "0.12s" }} />
        </span>
      ) : (
        <Volume2 size={18} strokeWidth={1.8} />
      )}

      {/* Pulse ring */}
      {playing && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border border-[hsl(var(--accent-primary)/0.5)]"
          style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
        />
      )}

      {/* Hidden secondary icon for screen-reader clarity on hover */}
      <span className="sr-only">
        {playing ? <VolumeX /> : <Volume2 />}
      </span>
    </button>
  );
};

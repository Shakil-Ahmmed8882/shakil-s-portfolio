"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/modules/shared/ui/Button";

type TFormState = {
  name: string;
  email: string;
  message: string;
};

const initial: TFormState = { name: "", email: "", message: "" };

export const ContactForm = () => {
  const [form, setForm] = useState<TFormState>(initial);
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof TFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent. I'll get back to you soon.");
    setForm(initial);
    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className="h-11 rounded-md border border-border/60 bg-background/40 px-3 text-sm outline-none transition-colors focus:border-foreground/40"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@domain.com"
            className="h-11 rounded-md border border-border/60 bg-background/40 px-3 text-sm outline-none transition-colors focus:border-foreground/40"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="Tell me about your project."
          className="rounded-md border border-border/60 bg-background/40 p-3 text-sm outline-none transition-colors focus:border-foreground/40 resize-none"
        />
      </div>
      <div className="flex items-center justify-between gap-3 pt-2">
        <a
          href="mailto:shakilahmmed8882@gmail.com"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          or email me directly →
        </a>
        <Button type="submit" disabled={submitting} className="rounded-full">
          {submitting ? "Sending…" : "Send Message"}
          <Send size={14} />
        </Button>
      </div>
    </form>
  );
};

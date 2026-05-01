"use client";

import { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { content } from "@/config/content";

type TFormState = { name: string; email: string; message: string };
const initial: TFormState = { name: "", email: "", message: "" };

export const ContactForm = () => {
  const [form, setForm] = useState<TFormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const t = content.contact;

  const update = (key: keyof TFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t.formError);
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        toast.error(t.formError);
        setSubmitting(false);
        return;
      }

      toast.success(t.formSuccess);
      setForm(initial);
    } catch (error) {
      toast.error(t.formError);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border/50 bg-background/30 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-[hsl(var(--accent-primary)/0.7)] focus:shadow-[0_0_0_3px_hsl(var(--accent-primary)/0.12)]";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <User size={11} style={{ color: "hsl(var(--accent-primary))" }} />
            {t.formNameLabel}
          </label>
          <input type="text" value={form.name} onChange={update("name")} placeholder={t.formNamePlaceholder} className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <Mail size={11} style={{ color: "hsl(var(--accent-primary))" }} />
            {t.formEmailLabel}
          </label>
          <input type="email" value={form.email} onChange={update("email")} placeholder={t.formEmailPlaceholder} className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          <MessageSquare size={11} style={{ color: "hsl(var(--accent-primary))" }} />
          {t.formMessageLabel}
        </label>
        <textarea value={form.message} onChange={update("message")} rows={5} placeholder={t.formMessagePlaceholder} className={`${inputClass} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="self-end inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_-6px_hsl(var(--accent-primary)/0.6)] disabled:opacity-60 disabled:pointer-events-none"
        style={{
          background: "hsl(var(--accent-primary))",
          boxShadow: "0 4px 20px -4px hsl(var(--accent-primary)/0.45)",
        }}
      >
        {submitting ? t.formSendingLabel : t.formSubmitLabel}
        <Send size={14} />
      </button>
    </form>
  );
};

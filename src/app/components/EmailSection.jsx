"use client";
import { useState } from "react";

const inbox = "olimjonovrahmonjon20@gmail.com";
export default function EmailSection() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [draft, setDraft] = useState("");
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setDraft("");
    setStatus("");
    setSending(true);
    try {
      const response = await fetch("/api/send", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(fields) });
      const result = await response.json();
      if (!response.ok || !result.accepted) throw new Error();
      setStatus("Your message was accepted for delivery.");
      form.reset();
    } catch {
      setStatus("Direct delivery is unavailable. Send your message using your email app.");
      setDraft("mailto:" + inbox + "?subject=" + encodeURIComponent(fields.subject) + "&body=" + encodeURIComponent(fields.message));
    } finally { setSending(false); }
  }
  return <section id="email" className="contact-panel"><div><p className="eyebrow">Contact</p><h2>Get in touch</h2>
    <a href={"mailto:"+inbox}>{inbox}</a><p><a href="https://t.me/auraByte_x">Telegram @auraByte_x</a> · <a href="https://github.com/Abdurahmono4">GitHub</a> · <a href="https://www.linkedin.com/in/rahmonjonolimjonov/">LinkedIn</a></p></div>
    <form onSubmit={submit}><label>Your email<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
    <label>Subject<input name="subject" maxLength={160} required/></label><label>Message<textarea name="message" rows={4} maxLength={5000} required/></label>
    <button className="solid" disabled={sending}>{sending ? "Sending…" : "Send message →"}</button><p role="status">{status}</p>{draft && <a href={draft}>Open email draft ↗</a>}</form></section>;
}

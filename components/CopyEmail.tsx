"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email address:", email);
    }
  }

  return (
    <button type="button" className="btn btn-dark" onClick={copy} aria-live="polite">
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}

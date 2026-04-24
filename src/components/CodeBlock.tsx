"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ code, lang = "bash" }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative group">
      <pre className="rounded-xl border border-white/10 bg-[#0f1220] text-[#e7ecf3] p-4 overflow-x-auto text-sm">
        <code className={`language-${lang} text-[#e7ecf3]`}>{code}</code>
      </pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-md border border-white/20 bg-white/10 text-white px-2 py-1 text-xs inline-flex items-center gap-1"
      >
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        {copied ? "已复制" : "复制"}
      </button>
    </div>
  );
}

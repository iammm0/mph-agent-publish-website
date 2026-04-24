import { LucideIcon } from "lucide-react";

export default function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-6 hover:border-[color:var(--accent)]/40 transition-colors">
      <div className="w-10 h-10 rounded-lg border border-[color:var(--border)] flex items-center justify-center mb-4 bg-[color:var(--bg-soft)]">
        <Icon className="w-5 h-5 text-[color:var(--accent)]" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-[color:var(--fg)]">{title}</h3>
      <p className="text-sm muted leading-relaxed">{desc}</p>
    </div>
  );
}

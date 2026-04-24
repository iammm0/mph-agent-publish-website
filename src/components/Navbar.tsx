import Link from "next/link";
import { Sparkles } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--border)] nav-bg backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="w-5 h-5 text-[color:var(--accent-2)]" />
          <span className="gradient-text">MPH-Agent</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm subtle">
          <Link href="/#features" className="hover:text-[color:var(--fg)]">特性</Link>
          <Link href="/#architecture" className="hover:text-[color:var(--fg)]">架构</Link>
          <Link href="/#quickstart" className="hover:text-[color:var(--fg)]">快速开始</Link>
          <Link href="/docs" className="hover:text-[color:var(--fg)]">文档</Link>
          <Link href="/changelog" className="hover:text-[color:var(--fg)]">更新日志</Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/iammm0/mph-agent"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg cta-ghost px-3 py-1.5 text-sm"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

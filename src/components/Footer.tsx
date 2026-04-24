export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm muted flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} MPH-Agent. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="https://github.com/iammm0/mph-agent" className="hover:text-[color:var(--fg)]">GitHub</a>
          <a href="/docs" className="hover:text-[color:var(--fg)]">文档</a>
          <a href="/changelog" className="hover:text-[color:var(--fg)]">更新日志</a>
        </div>
      </div>
    </footer>
  );
}

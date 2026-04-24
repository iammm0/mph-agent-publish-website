const entries = [
  {
    version: "v0.1.0",
    date: "2026-04-24",
    highlight: true,
    notes: [
      "文档对齐：更新 README 与 docs，覆盖当前代码状态",
      "完善文档知识注入能力，清理未使用缓存",
      "统一项目与案例库到 COMSOL Multiphysics 6.3",
      "新增结构化本地 .mph 分析能力",
      "新增 Prompt Context 用量监控仪表",
      "桌面端：流式推理事件 + 上下文记忆优化",
      "桌面端：新增 COMSOL Ops 页面与 Java 桥接自动重启",
      "桌面端：重设计 Skills / Cases / Settings 页面",
      "新增技能库（Skills）与案例库同步桥接 Action",
      "优化迭代控制，补充 ReAct 回归测试",
      "新增讨论模式、分阶段规划与 Java 控制器扩展",
    ],
  },
  {
    version: "v0.0.x (早期)",
    date: "—",
    notes: [
      "Tauri 2 + React 18 桌面应用搭建",
      "ReAct Agent 基础闭环：Thought / Action / Observation",
      "多 LLM 后端接入（DeepSeek / Kimi / Ollama / OpenAI 兼容）",
      "COMSOL Java API 直调与 .mph 输出",
    ],
  },
];

export default function Changelog() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-4 text-xs uppercase tracking-wider muted">Changelog</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--fg)]">更新日志</h1>
      <p className="muted mb-10">
        基于 GitHub 主干最新提交整理；完整记录见{" "}
        <a
          href="https://github.com/iammm0/mph-agent/commits/main"
          target="_blank"
          rel="noreferrer"
          className="text-[color:var(--accent)] hover:underline"
        >
          commit history
        </a>
        。
      </p>
      <div className="space-y-8">
        {entries.map((e) => (
          <div
            key={e.version}
            className={`card p-6 ${e.highlight ? "border-l-4" : ""}`}
            style={e.highlight ? { borderLeftColor: "var(--accent)" } : undefined}
          >
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-xl font-semibold gradient-text">{e.version}</h2>
              <span className="text-xs muted">{e.date}</span>
            </div>
            <ul className="space-y-2 text-sm subtle">
              {e.notes.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="text-[color:var(--accent-2)] mt-0.5">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

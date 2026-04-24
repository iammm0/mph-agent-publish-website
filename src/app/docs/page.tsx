import Link from "next/link";
import {
  BookOpen,
  Download,
  Settings,
  Terminal,
  Code2,
  HelpCircle,
  Rocket,
  Package,
  Cpu,
  ArrowRight,
  Library,
  Database,
  Radio,
  Layers,
} from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

const sections = [
  { id: "intro", label: "简介", icon: BookOpen },
  { id: "architecture", label: "架构", icon: Layers },
  { id: "requirements", label: "环境要求", icon: Package },
  { id: "install", label: "安装", icon: Download },
  { id: "config", label: "环境配置", icon: Settings },
  { id: "usage", label: "使用方法", icon: Terminal },
  { id: "skills", label: "技能与案例", icon: Library },
  { id: "events", label: "事件流", icon: Radio },
  { id: "api", label: "Python API", icon: Code2 },
  { id: "commands", label: "斜杠命令", icon: Cpu },
  { id: "faq", label: "常见问题", icon: HelpCircle },
];

function SectionTitle({ id, icon: Icon, children }: { id: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="group flex items-center gap-3 text-2xl md:text-3xl font-bold mt-16 mb-6 text-[color:var(--fg)] scroll-mt-24"
    >
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[color:var(--bg-soft)] border border-[color:var(--border)]">
        <Icon className="w-4 h-4 text-[color:var(--accent)]" />
      </span>
      {children}
      <a href={`#${id}`} className="opacity-0 group-hover:opacity-60 text-[color:var(--accent)] text-base font-normal">#</a>
    </h2>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-[240px_1fr_200px] gap-10">
      {/* Left sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <div className="text-xs uppercase tracking-wider muted mb-3">文档</div>
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm subtle hover:bg-[color:var(--bg-soft)] hover:text-[color:var(--fg)] transition-colors"
              >
                <s.icon className="w-4 h-4 text-[color:var(--accent)]" />
                {s.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 card p-4 text-xs subtle">
            <div className="font-semibold text-[color:var(--fg)] mb-1">需要帮助？</div>
            <p className="mb-2">在桌面应用内输入 <code>/doctor</code> 可进行环境诊断。</p>
            <a
              href="https://github.com/iammm0/mph-agent/issues"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[color:var(--accent)] hover:underline"
            >
              提交 Issue <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <article className="min-w-0">
        {/* Hero */}
        <div className="mb-4 text-xs uppercase tracking-wider muted">Documentation</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--fg)] mb-4">
          mph-agent <span className="gradient-text">文档</span>
        </h1>
        <p className="text-lg subtle leading-relaxed max-w-2xl">
          Multiphysics Modeling Agent 是一款基于 <b>ReAct</b> 架构的 AI 智能体，
          将自然语言描述的 COMSOL 建模需求自动转换为完整的 <code>.mph</code> 模型文件。
        </p>
        <div className="mt-6 card p-4 text-sm subtle border-l-4" style={{ borderLeftColor: "var(--accent)" }}>
          <b className="text-[color:var(--fg)]">声明：</b>
          本项目仅基于 COMSOL 官方开放的 <b>Java API</b> 进行二次开发，与 COMSOL 官方无关联，
          仅供学习与交流使用，使用前请确保已拥有合法正版许可。
        </div>

        {/* Intro */}
        <SectionTitle id="intro" icon={BookOpen}>简介</SectionTitle>
        <p className="subtle leading-relaxed">
          mph-agent 通过 <b>Reasoning &amp; Acting</b> 循环理解需求、规划步骤、调用 COMSOL Java API、
          观察执行结果并迭代改进，最终生成可直接在 COMSOL Multiphysics 中打开的 <code>.mph</code> 文件。
          提供 <b>Tauri + React 桌面应用</b> 与 <b>源码运行</b> 两种使用方式。
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {[
            { t: "ReAct 闭环", d: "Thought → Action → Observation → Iterate" },
            { t: "技能库 + 案例库", d: "SKILL.md 索引到 skills.db，自动检索注入" },
            { t: "讨论模式 + 分阶段规划", d: "复杂需求先讨论、分阶段执行" },
            { t: "多 LLM 后端", d: "DeepSeek / Kimi / Ollama / OpenAI 兼容" },
            { t: "COMSOL 6.3", d: "Java API 直调，自动重启桥接" },
            { t: "EventBus 流式", d: "推理与执行事件实时推送到桌面端" },
          ].map((x) => (
            <div key={x.t} className="card p-4">
              <div className="text-sm font-semibold text-[color:var(--fg)] mb-1">{x.t}</div>
              <div className="text-xs muted">{x.d}</div>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <SectionTitle id="architecture" icon={Layers}>架构</SectionTitle>
        <p className="subtle mb-4">
          三层架构：<b>桌面交互层</b>（Tauri + React）/ <b>ReAct Agent 层</b>（Python）/ <b>COMSOL 执行层</b>（Java API）。
          通过 EventBus 串联推理与执行事件。
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "桌面交互层",
              items: ["对话 / 技能库 / 案例库", "设置 + COMSOL Ops", "上下文用量仪表"],
            },
            {
              t: "ReAct Agent 层",
              items: ["Planner / Executor / ReAct", "讨论模式 + 分阶段规划", "技能检索 + 摘要记忆"],
            },
            {
              t: "COMSOL 执行层",
              items: ["Java API 直调（6.3）", "几何 / 物理场 / 网格 / 研究", "结构化 .mph 解析"],
            },
          ].map((c) => (
            <div key={c.t} className="card p-4">
              <div className="font-semibold text-[color:var(--fg)] mb-2">{c.t}</div>
              <ul className="space-y-1 text-xs muted">
                {c.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-[color:var(--accent-2)]">•</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs muted mt-3">
          架构详图见仓库{" "}
          <a
            href="https://github.com/iammm0/mph-agent/blob/main/docs/architecture/architecture.md"
            target="_blank"
            rel="noreferrer"
            className="text-[color:var(--accent)] hover:underline"
          >
            docs/architecture/architecture.md
          </a>
          。
        </p>

        {/* Requirements */}
        <SectionTitle id="requirements" icon={Package}>环境要求</SectionTitle>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--bg-soft)]">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">组件</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">要求</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">说明</th>
              </tr>
            </thead>
            <tbody className="subtle">
              <tr className="border-t border-[color:var(--border)]">
                <td className="px-4 py-3"><code>Python</code></td>
                <td className="px-4 py-3">3.8+</td>
                <td className="px-4 py-3">推荐 3.11 / 3.12</td>
              </tr>
              <tr className="border-t border-[color:var(--border)]">
                <td className="px-4 py-3">COMSOL Multiphysics</td>
                <td className="px-4 py-3">6.1+</td>
                <td className="px-4 py-3">6.3+ 推荐，需已安装并拥有正版许可</td>
              </tr>
              <tr className="border-t border-[color:var(--border)]">
                <td className="px-4 py-3">Java JDK</td>
                <td className="px-4 py-3">8+</td>
                <td className="px-4 py-3">与 COMSOL 兼容；项目可使用内置 JDK 11</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Install */}
        <SectionTitle id="install" icon={Download}>安装</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4 text-[color:var(--accent-2)]" />
              <h3 className="font-semibold text-[color:var(--fg)]">方式一：桌面版（推荐）</h3>
            </div>
            <p className="text-sm subtle mb-3">仅 Windows。安装包内含 Java 11，无需额外安装 Python/JDK。</p>
            <a
              href="https://github.com/iammm0/mph-agent/releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm rounded-lg cta-primary px-3 py-2"
            >
              <Download className="w-4 h-4" /> 下载 Releases
            </a>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-[color:var(--accent)]" />
              <h3 className="font-semibold text-[color:var(--fg)]">方式二：从源码运行</h3>
            </div>
            <p className="text-sm subtle mb-3">适合开发者；需 Node.js + Rust 进行桌面端构建。</p>
            <CodeBlock code={`git clone https://github.com/iammm0/mph-agent.git
cd mph-agent
uv sync
uv run python cli.py`} />
          </div>
        </div>

        {/* Config */}
        <SectionTitle id="config" icon={Settings}>环境配置</SectionTitle>
        <p className="subtle mb-4">在项目根目录创建 <code>.env</code>，或在桌面应用的设置页中填写。</p>

        <h3 className="font-semibold text-[color:var(--fg)] mt-6 mb-2">必需变量</h3>
        <ul className="space-y-2 text-sm subtle mb-4">
          <li><b className="text-[color:var(--fg)]">LLM_BACKEND</b>：<code>deepseek</code> / <code>kimi</code> / <code>ollama</code> / <code>openai-compatible</code> 等</li>
          <li><b className="text-[color:var(--fg)]">COMSOL_JAR_PATH</b>：
            <div className="mt-1 ml-4 space-y-1">
              <div>• 6.3+：指向 <code>plugins</code> 目录，如 <code>C:\Program Files\COMSOL\COMSOL63\Multiphysics\plugins</code></div>
              <div>• 6.1 及更早：指向单个 jar，如 <code>安装目录/lib/win64/comsol.jar</code></div>
            </div>
          </li>
        </ul>

        <h3 className="font-semibold text-[color:var(--fg)] mt-6 mb-2">可选变量</h3>
        <div className="card overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--bg-soft)]">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">变量</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">说明</th>
              </tr>
            </thead>
            <tbody className="subtle">
              {[
                ["JAVA_HOME", "未配置时使用系统 Java 或项目内置 JDK 11"],
                ["JAVA_DOWNLOAD_MIRROR", "国内可设 tsinghua 使用清华镜像"],
                ["MODEL_OUTPUT_DIR", "模型输出目录，默认 ./models"],
              ].map(([k, v]) => (
                <tr key={k} className="border-t border-[color:var(--border)]">
                  <td className="px-4 py-3"><code>{k}</code></td>
                  <td className="px-4 py-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-[color:var(--fg)] mt-6 mb-3">.env 示例</h3>
        <CodeBlock lang="env" code={`LLM_BACKEND=ollama
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3
COMSOL_JAR_PATH=C:\\Program Files\\COMSOL\\COMSOL63\\Multiphysics\\plugins`} />

        {/* Usage */}
        <SectionTitle id="usage" icon={Terminal}>使用方法</SectionTitle>
        <p className="subtle mb-4">
          启动桌面应用后，在底部输入框输入自然语言建模需求，Agent 将自动规划并执行。
        </p>
        <CodeBlock code={`uv run python cli.py`} />
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="card p-4">
            <div className="text-sm font-semibold text-[color:var(--fg)] mb-1">默认模式</div>
            <div className="text-xs subtle">直接生成 COMSOL 模型，例如「创建一个宽 1 米、高 0.5 米的矩形」。</div>
          </div>
          <div className="card p-4">
            <div className="text-sm font-semibold text-[color:var(--fg)] mb-1">计划模式</div>
            <div className="text-xs subtle">输入 <code>/plan</code> 切换为仅解析 JSON；<code>/run</code> 切回默认。</div>
          </div>
        </div>

        {/* API */}
        <SectionTitle id="api" icon={Code2}>Python API</SectionTitle>
        <p className="subtle mb-4">源码运行环境下可从 Python 直接调用 ReAct Agent：</p>
        <CodeBlock lang="python" code={`from agent.react.react_agent import ReActAgent

react_agent = ReActAgent(max_iterations=10)
model_path = react_agent.run("创建一个宽1米、高0.5米的矩形")
print(f"模型已保存: {model_path}")`} />

        {/* Skills & Cases */}
        <SectionTitle id="skills" icon={Library}>技能库与案例库</SectionTitle>
        <p className="subtle mb-4">
          <b>技能库（Skills）</b>以 <code>SKILL.md</code> 组织领域知识，索引到 <code>data/skills.db</code>；
          建模过程中 Agent 会根据任务自动检索相关技能并注入到提示词。
          <b>案例库（Cases）</b>在桌面端提供同步能力，结合结构化的本地 <code>.mph</code>
          解析作为参考上下文，帮助新任务快速成功。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Library className="w-4 h-4 text-[color:var(--accent)]" />
              <div className="font-semibold text-[color:var(--fg)]">Skills</div>
            </div>
            <p className="text-sm muted">
              目录：<code>skills/</code>；入口：<code>skills/README.md</code>；
              按领域（几何 / 物理场 / 网格 / 研究 / 后处理）编写 SKILL.md 即可自动生效。
            </p>
          </div>
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[color:var(--accent-2)]" />
              <div className="font-semibold text-[color:var(--fg)]">Cases</div>
            </div>
            <p className="text-sm muted">
              桌面端 Cases 页面支持同步案例库与本地 <code>.mph</code> 结构化解析，
              可作为新建模任务的示例与参考上下文。
            </p>
          </div>
        </div>

        {/* Events */}
        <SectionTitle id="events" icon={Radio}>事件流（EventBus）</SectionTitle>
        <p className="subtle mb-4">
          Agent 内部通过 <b>EventBus</b> 广播推理与执行事件，桌面端以流式方式实时订阅展示，
          包括 Thought / Action / Observation、工具调用、Java 侧日志、上下文用量等。
        </p>
        <div className="card p-5 text-sm muted">
          <div className="mb-2 text-[color:var(--fg)] font-medium">典型事件：</div>
          <ul className="space-y-1">
            <li><code>thought</code>：模型思考过程</li>
            <li><code>action</code>：即将执行的工具调用</li>
            <li><code>observation</code>：Java 侧返回结果 / 错误</li>
            <li><code>plan.stage</code>：分阶段规划的阶段切换</li>
            <li><code>context.usage</code>：Prompt 用量变化</li>
          </ul>
        </div>

        {/* Slash commands */}
        <SectionTitle id="commands" icon={Cpu}>斜杠命令</SectionTitle>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[color:var(--bg-soft)]">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)] w-40">命令</th>
                <th className="px-4 py-3 font-semibold text-[color:var(--fg)]">说明</th>
              </tr>
            </thead>
            <tbody className="subtle">
              {[
                ["/demo", "演示建模流程"],
                ["/doctor", "环境诊断（COMSOL / Java / LLM 检查）"],
                ["/context", "查看会话摘要与历史"],
                ["/backend", "选择 LLM 后端"],
                ["/output", "设置输出文件名"],
                ["/plan", "切换到计划模式（仅解析 JSON）"],
                ["/run", "切回默认执行模式"],
                ["/help", "查看帮助"],
                ["/quit", "退出应用"],
              ].map(([c, d]) => (
                <tr key={c} className="border-t border-[color:var(--border)]">
                  <td className="px-4 py-3"><code>{c}</code></td>
                  <td className="px-4 py-3">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <SectionTitle id="faq" icon={HelpCircle}>常见问题</SectionTitle>
        <div className="space-y-3">
          {[
            {
              q: "COMSOL JAR 找不到？",
              a: "COMSOL 6.3+ 请将 COMSOL_JAR_PATH 配置为 plugins 目录；6.1 及更早则配置为单个 jar 路径。在桌面应用内运行 /doctor 可自动诊断。",
            },
            {
              q: "Java 环境报错？",
              a: "可依赖项目内置 JDK 11（自动下载到 runtime/java，国内可设 JAVA_DOWNLOAD_MIRROR=tsinghua 使用清华镜像）；若使用系统 Java，请确保 JAVA_HOME 与 COMSOL 兼容。",
            },
            {
              q: "API 调用失败？",
              a: "检查当前 LLM 后端对应的 API Key（如 DEEPSEEK_API_KEY、KIMI_API_KEY）是否已在 .env 或环境变量中配置。",
            },
            {
              q: "Windows 上构建桌面应用报 linker / link.exe not found？",
              a: "需安装 Build Tools for Visual Studio 并勾选「使用 C++ 的桌面开发」；或使用 GNU 工具链：rustup default stable-x86_64-pc-windows-gnu（需 MSYS2/MinGW）。",
            },
            {
              q: "从 comsol-agent 迁移？",
              a: "将命令与配置中的 comsol-agent 改为 mph-agent，桌面端需重新安装以更新产品名与 identifier。",
            },
          ].map((f) => (
            <details key={f.q} className="card p-4 group">
              <summary className="cursor-pointer font-medium text-[color:var(--fg)] list-none flex items-center justify-between">
                {f.q}
                <span className="muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm subtle leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 flex items-center justify-between border-t border-[color:var(--border)] pt-6">
          <Link href="/" className="text-sm subtle hover:text-[color:var(--fg)]">← 返回首页</Link>
          <Link href="/changelog" className="text-sm subtle hover:text-[color:var(--fg)]">更新日志 →</Link>
        </div>
      </article>

      {/* Right TOC */}
      <aside className="hidden lg:block">
        <div className="sticky top-20">
          <div className="text-xs uppercase tracking-wider muted mb-3">本页内容</div>
          <ul className="space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block subtle hover:text-[color:var(--accent)] border-l-2 border-[color:var(--border)] hover:border-[color:var(--accent)] pl-3 py-1 transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

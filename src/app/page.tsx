import Link from "next/link";
import {
  Atom,
  Cpu,
  Workflow,
  MessageSquare,
  LayoutGrid,
  Brain,
  Sparkles,
  Download,
  Terminal,
  Shield,
  Library,
  MessagesSquare,
  Gauge,
  Radio,
  Database,
  Wrench,
} from "lucide-react";
import Feature from "@/components/Feature";
import CodeBlock from "@/components/CodeBlock";
import { GithubIcon } from "@/components/GithubIcon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full chip border px-3 py-1 text-xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--accent-2)]" />
            基于 ReAct 的 COMSOL 自动化建模智能体 · v0.1.0 · 统一适配 COMSOL 6.3
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-[color:var(--fg)]">
            自然语言
            <span className="gradient-text"> → .mph </span>
            <br />
            AI 驱动的多物理场建模
          </h1>
          <p className="mt-6 max-w-2xl subtle text-lg leading-relaxed">
            <b>Multiphysics Modeling Agent (mph-agent)</b> 基于 ReAct（Reasoning &amp; Acting）架构，
            将自然语言描述的 COMSOL 建模需求自动转换为完整 <code>.mph</code> 模型文件。
            内置<b>技能库 (Skills)</b>、<b>案例库</b>、<b>讨论模式</b>与<b>分阶段规划</b>，
            配合 EventBus 流式事件反馈，覆盖从需求理解到求解分析的完整流程。
          </p>
          <div className="mt-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--accent)]/5 px-4 py-3 text-sm subtle max-w-2xl">
            <b>⚠️ 尚未发布稳定版本：</b> mph-agent 仍在快速迭代中，目前还没有发布稳定的预编译版本。
            想要尝鲜的用户，请<b>克隆项目源码</b>在本地运行（见下方 <Link href="/#quickstart" className="underline">快速开始</Link>）。
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/#quickstart"
              className="inline-flex items-center gap-2 rounded-xl cta-primary px-5 py-3 text-sm font-medium"
            >
              <Terminal className="w-4 h-4" />
              从源码运行
            </Link>
            <a
              href="https://github.com/iammm0/mph-agent/releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl cta-ghost px-5 py-3 text-sm"
            >
              <Download className="w-4 h-4" />
              Releases（暂无稳定版）
            </a>
            <a
              href="https://github.com/iammm0/mph-agent"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl cta-ghost px-5 py-3 text-sm"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 text-xs">
            {[
              "Python 3.8+",
              "Tauri 2",
              "React 18",
              "COMSOL 6.3",
              "技能库 Skills",
              "案例库",
              "EventBus 流式",
              "MIT License",
            ].map((t) => (
              <span key={t} className="rounded-full chip border px-3 py-1">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-16 card glow p-6 max-w-3xl">
            <div className="flex items-center gap-2 text-xs muted mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              示例对话
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <div className="muted mb-1">用户：</div>
                <div className="rounded-lg example-bubble p-3">
                  创建一个宽 1 米、高 0.5 米的矩形，添加固体力学物理场，并进行稳态研究。
                </div>
              </div>
              <div>
                <div className="muted mb-1">MPH-Agent（ReAct）：</div>
                <div className="rounded-lg example-bubble p-3 space-y-1">
                  <div><span className="text-[color:var(--accent-2)] font-medium">Thought</span>：需构建几何 → 添加 Solid Mechanics → 网格 → Stationary Study。</div>
                  <div><span className="text-[color:var(--accent)] font-medium">Action</span>：调用 COMSOL Java API 构建 Rectangle(1, 0.5)。</div>
                  <div><span className="muted">Observation</span>：几何创建成功，继续添加物理场…</div>
                  <div className="pt-1 subtle">✔ 已生成 <code>models/model.mph</code></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--fg)]">功能特性</h2>
        <p className="muted max-w-2xl mb-12">
          v0.1.0 在 ReAct 闭环基础上新增<b>技能库、案例库、讨论模式、分阶段规划、事件流</b>等能力，全面提升复杂建模的成功率。
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={Brain}
            title="ReAct 闭环"
            desc="Thought → Action → Observation → Iterate，自动迭代直到生成可运行模型。"
          />
          <Feature
            icon={Library}
            title="技能库 Skills"
            desc="领域技能以 SKILL.md 组织并索引到本地 skills.db，建模时自动检索注入到提示词。"
          />
          <Feature
            icon={Database}
            title="案例库同步"
            desc="桌面端可同步案例库，结合本地 .mph 结构化解析作为新任务的参考上下文。"
          />
          <Feature
            icon={MessagesSquare}
            title="讨论模式 + 分阶段规划"
            desc="在复杂需求下先与用户讨论、确认方案，分阶段生成计划后再进入执行。"
          />
          <Feature
            icon={Cpu}
            title="多 LLM 后端"
            desc="DeepSeek / Kimi / Ollama / OpenAI 兼容 / Dashscope (Qwen) 可一键切换。"
          />
          <Feature
            icon={Atom}
            title="COMSOL 6.3 深度集成"
            desc="直接调用官方 Java API 构建几何 / 物理场 / 网格 / 研究，并支持自动重启桥接进程。"
          />
          <Feature
            icon={Radio}
            title="EventBus 流式事件"
            desc="推理与执行过程以事件流推送到桌面端，实时查看 Thought / Action / Observation。"
          />
          <Feature
            icon={Gauge}
            title="上下文用量监控"
            desc="内置 Prompt Context Usage Meter，实时显示上下文使用比例，配合摘要式记忆防止溢出。"
          />
          <Feature
            icon={Wrench}
            title="COMSOL Ops 页面"
            desc="桌面端新增运维页，管理 Java 桥接、环境诊断、输出目录与案例库配置。"
          />
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="mx-auto max-w-7xl px-6 py-24 border-t border-[color:var(--border)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--fg)]">系统架构</h2>
        <p className="muted max-w-2xl mb-12">
          三层架构：桌面交互层 / ReAct Agent 层 / COMSOL 执行层，通过 <b>EventBus</b> 串联流式事件与桌面 UI。
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: LayoutGrid,
              title: "桌面交互层",
              items: [
                "Tauri 2 + React 18",
                "对话 / 技能库 / 案例库 / 设置",
                "COMSOL Ops 页面",
                "上下文用量仪表",
              ],
            },
            {
              icon: Brain,
              title: "ReAct Agent 层",
              items: [
                "Planner / Executor / ReAct",
                "讨论模式 + 分阶段规划",
                "技能检索与提示词注入",
                "摘要式记忆与上下文管理",
              ],
            },
            {
              icon: Atom,
              title: "COMSOL 执行层",
              items: [
                "Java API 直调 (6.3)",
                "几何 / 物理场 / 网格 / 研究",
                "结构化 .mph 解析",
                "自动重启桥接进程",
              ],
            },
          ].map((col) => (
            <div key={col.title} className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <col.icon className="w-5 h-5 text-[color:var(--accent)]" />
                <h3 className="font-semibold text-[color:var(--fg)]">{col.title}</h3>
              </div>
              <ul className="space-y-2 text-sm muted">
                {col.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent-2)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4 text-sm">
          <div className="card p-5">
            <div className="font-semibold text-[color:var(--fg)] mb-2">ReAct 循环</div>
            <p className="muted">Think → Act → Observe → Iterate，失败或偏差时自动回退并重新规划。</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold text-[color:var(--fg)] mb-2">事件流（EventBus）</div>
            <p className="muted">Agent 推理 / 工具调用 / 观察结果以事件形式推送到桌面端，支持实时流式更新。</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold text-[color:var(--fg)] mb-2">数据模型 (Schemas)</div>
            <p className="muted"><code>geometry / physics / study / task</code> 统一 Schema，供 Planner、Executor 与 Java 侧共享。</p>
          </div>
          <div className="card p-5">
            <div className="font-semibold text-[color:var(--fg)] mb-2">技能库（Skills）</div>
            <p className="muted">SKILL.md 按领域组织，索引存储于 <code>data/skills.db</code>，根据任务自动检索并注入。</p>
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section id="quickstart" className="mx-auto max-w-7xl px-6 py-24 border-t border-[color:var(--border)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--fg)]">快速开始</h2>
        <p className="muted max-w-2xl mb-12">
          当前版本还未发布稳定的预编译包，请通过以下步骤从源码运行，自带 Python API。
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-[color:var(--fg)]">1. 克隆仓库</h3>
            <CodeBlock code={`git clone https://github.com/iammm0/mph-agent.git
cd mph-agent`} />
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[color:var(--fg)]">2. 安装依赖（使用 uv）</h3>
            <CodeBlock code={`# 先安装 uv: https://docs.astral.sh/uv/
uv sync`} />
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[color:var(--fg)]">3. 配置 .env</h3>
            <CodeBlock code={`LLM_BACKEND=ollama
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3
COMSOL_JAR_PATH=C:\\Program Files\\COMSOL\\COMSOL63\\Multiphysics\\plugins`} />
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-[color:var(--fg)]">4. 启动桌面应用</h3>
            <CodeBlock code={`uv run python cli.py
# 启动后可在输入框输入 /doctor 进行环境诊断`} />
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-3 text-[color:var(--fg)]">Python API 使用示例</h3>
            <CodeBlock lang="python" code={`from agent.react.react_agent import ReActAgent

react_agent = ReActAgent(max_iterations=10)
model_path = react_agent.run("创建一个宽1米、高0.5米的矩形")
print(f"模型已生成: {model_path}")`} />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-t border-[color:var(--border)]">
        <div className="card p-8" style={{ borderColor: "rgba(234, 179, 8, 0.3)" }}>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 mt-1 shrink-0" style={{ color: "#ca8a04" }} />
            <div className="text-sm subtle leading-relaxed space-y-2">
              <div className="font-semibold" style={{ color: "#a16207" }}>重要声明 / Disclaimer</div>
              <p>本项目为<b>独立开源工具</b>，与 COMSOL 官方无任何关联，<b>非官方产品、非官方插件</b>。</p>
              <p>本项目<b>仅通过 COMSOL 官方公开 API</b> 进行自动化调用与脚本生成，不包含任何 COMSOL 核心代码、不破解、不修改、不绕过许可机制。</p>
              <p>使用本工具的前提是用户已拥有<b>合法、正版的 COMSOL Multiphysics 软件许可</b>，仅限学习、科研与合法合规的工程自动化用途。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="card glow p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[color:var(--fg)]">
            让 COMSOL 建模像<span className="gradient-text">对话</span>一样自然
          </h2>
          <p className="muted max-w-xl mx-auto mb-8">
            mph-agent 正在快速迭代中，欢迎 Star、Issue 和 PR，一起推动多物理场仿真的智能化。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/iammm0/mph-agent"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl cta-primary px-6 py-3 text-sm font-medium"
            >
              <GithubIcon className="w-4 h-4" /> Star on GitHub
            </a>
            <a
              href="https://github.com/iammm0/mph-agent/releases"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl cta-ghost px-6 py-3 text-sm"
            >
              <Download className="w-4 h-4" /> Releases
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

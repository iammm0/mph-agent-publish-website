import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { themeInitScript } from "@/lib/themeInit";

export const metadata: Metadata = {
  title: "MPH-Agent · 多物理场仿真建模智能体",
  description:
    "mph-agent 是基于 ReAct 架构的 COMSOL 自动化建模 AI 智能体，将自然语言需求自动转换为完整的 .mph 模型文件。",
  keywords: [
    "MPH-Agent",
    "多物理场",
    "Multiphysics",
    "仿真",
    "COMSOL",
    "AI Agent",
    "LLM",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

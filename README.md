# MPH-Agent 发布网站

基于 Next.js 16 + React 19 + Tailwind CSS v4 构建的 [MPH-Agent](https://github.com/iammm0/mph-agent) 项目官方发布站。

## 技术栈

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- lucide-react 图标
- react-markdown + remark-gfm 文档渲染

## 开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000 查看。

## 目录结构

```
src/
  app/
    layout.tsx        # 全局布局
    page.tsx          # 首页（Hero / 特性 / 架构 / 快速开始）
    docs/page.tsx     # 文档页（Markdown 渲染）
    changelog/page.tsx# 更新日志
    globals.css       # 全局样式 + Tailwind
  components/
    Navbar.tsx
    Footer.tsx
    Feature.tsx
    CodeBlock.tsx
```

## 构建

```bash
npm run build
npm run start
```

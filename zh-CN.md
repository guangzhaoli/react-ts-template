# 🚀 React TypeScript Template - Your Next Web App Starts Here!
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/guangzhaoli/react-ts-template/graphs/commit-activity) 

这个仓库是一个精心配置的 React TypeScript 模板，旨在帮助你快速启动新的 Web 应用程序开发。它集成了现代前端开发的最佳实践和常用工具，让你专注于构建出色的用户界面和体验，而无需从零开始配置基础架构。
## ✨ 主要特性
* **⚡️ 极速开发体验:** 基于 [Vite](https://vitejs.dev/) 构建，提供闪电般的冷启动速度和热模块替换 (HMR)。
* **🛡️ 类型安全:**  使用 [TypeScript](https://www.typescriptlang.org/)，提供静态类型检查，减少运行时错误，提高代码可维护性。
* **⚛️ 组件化架构:**  清晰的目录结构，鼓励组件化开发，方便代码组织和复用。
* **🎣 强大的数据获取和状态管理:** 集成了 [React Query](https://tanstack.com/query/latest) 用于声明式的数据获取、缓存和状态管理，以及 [Zustand](https://github.com/pmndrs/zustand) 用于简单轻便的应用状态管理。
* **🌐 灵活的路由:** 使用 [React Router DOM](https://reactrouter.com/en/main) 进行声明式路由配置，轻松构建多页面应用。
* **📣 用户友好的通知:**  集成 [React Hot Toast](https://react-hot-toast.com/) 提供优雅的通知提示。
* **📞 便捷的 API 调用:**  内置 [Axios](https://axios-http.com/) 用于发送 HTTP 请求。
* **🎨 现代 CSS 框架:**  预配置 [Tailwind CSS](https://tailwindcss.com/)，通过 utility-first 的方式快速构建美观的界面。
* **📏 代码质量保障:**  集成了 [ESLint](https://eslint.org/) 和 [Prettier](https://prettier.io/)，提供代码 linting 和自动格式化，保持代码风格一致。
* **⚙️  易于配置:**  合理的 `vite.config.ts` 配置，包括代理设置和路径别名。
## 🛠️ 技术栈
* **核心框架:** [React](https://react.dev/)
* **编程语言:** [TypeScript](https://www.typescriptlang.org/)
* **构建工具:** [Vite](https://vitejs.dev/)
* **路由:** [React Router DOM](https://reactrouter.com/en/main)
* **状态管理:** [Zustand](https://github.com/pmndrs/zustand)
* **数据获取和状态管理:** [@tanstack/react-query](https://tanstack.com/query/latest)
* **HTTP 客户端:** [Axios](https://axios-http.com/)
* **UI 组件库 (非官方):**  本模板鼓励你使用 Tailwind CSS 构建自定义组件，但你也可以轻松集成其他 UI 库。
* **样式:** [Tailwind CSS](https://tailwindcss.com/)
* **代码格式化:** [Prettier](https://prettier.io/)
* **代码检查:** [ESLint](https://eslint.org/)
## 📦 使用流程
按照以下步骤开始使用这个模板：
1. **创建新的仓库:**  点击本仓库页面右上角的 "Use this template" -> "Create a new repository"。或者，你可以 Fork 这个仓库。
2. **克隆仓库到本地:**
   ```bash
   git clone https://github.com/guangzhaoli/react-ts-template.git
   cd react-ts-template
   ```
3. **安装依赖:**
   ```bash
   npm install  # 或者使用 yarn: yarn install
   ```
4. **启动开发服务器:**
   ```bash
   npm run dev   # 或者使用 yarn: yarn dev
   ```
   这将启动 Vite 开发服务器，并在你的浏览器中打开应用程序。通常地址是 `http://localhost:3000`。
5. **开始开发:**
   * 修改 `src` 目录下的文件，Vite 会自动进行热更新。
   * 按照目录结构组织你的代码。
6. **构建生产版本:**
   ```bash
   npm run build # 或者使用 yarn: yarn build
   ```
   构建后的文件将位于 `dist` 目录下。
7. **修改项目名称(可选)**
   根据个人需求修改项目模型
## 📂 目录结构概览
```
your-project-name/
├── public/                      # 静态资源 (图片、字体等)
│   ├── vite.svg
│   └── favicon.ico
├── src/                         # 源代码目录
│   ├── assets/                  # 应用中的静态资源 (如 logo)
│   │   └── logo.svg
│   ├── components/              # 可复用的 UI 组件
│   │   ├── common/              # 通用组件 (Button, Input, etc.)
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/              # 布局组件 (Header, Footer, Sidebar, etc.)
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── features/            # 特定功能模块的组件
│   │       ├── UserProfile.tsx
│   │       └── ProductCard.tsx
│   ├── hooks/                     # 自定义 React Hooks
│   │   ├── useAuth.ts
│   │   └── useForm.ts
│   ├── pages/                     # 应用的页面组件 (与路由对应)
│   │   ├── HomePage.tsx
│   │   ├── UserPage.tsx
│   │   └── ProductDetailPage.tsx
│   ├── routes/                    # 路由配置
│   │   └── index.tsx              # 定义路由
│   ├── services/                  # 与后端 API 交互的服务
│   │   ├── api.ts                 # 封装 axios 实例
│   │   ├── auth.ts                # 用户认证相关的 API 调用
│   │   └── users.ts               # 用户相关的 API 调用
│   ├── store/                     # Zustand 状态管理
│   │   ├── index.ts               # 导出所有的 store
│   │   └── userStore.ts           # 用户相关的状态
│   ├── queries/                   # React Query 相关
│   │   ├── useUsersQuery.ts       # 获取用户数据的 Query Hook
│   │   └── useProductsQuery.ts    # 获取产品数据的 Query Hook
│   ├── types/                     # TypeScript 类型定义和接口
│   │   ├── user.d.ts
│   │   └── product.d.ts
│   ├── utils/                     # 通用工具函数
│   │   ├── helpers.ts
│   │   └── formatters.ts
│   ├── App.tsx                    # 根组件
│   ├── main.tsx                   # 应用入口
│   ├── index.css                  # 全局样式 (Tailwind 的指令)
│   └── vite-env.d.ts              # Vite 环境变量类型定义
├── index.html                   # HTML 入口文件
├── .eslintrc.cjs                # ESLint 配置
├── .gitignore                   # Git 忽略文件
├── postcss.config.cjs           # PostCSS 配置
├── prettier.config.cjs          # Prettier 配置
├── tailwind.config.cjs          # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── tsconfig.node.json           # TypeScript Node.js 配置
└── package.json                 # 项目依赖和脚本
```
## 💡 核心概念和使用方法
* **路由配置 (`src/routes/index.tsx`):**  使用 `react-router-dom` 定义应用的路由。你可以在此文件中添加和修改路由规则，并将页面组件 (`src/pages`) 关联起来。
* **状态管理 (`src/store`):**  `Zustand` 被用于管理应用级别的状态。你可以创建不同的 store 文件来管理不同的状态切片。例如，`userStore.ts` 管理用户相关的状态。
* **数据获取 (`src/queries` 和 `src/services`):**
    * `src/services` 目录下包含了与后端 API 交互的服务函数，使用 `axios` 进行请求。你可以创建不同的服务文件来组织你的 API 调用。
    * `src/queries` 目录下使用了 `React Query` 来处理数据获取、缓存和状态管理。通过定义 Query Hooks（如 `useUsersQuery.ts`），你可以方便地在组件中获取和管理异步数据。
* **类型定义 (`src/types`):**  建议将应用的类型定义和接口放在 `src/types` 目录下，以便在整个项目中使用，增强代码的可读性和可维护性。
* **路径别名 (`@`):**  `vite.config.ts` 中配置了路径别名 `@` 指向 `src` 目录，方便你在代码中引用模块，例如：`import Button from '@/components/common/Button';`
* **API 代理 (`vite.config.ts`):**  如果你需要在开发环境中代理 API 请求到后端服务，可以在 `vite.config.ts` 的 `server.proxy` 中进行配置。例如，配置了 `/api/v1` 开头的请求会被代理到 `http://localhost:8080`。
## 🤝 贡献
欢迎提交 issue 和 pull request 来改进这个模板！请确保你的贡献符合项目的代码风格和约定。
## 📄 许可证
本项目基于 [MIT License](LICENSE) 开源。
---
**希望这个模板能帮助你快速启动你的下一个 React TypeScript 项目！Enjoy coding!**
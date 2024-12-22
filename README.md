# 🚀 React TypeScript Template - Your Next Web App Starts Here!
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

[![Maintenance](https://github.com/guangzhaoli/react-ts-template/graphs/commit-activity)]
[中文 README](zh-CN.md)

This repository is a carefully configured React TypeScript template designed to help you quickly start developing new web applications. It integrates modern front-end development best practices and commonly used tools, allowing you to focus on building excellent user interfaces and experiences without configuring the basic infrastructure from scratch.

## ✨ Key Features
* **⚡️ Blazing Fast Development Experience:** Built with [Vite](https://vitejs.dev/), providing lightning-fast cold starts and Hot Module Replacement (HMR).
* **🛡️ Type Safety:** Using [TypeScript](https://www.typescriptlang.org/) to provide static type checking, reduce runtime errors, and improve code maintainability.
* **⚛️ Component-Based Architecture:** Clear directory structure encouraging component-based development for better code organization and reusability.
* **🎣 Powerful Data Fetching and State Management:** Integrated with [React Query](https://tanstack.com/query/latest) for declarative data fetching, caching, and state management, and [Zustand](https://github.com/pmndrs/zustand) for simple and lightweight application state management.
* **🌐 Flexible Routing:** Using [React Router DOM](https://reactrouter.com/en/main) for declarative route configuration, making it easy to build multi-page applications.
* **📣 User-Friendly Notifications:** Integrated with [React Hot Toast](https://react-hot-toast.com/) to provide elegant notification prompts.
* **📞 Convenient API Calls:** Built-in [Axios](https://axios-http.com/) for sending HTTP requests.
* **🎨 Modern CSS Framework:** Pre-configured with [Tailwind CSS](https://tailwindcss.com/) for quickly building beautiful interfaces using a utility-first approach.
* **📏 Code Quality Assurance:** Integrated with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to provide code linting and automatic formatting, maintaining consistent code style.
* **⚙️ Easy to Configure:**  Sensible `vite.config.ts` configuration, including proxy settings and path aliases.

## 🛠️ Tech Stack
* **Core Framework:** [React](https://react.dev/)
* **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** [React Router DOM](https://reactrouter.com/en/main)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand)
* **Data Fetching and State Management:** [@tanstack/react-query](https://tanstack.com/query/latest)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **UI Component Library (Unofficial):** This template encourages you to use Tailwind CSS to build custom components, but you can easily integrate other UI libraries.
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Code Formatting:** [Prettier](https://prettier.io/)
* **Code Linting:** [ESLint](https://eslint.org/)

## 📦 Usage

Follow these steps to start using this template:

1. **Create a New Repository:** Click "Use this template" -> "Create a new repository" in the top right corner of this repository page. Alternatively, you can Fork this repository.
2. **Clone the Repository Locally:**
   ```bash
   git clone https://github.com/guangzhaoli/react-ts-template.git
   cd react-ts-template
   ```
3. **Install Dependencies:**
   ```bash
   npm install  # or using yarn: yarn install
   ```
4. **Start the Development Server:**
   ```bash
   npm run dev   # or using yarn: yarn dev
   ```
   This will start the Vite development server and open the application in your browser. The address is usually `http://localhost:3000`.
5. **Start Developing:**
   * Modify files in the `src` directory, and Vite will automatically perform hot updates.
   * Organize your code according to the directory structure.
6. **Build Production Version:**
   ```bash
   npm run build # or using yarn: yarn build
   ```
   The built files will be located in the `dist` directory.
7. **Modify Project Name (Optional):**
   Modify the project name according to your needs.

## 📂 Directory Structure Overview
```
your-project-name/
├── public/                      # Static assets (images, fonts, etc.)
│   ├── vite.svg
│   └── favicon.ico
├── src/                         # Source code directory
│   ├── assets/                  # Application-specific static assets (e.g., logo)
│   │   └── logo.svg
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Common components (Button, Input, etc.)
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/              # Layout components (Header, Footer, Sidebar, etc.)
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── features/            # Components for specific feature modules
│   │       ├── UserProfile.tsx
│   │       └── ProductCard.tsx
│   ├── hooks/                     # Custom React Hooks
│   │   ├── useAuth.ts
│   │   └── useForm.ts
│   ├── pages/                     # Application page components (corresponding to routes)
│   │   ├── HomePage.tsx
│   │   ├── UserPage.tsx
│   │   └── ProductDetailPage.tsx
│   ├── routes/                    # Route configuration
│   │   └── index.tsx              # Define routes
│   ├── services/                  # Services for interacting with the backend API
│   │   ├── api.ts                 # Encapsulated axios instance
│   │   ├── auth.ts                # API calls related to user authentication
│   │   └── users.ts               # API calls related to users
│   ├── store/                     # Zustand state management
│   │   ├── index.ts               # Export all stores
│   │   └── userStore.ts           # User-related state
│   ├── queries/                   # React Query related
│   │   ├── useUsersQuery.ts       # Query Hook for fetching user data
│   │   └── useProductsQuery.ts    # Query Hook for fetching product data
│   ├── types/                     # TypeScript type definitions and interfaces
│   │   ├── user.d.ts
│   │   └── product.d.ts
│   ├── utils/                     # Common utility functions
│   │   ├── helpers.ts
│   │   └── formatters.ts
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles (Tailwind directives)
│   └── vite-env.d.ts              # Vite environment variable type definitions
├── index.html                   # HTML entry file
├── .eslintrc.cjs                # ESLint configuration
├── .gitignore                   # Git ignore file
├── postcss.config.cjs           # PostCSS configuration
├── prettier.config.cjs          # Prettier configuration
├── tailwind.config.cjs          # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.node.json           # TypeScript Node.js configuration
└── package.json                 # Project dependencies and scripts
```

## 💡 Core Concepts and Usage

* **Route Configuration (`src/routes/index.tsx`):** Use `react-router-dom` to define the application's routes. You can add and modify route rules in this file and associate them with page components (`src/pages`).
* **State Management (`src/store`):** `Zustand` is used to manage application-level state. You can create different store files to manage different slices of state. For example, `userStore.ts` manages user-related state.
* **Data Fetching (`src/queries` and `src/services`):**
    * The `src/services` directory contains service functions that interact with the backend API, using `axios` for requests. You can create different service files to organize your API calls.
    * The `src/queries` directory uses `React Query` to handle data fetching, caching, and state management. By defining Query Hooks (such as `useUsersQuery.ts`), you can conveniently fetch and manage asynchronous data in your components.
* **Type Definitions (`src/types`):** It is recommended to place your application's type definitions and interfaces in the `src/types` directory for use throughout the project, enhancing code readability and maintainability.
* **Path Aliases (`@`):** The `vite.config.ts` file configures the path alias `@` to point to the `src` directory, making it easy to import modules in your code, for example: `import Button from '@/components/common/Button';`
* **API Proxy (`vite.config.ts`):** If you need to proxy API requests to a backend service in the development environment, you can configure it in the `server.proxy` section of `vite.config.ts`. For example, requests starting with `/api/v1` are configured to be proxied to `http://localhost:8080`.

## 🤝 Contributing

Contributions are welcome! Please submit issues and pull requests to improve this template. Ensure your contributions adhere to the project's code style and conventions.

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

**Hope this template helps you quickly start your next React TypeScript project! Enjoy coding!**
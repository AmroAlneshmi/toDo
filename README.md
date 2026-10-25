# ✅ TaskFlow — Modern To-Do App

A clean, responsive task management app built with **React 19** and **Tailwind CSS v4**. Tasks persist across sessions via `localStorage`, so nothing is lost on refresh.

> 🔗 **[Live Demo →](https://todo-nesh.vercel.app)**

---

## ✨ Features

| Feature                | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| **Add Tasks**          | Create tasks instantly with a single click                                |
| **Mark Complete**      | Toggle between _pending_ and _done_ — completed tasks get a strikethrough |
| **Delete Tasks**       | Remove tasks you no longer need                                           |
| **Persistent Storage** | Tasks survive page refreshes via `localStorage`                           |
| **Responsive Design**  | Fully responsive — looks great on mobile, tablet, and desktop             |


---

## 🛠️ Tech Stack

- **React 19** — Component-based UI with hooks (`useState`, `useRef`)
- **Vite 8** — Lightning-fast dev server and optimized production builds
- **Tailwind CSS v4** — Utility-first styling with the new Vite plugin
- **React Icons** — Material Design icon set for interactive delete buttons
- **React Compiler** — Enabled for automatic performance optimizations
- **localStorage API** — Client-side data persistence with no backend required

---

## 📁 Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Root component
├── index.css             # Global styles & Tailwind import
└── components/
    ├── Container.jsx     # State management & business logic
    ├── NewTask.jsx       # Task input form
    └── Tasks.jsx         # Task list with toggle & delete
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/AmroAlneshmi/toDo.git
cd toDo

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This project is deployed on **[Vercel](https://vercel.com)**. Every push to `main` triggers an automatic deployment.

To deploy your own:

1. Fork this repository
2. Import the repo on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no configuration needed
4. Your app is live 🎉

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/AmroAlneshmi">Amro Alneshmi</a>
</p>

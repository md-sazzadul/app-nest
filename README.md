# 🚀 AppNest — App Discovery & Management Platform

> Explore, install, and manage your favourite apps — all in one place.

---

## 📖 Description

**AppNest** is a modern app discovery and management platform built with React. It lets users browse a curated marketplace of trending applications, view detailed app information including ratings and download stats, install apps to a personal library, and manage everything from a clean installation dashboard.

Key features include:

- **Home** — Hero banner with call-to-action buttons and a trending apps grid
- **Apps** — Full catalogue with live debounced search and animated skeleton loading
- **App Details** — Per-app page with stats (downloads, ratings, reviews), a horizontal bar chart of rating breakdown, and a full description
- **Installation** — Personal dashboard listing installed apps with sortable size ordering and one-click uninstall
- **Loading Animations** — Global page-navigation progress bar + spinner overlay, and search skeleton cards
- **Toast Notifications** — Contextual feedback for install and uninstall actions

---

## 🛠️ Technologies

### Core

| Technology                               | Version | Purpose                            |
| ---------------------------------------- | ------- | ---------------------------------- |
| [React](https://react.dev/)              | 19      | UI component library               |
| [Vite](https://vitejs.dev/)              | 8       | Build tool & dev server            |
| [React Router](https://reactrouter.com/) | 7       | Client-side routing & data loading |

### Styling

| Technology                               | Version | Purpose                     |
| ---------------------------------------- | ------- | --------------------------- |
| [Tailwind CSS](https://tailwindcss.com/) | 4       | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/)          | 5       | Tailwind component plugin   |

### Libraries

| Technology                                                  | Version | Purpose                     |
| ----------------------------------------------------------- | ------- | --------------------------- |
| [Recharts](https://recharts.org/)                           | 3       | Rating breakdown bar charts |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | 11      | Toast notifications         |
| [React Icons](https://react-icons.github.io/react-icons/)   | 5       | Icon set                    |

### Storage

| Technology             | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| Browser `localStorage` | Persisting installed apps between sessions |

---

## 📁 Project Structure

```
src/
├── assets/                  # Images & icons
├── components/
│   ├── appDetails/          # AppInfo, RatingChart, AppDescription
│   ├── apps/                # AppsHeader, AppsToolbar, NoData
│   ├── home/                # Banner, Stats, TopApps, AppCard
│   └── layout/              # Header, Footer, Layout, PageLoader
├── hooks/
│   └── useDebounce.js       # Reusable debounce hook
├── pages/
│   ├── Home.jsx
│   ├── Apps.jsx
│   ├── AppDetails.jsx
│   ├── Installation.jsx
│   └── NotFound.jsx
├── router/
│   └── router.jsx           # Route definitions & loaders
└── utils/
    └── localStorage.js      # Install / uninstall helpers
public/
└── apps.json                # App catalogue data
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js **≥ 20**
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/md-sazzadul/app-nest.git
cd app-nest

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📜 Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server with HMR    |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across the codebase       |

---

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests via the [GitHub repository](https://github.com/md-sazzadul/app-nest).

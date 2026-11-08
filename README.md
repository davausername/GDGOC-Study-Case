# 🚀 GDGoC UGM Web Application

Vercel live: https://gdgoc-study-case-hzny.vercel.app/
Video drive: on the way (sorry for late - blackout last night)

A responsive, multi-page web platform built for **Google Developer Groups on Campus (GDGoC) Universitas Gadjah Mada**. This platform serves as a hub for students to discover learning tracks, explore community formats, and get involved in tech events.

---

## 🛠️ Tech Stack & Design System

* **Framework:** React (Vite)
* **Routing:** React Router v6+
* **Styling:** Tailwind CSS v4 (Mobile-First, Google Design System Design Tokens)
* **Architecture:** Modular Component Structure (`pages/`, `components/layout/`, `components/ui/`, `components/features/`, `hooks/`)

---

## ✨ Features

* **Multi-Page Routing:** Seamless navigation between Home, About, and Track pages using a shared `RootLayout` shell.
* **Dynamic Data Fetching:** Custom `useFetch` hook handling API integrations for navigation and learning tracks.
* **Skeleton Loading:** Custom UI skeleton loaders during network request states.
* **Mobile-First Responsive Design:** Fully responsive layout optimized for all viewports, down to 320px mini-mobile screens.
* **Google Design Tokens:** Standardized 1200px container (`container-custom`) with customized brand color variables (`google-blue`, `google-green`, etc.).

---

## 📁 Project Structure

```text
src/
├── assets/             # Brand logos, graphics, and SVG icons
├── components/
│   ├── layout/         # RootLayout, NavBar, Footer
│   ├── ui/             # Primitive UI components (Button, TrackCard, ValueCard, Skeleton)
│   └── features/       # Data-driven components (TrackCards, DiscoverLearning)
├── hooks/              # Custom React hooks (useFetch)
├── pages/              # Page views (Home.jsx, About.jsx)
├── App.jsx             # React Router configuration
├── main.jsx            # Application entry point & root mount
└── index.css           # Tailwind v4 theme tokens & container utilities
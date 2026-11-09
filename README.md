# GDGoC UGM Web Application

A responsive website for **Google Developer Groups on Campus, Universitas Gadjah Mada**. Visitors can learn about the community, explore learning tracks, and find ways to take part.

**Live site:** [gdgoc-study-case-hzny.vercel.app](https://gdgoc-study-case-hzny.vercel.app/)

## Tech stack

- React 19 with Vite 8
- React Router 7
- Tailwind CSS 4 through the Vite plugin
- TypeScript for API types and shared data utilities; JSX for the UI
- Google Sans and GDGoC UGM brand artwork

## Features

- Responsive home and about pages with shared navigation and footer
- Learning-track cards loaded from the GDGoC UGM API
- Loading skeletons and an error message for track requests
- Track-specific illustrations and Google-inspired color and layout tokens
- Mobile navigation and a not-found route

The track API is requested from `https://gdgoc-ugm-api.vercel.app/api/tracks`. The tracks section needs network access to load its data.

## Getting started

From this directory:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home: community introduction, learning tracks, and ways to learn together |
| `/about` | About GDGoC UGM |
| Other paths | Not-found page |

## Project structure

```text
src/
├── assets/                 # Fonts, brand artwork, and track illustrations
├── components/
│   ├── features/           # API-backed track cards
│   ├── layout/             # Navigation and footer
│   ├── section/            # Home-page sections
│   └── ui/                 # Buttons, cards, and skeleton loader
├── hooks/                  # Data-fetching hook
├── pages/                  # Home and About pages
├── services/               # API client
├── types/                  # API response types
├── App.jsx                 # Routes and shared page layout
├── main.jsx                # React application entry point
└── index.css               # Tailwind import, theme tokens, and utilities
```

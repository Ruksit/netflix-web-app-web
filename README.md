# Netflix Web App — Frontend (Next.js)

## Features
- Homepage: Fetches data from API and displays popular movies.

## Tech Stack
- Next.js 15 (App Router), React 19
- Tailwind CSS

## Libraries
- lucide-react
- shadcn/ui

## Folder Structure
```
netflix-web-app-web/
├─ app/
│  ├─ layout.tsx                # Root layout (HTML shell, global UI)
│  ├─ page.tsx                  # "/" route
│  └─ home/
│     └─ page.tsx               # "/home" route
│
├─ components/
│  ├─ Navbar.tsx                # Top navigation bar
│  ├─ PoppularMoviesRow.tsx     # Movies row UI (uses ScrollArea, next/image)
│  └─ ui/
│     └─ scroll-area.tsx        # Shadcn UI primitive
│
├─ lib/
│  └─ movies.ts                 # Types/helpers for Movie (used by PoppularMoviesRow)
│
├─ public/
│  └─ netflix-logo-desktop.png  # Static assets (served at /netflix-logo-desktop.png)
│
├─ app/globals.css              # Global styles (Tailwind v4)
├─ next-env.d.ts
├─ tsconfig.json
├─ package.json
├─ pnpm-lock.yaml
└─ (optional) next.config.ts    # Images config (TMDB), etc.
```
# Getting Started

## Project setup
```
$ pnpm install
```
## Run the project
```
$ pnpm run dev

http://localhost:3000
```








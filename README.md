# NForceOne — Production Web Application

A modern, maintainable, production-ready web application for **NForceOne**, migrated directly from the Claude Design source.

## Tech Stack
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [lucide-react](https://lucide.dev/)
- **Styling:** Design Token CSS Variables (`src/styles/tokens/`) + Global Animations & Layout (`src/styles/globals.css`)

## Project Structure
```
nforce-one-web/
├── public/                     # Static assets (logos, icons)
├── src/
│   ├── assets/                 # Bundled brand assets
│   ├── components/
│   │   ├── layout/             # Header, FullscreenMenu, Footer, ScrollProgress, ScrollToTop
│   │   ├── sections/           # Hero, Capabilities, About, SolutionsExplorer, ServiceFinder,
│   │   │                       # Industries, Testimonials, Stats, CtaBanner, Contact, Partners,
│   │   │                       # Careers, ChatWidget (Neo AI)
│   │   └── ui/                 # CTA, Eyebrow, Highlight, DynamicIcon
│   ├── data/                   # Clean, typed static data (solutions, catalog, industries, etc.)
│   ├── styles/                 # Brand colors, typography, spacing, effects, keyframes
│   ├── types/                  # TypeScript data interfaces
│   ├── App.tsx                 # Main layout assembling all 14 sections
│   └── main.tsx                # Application mount point
├── index.html                  # HTML entry with Google Fonts (Manrope, Inter, JetBrains Mono)
├── package.json
└── vite.config.ts
```

## Running Locally

### Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Type-checks with `tsc` and compiles optimized static files into `dist/`.

### Preview Build
```bash
npm run preview
```
Previews the compiled production build locally.

# A3 Studios — [a3.ke](https://a3.ke)

<div align="center">

**Film · Commercial video · Sport coverage**

A cinematic, Netflix-style showcase for **A3 Studios** — a Nairobi-based production house led by **Pete Njagi (Studio Head)**.

[![Live site](https://img.shields.io/badge/live-a3.ke-gold?style=for-the-badge)](https://a3.ke)
[![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## What this is

A3 Studios is more than a film catalogue. The site showcases three pillars of work:

| Pillar | Route | What's on it |
| --- | --- | --- |
| **Films & series** | `/films` · `/series` | Feature originals, binge-worthy series and documentaries |
| **Commercial & video** | `/commercial` | Brand films, launch spots, corporate stories, PSAs, music videos |
| **Sport coverage** | `/sport` | Match coverage, tournament recaps, live vision, athlete films |

Everything lives in one catalogue (`src/data/films.ts`). Missing poster images automatically render branded gradient cards — the UI never looks broken.

---

## Screenshots

### Home — hero & catalogue

![Home hero preview](docs/screenshots/home-hero.svg)

Rotating featured originals plus rows for films, series, **commercial video** and **sport coverage**.

### Commercial & video

![Commercial catalogue preview](docs/screenshots/commercial-grid.svg)

Brand campaigns from launch films to NGO PSAs — each with its own detail page at `/film/:slug`.

### Sport coverage

![Sport catalogue preview](docs/screenshots/sport-grid.svg)

Rugby, football, athletics, basketball and boxing — broadcast packages and highlight films.

---

## Tech stack

- **Vite 5** + **React 18** + **TypeScript**
- **React Router 6** — SPA with IIS rewrite to `index.html`
- Bespoke CSS design system in `src/index.css` (no UI framework)
- Static data in `src/data/films.ts` — no backend required

---

## Quick start

```bash
git clone https://github.com/PeteZDj/a3.ke.git
cd a3.ke
npm install
npm run dev          # http://localhost:5173
```

```bash
npm run build        # → dist/
npm run preview
npm run typecheck
```

---

## Project structure

```
a3.ke/
├── docs/screenshots/          README preview art
├── public/images/             posters + backdrops (optional per slug)
├── src/data/films.ts          single catalogue (Film · Series · Doc · Commercial · Sport)
├── src/pages/
│   ├── Commercial.tsx         branded & corporate video
│   ├── Sport.tsx              live & highlight coverage
│   └── …                      Home, Films, Series, About, Contact
└── src/index.css              cinematic design system
```

### Adding a project

1. Add an entry to `src/data/films.ts` with the right `kind`.
2. Optionally add `public/images/posters/<slug>.jpg` and `public/images/backdrops/<slug>.jpg`.
3. Without images, gradient fallbacks render automatically.

---

## Deploy

Hosted at **[https://a3.ke](https://a3.ke)** on IIS (`C:\inetpub\wwwroot\a3.ke`).

```powershell
npm run build
robocopy dist C:\inetpub\wwwroot\a3.ke /MIR /XJ
```

---

## Studio

**Pete Njagi (Studio Head)** — A3 Studios, Industrial Area, Nairobi, Kenya

- Web: [a3.ke](https://a3.ke)
- Email: hello@a3.ke

---

<div align="center">

*Cinema, commercial video and sport coverage — made at home, seen everywhere.*

</div>

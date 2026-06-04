# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## React Compiler

# portfolio-yograj

Personal portfolio built with React + Vite. This repository contains a responsive, accessible portfolio site with a 3D animated hero, project showcase, resume link, and contact form.

## Features
- React + Vite development setup with ESLint
- Lazy-loaded 3D hero using `three`/`@react-three/fiber`/`@react-three/drei` (dynamically imported to reduce initial bundle)
- Responsive navigation with keyboard-accessible hamburger and active-section syncing
- Light/dark theme toggle (persisted in `localStorage`)
- Contact form (mailto fallback) and project thumbnails
- Accessibility improvements: skip link, focus-visible styles, semantic landmarks
- SEO: meta description, Open Graph and Twitter card tags, favicon

## Quick start

1. Install:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Project structure
- `index.html` — site entry, meta tags, skip link
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — app layout and lazy-loaded `Hero3D`
- `src/components/Hero3D.jsx` — dynamically imports heavy 3D libs and renders the background canvas
- `src/components/Navbar.jsx` — responsive nav + theme toggle
- `src/components/Sections.jsx` — Home / About / Projects / Resume / Contact sections
- `src/index.css` — global styles and theme variables

## Notes & recommendations
- Build/Bundle: after splitting the 3D libraries into dynamic imports the `Hero3D` chunk is small, but `three` and related vendor chunks can still be large. To reduce initial download size further, consider:
	- adding Rollup `manualChunks` in `vite.config.js` to split `three` and other vendors into separate files
	- using an even lighter poster or image fallback for mobile/low-end devices
	- deferring load of non-critical libs until user interaction

- Accessibility: keyboard navigation and a skip link are included, but please run Lighthouse or axe to verify full compliance for your target audience.

- Contact form: currently uses `mailto:` fallback. For server-side messages use a serverless endpoint (Netlify Functions, Vercel Serverless, or a small API) or a service like Formspree.

## Development notes (what was changed)
- Added meta description, Open Graph tags, and favicon
- Added accessible skip link and keyboard focus styles
- Replaced many inline hover handlers with CSS classes
- Implemented responsive mobile nav with hamburger and active-link syncing
- Added theme toggle persisted to `localStorage`
- Lazy-loaded the 3D hero and set `frameloop="demand"`; adaptive particle count
- Added simple contact form and project thumbnails (placeholder images added)

## Contributing
- Open a branch, make changes, and send a PR. Keep changes focused and include a short description of the UI/UX/polish intent.

## License
This repository does not have a license file. Add one if you intend to make this project public under a specific license.

---
If you want, I can add a short Lighthouse CI workflow, replace placeholders with real screenshots, or wire the contact form to a serverless endpoint.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

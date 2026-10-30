# Raul Mureșan — portfolio

Use Node.js 22.12+ (or another version supported by `package.json`).

- `npm ci` — install dependencies.
- `npm run dev` — start the development server.
- `npm run build` — type-check, build, and prerender the complete portfolio HTML.
- `npm run preview` — preview the production build locally.

The production site is static and deploys from `dist/`; no runtime rendering server is needed. React hydrates the generated HTML to enable interactions such as copying the email address. The temporary server bundle used during the build is removed automatically.

Edit `src/`, `public/`, `source-assets/`, or the root `index.html`, not generated files in `dist/`. Original PNG/JPG files are kept in `source-assets/`; only files served by the site belong in `public/`.

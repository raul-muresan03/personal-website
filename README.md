# Raul Mureșan — portfolio

Use Node.js 22.12+ (or another version supported by `package.json`).

- `npm ci` — install dependencies.
- `npm run dev` — start the development server.
- `npm run build` — type-check, build, prerender the complete portfolio HTML, and validate the output.
- `npm run preview` — preview the production build locally.
- `npm run check:prerender` — rerun the HTML, metadata, and asset checks against the latest build.

The production site is static and deploys from `dist/`; no runtime rendering server is needed. React hydrates the generated HTML to enable interactions such as copying the email address. The temporary server bundle used during the build is removed automatically.

Edit `src/`, `public/`, or the root `index.html`, not the generated files in `dist/`.

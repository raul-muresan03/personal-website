import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';

const root = fileURLToPath(new URL('../', import.meta.url));
const indexPath = join(root, 'dist/index.html');
const template = await readFile(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';

if (template.split(placeholder).length !== 2) {
    throw new Error('Expected one empty React root in the client build. Run the client build before prerendering.');
}

const serverOutput = await mkdtemp(join(root, 'node_modules/.prerender-'));

try {
    await build({
        root,
        build: {
            ssr: join(root, 'src/entry-server.tsx'),
            outDir: serverOutput,
            emptyOutDir: false,
            copyPublicDir: false,
            rolldownOptions: {
                output: { entryFileNames: 'entry-server.mjs' },
            },
        },
    });

    const { render } = await import(pathToFileURL(join(serverOutput, 'entry-server.mjs')).href);
    const { html: markup, initialYear } = render();
    if (!markup || !Number.isInteger(initialYear)) {
        throw new Error('The portfolio prerender returned invalid content or a missing build year.');
    }

    const html = template.replace(placeholder, () => `<div id="root" data-year="${initialYear}">${markup}</div>`);
    await writeFile(indexPath, html);
    console.log('Prerendered the portfolio into dist/index.html.');
} finally {
    await rm(serverOutput, { recursive: true, force: true });
}

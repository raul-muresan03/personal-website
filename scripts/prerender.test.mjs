import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

const outputDirectory = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', outputDirectory), 'utf8');
const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
const entities = { '&amp;': '&', '&quot;': '"', '&#x27;': "'", '&lt;': '<', '&gt;': '>' };
const text = body
    .replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;|&quot;|&#x27;|&lt;|&gt;/g, (entity) => entities[entity])
    .replace(/\s+/g, ' ');

function metaContent(name) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return html.match(new RegExp(`<meta\\s+(?:name|property)="${escapedName}"\\s+content="([^"]*)"`, 'i'))?.[1];
}

test('the initial HTML contains the portfolio without JavaScript', () => {
    for (const value of [
        'Raul Mureșan',
        'Full Stack Developer',
        'Cluj-Napoca, Romania',
        'MathSim (Bachelor’s Thesis)',
        'SEC 10-K RAG',
        'NoteFlow',
        'Questify',
        'IoT Security System',
        'Pacman Clone',
        'Robert Bosch',
        'Technical University of Cluj-Napoca',
        'Programming Languages',
    ]) {
        assert.ok(text.includes(value), `Missing visible content: ${value}`);
    }
    for (const section of ['home', 'projects', 'experience', 'skills']) {
        assert.equal(body.match(new RegExp(`id="${section}"`, 'g'))?.length, 1);
    }
    assert.equal(body.match(/id="root"/g)?.length, 1);
    assert.doesNotMatch(body, /<div id="root"><\/div>/);
    assert.doesNotMatch(body, /You need to enable JavaScript to run this app/);
});

test('full project details, contact controls and CV remain in the HTML', () => {
    assert.ok(text.includes('959 math questions from a 166-page dataset'));
    assert.ok(text.includes('7.2× speedup'));
    assert.ok(text.includes('Hit@5 of 10/12'));
    assert.ok(text.includes('0 false abstentions'));
    assert.ok(text.includes('View Full CV'));
    assert.match(body, /href="\.\/CV_Raul_Muresan\.pdf"/);
    assert.match(body, /aria-label="Copy email address to clipboard"/);
    assert.match(body, /title="raulmuresancalin@gmail\.com"/);
});

test('the footer year is serialized for a consistent first client render', () => {
    const initialYear = body.match(/<div id="root" data-year="(\d{4})">/)?.[1];
    assert.ok(initialYear, 'Missing build year on the hydration root');
    assert.ok(text.includes(`© ${initialYear} Crafted by Raul Mureșan`));
});

test('page title and social metadata use the Full Stack Developer role', () => {
    const title = 'Raul Mureșan | Full Stack Developer';
    assert.ok(html.includes(`<title>${title}</title>`));
    assert.equal(metaContent('og:title'), title);
    assert.equal(metaContent('twitter:title'), title);
    const description = metaContent('description');
    assert.ok(description?.includes('Full Stack Developer'));
    assert.ok(description.includes('Cluj-Napoca, Romania'));
    assert.equal(metaContent('og:description'), description);
    assert.equal(metaContent('twitter:description'), description);
    assert.doesNotMatch(head, /React App|Software Engineer/);
});

test('structured data remains valid and matches the visible role', () => {
    const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(json, 'Missing JSON-LD');
    const person = JSON.parse(json);
    assert.equal(person['@type'], 'Person');
    assert.equal(person.name, 'Raul Mureșan');
    assert.equal(person.jobTitle, 'Full Stack Developer');
    assert.equal(person.url, 'https://raul-muresan-personal-website.vercel.app/');
});

test('all local image, stylesheet, script and CV references resolve', async () => {
    const references = new Set([...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]));
    for (const reference of references) {
        const url = new URL(reference, 'https://portfolio.test/');
        if (url.origin !== 'https://portfolio.test') continue;
        const file = new URL(`.${decodeURIComponent(url.pathname)}`, outputDirectory);
        assert.ok((await stat(file)).isFile(), `Missing built asset: ${reference}`);
    }
});

test('only the production client bundle is shipped in the HTML', () => {
    assert.match(html, /<script[^>]+type="module"[^>]+src="\/assets\/[^\"]+\.js"/);
    assert.doesNotMatch(html, /\/src\/main\.tsx|entry-server|\.prerender-/);
});

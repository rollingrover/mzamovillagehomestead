/**
 * prerender.mjs
 * ─────────────────────────────────────────────────────────────
 * Lightweight SSG stopgap for SEO.
 *
 * Problem: a pure Vite/React SPA ships <div id="root"></div> with
 * no content — crawlers that don't execute JS (and slow/partial
 * JS-rendering crawlers) see an empty page.
 *
 * Fix: after `vite build`, this script writes one static HTML
 * file per route (dist/our-story/index.html, dist/shop/index.html,
 * etc). Each file contains:
 *   - the correct <title> / <meta description> / OG tags for that page
 *   - real, readable text content inside #root (headings, intro
 *     copy, nav links) sourced directly from the EN translation file
 *   - the same <script type="module" src="/assets/..."> bundle tags
 *     Vite already produced, so React hydrates on top and the page
 *     becomes fully interactive for real visitors.
 *
 * This is the same technique tools like react-snap / prerender-spa
 * use, without requiring a headless browser (which can't be
 * installed in this sandboxed environment). It is a genuine,
 * working stopgap — not a full SSR/SSG framework migration.
 * For a long-term fix, migrating to Next.js or Astro is still the
 * recommended path (see project notes).
 * ─────────────────────────────────────────────────────────────
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const SITE_URL = 'https://www.mzamovillagehomestead.co.za';

const en = JSON.parse(
  readFileSync(path.join(__dirname, 'src/locales/en/translation.json'), 'utf-8')
);

// Per-route metadata + visible fallback content for crawlers
const routes = [
  {
    path: '/',
    title: 'Mzamo Village Homestead | Zulu Cultural Tours in Hluhluwe, KwaZulu-Natal',
    description: 'Experience authentic Zulu culture at Mzamo Village Homestead in Hluhluwe, KwaZulu-Natal. Cultural tours, beadwork, traditional cooking, and overnight hut stays.',
    h1: `${en.home.heroTitlePart1} ${en.home.heroTitlePart2}`,
    body: `<p>${en.home.heroSubtitle}</p><p>${en.home.introText}</p><h2>${en.home.featuredTitle}</h2><p>${en.home.featured.culturalTour.desc}</p>`,
  },
  {
    path: '/our-story',
    title: 'Our Story | Mzamo Village Homestead',
    description: 'Discover the story behind Mzamo Village Homestead — a living Zulu kraal rooted in heritage, community, and authentic isiZulu culture in Hluhluwe.',
    h1: en.ourStory.heroTitle,
    body: `<p>${en.ourStory.heroSubtitle}</p><p>${en.ourStory.myStoryP1}</p><p>${en.ourStory.myStoryP2}</p>`,
  },
  {
    path: '/experiences',
    title: 'Cultural Experiences | Mzamo Village Homestead',
    description: 'isiZulu Cultural Tours featuring school workshops, homestead stays, traditional hut accommodation, and Zulu ceremonies in Hluhluwe, KwaZulu-Natal.',
    h1: en.experiences.pageTitle,
    body: `<ul>${Object.values(en.experiences.cards).map(c => `<li><strong>${c.title}</strong>: ${c.desc}</li>`).join('')}</ul>`,
  },
  {
    path: '/gallery',
    title: 'Gallery | Mzamo Village Homestead',
    description: 'Photos of authentic Zulu village life at Mzamo Village Homestead — beadwork, dance, ceremonies, and traditional huts in Hluhluwe.',
    h1: en.gallery.pageTitle,
    body: `<p>A visual journey through Mzamo Village Homestead.</p>`,
  },
  {
    path: '/events',
    title: 'Events & Ceremonies | Mzamo Village Homestead',
    description: 'Book traditional Zulu weddings, school workshops, storytelling nights, and private ceremonies at Mzamo Village Homestead, Hluhluwe.',
    h1: en.events.pageTitle,
    body: `<p>${en.events.intro}</p><ul>${Object.values(en.events.cards).map(c => `<li><strong>${c.title}</strong>: ${c.desc}</li>`).join('')}</ul>`,
  },
  {
    path: '/shop',
    title: 'Shop | Authentic Zulu Crafts | Mzamo Village Homestead',
    description: 'Shop authentic, handmade Zulu crafts and curios — all made by Mzamo and Mzamo Village residents. Beadwork, carvings, shields, and more.',
    h1: en.shop.pageTitle,
    body: `<p>${en.shop.intro}</p><ul>${Object.values(en.shop.products).map(p => `<li>${p.title} — ${p.price}</li>`).join('')}</ul>`,
  },
  {
    path: '/contact',
    title: 'Contact & Booking | Mzamo Village Homestead',
    description: 'Book your Zulu cultural tour at Mzamo Village Homestead. Contact us via WhatsApp or phone in Hluhluwe, KwaZulu-Natal.',
    h1: en.contact.pageTitle,
    body: `<p>${en.contact.intro}</p><p>${en.contact.whatsapp}</p><p>${en.contact.address}</p>`,
  },
];

function buildHtml(template, route) {
  let html = template;

  html = html.replace(
    /<title>.*?<\/title>/s,
    `<title>${route.title}</title>`
  );
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/>/s,
    `<meta name="description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?"\s*\/>/s,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?"\s*\/>/s,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?"\s*\/>/s,
    `<meta property="og:url" content="${SITE_URL}${route.path}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?"\s*\/>/s,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?"\s*\/>/s,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/>/s,
    `<link rel="canonical" href="${SITE_URL}${route.path}" />`
  );

  // Inject real, crawlable content inside #root. React hydrates over
  // this on load (same DOM node), so visitors briefly see this content
  // and then the interactive app takes over seamlessly.
  const fallback = `<div id="root"><div data-prerendered="true"><h1>${route.h1}</h1>${route.body}<nav><a href="/">Home</a> <a href="/our-story">Our Story</a> <a href="/experiences">Experiences</a> <a href="/gallery">Gallery</a> <a href="/events">Events</a> <a href="/shop">Shop</a> <a href="/contact">Contact</a></nav></div></div>`;
  html = html.replace('<div id="root"></div>', fallback);

  return html;
}

function run() {
  if (!existsSync(distDir)) {
    console.error('dist/ not found — run `vite build` first.');
    process.exit(1);
  }

  const templatePath = path.join(distDir, 'index.html');
  const template = readFileSync(templatePath, 'utf-8');

  for (const route of routes) {
    const html = buildHtml(template, route);

    if (route.path === '/') {
      writeFileSync(templatePath, html);
      console.log('✓ prerendered /');
      continue;
    }

    const dir = path.join(distDir, route.path.replace(/^\//, ''));
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), html);
    console.log(`✓ prerendered ${route.path}`);
  }

  console.log('\nPrerender complete. Each route now has crawlable HTML + correct meta tags.');
}

run();

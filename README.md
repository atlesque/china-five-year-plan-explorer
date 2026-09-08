# China’s 15th Five-Year Plan Explorer

An Astro static site that makes China’s 15th Five-Year Plan (2026–2030) easier to explore through source-grounded industry and growth-theme pages.

## Local development

```bash
pnpm install
pnpm dev
```

The production checks are:

```bash
pnpm check
pnpm build
pnpm preview
```

The site uses `https://china-five-year-plan.atlesque.dev` as its default public origin. Set `PUBLIC_SITE_URL` for previews or if the site moves to another domain; Astro uses it for canonical URLs, Open Graph URLs, robots.txt, and sitemap entries.

## Routes

- `/` — overview, source links, plan facts, and all themes
- `/industries/` — complete directory
- `/industries/[slug]/` — statically generated detail pages
- `/sources/` — provenance, translation note, and citation methodology
- `/404` — helpful not-found state

The site has no server adapter, runtime API dependency, client-side search, or required JavaScript for navigation. Cover visuals and research skeletons are CSS-only static placeholders.

The header theme control defaults to Auto, follows the operating system preference, and allows an explicit Light or Dark choice. The choice is saved locally in the browser.

## Content workflow

Industry pages live in `src/content/industries/`. Each Markdown file is validated by `src/content.config.ts` and must provide a unique slug, title, editorial label, short description, deck, order, theme, status, at least one structured source reference, and three to five `comingNext` items.

To add an industry:

1. Add a Markdown file with the schema fields used by an existing entry.
2. Write `## Why it matters in the plan` and `## What the plan calls for` sections.
3. Use durable part/chapter/section/box/item locators in `sourceRefs`.
4. Run `pnpm check` and `pnpm build`.

The home page, directory, and dynamic route all read the same collection, so there is no second hand-written route map.

## Source documents

- [Official Chinese original, National Development and Reform Commission PDF](https://www.ndrc.gov.cn/fggz/fzzlgh/gjfzgh/202603/U020260317369114704096.pdf)
- [English translation used for the MVP, WKO / EUCLERA PDF](https://www.wko.at/vlbg/aussenwirtschaft/euclera-translation-15th-five-year-plan-2026-2030-.pdf)

The Chinese original is authoritative. The English PDF is a translation used for the initial English-language content and is not described as an official English government edition.

## Known MVP limits

The site deliberately defers long-form research, target-metric extraction, timelines, diagrams, final cover art, bilingual routes, client-side filtering/search, and a CMS. The `Coming next` and `Research preview` modules mark those future layers explicitly.

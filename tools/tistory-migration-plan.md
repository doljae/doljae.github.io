# Tistory -> Docusaurus Migration Plan

## Goal

Migrate one Tistory post into this Docusaurus blog with repeatable steps.

## Prepared Tools

- `tools/extract-tistory-rss-item.mjs`
  - Fetches `<baseUrl>/rss`
  - Extracts one target post by numeric post id
  - Saves normalized JSON to `tmp/tistory-<id>.json`
- `tools/migrate-tistory-post.mjs`
  - Converts `descriptionHtml` to markdown-friendly text
  - Preserves title/date/tags/source URL/cover image
  - Writes `blog/YYYY/MM/DD-<id>.mdx`

## Execution Steps

1. Extract source post metadata/body from RSS

```bash
yarn extract:tistory "https://doljae.tistory.com" "360"
```

2. Generate Docusaurus post file

```bash
yarn migrate:tistory "tmp/tistory-360.json"
```

3. Review generated MDX and clean any edge cases
   - Check title/tags/date/frontmatter
   - Check image rendering
   - Check line breaks and quote blocks

4. Validate site build

```bash
yarn build
```

## Notes / Caveats

- Tistory RSS description is HTML. Most inline formatting is flattened to plain markdown text.
- Embedded widgets (oEmbed/opengraph/iframes) are not migrated automatically in this first toolchain.
- Cover image currently remains hotlinked to `blog.kakaocdn.net`.
  - If needed, download to `static/img/posts/...` in a second step and rewrite links.

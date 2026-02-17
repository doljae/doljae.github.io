#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

const TAG_MAP = new Map([
  ['ai-에이전드', 'ai-agent'],
]);

async function walk(dir) {
  const results = [];
  const entries = await fs.readdir(dir, {withFileTypes: true});
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }

  return results;
}

function parseArrayLine(content, field) {
  const regex = new RegExp(`^${field}:\\s*\\[(.*?)\\]$`, 'm');
  const match = content.match(regex);
  if (!match) {
    return null;
  }

  const values = match[1]
    .split(',')
    .map((item) => item.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, ''))
    .filter(Boolean);

  return {match: match[0], values};
}

function normalizeTags(values) {
  const mapped = values.map((tag) => TAG_MAP.get(tag) ?? tag);
  const deduped = [];
  const seen = new Set();
  for (const tag of mapped) {
    if (seen.has(tag)) {
      continue;
    }

    seen.add(tag);
    deduped.push(tag);
  }

  return deduped;
}

function toLine(field, values) {
  const quoted = values.map((tag) => JSON.stringify(tag)).join(', ');
  return `${field}: [${quoted}]`;
}

function buildTagsYaml(tags) {
  return `${tags
    .map((tag) => `${JSON.stringify(tag)}:\n  label: ${JSON.stringify(tag)}`)
    .join('\n')}\n`;
}

async function main() {
  const blogDir = path.resolve('blog');
  const files = await walk(blogDir);
  const allTags = new Set();

  for (const filePath of files) {
    const raw = await fs.readFile(filePath, 'utf8');
    const tagsLine = parseArrayLine(raw, 'tags');
    if (!tagsLine) {
      continue;
    }

    const normalized = normalizeTags(tagsLine.values);
    for (const tag of normalized) {
      allTags.add(tag);
    }

    let updated = raw.replace(tagsLine.match, toLine('tags', normalized));

    const keywordsLine = parseArrayLine(updated, 'keywords');
    if (keywordsLine) {
      updated = updated.replace(keywordsLine.match, toLine('keywords', normalized));
    }

    if (updated !== raw) {
      await fs.writeFile(filePath, updated, 'utf8');
    }
  }

  const sortedTags = Array.from(allTags).sort((a, b) => a.localeCompare(b, 'ko'));
  await fs.writeFile(path.join(blogDir, 'tags.yml'), buildTagsYaml(sortedTags), 'utf8');
  console.log(`Updated tags for ${files.length} files. Unique tags: ${sortedTags.length}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

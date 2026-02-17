#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';
import {gfm} from 'turndown-plugin-gfm';

function yamlString(value) {
  return JSON.stringify(String(value));
}

function createTurndownService() {
  const service = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
  });

  service.use(gfm);

  service.addRule('removeScriptsAndStyles', {
    filter: (node) => node.nodeName === 'SCRIPT' || node.nodeName === 'STYLE',
    replacement: () => '',
  });

  service.addRule('iframeToLink', {
    filter: 'iframe',
    replacement: (_content, node) => {
      const src = node.getAttribute?.('src') || '';
      if (!src) {
        return '';
      }

      return `\n\n[Embedded content](${src})\n\n`;
    },
  });

  return service;
}

function escapeMdxSensitiveChars(markdown) {
  const tokens = [];
  let text = markdown;

  text = text.replace(/```[\s\S]*?```/g, (match) => {
    const token = `@@FENCED_${tokens.length}@@`;
    tokens.push(match);
    return token;
  });

  text = text.replace(/`[^`\n]+`/g, (match) => {
    const token = `@@INLINE_${tokens.length}@@`;
    tokens.push(match);
    return token;
  });

  text = text
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;');

  text = text.replace(/@@(?:FENCED|INLINE)_(\d+)@@/g, (_, idx) => tokens[Number(idx)] ?? '');

  return text;
}

function htmlToMarkdown(descriptionHtml) {
  const turndown = createTurndownService();
  let body = turndown.turndown(descriptionHtml);
  body = escapeMdxSensitiveChars(body);

  body = body
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const tailMarkers = [
    '\n공유하기\n',
    '\n게시글 관리\n',
    '\nZero to Hero\n',
    'window.ReactionButtonType',
  ];

  let cutIndex = -1;
  for (const marker of tailMarkers) {
    const idx = body.indexOf(marker);
    if (idx >= 0 && (cutIndex === -1 || idx < cutIndex)) {
      cutIndex = idx;
    }
  }

  if (cutIndex >= 0) {
    body = body.slice(0, cutIndex).trim();
  }

  return body;
}

function toIsoWithOffset(pubDate) {
  const date = new Date(pubDate);
  const parts = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const byType = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${byType.year}-${byType.month}-${byType.day}T${byType.hour}:${byType.minute}:${byType.second}+09:00`;
}

function sanitizeTag(tag) {
  return tag
    .trim()
    .toLowerCase()
    .replaceAll(' ', '-')
    .replace(/[^\p{L}\p{N}-]/gu, '');
}

function addTruncateMarker(markdown) {
  const paragraphs = markdown.split('\n\n').filter((chunk) => chunk.trim().length > 0);

  if (markdown.includes('<!-- truncate -->')) {
    return markdown;
  }

  if (paragraphs.length === 0) {
    return '<!-- truncate -->';
  }

  if (paragraphs.length < 3) {
    const withMarker = [
      paragraphs[0],
      '<!-- truncate -->',
      ...paragraphs.slice(1),
    ];

    return withMarker.join('\n\n');
  }

  const insertIndex = 3;
  const withMarker = [
    ...paragraphs.slice(0, insertIndex),
    '<!-- truncate -->',
    ...paragraphs.slice(insertIndex),
  ];

  return withMarker.join('\n\n');
}

async function main() {
  const inputPath = process.argv[2];

  if (!inputPath) {
    console.error('Usage: node tools/migrate-tistory-post.mjs <inputJsonPath>');
    process.exit(1);
  }

  const raw = await fs.readFile(path.resolve(inputPath), 'utf8');
  const post = JSON.parse(raw);

  const isoDate = toIsoWithOffset(post.pubDate);
  const [yyyy, mm, dd] = isoDate.slice(0, 10).split('-');

  const outputDir = path.resolve('blog', yyyy, mm);
  await fs.mkdir(outputDir, {recursive: true});

  const filename = `${dd}-${post.postId}.mdx`;
  const outputPath = path.join(outputDir, filename);

  const extractedTags = (post.categories || [])
    .map(sanitizeTag)
    .filter((tag) => tag.length > 0 && tag !== 'review')
    .slice(0, 8);
  const tags = extractedTags.length > 0 ? extractedTags : ['tistory'];

  const mdBody = addTruncateMarker(htmlToMarkdown(post.descriptionHtml));
  const tagsYaml = tags.map((tag) => yamlString(tag)).join(', ');
  const content = `---
slug: ${post.postId}
title: ${yamlString(post.title)}
authors: seokjae
tags: [${tagsYaml}]
enableComments: true
keywords: [${tagsYaml}]
date: ${isoDate}
---

> 원문: ${post.link}

${mdBody}
`;

  await fs.writeFile(outputPath, content, 'utf8');
  console.log(`Saved: ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

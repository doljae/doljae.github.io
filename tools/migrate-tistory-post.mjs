#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

function yamlString(value) {
  return JSON.stringify(String(value));
}

function htmlToMarkdown(descriptionHtml) {
  const firstImage = descriptionHtml.match(/<img[^>]*src="([^"]+)"/i)?.[1] ?? '';

  let body = descriptionHtml;
  const codeBlocks = [];

  body = body.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => {
    const normalized = code
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&quot;', '"')
      .replaceAll('&#39;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&nbsp;', ' ')
      .replace(/\r\n/g, '\n')
      .trimEnd();
    const token = `@@CODEBLOCK_${codeBlocks.length}@@`;
    codeBlocks.push(`\n\n\`\`\`\n${normalized}\n\`\`\`\n\n`);
    return token;
  });

  body = body.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, code) => {
    const normalized = code
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')
      .replaceAll('&quot;', '"')
      .replaceAll('&#39;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&nbsp;', ' ')
      .trim();
    return `\`${normalized}\``;
  });

  body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<style[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<figure[\s\S]*?<\/figure>/gi, '');
  body = body.replace(/<br\s*\/?>/gi, '\n\n');
  body = body.replace(/<\/p>\s*<p[^>]*>/gi, '\n\n');
  body = body.replace(/<p[^>]*>/gi, '');
  body = body.replace(/<\/p>/gi, '\n\n');
  body = body.replace(/<b>/gi, '**');
  body = body.replace(/<\/b>/gi, '**');
  body = body.replace(/<[^>]+>/g, '');
  body = body
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&nbsp;', ' ')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;');

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

  body = body.replace(/@@CODEBLOCK_(\d+)@@/g, (_, idx) => codeBlocks[Number(idx)] ?? '');

  if (firstImage) {
    return `![cover](${firstImage})\n\n${body}`;
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

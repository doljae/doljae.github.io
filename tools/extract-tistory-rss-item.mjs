#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';

function decodeHtml(input) {
  return input
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&rsquo;', "'")
    .replaceAll('&lsquo;', "'");
}

function extractTag(source, tag) {
  const match = source.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return match ? match[1].trim() : '';
}

function extractCategories(itemXml) {
  const matches = itemXml.matchAll(/<category>([\s\S]*?)<\/category>/g);
  return Array.from(matches, (m) => decodeHtml(m[1].trim()));
}

function extractFromPostHtml(html, baseUrl, postId) {
  const title =
    decodeHtml(html.match(/<meta property="og:title" content="([\s\S]*?)"\s*\/>/i)?.[1] ?? '') ||
    decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '');

  const pubDate = html.match(/<meta property="article:published_time" content="([^"]+)"/i)?.[1] ?? '';

  const contentStartToken = '<div class="tt_article_useless_p_margin contents_style">';
  const articleEndToken = '</article>';
  const start = html.indexOf(contentStartToken);
  const end = start >= 0 ? html.indexOf(articleEndToken, start) : -1;
  const descriptionHtml = start >= 0 && end > start
    ? html.slice(start + contentStartToken.length, end).trim()
    : '';

  return {
    baseUrl,
    postId,
    title,
    link: `${baseUrl.replace(/\/$/, '')}/${postId}`,
    pubDate,
    categories: [],
    descriptionHtml,
  };
}

async function main() {
  const baseUrl = process.argv[2];
  const postId = process.argv[3];

  if (!baseUrl || !postId) {
    console.error('Usage: node tools/extract-tistory-rss-item.mjs <baseUrl> <postId>');
    process.exit(1);
  }

  const rssUrl = `${baseUrl.replace(/\/$/, '')}/rss`;
  const response = await fetch(rssUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status} ${response.statusText}`);
  }

  const rssText = await response.text();
  const items = rssText.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const matchedItem = items.find((item) => {
    const link = extractTag(item, 'link');
    return link.endsWith(`/${postId}`);
  });

  if (!matchedItem) {
    const postUrl = `${baseUrl.replace(/\/$/, '')}/${postId}`;
    const postResponse = await fetch(postUrl);
    if (!postResponse.ok) {
      throw new Error(`Post ${postId} not found in RSS and failed to fetch page: ${postUrl}`);
    }

    const postHtml = await postResponse.text();
    const fallbackOutput = extractFromPostHtml(postHtml, baseUrl, postId);
    if (!fallbackOutput.descriptionHtml) {
      throw new Error(`Post ${postId} page fetched but content block parsing failed: ${postUrl}`);
    }

    const outputDir = path.resolve('tmp');
    await fs.mkdir(outputDir, {recursive: true});
    const outputPath = path.join(outputDir, `tistory-${postId}.json`);
    await fs.writeFile(outputPath, `${JSON.stringify(fallbackOutput, null, 2)}\n`, 'utf8');
    console.log(`Saved: ${outputPath}`);
    return;
  }

  const link = extractTag(matchedItem, 'link');
  const title = decodeHtml(extractTag(matchedItem, 'title'));
  const pubDate = extractTag(matchedItem, 'pubDate');
  const descriptionRaw = extractTag(matchedItem, 'description');
  const descriptionHtml = decodeHtml(descriptionRaw);
  const categories = extractCategories(matchedItem);

  const output = {
    baseUrl,
    postId,
    title,
    link,
    pubDate,
    categories,
    descriptionHtml,
  };

  const outputDir = path.resolve('tmp');
  await fs.mkdir(outputDir, {recursive: true});
  const outputPath = path.join(outputDir, `tistory-${postId}.json`);
  await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(`Saved: ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

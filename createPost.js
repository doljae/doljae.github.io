const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 오늘 날짜를 가져옵니다.
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
const day = today.getDate().toString().padStart(2, '0');

// 디렉토리 경로를 설정합니다.
const dirPath = path.join(__dirname, `./blog/${year}/${month}`);

// 디렉토리가 존재하지 않는 경우, 디렉토리를 생성합니다.
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

// blog 디렉토리 내의 .md 파일 수를 가져옵니다.
// _draft 디렉토리를 제외합니다.
const mdFiles = glob.sync(path.join(__dirname, './blog/**/*.md'), {
    ignore: path.join(__dirname, './blog/**/_draft/**/*.md'),
});
const count = mdFiles.length;

// 파일 이름을 설정합니다.
const fileName = `${day}-${count + 1}.md`;

// 파일 경로를 설정합니다.
const filePath = path.join(dirPath, fileName);

// 파일 내용을 설정합니다.
const content = `---
slug: ${count + 1}
title: TITLE
authors: seokjae
tags: [hola, docusaurus]
---

Hello world!`;

// 파일을 생성합니다.
fs.writeFileSync(filePath, content);
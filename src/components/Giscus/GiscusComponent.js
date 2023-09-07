import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="doljae/doljae.github.io"
      repoId="R_kgDOKDmMFA"
      category="General"
      categoryId="DIC_kwDOKDmMFM4CZIyj"
      mapping="https://github.com/doljae/doljae.github.io/discussions/categories/general"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}
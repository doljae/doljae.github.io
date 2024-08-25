import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import useIsBrowser from "@docusaurus/useIsBrowser";
import GiscusComponent from "@site/src/components/Giscus/GiscusComponent";
import {useBlogPost} from "@docusaurus/plugin-content-blog/client";

export default function BlogPostItemWrapper(props) {
    const {metadata, isBlogPostPage} = useBlogPost()
    const isBrowser = useIsBrowser();

    const {frontMatter, slug, title} = metadata
    const {enableComments} = frontMatter

    return (
        <>
            <BlogPostItem {...props} />
            {(enableComments && isBlogPostPage) && (
                <GiscusComponent/>
            )}
        </>
    );
}

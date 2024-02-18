"use strict";(self.webpackChunkdoljae_github_io=self.webpackChunkdoljae_github_io||[]).push([[103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(7294);var o=n(512),a=n(833),i=n(5281),s=n(9460),l=n(7846),r=n(1639),c=n(5999),d=n(2244),u=n(5893);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:o,date:i,tags:l,authors:r,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.d,{title:n,description:o,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:i}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(794),f=n(2212);function p(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:a}=(0,s.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:g}=o,{hide_table_of_contents:p,toc_min_heading_level:v,toc_max_heading_level:x}=d;return(0,u.jsxs)(l.Z,{sidebar:t,toc:!p&&a.length>0?(0,u.jsx)(h.Z,{toc:a,minHeadingLevel:v,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(r.Z,{children:n}),(i||c)&&(0,u.jsx)(m,{nextItem:i,prevItem:c})]})}function v(e){const t=e.content;return(0,u.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},794:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7294),a=n(512),i=n(6668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):o.push(a)})),o}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>r(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function d(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let a=t;a<=n;a+=1)o.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),r=c(l,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(3692),g=n(5893);function h(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?(0,g.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.Z,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:o})]},e.id)))}):null}const f=o.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const h=(0,i.L)(),p=c??h.tableOfContents.minHeadingLevel,v=d??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>l({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:v});return u((0,o.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:p,maxHeadingLevel:v}}),[a,r,p,v])),(0,g.jsx)(f,{toc:x,className:n,linkClassName:a,...m})}const v={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},x="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:t,...n}=e;return(0,g.jsx)("div",{className:(0,a.Z)(v.tableOfContents,"thin-scrollbar",t),children:(0,g.jsx)(p,{...n,linkClassName:x,linkActiveClassName:b})})}},2212:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var o=n(512),a=n(5999),i=n(5742),s=n(5893);function l(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(l,{}),className:(0,o.Z)(t,d.k.common.unlistedBanner),children:(0,s.jsx)(r,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},1639:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var o=n(2438),a=n(2389),i=n(9460),s=n(9861),l=n(2949),r=n(5893);function c(){const{colorMode:e}=(0,l.I)();return(0,r.jsx)(s.Z,{repo:"doljae/doljae.github.io",repoId:"R_kgDOKDmMFA",category:"General",categoryId:"DIC_kwDOKDmMFM4CZIyj",mapping:"https://github.com/doljae/doljae.github.io/discussions/categories/general",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function d(e){const{metadata:t,isBlogPostPage:n}=(0,i.C)(),{frontMatter:s,slug:l,title:d}=((0,a.Z)(),t),{enableComments:u}=s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{...e}),u&&n&&(0,r.jsx)(c,{})]})}}}]);
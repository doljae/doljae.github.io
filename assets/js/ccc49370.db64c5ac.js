"use strict";(self.webpackChunkdoljae_github_io=self.webpackChunkdoljae_github_io||[]).push([[103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),l=n(6010),o=n(833),r=n(5281),i=n(9460),c=n(9058),s=n(1639),m=n(7462),d=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:r,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(o.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var p=n(794);function v(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:o}=(0,i.C)(),{nextItem:r,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:v}=d;return a.createElement(c.Z,{sidebar:t,toc:!u&&o.length>0?a.createElement(p.Z,{toc:o,minHeadingLevel:f,maxHeadingLevel:v}):void 0},a.createElement(s.Z,null,n),(r||m)&&a.createElement(g,{nextItem:r,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(f,null),a.createElement(v,{sidebar:e.sidebar},a.createElement(t,null))))}},794:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),l=n(7294),o=n(6010),r=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function m(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=m(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function g(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?l.createElement("ul",{className:o?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(g,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=l.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...g}=e;const p=(0,r.L)(),v=m??p.tableOfContents.minHeadingLevel,h=d??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:v,maxHeadingLevel:h});return u((0,l.useMemo)((()=>{if(o&&s)return{linkClassName:o,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:h}}),[o,s,v,h])),l.createElement(f,(0,a.Z)({toc:b,className:n,linkClassName:o},g))}const v={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},h="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function E(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,o.Z)(v.tableOfContents,"thin-scrollbar",t)},l.createElement(p,(0,a.Z)({},n,{linkClassName:h,linkActiveClassName:b})))}},1639:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(2438),o=n(9460),r=n(2389),i=n(9861),c=n(2949);function s(){const{colorMode:e}=(0,c.I)();return a.createElement(i.Z,{repo:"doljae/doljae.github.io",repoId:"R_kgDOKDmMFA",category:"General",categoryId:"DIC_kwDOKDmMFM4CZIyj",mapping:"https://github.com/doljae/doljae.github.io/discussions/categories/general",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function m(e){const{metadata:t,isBlogPostPage:n}=(0,o.C)(),{frontMatter:i,slug:c,title:m}=((0,r.Z)(),t),{enableComments:d}=i;return a.createElement(a.Fragment,null,a.createElement(l.Z,e),d&&n&&a.createElement(s,null))}}}]);
"use strict";(self.webpackChunkdoljae_github_io=self.webpackChunkdoljae_github_io||[]).push([[813],{7448:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(539),s=n(1865),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},4005:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(3750),s=n(308),i=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},6956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var a=n(8215),s=n(539),i=n(8207),r=n(204),l=n(1926),o=n(6289),c=n(569),d=n(7448),g=n(7220),u=n(4005),m=n(665),h=n(9303),p=n(4848);function x(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:n,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},665:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(8215),s=n(7289),i=n(204),r=n(2362),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,a.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},1865:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215),s=n(6289),i=n(4848);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},3953:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(8215),s=n(6289);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(4848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,a.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},1926:(e,t,n)=>{n.d(t,{ZD:()=>r,uz:()=>l});n(6540);var a=n(539),s=n(1430);n(4848);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},7289:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(539),s=n(7143),i=n(4848);function r(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},308:(e,t,n)=>{n.d(t,{A:()=>I});var a=n(6540),s=n(8215),i=n(3750),r=n(4848);function l(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var o=n(6289);const c={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:a}=(0,i.e7)(),{permalink:l,title:d}=n,g=a?"h1":"h2";return(0,r.jsx)(g,{className:(0,s.A)(c.title,t),children:a?d:(0,r.jsx)(o.A,{to:l,children:d})})}var g=n(539),u=n(1430),m=n(8569);const h={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,g.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function j(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:a,readingTime:l}=n,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,r.jsx)(x,{date:a,formattedDate:(c=a,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(p,{readingTime:l})]})]});var c}var f=n(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:n},assets:a}=(0,i.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?A.imageOnlyAuthorCol:A.authorCol),children:(0,r.jsx)(f.A,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function T(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(d,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{})]})}var N=n(99),y=n(900);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:a}=(0,i.e7)();return(0,r.jsx)("div",{id:a?N.LU:void 0,className:(0,s.A)("markdown",n),children:(0,r.jsx)(y.A,{children:t})})}var w=n(204),k=n(5783),P=n(3953);const R={tags:"tags_jXut",tag:"tag_QGVx"};function M(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(R.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:R.tag,children:(0,r.jsx)(P.A,{...e})},e.permalink)))})]})}function U(){return(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(o.A,{"aria-label":(0,g.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(U,{})})}function B(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:a,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=n.length>0;if(!(u||g||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(M,{tags:n})})}),e&&(0,r.jsx)(k.A,{className:(0,s.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":g}),children:(0,r.jsx)(M,{tags:n})}),g&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,r.jsx)(C,{blogPostTitle:a,to:e.permalink})})]})}function F(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(l,{className:(0,s.A)(a,n),children:[(0,r.jsx)(T,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(B,{})]})}var D=n(9136);function O({id:e,host:t,repo:s,repoId:i,category:l,categoryId:o,mapping:c,term:d,strict:g,reactionsEnabled:u,emitMetadata:m,inputPosition:h,theme:p,lang:x,loading:j}){const[b,f]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{b||n.e(416).then(n.bind(n,416)).then((()=>f(!0)))}),[]),b?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:s,repoid:i,category:l,categoryid:o,mapping:c,term:d,strict:g,reactionsenabled:u,emitmetadata:m,inputposition:h,theme:p,lang:x,loading:j}):null}var L=n(8532);function G(){const{colorMode:e}=(0,L.G)();return(0,r.jsx)(O,{repo:"doljae/doljae.github.io",repoId:"R_kgDOKDmMFA",category:"General",categoryId:"DIC_kwDOKDmMFM4CZIyj",mapping:"https://github.com/doljae/doljae.github.io/discussions/categories/general",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function I(e){const{metadata:t,isBlogPostPage:n}=(0,i.e7)(),{frontMatter:a,slug:s,title:l}=((0,D.A)(),t),{enableComments:o}=a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{...e}),o&&n&&(0,r.jsx)(G,{})]})}}}]);
"use strict";(self.webpackChunkdoljae_github_io=self.webpackChunkdoljae_github_io||[]).push([[711],{4750:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(6540);var r=a(6289),s=a(539),i=a(8207),n=a(8569),c=a(3952),l=a(9303),h=a(4848);function o(e){let{year:t,posts:a}=e;const s=(0,n.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.A,{as:"h3",id:t,children:t}),(0,h.jsx)("ul",{children:a.map((e=>{return(0,h.jsx)("li",{children:(0,h.jsxs)(r.A,{to:e.metadata.permalink,children:[(t=e.metadata.date,s.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function d(e){let{years:t}=e;return(0,h.jsx)("section",{className:"margin-vert--lg",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,h.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,h.jsx)(o,{...e})},t)))})})})}function m(e){let{archive:t}=e;const a=(0,s.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.be,{title:a,description:r}),(0,h.jsxs)(c.A,{children:[(0,h.jsx)("header",{className:"hero hero--primary",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(l.A,{as:"h1",className:"hero__title",children:a}),(0,h.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,h.jsx)("main",{children:n.length>0&&(0,h.jsx)(d,{years:n})})]})]})}}}]);
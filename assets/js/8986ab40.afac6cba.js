"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[989],{5275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=n(4848),a=n(8453);const r={slug:"bearer-authentication",title:"Bearer Authentication",authors:"jiaqi",tags:["Security"]},o=void 0,s={permalink:"/blog/bearer-authentication",editUrl:"https://github.com/QubitPi/chatbot-ws/tree/master/docs/blog/2022-09-12-bearer-authentication.md",source:"@site/blog/2022-09-12-bearer-authentication.md",title:"Bearer Authentication",description:"[//]: # (Copyright 2025 Jiaqi Liu. All rights reserved.)",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"Security",permalink:"/blog/tags/security"}],readingTime:1.17,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of ChatbotWS",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"bearer-authentication",title:"Bearer Authentication",authors:"jiaqi",tags:["Security"]},unlisted:!1,prevItem:{title:"Provider v.s. @Provider",permalink:"/blog/provider"},nextItem:{title:'Tired of Null Pointer Exceptions? Consider Using Java SE 8\'s "Optional"',permalink:"/blog/java-optional"}},c={authorsImageUrls:[void 0]},h=[];function u(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Bearer authentication"})," (also called ",(0,i.jsx)(t.strong,{children:"token authentication"}),") is an\n",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",children:"HTTP authentication scheme"}),' that involves security tokens called bearer tokens. The name\n"Bearer authentication" can be understood as "give access to the bearer of this token." The bearer token is a cryptic\nstring, usually generated by the server in response to a login request. The client must send this token in the\n',(0,i.jsx)(t.code,{children:"Authorization"})," header when making requests to protected resources:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Authorization: Bearer <token>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The Bearer authentication scheme was originally created as part of ",(0,i.jsx)(t.a,{href:"https://swagger.io/docs/specification/authentication/oauth2/",children:"OAuth 2.0"})," in ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc6750",children:"RFC 6750"}),", but\nis sometimes also used on its own. Similarly to ",(0,i.jsx)(t.a,{href:"https://swagger.io/docs/specification/authentication/basic-authentication/",children:"Basic authentication"}),", Bearer authentication\nshould only be used over HTTPS (SSL)."]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
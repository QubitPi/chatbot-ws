"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[976],{67:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(8040),o=t(5246);const r={sidebar_position:1,title:"Introduction"},s="Getting Started",c={id:"intro",title:"Introduction",description:"Before proceeding, it is important to note that we DO NOT support Spring/Spring Boot paradigm.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/chatbot-ws/tree/master/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Development",permalink:"/docs/development"}},a={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Spinning Up a Container",id:"spinning-up-a-container",level:3},{value:"Sending the First Chat Request",id:"sending-the-first-chat-request",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsxs)(n.p,{children:["Before proceeding, it is important to note that ",(0,i.jsx)(n.strong,{children:"we DO NOT support Spring/Spring Boot paradigm"}),".\n",(0,i.jsx)(n.a,{href:"https://chatbot.qubitpi.org/",children:"ChatbotWS"})," runs as a ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://jcp.org/en/jsr/detail?id=370",children:"JAX-RS"})})," webservice backed by its reference implementation Jersey running\nas a WAR inside ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Jetty_(web_server)",children:"Jetty"})," container."]}),(0,i.jsxs)(n.p,{children:["More info about difference between JAX-RS and Spring can be found in ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/42955575",children:"this thread"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.h3,{id:"spinning-up-a-container",children:"Spinning Up a Container"}),"\n",(0,i.jsxs)(n.p,{children:["Please make sure Docker is installed\n(",(0,i.jsx)(n.a,{href:"https://docker.qubitpi.org/desktop/setup/install/mac-install/",children:(0,i.jsx)(n.em,{children:"Installing Docker"})}),"), then execute this on-click\ncommands:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[!IMPORTANT]"}),"\n",(0,i.jsxs)(n.p,{children:["Please replace the ",(0,i.jsx)(n.code,{children:"OPENAI_API_KEY"})," below with the actual key which can be obtained\n",(0,i.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"export OPENAI_API_KEY=...\ndocker run  -it -p 8080:8080 -e OPENAI_API_KEY=$OPENAI_API_KEY jack20191124/chatbot-ws\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it. A healthcheck endpoint can be pinned with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"curl -v localhost:8080/v1/healthcheck\n"})}),"\n",(0,i.jsx)(n.p,{children:"which would gave"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ curl -v localhost:8080/v1/healthcheck\n*   Trying 127.0.0.1:8080...\n* Connected to localhost (127.0.0.1) port 8080 (#0)\n> GET /v1/healthcheck HTTP/1.1\n> Host: localhost:8080\n> User-Agent: curl/7.85.0\n> Accept: */*\n>\n* Mark bundle as not supporting multiuse\n< HTTP/1.1 200 OK\n< Content-Length: 0\n< Server: Jetty(11.0.15)\n<\n* Connection #0 to host localhost left intact\n"})}),"\n",(0,i.jsx)(n.h3,{id:"sending-the-first-chat-request",children:"Sending the First Chat Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"curl --location 'http://localhost:8080/v1/openai/chat' --header 'Content-Type: application/json' --data '{\n    \"message\": \"Hello\"\n}' -v\n"})}),"\n",(0,i.jsx)(n.p,{children:"Developer can now start adding business values without repeating the time-consuming scaffolding works. To proceed from\nhere, including getting and developing the webservice source code, please refer to the following sections for more\ndetails:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"development",children:"Development"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"configuration",children:"Configuration"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5246:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(2340);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
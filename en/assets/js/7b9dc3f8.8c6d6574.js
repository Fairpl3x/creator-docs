"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[7947],{33165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const i={title:"Event Execution Order",slug:"event-execution-order",excerpt:"Udon and Unity events are executed in a specific order. Here's how!",hidden:!1,createdAt:{},updatedAt:"2023-02-03T01:29:10.904Z"},d=void 0,a={id:"worlds/udon/event-execution-order",title:"Event Execution Order",description:"Udon and Unity have built-in events that are automatically called if you include them in your scripts. For example, the Start() event runs once for every script, and the Update() event runs once per frame. When you're writing Udon scripts, it's helpful to know which of these events happen first.",source:"@site/docs/worlds/udon/event-execution-order.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/event-execution-order",permalink:"/creator-docs-i18n/en/worlds/udon/event-execution-order",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/event-execution-order.md",tags:[],version:"current",lastUpdatedBy:"James Kerrane",lastUpdatedAt:1686996224,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"Event Execution Order",slug:"event-execution-order",excerpt:"Udon and Unity events are executed in a specific order. Here's how!",hidden:!1,createdAt:{},updatedAt:"2023-02-03T01:29:10.904Z"},sidebar:"tutorialSidebar",previous:{title:"Debugging Udon Projects",permalink:"/creator-docs-i18n/en/worlds/udon/debugging-udon-projects"},next:{title:"Image Loading",permalink:"/creator-docs-i18n/en/worlds/udon/image-loading"}},s={},c=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Udon and Unity have built-in events that are automatically called if you include them in your scripts. For example, the ",(0,o.jsx)(t.code,{children:"Start()"})," event runs once for every script, and the ",(0,o.jsx)(t.code,{children:"Update()"})," event runs once per frame. When you're writing Udon scripts, it's helpful to know which of these events happen first."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Unity provides an (incomplete) list of built-in events, many of which are also available in VRChat. ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/ExecutionOrder.html",children:"https://docs.unity3d.com/2019.4/Documentation/Manual/ExecutionOrder.html"})]})}),"\n",(0,o.jsx)(t.p,{children:"The following diagram shows the execution order of the most important events available in Udon and Unity."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Example banner",src:n(52065).A+"",width:"434",height:"1307"})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"Unity and VRChat updates may change the event execution order depicted above.\nNot all events are listed, and some events may be executed in a different order depending on circumstances (being an object's owner, joining a world late, etc.)"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},52065:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/event-execution-order-6dde646423d232cf08f7c196dc7316d2.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function d(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
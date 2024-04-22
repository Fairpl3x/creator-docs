"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5525],{59695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var o=n(74848),r=n(28453);const i={title:"Graph Elements",slug:"graph-elements",hidden:!1,createdAt:"2020-06-24T22:08:14.066Z",updatedAt:"2022-10-18T23:46:16.884Z"},d="Overview",s={id:"worlds/udon/graph/graph-elements",title:"Graph Elements",description:"When you build programs in the graph, you mostly use Nodes. There are a few other items available, described here.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/graph/graph-elements.md",sourceDirName:"worlds/udon/graph",slug:"/worlds/udon/graph/graph-elements",permalink:"/creator-docs-i18n/worlds/udon/graph/graph-elements",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/graph/graph-elements.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Graph Elements",slug:"graph-elements",hidden:!1,createdAt:"2020-06-24T22:08:14.066Z",updatedAt:"2022-10-18T23:46:16.884Z"},sidebar:"tutorialSidebar",previous:{title:"Event Nodes",permalink:"/creator-docs-i18n/worlds/udon/graph/event-nodes"},next:{title:"Searching for Nodes",permalink:"/creator-docs-i18n/worlds/udon/graph/searching-for-nodes"}},a={},h=[];function u(e){const t={admonition:"admonition",em:"em",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"When you build programs in the graph, you mostly use Nodes. There are a few other items available, described here."}),"\n",(0,o.jsx)(t.h1,{id:"groups",children:"Groups"}),"\n",(0,o.jsxs)(t.p,{children:["Groups are helpful for organizing and describing your graph. They don't ",(0,o.jsx)(t.em,{children:"change"})," the way your graphs function or compile.\n",(0,o.jsx)(t.img,{alt:"You can select elements and right-click to get the Create Group function.",src:n(64483).A+"",width:"722",height:"304"}),"\nTo create Groups, you can:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Right-Click in the graph and choose 'Create Group', then drag and drop elements into the group."}),"\n",(0,o.jsx)(t.li,{children:"Select elements with a box-drag or by holding Ctrl while you click on them, then right-click on the graph and choose 'Create Group', or press 'Ctrl+G' for quick grouping."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To remove items from Groups, you can:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Select the items, hold shift, then drag the items out of the group."}),"\n",(0,o.jsx)(t.li,{children:"Select the items, right-click and choose 'Remove From Group'."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To jump to a Group in the graph, click it in the Graph Sidebar."}),"\n",(0,o.jsx)(t.admonition,{title:"Nested Groups",type:"note",children:(0,o.jsx)(t.p,{children:"Currently, nested groups are not supported. The current grouping behavior is to delete the existing group if you try to select and enclose it with a new group."})}),"\n",(0,o.jsx)(t.h1,{id:"comments",children:"Comments"}),"\n",(0,o.jsxs)(t.p,{children:["Comments are simple blocks of text that you can place near items that need more information.\n",(0,o.jsx)(t.img,{alt:"A comment next to a node.",src:n(95361).A+"",width:"698",height:"209"}),"\nYou can create comments by right-clicking on the Graph and choosing ",(0,o.jsx)(t.em,{children:"Create Comment"}),". They can be added to groups, as well. You can use comments and groups together for ultimate readability!\n",(0,o.jsx)(t.img,{alt:"The &#39;SendEventOnTimer&#39; graph included in the VRChat Examples folder uses groups and comments to explain what&#39;s happening in the graph.",src:n(65121).A+"",width:"1167",height:"323"})]}),"\n",(0,o.jsx)(t.h1,{id:"noodles",children:"Noodles"}),"\n",(0,o.jsx)(t.p,{children:"The noodles of a graph are what connect everything together, and how Udon gets its name! They connect nodes together through their ports. They are colored according to the ports to which they connect, so if you connect two ports with different types, you'll see the color change halfway through. In Unity documentation and elsewhere, they are called 'edges' - so if you see a reference to edges, they're talking about our tasty noodles."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},95361:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAroAAADRCAMAAAAUj+GbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY5NDNEOThBQjY2OTExRUE4RkYxRDU2QUJBQzY1QTJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY5NDNEOThCQjY2OTExRUE4RkYxRDU2QUJBQzY1QTJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Rjk0M0Q5ODhCNjY5MTFFQThGRjFENTZBQkFDNjVBMkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk0M0Q5ODlCNjY5MTFFQThGRjFENTZBQkFDNjVBMkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7konNVAAADAFBMVEUZGRktLS3P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"},65121:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/graph-elements-ab506db-comments-and-groups-9ec5c01edef53e2653ca889ab074d219.png"},64483:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/graph-elements-e9a0713-create-group-0e34ca23067f5165e5e0b955898af4e1.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function d(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
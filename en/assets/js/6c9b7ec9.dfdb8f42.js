"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5087],{27345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(74848),r=n(28453);const o={title:"VRC Object Sync",slug:"vrc_objectsync",hidden:!1,createdAt:"2017-07-07T19:28:16.383Z",updatedAt:"2021-10-20T20:08:39.807Z"},c=void 0,i={id:"worlds/components/vrc_objectsync",title:"VRC Object Sync",description:"The VRC Object Sync component synchronizes the transform of a GameObject with all players in the instance. It synchronizes the object's:",source:"@site/docs/worlds/components/vrc_objectsync.md",sourceDirName:"worlds/components",slug:"/worlds/components/vrc_objectsync",permalink:"/creator-docs-i18n/en/worlds/components/vrc_objectsync",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/components/vrc_objectsync.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706320042,formattedLastUpdatedAt:"Jan 27, 2024",frontMatter:{title:"VRC Object Sync",slug:"vrc_objectsync",hidden:!1,createdAt:"2017-07-07T19:28:16.383Z",updatedAt:"2021-10-20T20:08:39.807Z"},sidebar:"tutorialSidebar",previous:{title:"VRC Mirror Reflection",permalink:"/creator-docs-i18n/en/worlds/components/vrc_mirrorreflection"},next:{title:"VRC Pickup",permalink:"/creator-docs-i18n/en/worlds/components/vrc_pickup"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The VRC Object Sync component synchronizes the transform of a GameObject with all players in the instance. It synchronizes the object's:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"position"}),"\n",(0,s.jsx)(t.li,{children:"rotation"}),"\n",(0,s.jsxs)(t.li,{children:["kinematic state (see ",(0,s.jsx)(t.code,{children:"SetKinematic"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["and gravity state (see ",(0,s.jsx)(t.code,{children:"SetGravity"}),")."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Allow Collision Ownership Transfer"}),(0,s.jsx)(t.td,{children:"If checked, ownership of the object will transfer if it collides with another object owned by another player."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Summary"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SetKinematic(bool value)"}),(0,s.jsx)(t.td,{children:"Changes the kinematic state, usually handled by the Rigidbody of the object but controlled here for sync purposes. When the kinematic state is on, this Rigidbody ignores forces, collisions and joints."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SetGravity(bool value)"}),(0,s.jsx)(t.td,{children:"Changes the gravity state, usually handled by the Rigidbody of the object but controlled here for sync purposes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"FlagDiscontinuity()"}),(0,s.jsx)(t.td,{children:"Trigger this when you want to teleport the object - the changes you make this frame will be applied without smoothing."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["TeleportTo(",(0,s.jsx)(t.a,{href:"https://docs.unity3d.com/ScriptReference/Transform.html",children:"Transform"})," targetLocation)"]}),(0,s.jsx)(t.td,{children:"Moves the object to the specified location."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Respawn()"}),(0,s.jsx)(t.td,{children:"Moves the object back to its original spawn location."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
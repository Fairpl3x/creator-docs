"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[403],{13205:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),t=n(28453);const i={slug:"release-3-5-1",date:new Date("2024-02-20T00:00:00.000Z"),title:"Release 3.5.1",authors:["momo"],tags:["release"]},a=void 0,o={permalink:"/creator-docs-i18n/releases/release-3-5-1",source:"@site/releases/release-3.5.1.md",title:"Release 3.5.1",description:"Summary",date:"2024-02-20T00:00:00.000Z",formattedDate:"20 f\xe9vrier 2024",tags:[{label:"release",permalink:"/creator-docs-i18n/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-5-1",date:"2024-02-20T00:00:00.000Z",title:"Release 3.5.1",authors:["momo"],tags:["release"]},unlisted:!1,prevItem:{title:"Release 3.5.2",permalink:"/creator-docs-i18n/releases/release-3-5-2"},nextItem:{title:"Version 3.5.0",permalink:"/creator-docs-i18n/releases/release-3-5-0"}},l={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:2},{value:"New features",id:"new-features",level:2},{value:"Changes",id:"changes",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Known Issues",id:"known-issues",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(s.p,{children:"This release contains multiple Unity 2022 follow-up fixes and overall quality-of-life improvements."}),"\n",(0,r.jsx)(s.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["New methods have been added to the Worlds SDK. These methods were previously only available to Creator Economy sellers but can now be used by all world creators.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Store.OpenGroupPage: Opens a group page based on its ",(0,r.jsx)(s.code,{children:"grp_"})," ID."]}),"\n",(0,r.jsx)(s.li,{children:"Store.OpenGroupStorePage: Opens a seller's store page."}),"\n",(0,r.jsx)(s.li,{children:"Store.OpenGroupListing: Open a seller's listing."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["Various features for sellers have been added to the Worlds SDK.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"These features cannot be used in an uploaded world unless you are a seller."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"changes",children:"Changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'The VRChat SDK now automatically enables "Clamp BlendShape Weights" option in VRChat projects. This mirrors VRChat Client behaviour and prevents BlendShapes from moving beyond their maximum (100) offset.'}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"fixes",children:"Fixes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Fixed spatialized audio sources creating warnings when entering play mode or adjusting their settings. Users might be prompted to restart their editor when adding the 3.5.1 SDK for the first time."}),"\n",(0,r.jsx)(s.li,{children:"Fixed upload speed increase logic breaking on macOS/Linux, preventing users from uploading."}),"\n",(0,r.jsx)(s.li,{children:'Fixed an issue where the SDK would not detect if the blueprint ID of a world / avatar is taken by another user or invalid, and attempt to upload a new world / avatar to that ID. That would result in an "Application Error" message. The blueprint ID is now cleared correctly in this case.'}),"\n",(0,r.jsx)(s.li,{children:'Fixed an issue where builds that went above the upload limit, e.g. 10 MB for Android Avatars, reported the size incorrectly. The SDK now correctly shows all the decimal points for the size. You should no longer see error messages like "10.00 MB > 10.00 MB".'}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"The first time you open a Scene and select a GameObject inside a prefab with a U# Behaviour, the GUI for the component directly below that U# Behaviour will not show its GUI. Deselecting and re-selecting the prefab fixes this."}),"\n",(0,r.jsxs)(s.li,{children:["Buffer Particles don't work as they did in Unity 2019, ",(0,r.jsx)(s.a,{href:"https://x.com/hfcRedddd/status/1696915379090604179",children:"there is a workaround to fix them from community member hfcRed here"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"The Editor may crash when updating a shader graph reference by another shader using UsePass. This is an issue with Unity 2022.3.6f1 and is fixed in 2022.3.14f1."}),"\n",(0,r.jsxs)(s.li,{children:["Unity 2022 sometimes causes Rider's debugger to stop for unhandled exceptions in Unity's IMGUI.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Please refer to ",(0,r.jsx)(s.a,{href:"https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256",children:"this workaround"})," and ",(0,r.jsx)(s.a,{href:"https://youtrack.jetbrains.com/issue/RIDER-64944",children:"Jetbrains's bug tracker"})," for more information."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var r=n(96540);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3160],{22096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=t(74848),r=t(28453);const a={slug:"release-3-1-12",date:new Date("2023-03-29T00:00:00.000Z"),title:"Version 3.1.12",authors:["momo"],tags:["release"],draft:!1},o=void 0,i={permalink:"/creator-docs-i18n/releases/release-3-1-12",source:"@site/i18n/fr/docusaurus-plugin-content-blog/release-3.1.12.md",title:"Version 3.1.12",description:"R\xe9sum\xe9",date:"2023-03-29T00:00:00.000Z",formattedDate:"29 mars 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-1-12",date:"2023-03-29T00:00:00.000Z",title:"Version 3.1.12",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Version 3.1.13",permalink:"/creator-docs-i18n/releases/release-3-1-13"},nextItem:{title:"Version 3.1.11",permalink:"/creator-docs-i18n/releases/release-3-1-11"}},l={authorsImageUrls:[void 0]},d=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3},{value:"New Features",id:"new-features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Other Changes",id:"other-changes",level:3}];function h(e){const n={a:"a",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,s.jsx)(n.p,{children:"New VRCGraphics features for Udon, new avatar performance metrics, and bug fixes. Now up-to-date with VRChat 2023.1.2p4."}),"\n",(0,s.jsx)(n.h3,{id:"new-features",children:"New Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Constraints are now counted in Avatar Stats. They do not currently affect your performance ranking."}),"\n",(0,s.jsx)(n.li,{children:'Added support for "VelocityMagnitude" animator property for avatars.'}),"\n",(0,s.jsx)(n.li,{children:"Added \"Snap To Hand\" option for VRCPhysBone. When enabled, grabbing a bone will have it snap to the user's hand, otherwise the grab is offset so it won't initially move unless dragged around."}),"\n",(0,s.jsx)(n.li,{children:'Added "Reset When Disabled" option for VRCPhysBones. When enabled, bones will reset to their rest position when the component becomes disabled.'}),"\n",(0,s.jsxs)(n.li,{children:["Added Self/Other filtering to various permissions in VRCPhysBones.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Allow Collision"}),"\n",(0,s.jsx)(n.li,{children:"Allow Grabbing"}),"\n",(0,s.jsx)(n.li,{children:"Allow Posing"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Texture VRAM usage now counts towards your avatar's overall performance rating."}),"\n",(0,s.jsxs)(n.li,{children:["Added ability to set avatar parameters to not sync, addressing ",(0,s.jsx)(n.a,{href:"https://vrchat.canny.io/avatar-30/p/feedback-control-the-not-sync-parameters-from-expressions-menu",children:"Control the not sync parameters from Expressions Menu"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Udon now has access to temporary RenderTextures as well as constructors for RenderTexture, Texture2D, Texture3D, and Sprite via ",(0,s.jsx)(n.a,{href:"https://docs.vrchat.com/docs/vrcgraphics",children:"VRCGraphics"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"GraphicsSettings are only saved to disk when changes are made, to prevent unnecessary cache busting."}),"\n",(0,s.jsx)(n.li,{children:"Fixes issues that could cause jittering in PhysBones when isAnimated was enabled."}),"\n",(0,s.jsx)(n.li,{children:"Reconnects to the Creator Companion when the connection is lost."}),"\n",(0,s.jsx)(n.li,{children:"Ensures that the UdonEvent is called from the main thread. This avoids unexpected threading errors when the image download fails and the UdonBehaviour tries to use Unity API methods."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"other-changes",children:"Other Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OnDeserializationResult parameter added to OnDeserialization() method of UdonBehaviours. This enables you to see the time at which this data was sent and received."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
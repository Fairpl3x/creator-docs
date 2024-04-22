"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2805],{30655:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=s(74848),r=s(28453);const o={slug:"release-3-2-0",date:new Date("2023-05-03T00:00:00.000Z"),title:"Release 3.2.0",authors:["momo"],tags:["release"],draft:!1},t=void 0,a={permalink:"/creator-docs-i18n/en/releases/release-3-2-0",source:"@site/releases/release-3.2.0.md",title:"Release 3.2.0",description:"Summary",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/en/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-2-0",date:"2023-05-03T00:00:00.000Z",title:"Release 3.2.0",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Release 3.2.1",permalink:"/creator-docs-i18n/en/releases/release-3-2-1"},nextItem:{title:"Release 3.1.13",permalink:"/creator-docs-i18n/en/releases/release-3-1-13"}},l={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:3},{value:"Features",id:"features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Changes since 3.2.0-beta.1",id:"changes-since-320-beta1",level:3},{value:"SDK API Changes",id:"sdk-api-changes",level:3},{value:"Extension Methods",id:"extension-methods",level:4},{value:"Assembly Move",id:"assembly-move",level:4},{value:"Changes not meant for public use",id:"changes-not-meant-for-public-use",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Adds DataContainers, PhysBones 1.1 ('Squishy PhysBones'), AsyncGPUReadback, and more."}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DataContainers!"})," Lists, Dictionaries and JSON for Udon!"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added DataLists and DataDictionaries, giving Udon functionality similar to Lists and Dictionaries.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lists and dictionaries typically need to support Generics, and Udon does not support them, so this is being done by putting your data into DataTokens first, which are able to store any value."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added VRCJSON, a helper class that can convert JSON strings (such as those received from ",(0,i.jsx)(n.a,{href:"/worlds/udon/string-loading",children:"Remote String Loading"})," to and from DataLists and DataDictionaries."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/worlds/udon/data-containers",children:"Read the Data Containers / VRCJSON docs page"})," to learn more."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AsyncGPUReadback!"})," This allows you to read back data from GPU and shaders without a heavy performance cost"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adds the ",(0,i.jsx)(n.code,{children:"VRCAsyncGPUReadback.Request"})," function and corresponding ",(0,i.jsx)(n.code,{children:"OnAsyncGpuReadbackComplete"})," event"]}),"\n",(0,i.jsx)(n.li,{children:"These read data from the GPU into CPU memory without too much of a performance impact, at the expense of delaying the data for one or more frames"}),"\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"/worlds/vrc-graphics/asyncgpureadback",children:"ASyncGPUReadback"})," docs for more info."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Squishy PhysBones!"}),' You can now implement PhysBones that can "squish" or compress instead of stretch!',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'To set up a Squishy PhysBone, swap your PhysBone component to version 1.1 and adjust the "Max Squish" value.'}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All PhysBones are now versioned!"})," You can change the version in the PhysBone component. This is being done to allow us to add new features safely.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Old PhysBones are on Version 1.0 automatically."}),"\n",(0,i.jsx)(n.li,{children:"Squishy PhysBones features are on Version 1.1. There are some other changes documented below."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"All versions will be maintained."}),' 1.0 is not being deprecated but it is feature-locked and will not have new features added. Any time we add a new "breaking" feature, we will increment the version.']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PhysBones 1.1: ",(0,i.jsx)(n.strong,{children:"Gravity and Stiffness act differently and require new values if you are upgrading from 1.0."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gravity is now the ratio of how much the bones should point straight up/down in world space when at rest."}),"\n",(0,i.jsx)(n.li,{children:"Stiffness is now the ratio of how much a bone attempts to stay in its previous orientation."}),"\n",(0,i.jsx)(n.li,{children:"Previously, these values were direct forces that you needed to balance with the Pull factor. We believe this should be more direct and easier to use."}),"\n",(0,i.jsx)(n.li,{children:"These changes were also necessary to support the new functionality added to the component."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PhysBones 1.1: ",(0,i.jsx)(n.strong,{children:"Max Squish value has been added."})," This is a percentage of how much a bone can shrink.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"_Squish"})," parameter has been added. It works similarly to the ",(0,i.jsx)(n.code,{children:"_Stretch"})," parameter."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PhysBones 1.1: ",(0,i.jsx)(n.strong,{children:"Stretch Motion value has been added."})," This is a ratio of how much motion affects a bone stretching or squishing."]}),"\n",(0,i.jsxs)(n.li,{children:["Categories of values in the VRCPhysBone component UI can now be collapsed.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Categories also include a Help button which will take you to the online documentation for that subject."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBones"})," documentation will be updated during the Open Beta for PhysBones 1.1 and Squishy PhysBones."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The Network ID Utility now works for PhysBones in avatar projects","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This tool allows syncing PhysBones between avatars on different platforms, even if they have different GameObject hierarchies","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This advanced tool is only useful if your PC and Quest avatars have different hierarchies!"}),"\n",(0,i.jsx)(n.li,{children:"You don't need to worry about this tool if you don't know why you'd do that."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/worlds/udon/networking/network-id-utility",children:"See the full docs for more info"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"changes-since-320-beta1",children:"Changes since 3.2.0-beta.1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Re-added some public methods that got removed, including ",(0,i.jsx)(n.code,{children:"GetOrAddComponent"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These are marked as ",(0,i.jsx)(n.code,{children:"[Obsolete]"})," now, make sure to migrate away from using them as they will be removed properly at a later date"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed some issues with grabbing PhysBones in Unity"}),"\n",(0,i.jsxs)(n.li,{children:["PhysBone stretch is no longer clamped","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This restores previous behaviour"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["DataContainers: Fixed ",(0,i.jsx)(n.code,{children:"GetKeys"})," and ",(0,i.jsx)(n.code,{children:"GetValues"})," returning incorrect values after using ",(0,i.jsx)(n.code,{children:"Add"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sdk-api-changes",children:"SDK API Changes"}),"\n",(0,i.jsx)(n.p,{children:'We\'re working on documenting the "Public API" of the SDK, which will be guaranteed not to change between minor and patch versions. In the meantime, here are things that have changed since 3.1.13:'}),"\n",(0,i.jsx)(n.h4,{id:"extension-methods",children:"Extension Methods"}),"\n",(0,i.jsxs)(n.p,{children:["We've moved some extension methods into the VRC.Core namespace.\nIf you're using the ",(0,i.jsx)(n.code,{children:"Transform.Reset()"})," method, you should instead use ",(0,i.jsx)(n.code,{children:"VRC.Core.ExtensionMethods.Reset(Transform t)"}),".\nHere are the other similar changes you should make:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Transform.GetHierarchyPath"})," > ",(0,i.jsx)(n.code,{children:"VRC.Core.ExtensionMethods.GetHierarchyPath(Transform t, Transform relativeTransform)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Transform.GetShortHierarchyPath"})," > ",(0,i.jsx)(n.code,{children:"VRC.Core.ExtensionMethods.GetShortHierarchyPath(Transform t, Transform relativeTransform)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GameObject.GetOrAddComponent"})," > ",(0,i.jsx)(n.code,{children:"VRC.Core.ExtensionMethods.GetOrAddComponent(GameObject go)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Type.GetFriendlyGenericTypeName"})," > ",(0,i.jsx)(n.code,{children:"VRC.Core.ExtensionMethods.GetFriendlyGenericTypeName(Type t, bool includeNamespaces)"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"assembly-move",children:"Assembly Move"}),"\n",(0,i.jsxs)(n.p,{children:["PhysBoneGrabHelper moved assemblies, you may need to reference the ",(0,i.jsx)(n.code,{children:"VRC.SDK3A"})," assembly now from your code. ",(0,i.jsx)(n.a,{href:"https://github.com/BlackStartx/VRC-Gesture-Manager/pull/22",children:"Here is an example fix"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"changes-not-meant-for-public-use",children:"Changes not meant for public use"}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, we've made some changes to the following classes, which are ",(0,i.jsx)(n.em,{children:"not"})," considered part of the Public API for the SDK, and you should move away from using them as soon as possible.\nWe will publish a document listing all the exclusions from our SDK before the end of May."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ApiCacheEditor"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiCache"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiCache.CachedResponse"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiCache.CacheEntry"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiFeedback"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiFile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiModel"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.ApiModel.SupportedPlatforms"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Core.APIResponseHandler"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Dynamics.PhysBoneManager.Bone"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Dynamics.PhysBoneManager.Chain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Dynamics.PhysBoneManager.PhysBoneJob"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Dynamics.PhysBoneManager.Pose"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Dynamics.VRCPhysBoneBase"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.SDK3.Dynamics.PhysBone.VRCPhysBoneEditor"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VRC.Udon.ClientBindings.UdonClientInterface"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VRC.Udon.Security.UnityEngineObjectSecurityBlacklist"}),"\nThe UdonManager will have parts that are part of the Public SDK API, but changes were made to 'banlisted' methods which are not meant to be used directly."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8432],{14449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(74848),r=a(28453);const s={title:"Impostors",slug:"avatar-impostors",hidden:!1},n="Impostors",i={id:"avatars/avatar-impostors",title:"Impostors",description:"What are Impostors?",source:"@site/docs/avatars/avatar-impostors.md",sourceDirName:"avatars",slug:"/avatars/avatar-impostors",permalink:"/creator-docs-i18n/en/avatars/avatar-impostors",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/avatars/avatar-impostors.md",tags:[],version:"current",lastUpdatedBy:"Fax",lastUpdatedAt:1709246777,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{title:"Impostors",slug:"avatar-impostors",hidden:!1},sidebar:"tutorialSidebar",previous:{title:"Animator Parameters",permalink:"/creator-docs-i18n/en/avatars/animator-parameters"},next:{title:"Avatar Optimization Tips",permalink:"/creator-docs-i18n/en/avatars/avatar-optimizing-tips"}},h={},l=[{value:"What are Impostors?",id:"what-are-impostors",level:2},{value:"How do I create an Impostor?",id:"how-do-i-create-an-impostor",level:2},{value:"Previewing an Impostor",id:"previewing-an-impostor",level:2},{value:"VRCImpostorSettings",id:"vrcimpostorsettings",level:2},{value:"Resolution Scale",id:"resolution-scale",level:3},{value:"Transforms To Ignore",id:"transforms-to-ignore",level:3},{value:"Extra Child Transforms",id:"extra-child-transforms",level:3},{value:"Re-parent Here",id:"re-parent-here",level:3},{value:"When is an impostor visible?",id:"when-is-an-impostor-visible",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"impostors",children:"Impostors"}),"\n",(0,o.jsx)(t.h2,{id:"what-are-impostors",children:"What are Impostors?"}),"\n",(0,o.jsx)(t.p,{children:"Impostors are avatar body doubles, allowing you to see avatars in situations where you would typically see a fallback avatar or robot. They are intended to bridge gaps between different systems/user types in VRChat. For example, if a user\u2019s avatar was only uploaded for Windows, VRChat makes an acceptable impostor for Quest automatically. You can only generate impostors for avatars you own and have uploaded."}),"\n",(0,o.jsx)(t.p,{children:"Even if you've never uploaded a cross-platform version of your avatar, or if your avatar is \"performance blocked\" due to its performance rank, other users will still be able to see an impostor of your avatar. Eventually, impostors will be auto-generated, but for now, you create them with a few easy steps. Once you've made an impostor, you can toggle it on and off - when it's off, your fallback avatar will be shown instead."}),"\n",(0,o.jsx)(t.h2,{id:"how-do-i-create-an-impostor",children:"How do I create an Impostor?"}),"\n",(0,o.jsxs)(t.p,{children:["The first step to creating an impostor is to ",(0,o.jsx)(t.a,{href:"/avatars/creating-your-first-avatar",children:"create and upload an avatar"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Once you've uploaded an avatar, creating an impostor for it is easy:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Log in to the VRChat website."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Navigate to the info page for the avatar you\'d like to impostorize. You can do this by pressing "Avatars", then "My Avatars", then the name and icon of the one you want.'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:'Click "Generate Impostors", or, if the avatar already has an impostor that you\'d like to be updated, "Regenerate Impostors"'}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Wait."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Refresh the page, after some time you should now see that your avatar has impostors for Quest and PC."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"A screnshot of an avatar&#39;s page on vrchat.com. It allows avatar creators to (re)generate impostors and see which impostors have already been generated. You can see if impostors have been generated for PC and/or Android. You can also see if the impostor has been customized by the avatar creator.",src:a(5532).A+"",width:"684",height:"492"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Impostors currently only support ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/AvatarCreationandSetup.html",children:"humanoid"})," avatars. ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/GenericAnimations.html",children:"Generic"})," avatars will be supported in the future."]})}),"\n",(0,o.jsx)(t.h2,{id:"previewing-an-impostor",children:"Previewing an Impostor"}),"\n",(0,o.jsx)(t.p,{children:"Once you've got your impostor generated, you're probably going to be pretty excited to see how it looks! Well, no worries, we've got you covered!"}),"\n",(0,o.jsx)(t.p,{children:"Once you've logged into VRChat, open the Avatar menu, and click the avatar that you generated an impostor for."}),"\n",(0,o.jsx)(t.p,{children:'You should notice that the "Features" of the avatar now includes "Impostor".'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"A screenshot of the &quot;Features&quot; section of an avatar in VRChat. It shows an &quot;Imposter&quot; icon, among other features.",src:a(58548).A+"",width:"342",height:"111"})}),"\n",(0,o.jsx)(t.p,{children:"You should also see a new button underneath the avatar model preview, which will allow you to switch between viewing the impostor and the normal avatar for a quick preview."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"A screenshot of an avatar being previewed in the VRChat menu.",src:a(39740).A+"",width:"303",height:"600"}),"\n",(0,o.jsx)(t.img,{alt:"A screenshot of an avatar&#39;s imposter being previewed in the VRChat menu. A toggle near the bottom has been enabled.",src:a(74444).A+"",width:"300",height:"600"})]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Impostors that are previewed in the menu may exhibit more artifacts than they would when viewed on another player."})}),"\n",(0,o.jsx)(t.h2,{id:"vrcimpostorsettings",children:"VRCImpostorSettings"}),"\n",(0,o.jsx)(t.p,{children:"Impostors come out pretty good by default. However, complex avatars may benefit from some customization."}),"\n",(0,o.jsx)(t.p,{children:'To customize your impostor, add the "VRCImpostorSettings" component to your avatar before uploading it. Changing the settings of this component allows you to change the impostor\'s appearance. You can add multiple "VRCImpostorSettings" to customize different body parts.'}),"\n",(0,o.jsx)(t.h3,{id:"resolution-scale",children:"Resolution Scale"}),"\n",(0,o.jsx)(t.p,{children:"Changes the amount of space on the impostors texture atlas that is dedicated to this body part's texture.\nFor instance, you can place this script on the head bone and change this value to make the head take up more or less of the texture atlas, increasing or decreasing the overall texture quality.\nNote that this may shrink other parts of the body on the atlas if needed."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This is relative to the bone that VRCImpostorSettings is placed on."})}),"\n",(0,o.jsx)(t.h3,{id:"transforms-to-ignore",children:"Transforms To Ignore"}),"\n",(0,o.jsx)(t.p,{children:"Ignores these transforms when capturing data for the impostor. This will hide them from the final result."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This is independent of the bone that VRCImpostorSettings is placed on."})}),"\n",(0,o.jsx)(t.h3,{id:"extra-child-transforms",children:"Extra Child Transforms"}),"\n",(0,o.jsx)(t.p,{children:"This is good for things like wings and tails, it will tell the Impostorizer to make a separate sprite for the bone this script is on."}),"\n",(0,o.jsxs)(t.p,{children:["As an example of what not to do - you ",(0,o.jsx)(t.em,{children:"could"})," put one of these on each finger to turn them into independent sprites. However, since all sprites share a single texture sheet, filling it with things like fingers will cause quality to decrease elsewhere - it's a balancing act."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This is independent of the bone that VRCImpostorSettings is placed on."})}),"\n",(0,o.jsx)(t.h3,{id:"re-parent-here",children:"Re-parent Here"}),"\n",(0,o.jsx)(t.p,{children:"Re-parents another bone to this impostor sprite. This means that it will be impostorized with this body part, and be a part of that sprite."}),"\n",(0,o.jsx)(t.p,{children:"For instance, if you'd like your wings to be a part of the upper body, you can re-parent the root wing bone to the chest bone during impostorization with this."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This is relative to the bone that VRCImpostorSettings is placed on."})}),"\n",(0,o.jsx)(t.h2,{id:"when-is-an-impostor-visible",children:"When is an impostor visible?"}),"\n",(0,o.jsx)(t.p,{children:"Currently, there are only three ways to see an impostor."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Avatar Preview (e.g. viewing the impostor on the avatar's details page)"}),"\n",(0,o.jsxs)(t.li,{children:['Performance Blocking (e.g. the avatar\'s performance rank is "Very Poor" but your ',(0,o.jsx)(t.a,{href:"https://docs.vrchat.com/docs/vrchat-configuration-window#minimum-displayed-performance-rank",children:"minimum displayed performance rank"}),' is set to "Medium").']}),"\n",(0,o.jsx)(t.li,{children:"Platform Mismatch (e.g. the avatar is uploaded for PC, but you're on Android or vice versa)"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},58548:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/features-row-35660c9e886bfeba553b9c0ae0997479.png"},5532:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/generation-6c75dd62f2e9e50402f379a1acd4521c.png"},39740:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/preview-avatar-3c13e60cda71eba0d9cca4909d61220f.png"},74444:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/preview-impostor-ef3522020b43b1649a5552d9a93a46e5.png"},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var o=a(96540);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
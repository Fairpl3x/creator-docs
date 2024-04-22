"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[7584],{71595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var s=a(74848),o=a(28453);const n={slug:"vrc_headchop"},i="VRC Head Chop",r={id:"avatars/whitelisted-avatar-components/vrc-headchop",title:"VRC Head Chop",description:"When wearing an avatar, VRChat automatically \"chops off\" the avatar's head bone by setting its transform scale to almost 0. This stops the head from clipping into view from the user's first-person perspective. VRCHeadChop is an optional avatar component that controls which specific bones are scaled down for head chopping, allowing avatar creators to:",source:"@site/docs/avatars/whitelisted-avatar-components/vrc-headchop.md",sourceDirName:"avatars/whitelisted-avatar-components",slug:"/avatars/whitelisted-avatar-components/vrc_headchop",permalink:"/creator-docs-i18n/en/avatars/whitelisted-avatar-components/vrc_headchop",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/avatars/whitelisted-avatar-components/vrc-headchop.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1711582340,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{slug:"vrc_headchop"},sidebar:"tutorialSidebar",previous:{title:"Allowed Avatar Components",permalink:"/creator-docs-i18n/en/avatars/whitelisted-avatar-components/whitelisted-avatar-components"},next:{title:"Worlds",permalink:"/creator-docs-i18n/en/worlds/"}},h={},l=[{value:"Component properties",id:"component-properties",level:2},{value:"Basic use",id:"basic-use",level:2},{value:"Alternative uses",id:"alternative-uses",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vrc-head-chop",children:"VRC Head Chop"}),"\n",(0,s.jsxs)(t.p,{children:["When wearing an avatar, VRChat automatically \"chops off\" the avatar's head bone by setting its transform scale to almost 0. This stops the head from clipping into view from the user's first-person perspective. ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," is an optional avatar component that controls which specific bones are scaled down for head chopping, allowing avatar creators to:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Keep some parts of the avatar's head visible from first-person, like its hair or nose."}),"\n",(0,s.jsx)(t.li,{children:"Hide parts of the avatar from first-person that aren't part of the head, such as a hood."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VRCHeadChop"})," only affects how the avatar appears from the perspective of the user wearing it. It doesn't affect what the avatar looks like in mirrors or to other players."]}),"\n",(0,s.jsx)(t.h2,{id:"component-properties",children:"Component properties"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png",src:a(78023).A+"",width:"529",height:"205"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Target Bones"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"A list of up to 32 bones to control with this component. Each bone can be configured individually:"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"Transform"})}),(0,s.jsx)(t.td,{children:"A bone transform."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"Scale Factor"})}),(0,s.jsxs)(t.td,{children:["Sets the scale to apply to this bone.",(0,s.jsx)("br",{}),"If the scale factor is 0, the bone will be completely hidden.",(0,s.jsx)("br",{}),"If the scale factor is 1, the bone will be fully visible. (Default)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"Apply Condition"})}),(0,s.jsxs)(t.td,{children:["Controls under which conditions the scaling should be applied to the transform. ",(0,s.jsx)("br",{}),"- Always apply (Default)",(0,s.jsx)("br",{}),"- VR only",(0,s.jsx)("br",{}),"- Non-VR only"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Global Scale Factor"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Multiplies the scale factor of each target bone. You can generally leave this set to 1 unless you want to scale all of the bones at once.",(0,s.jsx)("br",{}),"If the global scale factor is 1, each target bone will use its individual scale factor. (Default)",(0,s.jsx)("br",{}),"If the global scale factor is 0, all target bones will have a scale factor of 0."]})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"Usage tips",type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Changing the ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," settings for a parent bone affects all child bones, too."]}),"\n",(0,s.jsxs)(t.li,{children:["If a child bone has its own ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," settings, it overrides its parent bone's settings."]}),"\n",(0,s.jsxs)(t.li,{children:["There can be a maximum of 16 ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," components attached to your avatar. If you exceed this limit, the avatars SDK will display an error."]}),"\n",(0,s.jsxs)(t.li,{children:['The "Lock Hip" ',(0,s.jsx)(t.a,{href:"https://docs.vrchat.com/docs/ik-20-features-and-options#lock-types",children:"lock type"})," may cause your avatar's head to block your view if you use ",(0,s.jsx)(t.code,{children:"VRCHeadChop"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"basic-use",children:"Basic use"}),"\n",(0,s.jsxs)(t.p,{children:["The most common way to use ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," is to keep your avatar's hair visible. On most avatars, hair bones are children of the avatar's head bone."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Add the bones you want to be visible to the "Target Bones" list.'}),"\n",(0,s.jsx)(t.li,{children:"Set their scale factor to 1."}),"\n",(0,s.jsx)(t.li,{children:'(Optional) Set "Apply condition" to "VR Only" if you don\'t want these bones to be visible for non-VR players.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This causes the hair bones to be fully visible from your first-person perspective. The rest of the head and all other child bones are kept hidden."}),"\n",(0,s.jsx)(t.p,{children:'For example, the sample Avatar Dynamics robot included with the SDK has hair and a pair of animal ears. We can keep those parts of the head visible from first-person while hiding the rest of the head by using the following setup. In this example, we\'re also setting the apply conditions to "VR Only", so the extra parts only appear when playing in VR.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png",src:a(80581).A+"",width:"1483",height:"413"})}),"\n",(0,s.jsxs)(t.p,{children:["Notice that we don't need to list any of the child transforms of the bones we want to show (for example each individual hair strand) since they'll be shown along with the root bones anyway. It also doesn't matter which transform you add the ",(0,s.jsx)(t.code,{children:"VRCHeadChop"})," component to - all that matters is the list of transforms that you set for it in the inspector."]}),"\n",(0,s.jsx)(t.p,{children:"This has the following result; the hair and ears have been scaled back up so they can be seen from first-person, while the eyes are still scaled away so they don't block your view."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"vrcheadchop-618b6e18-2024-02-06_11-48-10_Unity.png",src:a(48345).A+"",width:"387",height:"437"})}),"\n",(0,s.jsx)(t.p,{children:"You can also set the enabled state of this component using an animator - if the component is disabled, it won't have any effect until it's enabled again. This can used to set up expression toggles that control whether certain parts of the avatar are visible in first-person or not. It's recommended that you do this so players using your avatars have the option of turning off first-person visible features if they want to. The global scale can be controlled with an animator if you want to give finer control over how much the bones get scaled away."}),"\n",(0,s.jsx)(t.h2,{id:"alternative-uses",children:"Alternative uses"}),"\n",(0,s.jsxs)(t.p,{children:["It's possible to directly change the scale of the head bone itself by including the head bone in the list. In this case, VRChat will no longer scale the head bone away for you automatically, and will instead use the scaling factor you provide for it. You can then shrink away bones that are children of the head that you ",(0,s.jsx)(t.em,{children:"don't"})," want to see in first-person by setting their scale factors to 0. If you take this approach, you'll most likely want to shrink away the part of the face that the viewpoint is in so the wearer doesn't see the inside of the avatar's head."]}),"\n",(0,s.jsx)(t.p,{children:"One additional way of using this component is to hide things elsewhere on the avatar that shouldn't be visible from first-person. For example, if your avatar has a hood weighted to its head that isn't actually a child of the head bone, you could use this component to hide it in first-person by giving it a scale factor of 0."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},48345:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/vrcheadchop-example-result-f0de7579-2024-03-15_20-12-17_Unity-3d6ede24017df5bc186a8eaa33f59245.png"},80581:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/vrcheadchop-example-setup-f0de7579-2024-03-15_19-52-11_Unity-8fd7254e95af6bd5a4f97ecfbe1e8a3a.png"},78023:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/vrcheadchop-f0de7579-2024-03-15_19-46-28_Unity-7c65043113f97eb6bca5e2ce11793d41.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var s=a(96540);const o={},n=s.createContext(o);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);
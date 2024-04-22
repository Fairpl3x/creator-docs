"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[9759],{74030:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var n=s(74848),r=s(28453);const i={title:"Animator Parameters",slug:"animator-parameters",hidden:!1,createdAt:"2020-08-05T22:30:32.065Z",updatedAt:"2023-04-07T14:38:34.913Z"},l=void 0,a={id:"avatars/animator-parameters",title:"Animator Parameters",description:"This document is written with the assumption that you know a bit about Unity Animators.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/avatars/animator-parameters.md",sourceDirName:"avatars",slug:"/avatars/animator-parameters",permalink:"/creator-docs-i18n/avatars/animator-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/avatars/animator-parameters.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821509,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Animator Parameters",slug:"animator-parameters",hidden:!1,createdAt:"2020-08-05T22:30:32.065Z",updatedAt:"2023-04-07T14:38:34.913Z"},sidebar:"tutorialSidebar",previous:{title:"Physbones",permalink:"/creator-docs-i18n/avatars/avatar-dynamics/physbones"},next:{title:"Imposteurs",permalink:"/creator-docs-i18n/avatars/avatar-impostors"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Avatar Scaling Parameters",id:"avatar-scaling-parameters",level:3},{value:"Parameter Types",id:"parameter-types",level:3},{value:"GestureLeft and GestureRight Values",id:"gestureleft-and-gestureright-values",level:3},{value:"Viseme Values",id:"viseme-values",level:3},{value:"Sync Types",id:"sync-types",level:3},{value:"Driving Expression Parameters",id:"driving-expression-parameters",level:3},{value:"AFK State",id:"afk-state",level:3},{value:"TrackingType Parameter",id:"trackingtype-parameter",level:3},{value:"Expression Parameter Aliasing",id:"expression-parameter-aliasing",level:3},{value:"Default AV3 Aliasing",id:"default-av3-aliasing",level:3},{value:"Cross-Platform Parameter Sync",id:"cross-platform-parameter-sync",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{title:"Unity Knowledge Required",type:"caution",children:(0,n.jsxs)(t.p,{children:["This document is written with the assumption that you know a bit about ",(0,n.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html",children:"Unity Animators"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["This is a list of Parameters (",(0,n.jsx)(t.strong,{children:"case-sensitive"}),") that can be added to any Playable Layer (animation controller) and change across all Playable Layers that include this parameter. User created parameters that are not in this list will exist only locally within that animation controller and are not currently changeable by the avatar."]}),"\n",(0,n.jsxs)(t.p,{children:["You'll need to add these to your Playable Layer animators to use them. ",(0,n.jsx)(t.strong,{children:"They are case-sensitive!"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Don't Dead-End!",type:"danger",children:(0,n.jsx)(t.p,{children:'You should assume that parameter values may change. If you "dead-end" your animators, which means you don\'t have an "exit" in any particular branch, you may end up having a broken avatar.'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Sync"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IsLocal"}),(0,n.jsx)(t.td,{children:"True if the avatar is being worn locally, false otherwise"}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/avatars/animator-parameters#viseme-values",children:"Viseme"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference",children:"Oculus viseme index"})," (",(0,n.jsx)(t.code,{children:"0-14"}),"). When using Jawbone/Jawflap, range is ",(0,n.jsx)(t.code,{children:"0-100"})," indicating volume"]}),(0,n.jsx)(t.td,{children:"Int"}),(0,n.jsx)(t.td,{children:"Speech"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Voice"}),(0,n.jsxs)(t.td,{children:["Microphone volume (",(0,n.jsx)(t.code,{children:"0.0-1.0"}),")"]}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Speech"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/avatars/animator-parameters#gestureleft-and-gestureright-values",children:"GestureLeft"})}),(0,n.jsx)(t.td,{children:"Gesture from L hand control (0-7)"}),(0,n.jsx)(t.td,{children:"Int"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/avatars/animator-parameters#gestureleft-and-gestureright-values",children:"GestureRight"})}),(0,n.jsx)(t.td,{children:"Gesture from R hand control (0-7)"}),(0,n.jsx)(t.td,{children:"Int"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GestureLeftWeight"}),(0,n.jsx)(t.td,{children:"Analog trigger L (0.0-1.0)\u2020"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GestureRightWeight"}),(0,n.jsx)(t.td,{children:"Analog trigger R (0.0-1.0)\u2020"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AngularY"}),(0,n.jsx)(t.td,{children:"Angular velocity on the Y axis"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VelocityX"}),(0,n.jsx)(t.td,{children:"Lateral move speed in m/s"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VelocityY"}),(0,n.jsx)(t.td,{children:"Vertical move speed in m/s"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VelocityZ"}),(0,n.jsx)(t.td,{children:"Forward move speed in m/s"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VelocityMagnitude"}),(0,n.jsx)(t.td,{children:"Total magnitude of velocity"}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Upright"}),(0,n.jsx)(t.td,{children:'How "upright" you are. 0 is prone, 1 is standing straight up'}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Grounded"}),(0,n.jsx)(t.td,{children:"True if player touching ground"}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Seated"}),(0,n.jsx)(t.td,{children:"True if player in station"}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"AFK"}),(0,n.jsx)(t.td,{children:"Is player unavailable (HMD proximity sensor / End key)"}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Expression1 - Expression16"}),(0,n.jsxs)(t.td,{children:["User defined param, Int (",(0,n.jsx)(t.code,{children:"0"}),"-",(0,n.jsx)(t.code,{children:"255"}),") or Float (",(0,n.jsx)(t.code,{children:"-1.0"}),"-",(0,n.jsx)(t.code,{children:"1.0"}),")"]}),(0,n.jsx)(t.td,{children:"Int / Float"}),(0,n.jsx)(t.td,{children:"IK or Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/avatars/animator-parameters#trackingtype-parameter",children:"TrackingType"})}),(0,n.jsx)(t.td,{children:"See description below"}),(0,n.jsx)(t.td,{children:"Int"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VRMode"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"1"})," if the user is in VR, ",(0,n.jsx)(t.code,{children:"0"})," if they are not"]}),(0,n.jsx)(t.td,{children:"Int"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"MuteSelf"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"true"})," if the user has muted themselves, ",(0,n.jsx)(t.code,{children:"false"})," if unmuted"]}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"InStation"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"true"})," if the user is in a station, ",(0,n.jsx)(t.code,{children:"false"})," if not"]}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"IK"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Earmuffs"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"true"})," if the user's Earmuff feature is on, ",(0,n.jsx)(t.code,{children:"false"})," if not"]}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IsOnFriendsList"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"true"})," if the user viewing the avatar is friends with the user wearing it. ",(0,n.jsx)(t.code,{children:"false"})," locally."]}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"Other"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:'"Supine" and "GroundProximity" are visible in the Debug display, but are not implemented yet. They currently do nothing and never change values.'}),"\n",(0,n.jsx)(t.p,{children:'\u2020 GestureLeftWeight and GestureRightWeight go from 0.0 to 1.0 in various gestures depending on the trigger pull. For example, if you make a fist but don\'t pull the trigger on the left hand, GestureLeft will be 1, but GestureLeftWeight will be 0.0. When you start pulling the trigger, it will climb from 0.0 towards 1.0. This can be used to create "analog" gestures or conditionally detect various things.'}),"\n",(0,n.jsx)(t.h3,{id:"avatar-scaling-parameters",children:"Avatar Scaling Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Sync"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ScaleModified"}),(0,n.jsxs)(t.td,{children:["Returns ",(0,n.jsx)(t.code,{children:"true"})," if the user is scaled using avatar scaling, ",(0,n.jsx)(t.code,{children:"false"})," if the avatar is at its default size."]}),(0,n.jsx)(t.td,{children:"Bool"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ScaleFactor"}),(0,n.jsxs)(t.td,{children:["Relation between the avatar's default height and the current height. An avatar with a default eye-height of 1m scaled to 2m will report ",(0,n.jsx)(t.code,{children:"2"}),"."]}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ScaleFactorInverse"}),(0,n.jsxs)(t.td,{children:["Inverse relation (",(0,n.jsx)(t.code,{children:"1/x"}),") between the avatar's default height and the current height. An avatar with a default eye-height of 1m scaled to 2m will report ",(0,n.jsx)(t.code,{children:"0.5"}),". Might be inaccurate at extremes."]}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EyeHeightAsMeters"}),(0,n.jsx)(t.td,{children:"The avatar's eye height in meters."}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EyeHeightAsPercent"}),(0,n.jsxs)(t.td,{children:["Relation of the avatar's eye height in meters relative to the default scaling limits (",(0,n.jsx)(t.code,{children:"0.2"}),"-",(0,n.jsx)(t.code,{children:"5.0"}),"). An avatar scaled to 2m will report ",(0,n.jsx)(t.code,{children:"(2.0 - 0.2) / (5.0 - 0.2)"})," = ",(0,n.jsx)(t.code,{children:"0.375"}),"."]}),(0,n.jsx)(t.td,{children:"Float"}),(0,n.jsx)(t.td,{children:"Playable"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"All of these parameters are read-only."}),"\n",(0,n.jsx)(t.h3,{id:"parameter-types",children:"Parameter Types"}),"\n",(0,n.jsx)(t.p,{children:"You have access to three types of variable when defining your parameters in your Parameters object."}),"\n",(0,n.jsx)(t.p,{children:'You can use up to a total of 256 bits of "memory". This isn\'t strictly memory in the sense of memory usage of the avatar, but has to do with the bandwidth you use when syncing parameters.'}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Range"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Memory Usage"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"int"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"0"}),"-",(0,n.jsx)(t.code,{children:"255"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8 bits"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Unsigned 8-bit int."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"float"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"-1.0"})," to ",(0,n.jsx)(t.code,{children:"1.0"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8 bits"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Signed 8-bit fixed-point decimal\u2020."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bool"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:"True"})," or ",(0,n.jsx)(t.code,{children:"False"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1 bit"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["\u2020 Remotely synced ",(0,n.jsx)(t.code,{children:"float"})," values have 255 possible values, giving a precision of ",(0,n.jsx)(t.code,{children:"1/127"})," over the network, and can store ",(0,n.jsx)(t.code,{children:"-1.0"}),", ",(0,n.jsx)(t.code,{children:"0.0"}),", and ",(0,n.jsx)(t.code,{children:"1.0"})," precisely. When updated locally, such as with ",(0,n.jsx)(t.a,{href:"https://docs.vrchat.com/docs/osc-overview",children:"OSC"}),", float values are stored as native (32-bit) floating-point values in animators."]}),"\n",(0,n.jsx)(t.h3,{id:"gestureleft-and-gestureright-values",children:"GestureLeft and GestureRight Values"}),"\n",(0,n.jsx)(t.p,{children:"GestureLeft and GestureRight use these as their values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Index"}),(0,n.jsx)(t.th,{children:"Gesture"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Neutral"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"Fist"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"HandOpen"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"FingerPoint"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{children:"Victory"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"RockNRoll"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{children:"HandGun"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"ThumbsUp"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"viseme-values",children:"Viseme Values"}),"\n",(0,n.jsxs)(t.p,{children:["We use the ",(0,n.jsx)(t.a,{href:"https://developer.oculus.com/documentation/unity/audio-ovrlipsync-viseme-reference",children:"Oculus viseme index"}),", top to bottom, where ",(0,n.jsx)(t.code,{children:"sil"})," is 0. For reference:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Viseme Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Viseme"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"sil"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"pp"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ff"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"th"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"dd"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"kk"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ch"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"7"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"ss"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"8"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"nn"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"9"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"rr"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"10"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"aa"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"11"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"e"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"i"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"13"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"o"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"14"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"u"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"sync-types",children:"Sync Types"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Speech"})," - Only used for visemes, is driven by the Oculus Lipsync output parameters depending on your speech. Updated locally, not directly synced (because its driven by audio)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Playable"})," - A slower sync mode meant to synchronize longer-running animation states. Updates every 0.1 to 1 seconds as needed based on parameter changes (1 to 10 updates per second), but you shouldn't rely on it for fast sync."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"IK"})," - A faster sync mode meant to synchronize frequently-changing values. Updates continuously every 0.1 seconds (10 updates per second), and interpolates ",(0,n.jsx)(t.code,{children:"float"})," values locally for remote users. Depending on the parameter, this may also just be calculated based on the avatar's locally rendered IK state."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When an Expression Parameter is in-use in a Puppet menu, it automatically swaps from Playable to IK sync so you get the continuous update rate and smooth interpolation. When the menu is closed, it returns to Playable sync."}),"\n",(0,n.jsx)(t.h3,{id:"driving-expression-parameters",children:"Driving Expression Parameters"}),"\n",(0,n.jsxs)(t.p,{children:['In addition, Expression parameters can be "driven" to a value via State Behaviors. They can be set using the ',(0,n.jsx)(t.code,{children:"Avatar Parameter Driver"})," State Behavior on a state in an animator."]}),"\n",(0,n.jsx)(t.h3,{id:"afk-state",children:"AFK State"}),"\n",(0,n.jsx)(t.p,{children:"The AFK state is triggered by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The user removing the headset and the HMD proximity sensor returning that the headset is not being worn"}),"\n",(0,n.jsxs)(t.li,{children:["A system menu is open. This depends on how the platform you're using delivers data when system menus are up-- for example, the Oculus Dash doesn't register as AFK, but SteamVR's menu ",(0,n.jsx)(t.strong,{children:"does"})," register as AFK. This is kind of a knock-on, and not a designed behavior."]}),"\n",(0,n.jsx)(t.li,{children:"The user has pressed the End key, toggling the AFK state."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"trackingtype-parameter",children:"TrackingType Parameter"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"TrackingType"})," indicates a few pieces of information."]}),"\n",(0,n.jsxs)(t.p,{children:["If the value is 3, 4, or 6 while ",(0,n.jsx)(t.code,{children:"VRMode"})," is 1, the value is indicating how many tracked points the wearer of the avatar has enabled and currently tracked. ",(0,n.jsx)(t.strong,{children:"This value can change!"})," If a user in 6-point tracking removes their extra three points of tracking, they will go from a value of 6 to a value of 3. Take this into account when you design your animator."]}),"\n",(0,n.jsxs)(t.p,{children:["If the value is 0, 1, or 2 while ",(0,n.jsx)(t.code,{children:"VRMode"}),' is 1, the value indicates that the avatar is still initializing. You should not design animators to branch based off this combination of values, and it should instead wait for a "valid" value of 3, 4, or 6.']}),"\n",(0,n.jsx)(t.admonition,{title:"Account for changes",type:"caution",children:(0,n.jsx)(t.p,{children:'During avatar initialization, this value may change! Ensure that your animator accounts for possible changes, and that it doesn\'t "dead-end" into any branch.'})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Uninitialized. Usually only occurs when the user is switching avatars and their IK isn't sending yet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Generic rig. The user might have tracking of any kind on, but the avatar is rigged as Generic,so tracking is ignored. ",(0,n.jsx)(t.em,{children:"Might"})," be a desktop user if ",(0,n.jsx)(t.code,{children:"VRMode"})," is 0."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"2"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.em,{children:"Only occurs with AV2,and therefore isn't a state you should expect to be in for very long for AV3 controllers on avatars. May still occur with SDK3 stations."})," ",(0,n.jsx)("br",{}),"Hands-only tracking with no fingers. This will only occur in states that are transitions-- as in, you should expect ",(0,n.jsx)(t.code,{children:"TrackingType"})," to change again, and the avatar should not stay in this state."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"3"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Head and hands tracking. If ",(0,n.jsx)(t.code,{children:"VRMode"})," is ",(0,n.jsx)(t.code,{children:"1"}),", this user is in 3-point VR. If ",(0,n.jsx)(t.code,{children:"VRMode"})," is ",(0,n.jsx)(t.code,{children:"0"}),", this is a Desktop user in a humanoid avatar."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4-point VR user. Head, hands, and hip."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"5-point VR user. Head, hands and feet tracked. Basically full Body Tracking but without the hip."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"6"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Full Body Tracking VR user. Head, hands, hip, and feet tracked."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"expression-parameter-aliasing",children:"Expression Parameter Aliasing"}),"\n",(0,n.jsxs)(t.p,{children:["You ",(0,n.jsx)(t.strong,{children:"must"}),' create names (or "aliases") for Expression parameters. **You cannot (and shouldn\'t!) use the default Expression name for the parameters. **']}),"\n",(0,n.jsxs)(t.p,{children:["Once you have created names for any Expression parameter you want to use, you can use that name directly in your Controller. This means can come up with your own standard naming for your parameters. This ",(0,n.jsx)(t.em,{children:"also"})," means that Menu definitions and Controllers can be mixed and matched as long as they use the same names. You can get prefab controllers from others and create your own menu styles based on your preferences, without worrying about Expression parameter conflicts."]}),"\n",(0,n.jsxs)(t.p,{children:["When naming your own parameters, using forward slashes (",(0,n.jsx)(t.code,{children:"/"}),") will cause parameters to automatically organize in various selection dropdowns. For example, naming a parameter ",(0,n.jsx)(t.code,{children:"Toggles/Hat"})," will make the menu selection show up as Toggles -> Hat when selecting parameters for things like Animator transitions and Expression Menus, while keeping the underlying parameter the same name. This doesn't change how parameters behave, it just makes it easier to work with large parameter lists."]}),"\n",(0,n.jsx)(t.h3,{id:"default-av3-aliasing",children:"Default AV3 Aliasing"}),"\n",(0,n.jsx)(t.p,{children:"There's a few \"defaults\" in use by the template AV3 VRChat controllers that you can use if you don't want to build out your own controllers. These won't collide with your own use (as long as you don't name them the same thing) thanks to aliasing."}),"\n",(0,n.jsx)(t.p,{children:"In particular, the Default Action and FX layers use aliasing. You don't need to worry about using a Expression that is in these layers."}),"\n",(0,n.jsxs)(t.p,{children:["Actions use aliased parameters named ",(0,n.jsx)(t.code,{children:"VRCEmote"})," , which is an Int with a range of 1 to 16."]}),"\n",(0,n.jsxs)(t.p,{children:["FX uses aliased Float parameters called ",(0,n.jsx)(t.code,{children:"VRCFaceBlendH"})," (-1,1) and ",(0,n.jsx)(t.code,{children:"VRCFaceBlendV"})," (-1,1), if you want to try out your own menus to use them. The default FX layer requires that you have a skinned mesh named ",(0,n.jsx)(t.code,{children:"Body"})," with ",(0,n.jsx)(t.code,{children:"mood_happy"})," , ",(0,n.jsx)(t.code,{children:"mood_sad"})," , ",(0,n.jsx)(t.code,{children:"mood_surprised"})," , and ",(0,n.jsx)(t.code,{children:"mood_angry"})," blendshapes."]}),"\n",(0,n.jsx)(t.p,{children:"To restate, if you have an avatar that you upload as an Avatar3 avatar without any custom Playable layers, you'll be able to use some built-in emotes with them as long as you've got the above-named blendshapes."}),"\n",(0,n.jsxs)(t.p,{children:["If you also have an ",(0,n.jsx)(t.code,{children:"eyes_closed"})," blendshape, it'll close them when you use the default Die emote or go AFK."]}),"\n",(0,n.jsx)(t.h3,{id:"cross-platform-parameter-sync",children:"Cross-Platform Parameter Sync"}),"\n",(0,n.jsxs)(t.p,{children:["When using an avatar that has both Quest and PC versions uploaded, parameters are synced by their position in the parameters list and their parameter type, ",(0,n.jsx)(t.strong,{children:"not"})," by the names of the parameters. For a given parameter to sync between PC and Quest, it has to be in the same position in the parameter list, and have the same parameter type."]}),"\n",(0,n.jsx)(t.p,{children:"Given this, it can be a good idea to use the same Expression Parameters asset for both the PC and Quest versions of an avatar, even if one version doesn't make use of all the parameters."})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
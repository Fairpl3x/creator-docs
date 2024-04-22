"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[343],{13905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(74848),i=t(28453);const r={},s="Input Events",l={id:"worlds/udon/input-events",title:"Input Events",description:"You can read the input of a Player's controller in a unified way across all platforms by using Udon Input Events. These events will work correctly even when the player has remapped their controls.",source:"@site/docs/worlds/udon/input-events.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/input-events",permalink:"/creator-docs-i18n/en/worlds/udon/input-events",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/input-events.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712356660,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Loading",permalink:"/creator-docs-i18n/en/worlds/udon/image-loading"},next:{title:"String Loading",permalink:"/creator-docs-i18n/en/worlds/udon/string-loading"}},a={},d=[{value:"InputJump",id:"inputjump",level:3},{value:"InputUse",id:"inputuse",level:3},{value:"InputGrab",id:"inputgrab",level:3},{value:"InputDrop",id:"inputdrop",level:3},{value:"InputMoveHorizontal",id:"inputmovehorizontal",level:3},{value:"InputMoveVertical",id:"inputmovevertical",level:3},{value:"InputLookVertical",id:"inputlookvertical",level:3},{value:"InputLookHorizontal",id:"inputlookhorizontal",level:3},{value:"UdonInputEventArgs",id:"udoninputeventargs",level:2},{value:"OnInputMethodChanged",id:"oninputmethodchanged",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"input-events",children:"Input Events"}),"\n",(0,o.jsx)(n.p,{children:"You can read the input of a Player's controller in a unified way across all platforms by using Udon Input Events. These events will work correctly even when the player has remapped their controls."}),"\n",(0,o.jsxs)(n.p,{children:["There are currently two types of events - Button and Axis, which include boolean and float values. Each event also holds a special ",(0,o.jsx)(n.a,{href:"/worlds/udon/input-events#UdonInputEventArgs",children:"UdonInputEventArgs "})," object."]}),"\n",(0,o.jsx)(n.h1,{id:"button-events",children:"Button Events"}),"\n",(0,o.jsxs)(n.p,{children:["Button events include a ",(0,o.jsx)(n.em,{children:"bool"})," value which is ",(0,o.jsx)(n.strong,{children:"true"})," when the button is pressed and ",(0,o.jsx)(n.strong,{children:"false"})," when it is released."]}),"\n",(0,o.jsx)(n.h3,{id:"inputjump",children:"InputJump"}),"\n",(0,o.jsx)(n.p,{children:"Spacebar on Desktop, typically a face button on controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputuse",children:"InputUse"}),"\n",(0,o.jsx)(n.p,{children:"Left-Click on Desktop, typically a trigger button on controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputgrab",children:"InputGrab"}),"\n",(0,o.jsx)(n.p,{children:"Left-Click on Desktop, typically a grip button on VR controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputdrop",children:"InputDrop"}),"\n",(0,o.jsx)(n.p,{children:"Right-Click on Desktop, press grip button on Vive Wands and some Windows Mixed Reality Controllers, release grip button on others."}),"\n",(0,o.jsx)(n.h1,{id:"axis-events",children:"Axis Events"}),"\n",(0,o.jsxs)(n.p,{children:["Axis events have a ",(0,o.jsx)(n.strong,{children:"float"})," value which typically ranges between -1 and 1. When using a controller with analog sticks, a new event will be triggered for each change in value, from 0 to 0.1, then to 0.2, etc. Desktop users will output whole numbers: -1, 0, 1, etc."]}),"\n",(0,o.jsx)(n.h3,{id:"inputmovehorizontal",children:"InputMoveHorizontal"}),"\n",(0,o.jsx)(n.p,{children:"A and D on Desktop, typically the left stick/pad moving left and right on controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputmovevertical",children:"InputMoveVertical"}),"\n",(0,o.jsx)(n.p,{children:"W and S on Desktop, typically the left stick/pad moving up and down on controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputlookvertical",children:"InputLookVertical"}),"\n",(0,o.jsx)(n.p,{children:"Moving the mouse up and down on Desktop, typically the right stick up and down on gamepad and VR controllers."}),"\n",(0,o.jsx)(n.h3,{id:"inputlookhorizontal",children:"InputLookHorizontal"}),"\n",(0,o.jsx)(n.p,{children:"Moving the mouse left and right on Desktop, turning left and right using the right stick/pad without Comfort Turning on VR controllers, typically the right stick left and right on gamepad controllers."}),"\n",(0,o.jsx)(n.h2,{id:"udoninputeventargs",children:"UdonInputEventArgs"}),"\n",(0,o.jsx)(n.p,{children:"This object is included in every input event, and holds additional data for the event which may be useful. We may add more data into this object in the future, let us know if you think of something handy you'd like to reference here. For now, it includes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"UdonInputEventType"}),": BUTTON or AXIS"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"boolValue"}),": True/False if this is a button event, false if it's an axis event (default value)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"floatValue"}),": Number between -1 and 1 for an axis event, 0 if it's a button event (default value)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"handType"}),": LEFT or RIGHT. Included for keyboard and mouse users as well (mouse is RIGHT, keyboard is LEFT)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"oninputmethodchanged",children:"OnInputMethodChanged"}),"\n",(0,o.jsxs)(n.p,{children:["This event fires whenever a user switches input methods, like from Keyboard to Mouse, Controller, or Touchscreen. It includes a ",(0,o.jsx)(n.a,{href:"/worlds/udon/graph/type-nodes/#vrcsdkbasevrcinputmethod",children:"VRCInputMethod"})," enum as its parameter."]}),"\n",(0,o.jsx)(n.admonition,{title:"Ambiguous Vive input names",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"VRCInputMethod.Vive"})," is a Vive controller running through SteamVR."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"VRCInputMethod.ViveXr"})," is a Vive XR Elite Controller running via OpenXR."]}),"\n"]})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3245],{33731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(74848),s=r(28453);const a={title:"Player Forces",slug:"player-forces",hidden:!1,createdAt:"2021-01-22T00:32:15.132Z",updatedAt:"2021-01-22T01:07:11.156Z"},o=void 0,l={id:"worlds/udon/players/player-forces",title:"Player Forces",description:"Here are the nodes relating to forces that act on Players. For nodes that deal with Player positions, see Player Positions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-forces.md",sourceDirName:"worlds/udon/players",slug:"/worlds/udon/players/player-forces",permalink:"/creator-docs-i18n/worlds/udon/players/player-forces",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-forces.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Player Forces",slug:"player-forces",hidden:!1,createdAt:"2021-01-22T00:32:15.132Z",updatedAt:"2021-01-22T01:07:11.156Z"},sidebar:"tutorialSidebar",previous:{title:"Player Collisions",permalink:"/creator-docs-i18n/worlds/udon/players/player-collisions"},next:{title:"Player Positions",permalink:"/creator-docs-i18n/worlds/udon/players/player-positions"}},i={},d=[{value:"GetWalkSpeed / SetWalkSpeed",id:"getwalkspeed--setwalkspeed",level:3},{value:"GetRunSpeed / SetRunSpeed",id:"getrunspeed--setrunspeed",level:3},{value:"GetStrafeSpeed / SetStrafeSpeed",id:"getstrafespeed--setstrafespeed",level:3},{value:"GetJumpImpulse / SetJumpImpulse",id:"getjumpimpulse--setjumpimpulse",level:3},{value:"GetGravityStrength / SetGravityStrength",id:"getgravitystrength--setgravitystrength",level:3},{value:"Immobilize",id:"immobilize",level:3}];function p(e){const t={a:"a",admonition:"admonition",em:"em",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Here are the nodes relating to forces that act on Players. For nodes that deal with Player positions, see ",(0,n.jsx)(t.a,{href:"/worlds/udon/players/player-positions",children:"Player Positions"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Local player only",type:"note",children:(0,n.jsxs)(t.p,{children:["Only use these nodes for the ",(0,n.jsx)(t.a,{href:"/worlds/udon/players/getting-players/#networkingget-localplayer",children:"local player"}),". They can't be used for remote players."]})}),"\n",(0,n.jsx)(t.h3,{id:"getwalkspeed--setwalkspeed",children:"GetWalkSpeed / SetWalkSpeed"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"float, working range around 0-5"})}),"\n",(0,n.jsx)(t.p,{children:"The speed at which a Player can walk around your world. Set this below your Run Speed."}),"\n",(0,n.jsx)(t.h3,{id:"getrunspeed--setrunspeed",children:"GetRunSpeed / SetRunSpeed"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"float, working range around 0-10"})}),"\n",(0,n.jsx)(t.p,{children:"The speed at which a Player can run around your world. Set this above your Walk Speed."}),"\n",(0,n.jsx)(t.h3,{id:"getstrafespeed--setstrafespeed",children:"GetStrafeSpeed / SetStrafeSpeed"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"float, working range around 0-5"})}),"\n",(0,n.jsx)(t.p,{children:"The speed at which a Player can move sideways through your world. Recommended to be set to the same as Walk Speed. Not affected by running."}),"\n",(0,n.jsx)(t.h3,{id:"getjumpimpulse--setjumpimpulse",children:"GetJumpImpulse / SetJumpImpulse"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"float, working range around 0-10"})}),"\n",(0,n.jsx)(t.p,{children:"How much force applied when a player jumps. Default is 0, so set this if you want to enable jump in your world. The default VRCWorld prefab sets this to 3."}),"\n",(0,n.jsx)(t.h3,{id:"getgravitystrength--setgravitystrength",children:"GetGravityStrength / SetGravityStrength"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"float, working range around 0-10"})}),"\n",(0,n.jsx)(t.p,{children:"Multiplier for the Gravity force of the world (set to Earth's default). Don't change Unity's Physics.Gravity in your project, get and set it here instead. Default is 1."}),"\n",(0,n.jsx)(t.h3,{id:"immobilize",children:"Immobilize"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Boolean"})}),"\n",(0,n.jsx)(t.p,{children:"Set to true to keep a Player stuck in place, turning off their Locomotion. Note that VR Players may be able to move their viewpoint around a bit anyways, but their Avatar will stay in place."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
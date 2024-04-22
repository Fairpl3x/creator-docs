"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2221],{47455:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=o(74848),i=o(28453);const a={title:"Debugging Udon Projects",slug:"debugging-udon-projects",hidden:!1,createdAt:"2020-08-29T21:52:15.830Z",updatedAt:"2022-01-12T05:48:39.712Z"},s="What is Debugging?",r={id:"worlds/udon/debugging-udon-projects",title:"Debugging Udon Projects",description:"Debugging is how you learn about what's going on under the hood in the VRChat client and your world. It's a key skill to develop for programming in general, and for building your worlds.",source:"@site/docs/worlds/udon/debugging-udon-projects.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/debugging-udon-projects",permalink:"/creator-docs-i18n/en/worlds/udon/debugging-udon-projects",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/debugging-udon-projects.md",tags:[],version:"current",lastUpdatedBy:"James Kerrane",lastUpdatedAt:1686996224,formattedLastUpdatedAt:"Jun 17, 2023",frontMatter:{title:"Debugging Udon Projects",slug:"debugging-udon-projects",hidden:!1,createdAt:"2020-08-29T21:52:15.830Z",updatedAt:"2022-01-12T05:48:39.712Z"},sidebar:"tutorialSidebar",previous:{title:"Avatar Events",permalink:"/creator-docs-i18n/en/worlds/udon/avatar-events"},next:{title:"Event Execution Order",permalink:"/creator-docs-i18n/en/worlds/udon/event-execution-order"}},d={},l=[];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"what-is-debugging",children:"What is Debugging?"}),"\n",(0,t.jsx)(n.p,{children:"Debugging is how you learn about what's going on under the hood in the VRChat client and your world. It's a key skill to develop for programming in general, and for building your worlds."}),"\n",(0,t.jsx)(n.h1,{id:"vrchat-logs",children:"VRChat Logs"}),"\n",(0,t.jsx)(n.p,{children:"When you use the VRChat client, it saves logs about things that happen like worlds you visit, errors you encounter, and other behind-the-scenes info into text files on your machine."}),"\n",(0,t.jsx)(n.h1,{id:"viewing-your-logs-in-client",children:"Viewing Your Logs In-Client"}),"\n",(0,t.jsxs)(n.p,{children:["When you launch VRChat with the Debug GUI enabled (see below), you can turn on special Debug overlays in both Desktop and VR modes. To view your log messages as they occur, press RShift + Backtick + 3. You can find all the shortcuts available for different debug overlays on the ",(0,t.jsx)(n.a,{href:"https://docs.vrchat.com/docs/keyboard-and-mouse",children:"Keyboard and Mouse"})," page."]}),"\n",(0,t.jsx)(n.h1,{id:"viewing-your-logs-in-a-text-editor",children:"Viewing Your Logs in a Text Editor"}),"\n",(0,t.jsx)(n.p,{children:"You can view these files during or after a VRChat session by finding them on your disk and opening them up. They are typically saved to the following folder, with your computer username instead of 'YourName':"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"C:\\Users\\YourName\\AppData\\LocalLow\\VRChat\\VRChat"})}),"\n",(0,t.jsxs)(n.p,{children:["In this folder, you'll find some more folders, and a handful of files with names like:\n",(0,t.jsx)(n.code,{children:" output_log_08-55-48.txt"})]}),"\n",(0,t.jsx)(n.p,{children:"These are your log files - a new one is made each time you launch VRChat, with a timestamp to keep the names unique. You can open them in any text browser to find detailed information of what happened during your session."}),"\n",(0,t.jsx)(n.h1,{id:"log-options",children:"Log Options"}),"\n",(0,t.jsxs)(n.p,{children:["When you ",(0,t.jsx)(n.em,{children:"Build and Test"})," your world using the button in the VRChat Control Panel, Unity launches VRChat and passes some command-line arguments along which turn on debugging features so you get all the information possible. When you launch VRChat another way, you will get only limited logs. In order to copy the way that ",(0,t.jsx)(n.em,{children:"Build and Test"})," launches VRChat, you'll want to pass some flags along. You can do this in a few different ways."]}),"\n",(0,t.jsx)(n.h1,{id:"batch-files",children:"Batch Files"}),"\n",(0,t.jsx)(n.p,{children:"To launch VRChat with some special options, you can use a batch file. This just a plain text file you create with some special commands."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Make a new text file called ",(0,t.jsx)(n.code,{children:"debug.bat"})," right next to the VRChat.exe on your machine."]}),"\n",(0,t.jsxs)(n.li,{children:["Add this line to the file: ",(0,t.jsx)(n.code,{children:"VRChat.exe --no-vr --enable-debug-gui --enable-sdk-log-levels --enable-udon-debug-logging"})]}),"\n",(0,t.jsx)(n.li,{children:"Save the file and run it to test!"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This command turns on 3 flags for extra logging, and also forces VRChat to bypass VR for desktop testing. There are more options you can pass along - you can include any of the flags from the ",(0,t.jsx)(n.a,{href:"https://docs.vrchat.com/docs/launch-options",children:"VRChat Launch Options"})," page as well as the ",(0,t.jsx)(n.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/CommandLineArguments.html",children:"Unity Standalone Player command line arguments"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, this is a batch file I use that launches with my secondary VRChat profile and forces a screen width of 720p:\n",(0,t.jsx)(n.code,{children:"VRChat.exe --profile=1 --no-vr --enable-debug-gui --enable-sdk-log-levels --enable-udon-debug-logging -screen-width 1280 -screen-height 720"})]}),"\n",(0,t.jsx)(n.h1,{id:"steam-launch-options",children:"Steam Launch Options"}),"\n",(0,t.jsx)(n.p,{children:"If you use the Steam version of VRChat, you can set permanent launch options there as well. We don't generally recommend this since it makes it harder to switch between normal and debug launches, but here is how you do it:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"In your Steam Library, right-click on the VRChat entry and choose 'Properties'."}),"\n",(0,t.jsx)(n.li,{children:"In the 'General' tab, press the 'Set Launch Options' button."}),"\n",(0,t.jsxs)(n.li,{children:["In the field that appears, you can enter the VRChat-specific flags you want always enabled, like ",(0,t.jsx)(n.code,{children:"--enable-debug-gui --enable-udon-debug-logging"})," to always have the Debug GUI and Udon Debugging enabled."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"finding-udon-errors",children:"Finding Udon Errors"}),"\n",(0,t.jsxs)(n.p,{children:["When an UdonBehaviour runs into a major issue while running in the client, it will disable itself. If you're looking at the logs in the client, you'll see an entry like this:\n",(0,t.jsx)(n.code,{children:"[UdonBehaviour] An exception occurred during Udon execution, this UdonBehaviour will be halted."}),"\nTo find out more about what happened, open up your log files using the instructions above under ",(0,t.jsx)(n.em,{children:"Finding Your Logs"}),", and search for the world 'halted'. There, you will find some more information about what happened, like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"2020.08.28 17:40:51 Error      -  [UdonBehaviour] An exception occurred during Udon execution, this UdonBehaviour will be halted.\nVRC.Udon.VM.UdonVMException: An exception occurred in an UdonVM, execution will be halted. ---\x3e VRC.Udon.VM.UdonVMException: An exception occurred during EXTERN to 'VRCSDK3VideoComponentsBaseBaseVRCVideoPlayer.__GetTime__SystemSingle'. ---\x3e System.NullReferenceException: Object reference not set to an instance of an object.\n  at VRC.SDK3.Internal.Video.Components.AVPro.AVProVideoPlayerInternal.GetTime () [0x00000] in <00000000000000000000000000000000>:0 \n  at VRC.Udon.Wrapper.Modules.ExternVRCSDK3VideoComponentsBaseBaseVRCVideoPlayer.__GetTime__SystemSingle (VRC.Udon.Common.Interfaces.IUdonHeap heap, System.UInt32[] parameterAddresses) [0x00000] in <00000000000000000000000000000000>:0 \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ouch, so much information! The key info here is in the second line: ",(0,t.jsx)(n.code,{children:" An exception occurred during EXTERN to 'VRCSDK3VideoComponentsBaseBaseVRCVideoPlayer.__GetTime__SystemSingle'. ---\x3e System.NullReferenceException: Object reference not set to an instance of an object."}),"\nThis tells us that our world is trying to access something that does not exist. Specifically, we're trying to access a VideoPlayer when we don't have one assigned. That's what ",(0,t.jsx)(n.code,{children:" Object reference not set to an instance of an object"})," means, and ",(0,t.jsx)(n.code,{children:"VRCSDK3VideoComponentsBaseBaseVRCVideoPlayer.__GetTime__SystemSingle"})," tells us that it occured when we tried to call ",(0,t.jsx)(n.em,{children:"GetTime"})," on a ",(0,t.jsx)(n.em,{children:"VRCVideoPlayer"}),". Once you get comfortable reading logs, this kind of information is invaluable. I can now go to the graph that tries to call VRCVideoPlayer.GetTime and make sure it has a VideoPlayer hooked into it."]}),"\n",(0,t.jsx)(n.h1,{id:"diagnosing-udon-not-doing-what-you-want",children:"Diagnosing udon not doing what you want"}),"\n",(0,t.jsxs)(n.p,{children:["If you're ever in a situation where Udon is not doing something that you want it to do, a good way to diagnose it is to add ",(0,t.jsx)(n.code,{children:"Debug Log"})," nodes with unique text. Put them right before you try to do something important, put them right after you try to do something important, and just put them anywhere that might be important in general. Then when you run your UdonBehaviour, you can observe the log to see how far it's getting and whether or not it is doing what you expect."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4164],{17508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var A=n(74848),o=n(28453);const s={title:"Using Build & Test",slug:"using-build-test",excerpt:"Learn how to get set up to create Udon-powered Worlds in VRChat.",sidebar_position:1,hidden:!1,createdAt:"2020-08-21T19:34:22.325Z",updatedAt:"2023-02-16T22:38:16.295Z"},i="Open the UdonExampleScene",l={id:"worlds/udon/using-build-test",title:"Using Build & Test",description:"Before you read this page, you should read What is Udon and Getting Started with Udon.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/using-build-test.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/using-build-test",permalink:"/creator-docs-i18n/worlds/udon/using-build-test",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/using-build-test.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",sidebarPosition:1,frontMatter:{title:"Using Build & Test",slug:"using-build-test",excerpt:"Learn how to get set up to create Udon-powered Worlds in VRChat.",sidebar_position:1,hidden:!1,createdAt:"2020-08-21T19:34:22.325Z",updatedAt:"2023-02-16T22:38:16.295Z"},sidebar:"tutorialSidebar",previous:{title:"Player Positions",permalink:"/creator-docs-i18n/worlds/udon/players/player-positions"},next:{title:"Video Players",permalink:"/creator-docs-i18n/worlds/udon/video-players/"}},r={},a=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t.admonition,{title:"Prerequisites",type:"note",children:(0,A.jsxs)(t.p,{children:["Before you read this page, you should read ",(0,A.jsx)(t.a,{href:"/worlds/udon",children:"What is Udon"})," and ",(0,A.jsx)(t.a,{href:"/worlds/udon/getting-started-with-udon",children:"Getting Started with Udon"}),"."]})}),"\n",(0,A.jsx)("iframe",{class:"embedly-embed",src:"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fvideoseries%3Flist%3DPLe9XHNvXcouQjg5GULWGLj1tMzeythnQi%26start%3D0&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8yaQY0arCnc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8yaQY0arCnc%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube",width:"854",height:"480",scrolling:"no",title:"YouTube embed",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"true"}),"\n",(0,A.jsx)(t.p,{children:"Some simple things in your world will work just by pressing 'Play' in the Editor - mouse events, timers, things that don't need interaction from avatars or networking. For a lot of the interesting functionality, you're going to need to make a build of your world that runs in the actual VRChat Client."}),"\n",(0,A.jsx)(t.h1,{id:"open-the-udonexamplescene",children:"Open the UdonExampleScene"}),"\n",(0,A.jsx)(t.p,{children:"Open the UdonExampleScene from the VRChat Examples folder - this scene has lots of great reusable Graphs from which you can learn. It's all set up to work as-is, so we can use it to make sure everything's working."}),"\n",(0,A.jsx)(t.h1,{id:"setting-up-your-settings",children:"Setting Up Your Settings"}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsxs)(t.p,{children:["Start by creating a new project, making sure the Worlds SDK has been imported correctly, and opening up the VRChat Control panel through the Menu Bar under VRChat SDK > Show Control Panel\n",(0,A.jsx)(t.img,{src:n(38648).A+"",width:"195",height:"150"})]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsxs)(t.p,{children:["Enter your Login information on the 'Authentication' tab and press 'Sign In'.\n",(0,A.jsx)(t.img,{src:n(52941).A+"",width:"564",height:"336"})]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsxs)(t.p,{children:["Click on the Settings tab and look for the 'VRChat Client' entry at the bottom. This is the VRChat Client that Unity will use to test your worlds. If you don't set this, your worlds may not launch correctly.\n",(0,A.jsx)(t.img,{src:n(44024).A+"",width:"538",height:"301"})]}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:"Press 'Edit' to bring up a File Chooser, then navigate to the place you installed VRChat and choose the VRChat.exe program. Here are some default places it might be:"}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsx)(t.li,{children:"Steam: C:\\Program Files (x86)\\Steam\\steamapps\\common\\VRChat\\VRChat.exe"}),"\n",(0,A.jsx)(t.li,{children:"Oculus: C:\\Program Files\\Oculus\\Software\\Software\\vrchat-vrchat\\VRChat.exe"}),"\n",(0,A.jsx)(t.li,{children:"Viveport: C:\\Viveport\\ViveApps\\469fbcbb-bfde-40b5-a7d4-381249d387cd\\1597468388\\VRChat.exe"}),"\n"]}),"\n",(0,A.jsxs)(t.ol,{start:"4",children:["\n",(0,A.jsxs)(t.li,{children:["Switch to the 'Builder' tab. We need to set up our Layers and Collision Matrix to the way that VRChat expects.  Just press the 'Setup Layers for VRChat' button, then 'Do it!' on the popup that appears.\n",(0,A.jsx)(t.img,{src:n(35335).A+"",width:"534",height:"350"})]}),"\n"]}),"\n",(0,A.jsxs)(t.p,{children:["Next, do the same thing for the 'Set Collision Matrix' button.\n",(0,A.jsx)(t.img,{src:n(55528).A+"",width:"536",height:"242"})]}),"\n",(0,A.jsx)(t.h1,{id:"running-your-first-test",children:"Running Your First Test"}),"\n",(0,A.jsxs)(t.p,{children:["With all of our settings correct, we're ready to make a build of the scene. Once you've cleared the issues from the Builder tab by following the instructions above, you have access to the 'Build & Test' button. For this first test, turn on 'Force Non-VR', then press Build & Test.\n",(0,A.jsx)(t.img,{src:n(35366).A+"",width:"526",height:"121"})]}),"\n",(0,A.jsxs)(t.p,{children:["Your VRChat client should launch into a local copy of this world where you can run around and try everything out!\n",(0,A.jsx)(t.img,{src:n(65686).A+"",width:"1280",height:"430"})]}),"\n",(0,A.jsx)(t.h1,{id:"launching-multiple-clients",children:"Launching Multiple Clients"}),"\n",(0,A.jsx)(t.p,{children:"In order to test Synced Variables and Custom Network Events, you need multiple people in the same world. The easiest way to accomplish this is to use the Builder tab to launch multiple clients. Close the VRChat client window you just launched if it's still open, and change the 'Number of Clients' to 2, then press Build and Test again. This time, Unity will open up two VRChat clients, with your same avatar in both of them. You can swap between the windows to control your two avatars, and even see yourself talking in both of them. Try playing with the Synced Variables area. The first avatar that loads in will be the Master of the instance and therefore Owner of those GameObjects, so they will be able to update the UI Elements, whereas the second avatar can only see the updates. The one exception in this scene is the 'SyncButtonAnyone' which transfers ownership to whoever clicks on it."}),"\n",(0,A.jsx)(t.admonition,{title:"Bug: Don't use the Chair when running Build & Test with multiple clients.",type:"danger",children:(0,A.jsx)(t.p,{children:"There's an issue right now that all of your avatars will get 'sat' into the chair, and it will be difficult to get them out. We'll remove this warning when that's fixed. For now, you'll need to Publish the scene to test out Stations in your world."})}),"\n",(0,A.jsx)(t.h1,{id:"build--reload",children:"Build & Reload"}),"\n",(0,A.jsxs)(t.p,{children:['When testing many clients, it can be a hassle to arrange your windows and wait for VRChat to login every time you make a change to your world. You can change the \'Number of Clients\' to launch to 0 to change "Build & Test" into "Build & Reload"\n',(0,A.jsx)(t.img,{alt:"Build &amp; Reload!",src:n(53928).A+"",width:"211",height:"87"}),"\nThis will build a new version of your world and move all open clients into that new local instance, skipping the VRChat startup sequence altogether."]}),"\n",(0,A.jsxs)(t.p,{children:["You can also do this for clients you launch yourself, if you want to test with multiple profiles. You can use the new command-line flag ",(0,A.jsx)(t.code,{children:"--watch-worlds"})," to turn this functionality on. For example, this command launches VRChat with my main profile in desktop mode, with full debugging, at 1920x1080, with reloading worlds turned on."]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-shell",children:"VRChat.exe --watch-worlds --profile=0 --no-vr --enable-debug-gui --enable-sdk-log-levels --enable-udon-debug-logging -screen-width 1920 -screen-height 1080\n"})}),"\n",(0,A.jsx)(t.admonition,{title:"New 'Build & Test' Clients Don't Join Reloaded Worlds",type:"danger",children:(0,A.jsx)(t.p,{children:"If you Build & Reload some clients, then choose 'Build & Test' to add more clients, they may not be joined into the right room. However, you can simply reduce the number of clients back to 0 and then 'Build & Reload' or 'Reload Last Build' in order to join them all together again."})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(d,{...e})}):d(e)}},53928:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},65686:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/using-build-test-2acac91-UdonExampleScene-c6762d34bdcfcb2ee045cf80d99de94c.jpg"},35335:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/using-build-test-5f05f9b-setup-layers-2874834ee5ee32c0272edf85a18083a6.png"},44024:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/using-build-test-69f8274-installed-client-path-ddc3ecbea921e471d95f1fc0617e56bf.png"},55528:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/using-build-test-7ccc247-set-collision-matrix-f8df7c8ef61c495512a90707889db66d.png"},35366:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAg4AAAB5CAIAAADeYT4+AAAgAElEQVR4nO2dDVgTV9r3zwRIwjciKKixfmutFpQiIMaiIvvUZVFo6WNFSg0fXkJ5/djabde++2rVdnttLYLrswURK3ZtxdVSuthiNUqRR1oBoaKIWmgxogjKVygBQua94LjjNJnMTAJIAvfv8vKaTObc577vCbkzZ878D+Hr64sAAAAAQD8CyA0AAADADpQKAAAAgAMoFQAAAAAHlvhtFxcXyBQAAADAyKNS0dLSAvkBAAAAGHlUKh4+fAj5AQAAABh5VCpaW1shPwAAAAAjj0qFp6cn5AcAAABACDU0NGilAWZAAQAAABxAqQAAAAA4gFIBAAAAcAClAgAAAOAASgUAAADAAZQKAAAAgAMoFQAAAAAHlpAgAACAgaWysnJIMvr0008PkmUoFQAAAAOMo6OjSCSysLB4Yont6enp7OwcPPtQKgAAAAYeoVBoafnkvmDVavWglgq4VwEAI4X169cPUqTjx4+PjIyUyWT8m1DODJ5XQw7xBBnsWKFUAIDpsn79+ldeeUUgePR3arLfqn5+fufOncvIyNB9a/To0StWrJD1ERoaKpFItA5ITU01tDvzqi4WFhbjx49PSEgwAV+MBwagAMCkaWxsnDVr1rVr10zZSQcHB4VCobvfxcVlxYoVRUVFcrmcIAgXF5fJkyffvn17KHwcMl5//fVhEAWUCgAwaS5duvT73/++qqqqp6eH8nP9+vXUj3Fqe/369RUVFVOnTiVJsry83MnJadKkSQihwsLCn376CR+8cOHC6dOnd3R0nDlzBq9SIxaLFy9ePGHCBKVSmZ+fX19fj00dOHBAKpVOnz49PT2dnh9bW9slS5aMGTPm/v37crn8119/xb/x8f9alwh+fn5FRUU3btzAL2/3oZVtyn99nhQXFz/99NMCgQAHotXd1KlTfX19hUJhbW3t2bNnTfBUJicnI4Q2btxoAr4YDwxAAYBJ09zcXFdXN3v2bD5ONjc3Hzt27Pz5835+fo2NjdQ2dUB9ff3Ro0crKyv9/f3xnoULF9bU1Bw+fLiwsFAqlVJHzpw58/vvv9eqEwihRYsW3b1798iRI/fu3cNG8Bd9ah9aB48ZM6a2tpZnevV5olKpjh8/np+fjwPR6k4qlX7zzTdHjx598OABfJIHD7iqAABTp6SkJCQkhM9U/atXryKE7ty5gxDCY1YKhcLW1pY6AF9eVFZWent74z0SiWT69OlLly5FCGk0GupIfd25u7ufO3euu7v7xx9/XLNmDadL/O+46vMEB3X79m16IBQtLS0LFiz46aefTHyMztyBUgEApk5ra2ttbe2cOXPofhIEQZIko+f071n6NoWFhYVarabsZGZmdnR0DEYSGhsbJ06cWFVVxedgdk8YA0EIffXVV5MnT540adKcOXNOnjzZP38BvQzNAFROTo6ZGgeAIaG0tJReKtrb2yUSiVAo5DkwReHg4GBpaTlv3jzqLrRCoZgzZ45IJLKxsVm8eDGnhbt3786dO9fKyurZZ5+tq6tjP7ioqMjX13fGjBkikUgsFkskkpUrV+o7mL8nSqXS1dUVb3t6etbW1paWljo4OHA6DxgN36uKnJyckJCQwcsz4/c7/x7p7g2qnwAwJCiVypqaGqpaXLx4MSAggCRJg0ZdSJJctmyZs7Pz3bt3z507h3deuHDB39//lVde6ejo+PHHHzmNFBYWLlmyxMPDo6GhQS6Xsx9cX19/9uxZT09PfOe5ubm5urpa38H8PSksLFyxYgVBEJ988omjo+Mrr7yiVqsvXLjA6fyQQN3Qxhv4LrfZQfj6+iKEqBKtj4EtFSzWjOtosCsZAAAAf+rq6uzt7a2srJ5Yzrq7u9va2saNGzcg1nTX1jb+XoWLi8vGjRtnzpxZVVWVlJSEJ95ZW1vLZDJfX9+HDx9mZGSUl5cjhNLT052dnZubmw8fPpyfn29QLw4ODgkJCZ6eno2NjSkpKXjQUyqVvvbaa7a2tsXFxR9++CG+IsH/h4SEUGUjJyfn6NGjv/vd7ywtLVNTU/GPDgcHh8TERA8Pj9ra2mnTpq1atcroDAAAAIwQjL9XERcXd/Xq1aioqMrKyri4OLwzOjq6rq4uNjZ2165dK1aswDtjYmJefPHF9957Lzo62tBeYmJiLl68uHbt2tTU1Pj4eLwzPj5+9+7d0dHRNTU11IhTSB9azVtbWxMTE/ft20dJDshksvr6+ldffXXv3r3UQ7AAAAADjoWFheCJ8AR0CY2/qpg7d+7evXs7Ojqys7Opyde+vr4ymayrq0ulUr3//vt4al1ERMTMmTOdnJxEIpGhvXh5eQUEBGzZsgVLJ+Kdd+7ciYyMLCgo+Prrr9mbnzp1Cs81dHFxoQzGx8erVCrGh0sBAAAGhPY+hk0uB2ayLH3SntYEvh07duTm5mZmZjY1NZ04ccJQywRBREZGtrS00Hdu27bNt4/g4GBcRdihP+YqFAq7u7uNiBEAAIAnA3XPwHQwfgSmoqJi5cqVYrF41apVFRUVeGdpaemSJUuEQqGrq+vmzZuxDEBFRUVbW5uPj48RvZSVlQUHB9vZ2Tk7O1NSKmFhYcXFxVlZWW5ubnhPY2PjtGnT+Bi8devW8uXLxWIx/RFWAAAAgAUDriro81lDQkLS0tI2bdoUGhp68+bNpKQkvP/AgQNxcXFRUVFKpTI7Oxvf03733XcRQt9++60RJyI1NTU2NjY1NbW1tfWLL77AO8eNG5eent7Z2UkJCaSlpe3YsQMhFBERwW4wLS1t69atERERhYWFKpXKCJcAAABGGnwnyw4zCILw9vYODw/funUrfOYBAADoDORkWfPlk08+wZrJ+/btg48HAAAAJyOxVLz22msm4AUAAIDZAA8WAAAAABxAqQAAAAA4gFIBAAAAcAClAgAAAOAASgUAAADAAZQKAAAAgAMoFQAAAAAHsLY2AADAwKMSzGoRhvcIHBktW1u2Bs65VvK//zKXzEOpAADThZz3m4WEicuDtdRjb0ed94jKeESq8ct+9eXkT7r8F3Hr/z62P20X0ZiLmi8+ikjThVS1xO3/Qb/eGhD/TZBm4Uv2xI9iKwLrbRMEgVW38UbCa36B0v/OGk8cP37cLMKBUgEAJs3glQdtOn5Co5ejRo41YHjReglNTECWTkjd3Hu4pROynoxainHT3ogISzR6GTlxI3E90bTTbyQajUYjcLISaEaR/1n38z+LMxCIWOi/MFA6VdWpKSwsNJeI4F4FAJgVVi7ktJ2kRxY5bSeycsae9/5UJyzIiYmk58ne1wJrUpJAzj1CzkpG9h69eywdyMlvk88eI5/ej2xnMsZL3P0nOfYlJBD+Zq+e7ki31eScQ+TcI8hpEYMtTRdq+QGN8n/0ctQi1PI9ImnrxJBq9DAficYO78+e5j/09PTg/3t6esaMGYMFsPdkPjSjBdYGpVR4eHgcPnw4KytrMIyzQ1dK70/zftoxWRjjMtNg+bvNfloHMPzByGTv93Lfv0cvJXFIeZW4EoXaK8kJcY+PGx1I1GUSZWG9x0yIRp11xNVYonoX6dK7bjE5PoZouUhcWUsoUklJPHNPKgVSVqDR//Wb3vV0R6hbicpEonYfOUHGaIx4mE+OWvzIyKjFRNNvF9UXiMkxodR1xnCFJElcHqhqYWlpmZCQIBKJzhTcPHXBnNbI4zsAhf8GSJJ88ODB559/fvr0aZaDZTJZUlJSWVnZADk5BOgu0w3A2RwStAeg7OYSv+xFmg7ifjb5TPrj/Y15j7cdfQmFrPenfZeKqOldtxg5eJHOAeipviUjyR59cRD3PiOnv088oP116+2udyli1FqCrB4tRUwVs0cOK8uRcBMSuvSOuAjHIuUVqumjI5svEr8kmclJMJKenp6unq7ly5cXFRW1tbUhhKKjo8ePH69QKP6ecQGhpWYUiwH3KkJCQgQCwYwZM7Zv385eKtzd3cvLywfCPQAA9PPbxYl/g9ZbBEFciUTqFo5kdt5DrcWkazAvm7+tOtoljdSg5kLSSdpbKpoLel/Sj7SbTU7YgAQipBnOy4tpNJrAwMDo6OigoKAdO3bMmzfv+eef7+zs3LNnj6pzNrIyARd5Y/AAlIODw5UrV+gv33777WPHju3fv3/mzJn4+kMsFn/55Zf4QsTFxWXnzp1ZWVk7d+50dn401pmTk2NhYZGYmHjy5ElGI1rQr+vpgwkymezTTz/dv3//lClTtJow9otX5Tt58mRGRsbzzz+P9zg6Ov7lL385fvw4tZafVi+rV68+dOjQkSNHFi1aREW9bdu2rKysDz/8EC/2p0VKSsrs2bMRQs8888zevXtZXNIXGj0/dDIzM8VisY2NzbFjx0aNGiUWiz/77DN2+4ymGKOm088Q6OTk5Kxfvz4zM/Pw4cMrV65MSEg40odUKmU5L4wOaBETE4M/AE899RR7PrUacobP6BLjh4GPqYFEWUG6ruwbwFnVO17ESGspcl7Se9dB6Eo+1btuMWot6y0AFnbIypmc+DqLO8S9Y4heKvh0p89UUz4aJUWjpMTD77TfU14japPJiQm997eHLxqN5rvvvqutrZVIJNu3b4+JicEre/7888/0Bf/NAgNKRU5OTnZ29jvvvNPc3Gxvb493xsTEXLx4ce3atampqfHx8dTFfkgfCKG4uLirV69GRUVVVlbGxT0e6wwMDMzMzAwLC2M0wpObN2/GxcWdPn06Ojpaq4W+fmNiYl588cX33nuPahIdHV1XVxcZGfnBBx8wdtva2pqYmLhv3z6Z7NGwrEwmq6+vf/XVV/fu3SsQMORQLpcvXLgQIeTj4yOXy9ldYoSeHzo1NTUODg4BAQHNzc2BgYE2Njb3799nt89oijPq/odAR6FQxMfHp6SkyGSy6urqDRs2JCcnU/lkPC+MDmhx/fr12NjYb775xiBn+ITP6BLjh4GPqQGEUKQhuznk3Exk+wyhOMBomLhzgLSfSz5zqHeKavv1vlapSOROzk4lp+0m2m+wudPViJr/97EpHt3ppb2qtzhZ2KJfmXr89RZR9yk5NvwJJG2o0Gg0TU1Nf/7zn3/55ZcJEyaIRKKzZ89+++23arVao9GYps/6MGwAqvfJEWvrwMDAP/3pT++88w5CyMvLKyAgYMuWLXhgTrfV3Llz9+7d29HRkZ2dnZ7+eKwzL+/x0CqnEX0UFBRgU2vWrOHTr7u7e0RExMyZM52cnEQiEd45b968+Ph4lUp17949xn5Oneodli0pKXFxcaEcxk30TWDIz8//4IMPDh486O3t/dZbb7GnghF6fujU1NTY29sHBQV9/PHHL7/8clFREVUq+KSagjPq/odAJzc3FyFUVlZGEMTXX/dOx7x8+fLo0aPxIYznhdEBLS5cuICXbV+7di1/Z/iEz+gS44eB01R/YJgp29VA3NqmtU/7MHUb8fOe3+5pIX7+kMURuoXe8qBI49kd+1xe4pp2Cf/N8apa4l4tS3NzhyRJXC3eeuutv/71rwRB7N+/HxcJkmXw0CQx+Oqvo6PjzJkz1F8mQRCRkZEtLVxjoH3oyw4fIwKBQF8dtrKy6urq4tPvjh07cnNzMzMzm5qaTpw4gXcKhcLu7m6W5hh6DeNs0tTUVFdXt3z5coVCwRgXPRUsoelSXV3t6ekpEonKysp8fHz8/PyoUqHPPiNDEgI9h/RtxvPC6QCF1geAjzOc4TO6xOg8z88PMOLoedjVTfQIf9c73qZC/+f/nba3FT0gA1DfbOSebgL1PDSjlBh8r8LOzi4sLOzatWv4ZVlZWXBwsJ2dnbOz8+uvM4yBVlRUrFy5UiwWr1q1qqKCeayT08iDBw/mz59vY2Pzwgsv0Pe7ubmJxeLw8PDS0lI+/dra2lZUVLS1tfn4+FBH3rhxIygoyNra2t/fH/Hj1q1by5cvF4vFfn5++hrI5fJ169bRR04YXdIXmj5qampCQkJOnTpFkmRRUVFwcDBVKvik2qCoBykEXRjPC6MDWri7u4tEopdeeuny5csGOcMZvj6XjDAFjEysmjI1tj5qh5X4XyMZVKN8nnqpsfWxaso0o8QYcFWB7w2qVKqSkpKUlBS8MzU1NTY2NjU1tbW19YsvvtBtlZaWtmnTptDQ0Js3b+q778dpJCMjY+PGjRqN5ptvvqHvf/PNNyUSSUVFhe5tT8Z+09PT3333XTxkQR154MCBrVu3rl69Oj8/H/EjLS1t69atERERhYWFKhXzFI6SkhK1Wn3p0iV2l/SFpg+FQkEQxNmzZ/EXt5WVVUNDA/9UGxT1IIWgC+N5YXSAjkaj+eMf//jUU09dvXqV+gDwdIYzfH0uGWEKGIEIBAInq5q2+jf1jahbWFjY29sLBGYzC4rw9fVFCLm6upqAM4aRk5MztPPlCYLw9vYODw/funWr7rtBQUGTJk1KS0tjamoeDHkIwyCHwEiGfSCUcUaMiUD9AH3sLXySjeOTTz45ceLE2rVrGb/ICIIIDQ1lGTkxfYY8hGGQQ2CEI2DFvHJjxlcVAAAAwGAAVxUAAACAwQxBqeCUVDNOc23INe8Gw4FhL1+oBfXkuT4GW9pvhOQZAAyFb6kw4k9IXxPqXjTnAYPhFR1/f/+dO3fS9+zatQvPf83p41//+tdHH300bdo0+jFTpkzZvn37sWPHsrKy9uzZM3/+fEP7NcJtI27gc/ayadOm4ODHEg5/+MMfEhOHePEAauKv6X9lQ1EBRhQjegDq0qVLU6dOdXJywi+dnJwmT55cXPxIGDkkJGT16tV5eXkbN26kmkyZMmXHjh3fffddTExMbGzs0aNHWR6tMHH+8Y9/LF26VCKRIIQkEsmiRYtSU1OH1mXGxwkBABhyeJUK/AMK/9DWp+4nlUoPHjz4+eefv/HGG7pNGK2xH6BPnU2fVwghRl0/FiHCrq6uH374gXpyatGiRd9//z39yVu1Wp2fnz927OMFWKKjow8dOiSXy9va2lpaWkpKSvbv30+9y+itluocS+DW1tZYSi85OdnDw4MxJ4wR6SaKpReKzs7OpKSkhIQEsVgcFxe3Z88e/MyzcZqARugY6qZr9+7dnM7rSgRyyk0yav8xmqJgt6nloT5tSgAYNvAqFVoKgIzqfvHx8bt3746Ojq6pqdFtwmlTH7rqbCwWdA/mFCLMz89fvPjRAiyLFy/WeopKLBaHhoZS1xkIoRkzZpSUlBjkrZbqHEvgWHguNjZ2165dK1asYOxCX0RaXfNM7+3bt/Py8pKTk7OzszllB9kxQsdQ38lld15XIpCP3CSj9h+L2iC7TZ6amAAwbDBGAZhR3e/OnTuRkZEFBQVYDG6g0FVnY4FR149diLC8vHzTpk0uLi4EQYwdO5aur45/MF68eJH+5DNBEAY5oE91jhFfX1+ZTNbV1aVSqd5//33+yTc0UXTOnTu3efNmev0zThPQCB1D43zWlQjkPMv6zgKL2qBBEpZGqygCgLlgTKlgVPfbtm2bbx/BwcH4D2wAMUhuln4wpxChRtO7ErpUKiUIoqCggP50ZUhIyOzZszds2CASiSj1jurq6ueeew7ravBxgF11ThdOmT/2iAZcBJ+/JqDROobG+UyXCOQ8y+xngVFu0iAdTDpmpxgKAHzge1u7sbGRmgjEqO4XFhZWXFyclZXl5uam24TTpnFwWuAUIsRjUNI+vvtOewGWa9euJScnJyQkWFo+qqkZGRkymWzp0qX29vYODg7z5s1jX6WAUXVOn9ulpaVLliwRCoWurq6bN282OiLGXvjP2DFOE3CgdAwZnaejKxHImRN92n+6pig4bdI9NCJAADAv+F5VpKWl7dixAyEUERHBqO43bty49PT0zs5OahYNvQmnTeOSxmmBU4gQIVRVVWVnZ4clQnXfvXXr1qeffhoeHo5v0l6/fv1vf/vbSy+9tG7dOltbW4VCgQcx9MGoOqfP7QMHDsTFxUVFRSmVSsbF9XhGxDM5LA2N0AQcKB1DducZJQI5c8J4FhhNUfDRwaQ8NCJAPri7u7u4uAiFwoEyCAxjurq6Ghsb7969O0ghgrAHAJgcJEm6ubnZ2tq2tLSY3cqawJBgYWHh6OjY3t5+79499luqfNAV9hjOC9sCgJmi0WicnZ3v3bsHdQLgCV5uz83Nra6uzsLCYsDTBqUCAEwOjUZDEMRIWFwvIiLin//8J32D8V2AD/hjo9FooFQAwIiAJElzXKkfExkZiTfa29uvXLly8+ZNloOPHDlCbTPGq7tz0qRJXl5eAoHghx9++OWXX1gc0NcRp//8DzY11Gr1IM3B41sqjFhHaMiXHuonHh4eW7Zssba2fvnll4fQDSqN/cynuZ8ORgYvqCFPV09Pj5mWCoTQ4cOHCYJwdXVdtmxZVVUVz1Y8S4WPj8+ZM2cQQoGBgfiBX93e8UZUVBS1bRDmm/nBG7HkWyqM+LOhywKa45eUTCZLSkoqKyszAV+QcafAOIZlUTE7uru7zfdGRU9PD0EQVlZW9NstMpksIyNDa5u+Ex8pFoulUqm7uzt+qEU3CW1tbRYWFiRJPnjwgDNF9APEYrG/v/+4cePa29sLCgrwndspU6Y899xzQqFQoVCcP38eCwdERUXhWX8DmpUnweANWsIAlF7c3d3Ly8tN1DlguGO+A1C4AOCN69evW1lZdXZ24pf0iKhtrY0FCxa0tLTI5XJ8Qa+bhKKioqCgoPb29q+++kqj0URHRx88eFCfJ/TmCxYsqKmpkcvlY8eO9ff3P3nyJEJo4cKFubm5bW1ts2bN0mg06enpMTEx5vvIvVqtHiTLBouQ66q8WVpafvTRR3h6FkEQH330EX5gjVEW0DhlN0ZpuZSUlNmzZyOEnnnmGWpePH9lOk49OLFY/OWXX1L+W1hYJCYm4o+Xvl7Wr1+fmZl5+PDhlStXYuG/I0eOSKVS3Rj5+8nnFPBMrK46nq4IIItUn0EJ13WbDqMwIs/zrg/G5jyzx+gP/64HA7Va3WOe4KdSUlNTMzIyHjx4sHTpUhwG/o2vta27MX78+OLiYpVK1dTURG9C4eHhkZ2dXVlZuWTJEltbW6VSqS9NWs0nTJgQEBCwbt26FStWODk54Z3Nzc1eXl4SieTq1auMrcyLoS8VdLRU3tRqdVVVlZeXF0Jo/vz5169fp7vLR2pQC0ZlN11pOblcvnDhQjx2Sa3AzF+ZziA9ODwwmpmZGRYWxtKLQqGIj49PSUmRyWTV1dUbNmxITk7WFTo0QkGP/RTwTCyLOh5L4BQGJZwdRmFEnuddH4zNeWaP0R/+XQ8GeADKHKG+alUq1bVr11xdXamvYI1Gw1kqLCwsqNgZv7Xd3NwePnx4+fLlCxcuLF++XKFQ8CwVBEEcOnTof/r4+OOP8c7s7OwbN25MnDgxODh4GJQK0xqA0lV5O3fuXHh4eHFxcVBQ0PHjx1naGq3spttpfn7+Bx98cPDgQW9v77feegvv5K9MZ5AeHEIoLy+P2tbXS25uLtaEIAgCyyZevnx59OjRutb6qaBnXDgs6nh8MCjh7OgKI/I/74wYJMuoa5NRqNFoBcYBwawHoLDnIpHI09Pz7t27+KVSqZRIJHV1dTNmzGAZgLp///6sWbMqKysnTpzIeIe5paXF09OzrKzMyspKIBBMmjTJxsZGqVSyeIK5ffv2nDlzysrKLC0tqZ87np6e5eXljY2NoaGhlJ8uLi5munTK4F1VGH+vgv59dOPGjXHjxk2fPt3d3f3WrVssrfqp7EbvtKmpqa6uDv+sYDTIrkxntB6cQb3wKUJGK+gZF46WOh67CCAdgxLOaVYrav7nnRF9zVnc0LKpb4rhUN1bxgNQQ9J1/8GqWd3d3T///PO3336LAykoKFi6dClJkli/mYpOa+P8+fMvvPCCt7c3njqlm4S8vLxly5Y999xz9+/fP3XqlEQikUql//73vxm9pjeXy+UBAQGRkZEdHR2lpaX4LUdHx1dffVWtVp87d45yAF9SD/lKX0ZgiqVCi/z8/Lfffhv/ENMCC6vhEoJV2L788kuhULhmzZq///3vWgfrU3ZjRC6Xb9iwISUlhXoTC7d98cUXnMJtnJ6wwL8XffTfghHhuLu7P3z4kK6Oh0UAr127Rl/wh36+tOCZcEazdLAw4vnz5x0dHdeuXZuUlGTQedeFsTmnGxS6/hjhw8DS3d1tplcV+rJ3vQ+8ffHiRa2DqY2GhobMzEy8TY1z0qmvrz969Ci1o6GhobS0lI8n7e3t+Lqfju5X1s0++EZrYpjBDKjz58+vWbPm/Pnzum9xSg3SYVR200dJSYlarb506RK9L57Cbfx19xgj6qc83IALzHGGw6iOxygCyKIzyDPhnNqCusKIBp13XRibc7rB4s+QY9bPVQBDxeBdiZq3XGBQUNCkSZPS0tJMwJcRAST8ydDV1SUQCDo6OmD1C4A/BEFYW1trNJr+qxEPK7lAgiBCQ0P37NljAr6MCCDhTwyCIDo7O/FcIKgWAB8IgrC0tOzs7Bwk1XoQIQcAkwPPNMW6b/0XlAZGAiRJ9vT0CAQCsVjcf7lAECEHADNAIBAIhcKuPsg+4KwBLBB9WFlZCYVCgcCYp+U4GdxSwagmxC4x1E8BIhPR+BtYBkoxEDAX8GACLhhQJwA+EAQh6GOQLkOf0FUF/TtuUL/sTE3jb2AxInVQXcwUgiAs+hjpiQBMg0G5VBlCQOMPAABgwDFALpBdC49FIU5LgY4u3CaTybCA3ZQpU7R65NS/0xWq09L4o9NPqTstuUB2NxBCmZmZYrHYxsbm2LFjo0aNEovFn332GWWKXYeOUbpOyx/G5Oha1sq8VCo9ePDg559//sYbb+j2CwAAoA8Drir4a+FpwaJAd/Pmzbi4uNOnT+tKvHHq3+kK1Q2q1B1dLpDdDYRQTU2Ng4NDQEBAc3NzYGCgjY0NXVKGXYeOUbqOZ3K0LGslJD4+fvfu3dHR0YwLwgAAAOjDgFKRm5urVCopLXS3BUEAAAJ9SURBVDylUqlPC48/BQUFv/76a15e3rRp07QaeXl5bdmy5cSJE7t27cLCYVrMnTs3JycHC9U9++yz7H3m5+cvWLCAIAhvb+/8/Hy80yALeXl5jMJHjEZqamrs7e2DgoI+/vjj+fPn29ra0kvFqVOnlEqlPh06X1/f3NxclUrV0NBASdfxTA675Tt37kRGRvr4+GApQwAAAJ4YfFubRQuPv/CcFloCdhiD5Pw4Z4kMrNQdpxvV1dWenp4ikaisrMzHx8fPz09XqJLlEXzOcNiTo8/ytm3bfPsIDg7GGrQAAAB8GLDb2liazcbG5oUXXtB9FyvQ6e53c3MTi8Xh4eG6gl9Y/87Ozs7Z2RkLVWqBherEYjFPxT25XL5u3Tq6ABmjBfZAeLpRU1MTEhJy6tQpkiSLioqCg4P5axpj6TqhUOjq6rp582bGYziTQ0HPfFhYWHFxcVZWlpubG3UA49JDAAAAdAZssiy7NJs+Bbo333xTIpFUVFRQt5opOPXvDFXcGyipOz5uKBQKgiDOnj2La4mVlZXu04/64CNdx1/rkJ75cePGpaend3Z2mqO6MgAAQ8hQCns84Sn/IHUHAADAB92ftsPtuQp9YKk7Rvl7AAAAgOMrFOQCAQAAADoj96oCAAAAMBooFQAAAAAHUCoAAAAADqBUAAAAABxAqQAAAAA4gFIBAAAAcAClAgAAAOAASgUAAADAAZQKAAAAgAMoFQAAAAAHUCoAAAAADqBUAAAAABxAqQAAAAA4gFIBAAAAcAClAgAAAODg0YKp/JfzBAAAAEYacFUBAAAAcAClAgAAAOAASgUAAADAAZQKAAAAgAMoFQAAAAAbCKH/D+9UMTEq0b+GAAAAAElFTkSuQmCC"},52941:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/using-build-test-8c5c7ff-sign-in-671916647ae6aeb33471de5f3178c57c.png"},38648:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var A=n(96540);const o={},s=A.createContext(o);function i(e){const t=A.useContext(s);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),A.createElement(s.Provider,{value:t},e.children)}}}]);
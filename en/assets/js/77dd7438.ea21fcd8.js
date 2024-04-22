"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4609],{98477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const r={title:"Quest Content Optimization",slug:"quest-content-optimization",hidden:!1,createdAt:"2019-04-08T23:52:28.397Z",updatedAt:"2023-02-03T01:02:49.409Z"},s=void 0,a={id:"platforms/android/quest-content-optimization",title:"Quest Content Optimization",description:"Creating content for VRChat Quest is a challenge-- you have to create attractive, compelling content all the while keeping the content optimized for a mobile device. These are the same challenges that game developers must deal with while building for mobile.",source:"@site/docs/platforms/android/quest-content-optimization.md",sourceDirName:"platforms/android",slug:"/platforms/android/quest-content-optimization",permalink:"/creator-docs-i18n/en/platforms/android/quest-content-optimization",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/platforms/android/quest-content-optimization.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1687265687,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"Quest Content Optimization",slug:"quest-content-optimization",hidden:!1,createdAt:"2019-04-08T23:52:28.397Z",updatedAt:"2023-02-03T01:02:49.409Z"},sidebar:"tutorialSidebar",previous:{title:"Quest Content Limitations",permalink:"/creator-docs-i18n/en/platforms/android/quest-content-limitations"},next:{title:"Creator Economy",permalink:"/creator-docs-i18n/en/economy/"}},l={},d=[{value:"Limit Enforcement",id:"limit-enforcement",level:2},{value:"Unity Profiler",id:"unity-profiler",level:2},{value:"File Size",id:"file-size",level:2},{value:"Polygon Count",id:"polygon-count",level:2},{value:"Mesh Count",id:"mesh-count",level:2},{value:"Materials",id:"materials",level:2},{value:"Textures",id:"textures",level:2},{value:"Lighting",id:"lighting",level:2},{value:"Occlusion Culling",id:"occlusion-culling",level:2},{value:"Bone Count",id:"bone-count",level:2},{value:"Shaders",id:"shaders",level:2},{value:"Other Components",id:"other-components",level:2},{value:"Cloth",id:"cloth",level:3},{value:"Cameras",id:"cameras",level:3},{value:"Lights",id:"lights",level:3},{value:"Post Processing (v1 and v2)",id:"post-processing-v1-and-v2",level:3},{value:"Audio Sources",id:"audio-sources",level:3},{value:"Rigidbodies, Colliders, and Joints",id:"rigidbodies-colliders-and-joints",level:3},{value:"Particles",id:"particles",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Creating content for VRChat Quest is a challenge-- you have to create attractive, compelling content all the while keeping the content optimized for a mobile device. These are the same challenges that game developers must deal with while building for mobile."}),"\n",(0,o.jsx)(t.p,{children:"Here, we'll give you some general guidelines of what you need to keep in mind while building content for VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:"The items below will apply to both avatars and worlds unless otherwise noted."}),"\n",(0,o.jsxs)(t.p,{children:["Unity has a guide for ",(0,o.jsx)(t.a,{href:"https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences",children:"Optimizing your VR/AR Experiences "})," which has quite a lot of good points."]}),"\n",(0,o.jsxs)(t.p,{children:["There's also this ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=w0n4fuC4fNU",children:"excellent video on optimizing your VR content by Lucas Rizzotto"}),"! It is very well done and covers a lot of what we cover here. ",(0,o.jsx)(t.strong,{children:"This video was not created by VRChat or for VRChat specifically, and as a fair warning, contains some harsh language."})," A lot of the items in this post are covered in this video."]}),"\n",(0,o.jsx)(t.p,{children:"As a final note, all items on this list are subject to change. In other words, we're not quite done nailing down restrictions and recommendations, so keep that in mind."}),"\n",(0,o.jsx)(t.h2,{id:"limit-enforcement",children:"Limit Enforcement"}),"\n",(0,o.jsxs)(t.p,{children:["The Oculus Quest has several hard (and soft) limits for content on avatars. Check out ",(0,o.jsx)(t.a,{href:"/platforms/android/quest-content-limitations",children:"Quest Content Limitations"})," to find out more, as well as our page ",(0,o.jsx)(t.a,{href:"/avatars/avatar-performance-ranking-system",children:"Avatar Performance Ranking System"})," for some more details on how blocking works."]}),"\n",(0,o.jsx)(t.p,{children:"If you upload an avatar or avatar world that features avatars greatly exceeding our recommendations, that world or avatar may be removed from public access."}),"\n",(0,o.jsx)(t.h2,{id:"unity-profiler",children:"Unity Profiler"}),"\n",(0,o.jsxs)(t.p,{children:["We strongly, strongly recommend that you check out the ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/Profiler.html",children:"Unity Profiler"}),". Using the profiler, you can quantify precise values for  various performance metrics for your world or avatar. Of particular interest is probably the number of draw calls in a scene, or the proportional amount of frame time a component uses."]}),"\n",(0,o.jsx)(t.p,{children:"Of course, the profiler on your powerful PC won't represent how a profiler on the Quest might look, but you can still see that X component is using a ton of frame time versus rendering, or etc. Its all relative!"}),"\n",(0,o.jsxs)(t.p,{children:["There's lots of tutorials on how to use the Unity Profiler out there, including two from Unity: ",(0,o.jsx)(t.a,{href:"https://unity3d.com/learn/tutorials/topics/interface-essentials/profiler-overview-beginners",children:"Profiler Overview for Beginners"})," and the ",(0,o.jsx)(t.a,{href:"https://unity3d.com/learn/tutorials/topics/interface-essentials/introduction-profiler",children:"intermediate Introduction to the Profiler"}),". These tutorials were made for older versions of Unity, but still cover the basic concepts quite well."]}),"\n",(0,o.jsx)(t.h2,{id:"file-size",children:"File Size"}),"\n",(0,o.jsx)(t.p,{children:'You\'ve only got a limited amount of memory on mobile platforms, and keeping that in mind is extremely important. You can see the size of your assets once you\'ve built the content (press "Build & Publish" in the SDK) and search your Editor log for "statistics". The pre-compressed size is what you\'re looking for.'}),"\n",(0,o.jsx)(t.p,{children:"As a rule of thumb, avoid large (>1k) textures. They are the primary culprit of high memory usage. Utilization of vertex colors and flat colors can help greatly with reducing texture size."}),"\n",(0,o.jsxs)(t.p,{children:["Please note that Crunch compression does ",(0,o.jsx)(t.em,{children:"not"})," help with in-memory size! Crunch compression only helps with download size. Your content package should be within the limits without Crunch."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Worlds"})}),"\n",(0,o.jsx)(t.p,{children:"You cannot upload or access worlds that exceed 100MB in size after build-time compression for VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Avatars"})}),"\n",(0,o.jsx)(t.p,{children:"You should be aiming for a maximum of 5-8 MB. You cannot upload or wear/view avatars that exceed 10MB in size after build-time compression for VRChat Quest."}),"\n",(0,o.jsx)(t.h2,{id:"polygon-count",children:"Polygon Count"}),"\n",(0,o.jsx)(t.p,{children:"Keeping polygon count low is very important on mobile platforms. Although the Quest is quite powerful for a mobile headset, its hardware does have limits. Keeping an eye on your polygon count is very important to keep performance high."}),"\n",(0,o.jsxs)(t.p,{children:["These recommendations are technically enforced via our ",(0,o.jsx)(t.a,{href:"/avatars/avatar-performance-ranking-system",children:"Avatar Performance Ranking System"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Worlds"})}),"\n",(0,o.jsxs)(t.p,{children:["While building worlds, you should try to keep polygon count low. You want to leave room for the user's avatars as well. ",(0,o.jsx)(t.strong,{children:"We recommend that you budget approximately 50,000 triangles for your world in total."})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Avatars"})}),"\n",(0,o.jsxs)(t.p,{children:["The same general rules apply for avatars that apply for worlds. Keep in mind that you may have 10 or more users in the same room, so you'll want to budget your triangle usage pretty heavily. ",(0,o.jsx)(t.strong,{children:"We recommend that you aim for under 10,000 triangles for your avatar."})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"A hard polygon limit may be established in the near future for VRChat Quest avatars. It will not be much higher than 5,000 triangles, hence our suggestion."})}),"\n",(0,o.jsx)(t.p,{children:"This will be a challenge for avatar authors that prefer to import characters from various sources rather than create an avatar themselves. Decimation down to this level can be destructive, and you may need to look into techniques like retopologizing geometry to keep your polygon count low."}),"\n",(0,o.jsx)(t.h2,{id:"mesh-count",children:"Mesh Count"}),"\n",(0,o.jsx)(t.p,{children:"This applies to both worlds and avatars."}),"\n",(0,o.jsx)(t.p,{children:"No matter what tool you use to do it, you should limit the number of meshes you use in your content. For static objects in worlds, this isn't so important (due to the need for occlusion culling) but for avatars, it is exceedingly important."}),"\n",(0,o.jsx)(t.p,{children:"You should only ever have one Skinned Mesh Renderer on your avatar. Any accessories or additions to your avatar should be done in 3D editing software like Blender, and merged into the original mesh. Any animations or movement should be handled via shape keys or bones."}),"\n",(0,o.jsx)(t.p,{children:"A hard Mesh Count limit will be established in the near future for VRChat Quest avatars."}),"\n",(0,o.jsx)(t.p,{children:'For worlds, you should think in terms of "objects" in the world. A set of pots on the ground could be a single object, but you probably wouldn\'t want to merge the set of pots into the ground mesh. Otherwise, you might run into various optimization issues as well as difficulty with editing the world later on.'}),"\n",(0,o.jsx)(t.h2,{id:"materials",children:"Materials"}),"\n",(0,o.jsx)(t.p,{children:"Reducing material count is important for both avatars and worlds. Additional materials creates additional submeshes, which costs draw calls. Reducing the number of draw calls necessary to render your viewport is very important."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Worlds"})}),"\n",(0,o.jsx)(t.p,{children:"You should aim to have the minimal possible material count for your world. That being said, you can be a little less careful with the world than you are with avatars. Its best to think of your world as a collection of objects, and combine materials accordingly."}),"\n",(0,o.jsx)(t.p,{children:"For example, if you have a beach scene, a chair/umbrella/blanket set should probably be a single material on a single texture atlas. A set of rocks a little bit farther down the beach would be another material and texture. That way, you can separate out the object for occlusion culling purposes."}),"\n",(0,o.jsx)(t.p,{children:"Getting too aggressive with combining materials and atlasing in worlds results in some non-optimal behavior when Unity does batching and its own runtime optimization."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Avatars"})}),"\n",(0,o.jsx)(t.p,{children:"You should be aiming for 1 material on your avatar, although having 2 in cases where you need a different shader variant may be permissible. Atlasing textures is essential."}),"\n",(0,o.jsx)(t.p,{children:"A hard Material limit will be established in the near future for VRChat Quest avatars."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Avatars and Worlds"})}),"\n",(0,o.jsx)(t.p,{children:"You should be enabling GPU Instancing on all of your materials. Although the actual use case of this is more complex and technical, it is best just to turn it on."}),"\n",(0,o.jsx)(t.h2,{id:"textures",children:"Textures"}),"\n",(0,o.jsx)(t.p,{children:"Concerns for texture size apply evenly across both avatars and worlds, but keep in mind that avatar texture size should be reduced, as you'll have multiple avatars in a single instance (but only one world)."}),"\n",(0,o.jsx)(t.p,{children:"Keeping texture size low is important. You should aim for using 1k (1024x1024) resolution textures at maximum. You should also create efficiently packed atlases, allowing for more texture resolution in the same size."}),"\n",(0,o.jsx)(t.p,{children:"Avatars cannot exceed 10MB in size after compression, and worlds cannot exceed 100MB after compression. Since most of this is usually texture data, you should keep your textures small and compress them."}),"\n",(0,o.jsx)(t.p,{children:"Consider using Crunch compression, but keep in mind that this may break your avatars later on if a new Unity version employs an incompatible version of Crunch."}),"\n",(0,o.jsx)(t.h2,{id:"lighting",children:"Lighting"}),"\n",(0,o.jsx)(t.p,{children:"This section only applies for worlds."}),"\n",(0,o.jsxs)(t.p,{children:["Baking lighting for your world is ",(0,o.jsx)(t.strong,{children:"essential"}),". It is not unreasonable to write off real-time lights completely, as they are very expensive. Make extensive use of baked lighting and light probes. Keep your lightmap resolution low. Even with low lightmap resolution, lighting can look very good."]}),"\n",(0,o.jsx)(t.h2,{id:"occlusion-culling",children:"Occlusion Culling"}),"\n",(0,o.jsx)(t.p,{children:"This section only applies for worlds."}),"\n",(0,o.jsx)(t.p,{children:"Baking occlusion culling is exceedingly important. Doing so will allow the hardware to only render what it needs to, and ignore what you can't see. Setting up occlusion culling doesn't take long at all."}),"\n",(0,o.jsx)(t.p,{children:"This is also the reason you don't want to be too aggressive in merging meshes in worlds-- if you've got some objects like a building set on some ground, you probably don't want to merge the building mesh into the ground mesh so you can cull out the building."}),"\n",(0,o.jsx)(t.h2,{id:"bone-count",children:"Bone Count"}),"\n",(0,o.jsxs)(t.p,{children:["Keeping bone count low is important to keep the cost of skinning calls low. If a bone isn't animated by an animation or by the rig, you should merge its weights into its parent and delete the original bone. Tools like ",(0,o.jsx)(t.a,{href:"https://github.com/michaeldegroot/cats-blender-plugin",children:"Cat's Blender Plugin"})," make this exceedingly easy."]}),"\n",(0,o.jsx)(t.p,{children:"Since Dynamic Bones is disabled on VRChat Quest, this means that there's no need for extra bones for dynamic bits. You'll want to merge the weights for those bones into their parents."}),"\n",(0,o.jsx)(t.p,{children:"A hard Bone limit will be established in the near future for VRChat Quest avatars."}),"\n",(0,o.jsx)(t.admonition,{title:"Matching Rigs",type:"caution",children:(0,o.jsx)(t.p,{children:"Ensure that the basic bone layout and hierarchy of your rigs are identical, including scale, rotation, and position. This especially applies to your root (usually hip) bone. Having a mismatch can result in strange behavior when viewing content cross-platform."})}),"\n",(0,o.jsx)(t.h2,{id:"shaders",children:"Shaders"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Avatars"})}),"\n",(0,o.jsx)(t.p,{children:"Shaders are restricted for avatars in VRChat Quest, and you can only use the VRChat Mobile shaders included in the VRChat SDK."}),"\n",(0,o.jsxs)(t.p,{children:["You can read about these variants on our ",(0,o.jsx)(t.a,{href:"/platforms/android/quest-content-limitations",children:"Quest Content Limitations"})," page."]}),"\n",(0,o.jsx)(t.p,{children:"If you don't have a normal map for your avatar, don't use Bumped variants. It won't do anything for you, and you'll incur a little bit of a performance cost. Same for Specular."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Worlds"})}),"\n",(0,o.jsxs)(t.p,{children:["Shaders are not restricted for worlds in VRChat Quest. However, you should be ",(0,o.jsx)(t.em,{children:"extremely careful"})," when writing and using custom shaders. Aim for performance above all else. If you're looking for a highly optimized basic world shader, use ",(0,o.jsx)(t.code,{children:"Mobile/VRChat/Lightmapped"})," and bake your lighting."]}),"\n",(0,o.jsx)(t.p,{children:"You should avoid needing transparency completely. Alpha fill rate is a significant performance sink for mobile GPUs, so design around not having transparency whenever possible."}),"\n",(0,o.jsx)(t.h2,{id:"other-components",children:"Other Components"}),"\n",(0,o.jsx)(t.h3,{id:"cloth",children:"Cloth"}),"\n",(0,o.jsx)(t.p,{children:"Cloth components are disabled completely in VRChat Quest."}),"\n",(0,o.jsx)(t.h3,{id:"cameras",children:"Cameras"}),"\n",(0,o.jsx)(t.p,{children:"Camera components are disabled on avatars in VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:"They are permitted in worlds, but you should be careful not to go overboard with them."}),"\n",(0,o.jsx)(t.h3,{id:"lights",children:"Lights"}),"\n",(0,o.jsx)(t.p,{children:"Lights are disabled completely on avatars in VRChat Quest."}),"\n",(0,o.jsx)(t.h3,{id:"post-processing-v1-and-v2",children:"Post Processing (v1 and v2)"}),"\n",(0,o.jsx)(t.p,{children:"Post processing systems are disabled completely in VRChat Quest."}),"\n",(0,o.jsx)(t.h3,{id:"audio-sources",children:"Audio Sources"}),"\n",(0,o.jsx)(t.p,{children:"Audio sources are disabled completely on avatars in VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:"Audio sources are restricted in worlds in VRChat Quest."}),"\n",(0,o.jsx)(t.h3,{id:"rigidbodies-colliders-and-joints",children:"Rigidbodies, Colliders, and Joints"}),"\n",(0,o.jsx)(t.p,{children:"Rigidbodies, colliders, and joints are disabled completely on avatars in VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:"They are permitted in worlds, but you should be careful not to go overboard with them."}),"\n",(0,o.jsx)(t.h3,{id:"particles",children:"Particles"}),"\n",(0,o.jsx)(t.p,{children:"Particles are limited heavily on avatars in VRChat Quest."}),"\n",(0,o.jsx)(t.p,{children:"Numbers for limits pending."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
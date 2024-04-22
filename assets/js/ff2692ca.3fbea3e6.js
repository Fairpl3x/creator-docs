"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8342],{89404:(e,n,r)=>{r.d(n,{Ay:()=>d});var s=r(74848),t=r(28453);function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This information is only relevant to sellers with access to VRChat's Creator Economy SDK.",(0,s.jsx)("br",{}),"\nIf you are interested in setting up a store in VRChat, please ",(0,s.jsx)(n.a,{href:"https://www.surveymonkey.com/r/creator-economy-application-seller",children:"apply as a seller"}),"."]})})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},92784:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(74848),t=r(28453),o=r(89404);const d={title:"Udon Documentation",sidebar_position:4},i=void 0,c={id:"economy/sdk/udon-documentation",title:"Udon Documentation",description:"This page documents all Udon types, methods, and events related to the VRChat Creator Economy. You can use them to create your own Udon scripts with the Udon Node Graph or UdonSharp.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/economy/sdk/udon-documentation.md",sourceDirName:"economy/sdk",slug:"/economy/sdk/udon-documentation",permalink:"/creator-docs-i18n/economy/sdk/udon-documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/economy/sdk/udon-documentation.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821541,formattedLastUpdatedAt:"22 avr. 2024",sidebarPosition:4,frontMatter:{title:"Udon Documentation",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Testing Udon Products",permalink:"/creator-docs-i18n/economy/sdk/testing"},next:{title:"Example Prefabs",permalink:"/creator-docs-i18n/economy/sdk/examples/"}},l={},h=[{value:"Types",id:"types",level:2},{value:"UdonProduct",id:"udonproduct",level:3},{value:"Fields",id:"fields",level:4},{value:"Equals",id:"equals",level:4},{value:"IProduct",id:"iproduct",level:3},{value:"Equals",id:"equals-1",level:4},{value:"Methods",id:"methods",level:2},{value:"Store.DoesPlayerOwnProduct",id:"storedoesplayerownproduct",level:3},{value:"Store.DoesAnyPlayerOwnProduct",id:"storedoesanyplayerownproduct",level:3},{value:"Store.GetPlayersWhoOwnProduct",id:"storegetplayerswhoownproduct",level:3},{value:"Store.OpenGroupPage",id:"storeopengrouppage",level:3},{value:"Store.OpenGroupStorePage",id:"storeopengroupstorepage",level:3},{value:"Store.OpenGroupListing",id:"storeopengrouplisting",level:3},{value:"Store.SendProductEvent",id:"storesendproductevent",level:3},{value:"Store.ListPurchases",id:"storelistpurchases",level:3},{value:"Store.ListAvailableProducts",id:"storelistavailableproducts",level:3},{value:"Store.ListProductOwners",id:"storelistproductowners",level:3},{value:"Events",id:"events",level:2},{value:"OnPurchaseConfirmed",id:"onpurchaseconfirmed",level:3},{value:"OnPurchaseExpired",id:"onpurchaseexpired",level:3},{value:"OnPurchasesLoaded",id:"onpurchasesloaded",level:3},{value:"OnProductEvent",id:"onproductevent",level:3},{value:"OnListPurchases",id:"onlistpurchases",level:3},{value:"OnListAvailableProducts",id:"onlistavailableproducts",level:3},{value:"OnListProductOwners",id:"onlistproductowners",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsxs)(n.p,{children:["This page documents all Udon types, methods, and events related to the VRChat Creator Economy. You can use them to create your own ",(0,s.jsx)(n.a,{href:"/worlds/udon",children:"Udon scripts"})," with the ",(0,s.jsx)(n.a,{href:"/worlds/udon/graph",children:"Udon Node Graph"})," or ",(0,s.jsx)(n.a,{href:"https://udonsharp.docs.vrchat.com",children:"UdonSharp"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.p,{children:"VRChat's SDK contains objects types to support the management of Udon products that your customers can purchase."}),"\n",(0,s.jsx)(n.h3,{id:"udonproduct",children:"UdonProduct"}),"\n",(0,s.jsxs)(n.p,{children:["UdonProduct is a ",(0,s.jsx)(n.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/class-ScriptableObject.html",children:"ScriptableObject"})," that you can create in your project. It represents a product from your store, allowing you to interact with it in Udon.\nA world will only receive events based on products that are being used within it, therefore it is necessary to reference a product's UdonProduct equivalent in any UdonBehaviour at least once before uploading."]}),"\n",(0,s.jsx)(n.p,{children:"For example, even if you don't directly use the UdonProducts anywhere, you would need to have an array of UdonProducts on at least one UdonBehaviour somewhere in the scene to receive OnPurchaseConfirmed, OnPurchaseExpired or OnPurchasesLoaded events for those products across all UdonBehaviours."}),"\n",(0,s.jsx)(n.p,{children:'UdonProducts can be created with the UdonProductManager ("VRChat SDK" \u2192 "UdonProduct Manager") or by creating an UdonProduct asset manually ("Assets" \u2192 "Create" \u2192 "VRChat" \u2192 "UdonProduct").'}),"\n",(0,s.jsxs)(n.p,{children:["Read ",(0,s.jsx)(n.a,{href:"/economy/sdk/getting-started",children:"Getting Started"})," to learn more about creating an UdonProduct asset in your project."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"A blank UdonProduct after creation",src:r(98092).A+"",width:"1281",height:"478"})}),"\n",(0,s.jsx)(n.h4,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ID"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Unique identifier of your Udon product. Enter it by copying it from your store on the VRChat website."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The name of your Udon product."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The description of your Udon product."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"equals",children:"Equals"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),"\nThis method compares if the product ID is equal to another product's ID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"})," or ",(0,s.jsx)(n.code,{children:"UdonProduct"}),": Product to compare this product to."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),":  ",(0,s.jsx)(n.code,{children:"true"})," if the two products are equal, otherwise ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"iproduct",children:"IProduct"}),"\n",(0,s.jsx)(n.p,{children:"This is the equivalent of a UdonProduct returned by all the Udon Creator Economy methods and events."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ID"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Unique identifier of your Udon product."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The name of your Udon product."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"The description of your Udon product."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Buyer"}),(0,s.jsx)(n.td,{children:"VRCPlayerAPI"}),(0,s.jsx)(n.td,{children:"The player who purchased this product."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"equals-1",children:"Equals"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Description"}),"\nThis method compares if the product ID is equal to another product's ID."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"})," or ",(0,s.jsx)(n.code,{children:"UdonProduct"}),": Product to compare this product to."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),":  ",(0,s.jsx)(n.code,{children:"true"})," if the two products are equal, otherwise ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:'UdonProduct\'s and IProduct\'s "Name" & "Description" fields are currently filled in from the UdonProducts present in the world.'})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"The SDK contains methods for interacting with player purchases or VRChat's store pages. These methods can be found under the 'Store' namespace."}),"\n",(0,s.jsx)(n.h3,{id:"storedoesplayerownproduct",children:"Store.DoesPlayerOwnProduct"}),"\n",(0,s.jsx)(n.p,{children:"This method will check if a player owns a certain product."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": Player that you want to check the product ownership of."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonProduct"})," or ",(0,s.jsx)(n.code,{children:"IProduct"}),": Product that you want to check the ownership of."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),": ",(0,s.jsx)(n.code,{children:"true"})," if the player owns the product, otherwise ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Race condition",type:"caution",children:(0,s.jsxs)(n.p,{children:['It is not advised to use this immediately after the "Start" event. Udon may not have received players purchases yet. It is advised to use the ',(0,s.jsx)(n.a,{href:"#onpurchasesloaded",children:"OnPurchasesLoaded"})," event instead."]})}),"\n",(0,s.jsx)(n.h3,{id:"storedoesanyplayerownproduct",children:"Store.DoesAnyPlayerOwnProduct"}),"\n",(0,s.jsx)(n.p,{children:"This method will check if any player in the instance owns a certain product."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonProduct"})," or ",(0,s.jsx)(n.code,{children:"IProduct"}),": Product that you want to check the ownership of."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),": ",(0,s.jsx)(n.code,{children:"true"})," if any player in the instance owns the product, otherwise ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storegetplayerswhoownproduct",children:"Store.GetPlayersWhoOwnProduct"}),"\n",(0,s.jsx)(n.p,{children:"This method will get all the players who own a certain product."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonProduct"})," or ",(0,s.jsx)(n.code,{children:"IProduct"}),": Product that you want to check the ownership of."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi[]"}),": An array of players that own this product."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storeopengrouppage",children:"Store.OpenGroupPage"}),"\n",(0,s.jsxs)(n.p,{children:["Opens a group's ",(0,s.jsx)(n.strong,{children:"Group Info"})," page in VRChat's main menu."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string"}),": ID of a group (i.e. ",(0,s.jsx)(n.code,{children:"grp_00000000-0000-0000-0000-000000000000"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To find the group ID, open the group on VRChat.com and copy the ID from your browser's address bar."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storeopengroupstorepage",children:"Store.OpenGroupStorePage"}),"\n",(0,s.jsxs)(n.p,{children:["Opens a group's ",(0,s.jsx)(n.strong,{children:"Store"})," page in VRChat's main menu."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string"}),": ID of a group (i.e. ",(0,s.jsx)(n.code,{children:"grp_00000000-0000-0000-0000-000000000000"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To find the group ID, open the group on VRChat.com and copy the ID from your browser's address bar."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storeopengrouplisting",children:"Store.OpenGroupListing"}),"\n",(0,s.jsxs)(n.p,{children:["Opens a specific ",(0,s.jsx)(n.strong,{children:"listing"})," on a group's Store page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string"}),": ID of the listing (i.e. ",(0,s.jsx)(n.code,{children:"prod_00000000-0000-0000-0000-000000000000"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storesendproductevent",children:"Store.SendProductEvent"}),"\n",(0,s.jsxs)(n.p,{children:["Sends the ",(0,s.jsx)(n.a,{href:"#onproductevent",children:"OnProductEvent"})," event to all players in the instance on the target UdonBehaviour.\nBefore sending or receiving the networked event, this method checks if the player using ",(0,s.jsx)(n.code,{children:"SendProductEvent"})," has purchased the product."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonBehaviour"}),": The Udon Behaviour that will receive the resulting ",(0,s.jsx)(n.a,{href:"#onproductevent",children:"OnProductEvent"})," event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonProduct"})," or ",(0,s.jsx)(n.code,{children:"IProduct"}),": Product that you want to use for the event."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storelistpurchases",children:"Store.ListPurchases"}),"\n",(0,s.jsxs)(n.p,{children:["Sends an ",(0,s.jsx)(n.a,{href:"#onlistpurchases",children:"OnListPurchases"})," event to the target UdonBehaviour with an array of all the purchases made by a target player."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonBehaviour"}),": Udon Behaviour that will receive the resulting ",(0,s.jsx)(n.a,{href:"#onlistpurchases",children:"OnListPurchases"})," event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": Player that you want to check the purchased products from."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storelistavailableproducts",children:"Store.ListAvailableProducts"}),"\n",(0,s.jsxs)(n.p,{children:["Sends an ",(0,s.jsx)(n.a,{href:"#onlistavailableproducts",children:"OnListAvailableProducts"})," event to the target UdonBehaviour with an array containing all  products used in the world."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonBehaviour"}),": An UdonBehaviour that will receive the resulting ",(0,s.jsx)(n.a,{href:"#onlistavailableproducts",children:"OnListAvailableProducts"})," event."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"storelistproductowners",children:"Store.ListProductOwners"}),"\n",(0,s.jsxs)(n.p,{children:["Sends an ",(0,s.jsx)(n.a,{href:"#onlistproductowners",children:"OnListProductOwners"})," event to the target UdonBehaviour. This event allows you to retrieve the names of all your supporters and, for example, display their user names in your world."]}),"\n",(0,s.jsxs)(n.p,{children:["For this event to work properly, you'll first need to enable the ",(0,s.jsx)(n.a,{href:"/economy/products/udon#getting-udon-products-owners-in-the-sdk",children:'"Owners Names in Udon" setting'})," for the Udon product on ",(0,s.jsx)(n.a,{href:"https://vrchat.com/home/marketplace/storefront/products",children:"VRChat.com"}),". Otherwise, ",(0,s.jsx)(n.a,{href:"#onlistproductowners",children:"OnListProductOwners"})," will not fire."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Input"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonBehaviour"}),": An UdonBehaviour that will receive the resulting ",(0,s.jsx)(n.a,{href:"#onlistproductowners",children:"OnListProductOwners"})," event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"UdonProduct"}),": The UdonProduct for which to retrieve the owner's user names."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.admonition,{title:"Don't disable your script",type:"info",children:(0,s.jsx)(n.p,{children:"If a game object or its Udon behaviour is disabled, it won't execute most of the events related to the Creator Economy."})}),"\n",(0,s.jsx)(n.h3,{id:"onpurchaseconfirmed",children:"OnPurchaseConfirmed"}),"\n",(0,s.jsx)(n.p,{children:"This event is triggered once for any purchase that is received from VRChat servers. Purchases are loaded"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"when joining the instance, both for the local player and any other players,"}),"\n",(0,s.jsx)(n.li,{children:"when any new players join the instance, and"}),"\n",(0,s.jsx)(n.li,{children:"when any player in the instance purchases one of the world's products."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"}),": The product that has been purchased."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": The player who has purchased the product."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"bool"}),": ",(0,s.jsx)(n.code,{children:"true"})," if the purchase was just made, ",(0,s.jsx)(n.code,{children:"false"})," if it was made as part of loading the player's purchases upon joining the world."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onpurchaseexpired",children:"OnPurchaseExpired"}),"\n",(0,s.jsx)(n.p,{children:"This event is triggered when the local client detects that one of the products owned by a player in the instance has expired."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"}),": Product that has expired."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": The player whose product has expired."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onpurchasesloaded",children:"OnPurchasesLoaded"}),"\n",(0,s.jsx)(n.p,{children:"This event is triggered when all of a player's purchases have been loaded, either when the local player joins an instance or when another player has joined later.\nIf the player does not own any products, the event will still fire, and the IProduct[] array will be empty."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Outputs"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct[]"}),": An array of products owned by the player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": The player whose purchases have been loaded."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onproductevent",children:"OnProductEvent"}),"\n",(0,s.jsxs)(n.p,{children:["This event is triggered when a player uses ",(0,s.jsx)(n.a,{href:"#storesendproductevent",children:"Store.SendProductEvent"}),". Both the local player and VRChat's servers will check that the local player has purchased the product before executing this event."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"}),": The product that has been 'sent' alongside the event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": The player who has used their product."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onlistpurchases",children:"OnListPurchases"}),"\n",(0,s.jsxs)(n.p,{children:["This event is triggered when the local player uses ",(0,s.jsx)(n.a,{href:"#storelistpurchases",children:"Store.ListPurchases"}),". It returns an array of all the purchases made by the target player."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Outputs"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct[]"}),": An array of products owned by the target player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCPlayerApi"}),": The target player whose purchases have been retrieved."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onlistavailableproducts",children:"OnListAvailableProducts"}),"\n",(0,s.jsxs)(n.p,{children:["This event is triggered when the local player uses ",(0,s.jsx)(n.a,{href:"#storelistavailableproducts",children:"Store.ListAvailableProducts"}),". It returns an array of all the products (UdonProduct) used in the world."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Outputs"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct[]"}),": An array of IProducts representing all UdonProducts used in the world."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onlistproductowners",children:"OnListProductOwners"}),"\n",(0,s.jsxs)(n.p,{children:["This event is triggered after an Udon script calls ",(0,s.jsx)(n.a,{href:"#storelistproductowners",children:"Store.ListProductOwners"}),". It returns an array containing the display names of all players who own the target product. The list includes ",(0,s.jsx)(n.strong,{children:"every"})," user who owns that product, not just users in the current instance."]}),"\n",(0,s.jsxs)(n.p,{children:["To check if a player in the instance owns an Udon product, ",(0,s.jsx)(n.a,{href:"#storedoesplayerownproduct",children:"Store.DoesPlayerOwnProduct"})," should be used instead."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Outputs"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IProduct"}),": The product passed in the initial ",(0,s.jsx)(n.a,{href:"#storelistproductowners",children:"Store.ListProductOwners"})," call."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"string[]"}),": An array of strings containing the names of all users who own this product."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},98092:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/udonproduct-blank-d2ba5efa8f1787a9e50cf72de860ae66.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
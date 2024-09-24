"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1101],{53241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var a=t(74848),i=t(28453);const s={id:"learn-xcm-docs-multilocation-summary",title:"MultiLocation",sidebar_label:"Summary",description:"Learn about XCM fundamentals.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../multilocation-summary"},o="MultiLocation",c={id:"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-summary",title:"MultiLocation",description:"Learn about XCM fundamentals.",source:"@site/../docs/learn/xcm/fundamentals/multilocation/summary.md",sourceDirName:"learn/xcm/fundamentals/multilocation",slug:"/learn/xcm/fundamentals/multilocation-summary",permalink:"/docs/learn/xcm/fundamentals/multilocation-summary",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/fundamentals/multilocation/summary.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593e3,frontMatter:{id:"learn-xcm-docs-multilocation-summary",title:"MultiLocation",sidebar_label:"Summary",description:"Learn about XCM fundamentals.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../multilocation-summary"},sidebar:"docs",previous:{title:"MultiLocation",permalink:"/docs/learn/xcm/fundamentals/multilocation"},next:{title:"Junction(s)",permalink:"/docs/learn/xcm/fundamentals/multilocation-junctions"}},l={},r=[{value:"Location is relative",id:"location-is-relative",level:3},{value:"Hierarchical structure",id:"hierarchical-structure",level:3},{value:"So what is a MultiLocation: Simple example",id:"so-what-is-a-multilocation-simple-example",level:3},{value:"What&#39;s next:",id:"whats-next",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"multilocation",children:"MultiLocation"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://paritytech.github.io/polkadot/doc/xcm/v3/struct.MultiLocation.html",children:"MultiLocation"})," type\nidentifies any single location that exists within the world of consensus. It can represent all\nmanner of things that exist within consensus, from a scalable multi-shard blockchain such as\nPolkadot down to an ERC-20 asset account on a parachain. MultiLocations are used to identify places\nto send XCMs, places that can receive assets, and can even help describe the type of an asset\nitself, as we will see in ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals-multiasset",children:"MultiAsset"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"location-is-relative",children:"Location is relative"}),"\n",(0,a.jsx)(n.p,{children:"MultiLocation always expresses a location relative to the current location. It can be thought of as\na file system path, without the ability to directly express the \u201croot\u201d of the file system tree. This\nis for a simple reason: In the world of Polkadot, blockchains can be merged into, and split from\nother blockchains. A blockchain can begin as a standalone sovereign chain, and could eventually be\nelevated to become a parachain within a larger consensus. If it did that, then the meaning of \u201croot\u201d\nwould change overnight and this could spell chaos for XCMs and anything else using MultiLocation. To\nkeep things simple, we exclude this possibility altogether."}),"\n",(0,a.jsx)(n.h3,{id:"hierarchical-structure",children:"Hierarchical structure"}),"\n",(0,a.jsx)(n.p,{children:"Locations in XCM are hierarchical; some places in consensus are wholly encapsulated within other\nplaces in consensus. A parachain of Polkadot exists wholly within the overall Polkadot consensus; we\ncall this an interior location. Or a pallet exists wholly within a parachain or relay chain. Putting\nit more strictly, say we have two consensus systems, A and B. If any change in A implies a change in\nB, then we say A is interior to B."}),"\n",(0,a.jsx)(n.h3,{id:"so-what-is-a-multilocation-simple-example",children:"So what is a MultiLocation: Simple example"}),"\n",(0,a.jsx)(n.p,{children:"A quick summary of the previous points:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A MultiLocation identifies any single location that exists within the world of consensus."}),"\n",(0,a.jsx)(n.li,{children:"A MultiLocation is always relative to the current location."}),"\n",(0,a.jsx)(n.li,{children:"MultiLocations in XCM are hierarchical."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Now take a look at the MultiLocation struct:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"pub struct MultiLocation {\n    pub parents: u8,\n    pub interior: Junctions,\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"As we have already discussed, locations in XCM are hierarchical. The following image shows an\nexample of such a Hierarchy."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Simple Example",src:t(30258).A+"",width:"341",height:"271"})}),"\n",(0,a.jsxs)(n.p,{children:["Relay chain A completely encapsulates Parachain A and B (indicated by the arrows) and parachain A\nencapsulates an account ",(0,a.jsx)(n.code,{children:"0x00..."}),". So RelayA is higher in the hierarchy than ParaA and ParaB and can\nbe described as the ",(0,a.jsx)(n.code,{children:"parent"})," of these parachains. The ",(0,a.jsx)(n.code,{children:"parents: u8"})," in the MultiLocation struct\ndescribes the number of steps in the hierarchy we want to move up. The ",(0,a.jsx)(n.code,{children:"interior: Junctions"})," express\nthe steps in the hierarchy we want to move down. The ",(0,a.jsx)(n.code,{children:"Junctions"})," type will be further discussed in\nthe next chapter about ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals/multilocation-junctions",children:"Junctions"}),", but for now, it's just a way to express a way down\nthe hierarchy. As all MultiLocations are relative to the current location, Parachain B relative to\nParachain A is one step up and one step down in the hierarchy."]}),"\n",(0,a.jsxs)(n.p,{children:["To get a better understanding of this concept, we show some simple MultiLocations in the code\nexample below. The first two examples are relative to RelayA and the second set of examples is\nrelative to ParaB. In the ",(0,a.jsx)(n.code,{children:"Location"})," comments, we expressed the locations in text. The ",(0,a.jsx)(n.code,{children:".."})," express\na step up in the hierarchical structure (the \u201cparent\u201d or the encapsulating consensus system). The\n",(0,a.jsx)(n.code,{children:".."})," are followed by some number of ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals/multilocation-junctions",children:"Junctions"}),", all separated by ",(0,a.jsx)(n.code,{children:"/"}),". The ",(0,a.jsx)(n.code,{children:"X1"})," and\n",(0,a.jsx)(n.code,{children:"X2"})," variants are expressing the number of ",(0,a.jsx)(n.code,{children:"Junction"}),"s that we step down in the hierarchical\nstructure (see ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals/multilocation-junctions",children:"Junctions"})," for an explanation)."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"// From: RelayA\n// To: ParaB\n// Location: Parachain(2000)\nMultiLocation {parents: 0, interior: X1(Parachain(2000))};\n// To: Account in ParaA\n// Location: Parachain(1000)/AccountId32(0x00..)\nMultiLocation {\n    parents: 0,\n    interior: X2(\n        Parachain(1000),\n        AccountId32{network: None, id: [0u8; 32]}\n    )\n};\n\n// From: ParaB\n// To: RelayA\n// Location: ../Here\nMultiLocation {parents: 1, interior: Here};\n// To: Account in ParaA\n// Location: ../Parachain(1000)/AccountId32(0x00..)\nMultiLocation {\n    parents: 1,\n    interior: X2(\n        Parachain(1000),\n        AccountId32{network: None, id: [0u8; 32]}\n    )\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"whats-next",children:"What's next:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["More information about ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals/multilocation-junctions",children:"junctions"})]}),"\n",(0,a.jsxs)(n.li,{children:["More MultiLocation ",(0,a.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals/multilocation-example",children:"examples"})]}),"\n",(0,a.jsx)(n.li,{children:"Expressing assets using Multilocations: [MultiAsset][../multiasset.md]"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},30258:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/MultiLocation_simple_example-f2857ab7c4530ec864532d6ee3c4e30c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
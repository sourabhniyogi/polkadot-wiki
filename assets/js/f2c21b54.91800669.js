"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4410],{99698:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=s(74848),n=s(28453);const a={id:"build-storage",title:"Decentralized Storage",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"},r=void 0,o={id:"build/build-storage",title:"Decentralized Storage",description:"Information about building with decentralized storage.",source:"@site/../docs/build/build-storage.md",sourceDirName:"build",slug:"/build-storage",permalink:"/docs/build-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-storage.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726729589e3,frontMatter:{id:"build-storage",title:"Decentralized Storage",sidebar_label:"Decentralized Storage",description:"Information about building with decentralized storage.",keywords:["build","cloud","storage"],slug:"../build-storage"}},l={},d=[{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2},{value:"IPFS (Interplanetary File System)",id:"ipfs-interplanetary-file-system",level:3},{value:"Brief comparison of IPFS &amp; HTTP:",id:"brief-comparison-of-ipfs--http",level:4},{value:"Crust Storage",id:"crust-storage",level:3},{value:"Filebase",id:"filebase",level:3},{value:"Using Polkadot-JS Files (IPFS) module",id:"using-polkadot-js-files-ipfs-module",level:4}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Storage is an integral part of modern computer systems, and the same is true for distributed and\ndecentralized systems like a blockchain. When interacting with the Polkadot ecosystem, it will be\nhelpful if you familiarize yourself with the current Web3 approach towards decentralized storage."}),"\n",(0,i.jsx)(t.h2,{id:"dcs-decentralized-cloud-storage",children:"DCS (Decentralized Cloud Storage)"}),"\n",(0,i.jsx)(t.p,{children:"The key attribute that characterizes centralized cloud storage is the location of data."}),"\n",(0,i.jsx)(t.p,{children:"In decentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation."}),"\n",(0,i.jsxs)(t.p,{children:["This can be viewed as the shift from the centralized ",(0,i.jsx)(t.em,{children:"location-centric"})," storage approach to the\ndecentralized ",(0,i.jsx)(t.em,{children:"content-centric"})," approach."]}),"\n",(0,i.jsx)(t.h3,{id:"ipfs-interplanetary-file-system",children:"IPFS (Interplanetary File System)"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://ipfs.tech/",children:"IPFS"})," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet."]}),"\n",(0,i.jsx)(t.h4,{id:"brief-comparison-of-ipfs--http",children:"Brief comparison of IPFS & HTTP:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"IPFS"}),(0,i.jsx)(t.th,{children:"HTTP"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"network: peer-to-peer model (decentralized)"}),(0,i.jsx)(t.td,{children:"network: client-server model (centralized)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"requests: use a cryptographic hash of that data"}),(0,i.jsx)(t.td,{children:"requests: use the address on which data is hosted"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"accessibility: data is distributed to multiple nodes and can be accessed at any time. Bandwidth is high: nearest peer can serve the data"}),(0,i.jsx)(t.td,{children:"accessibility: data can only be accessed if the server is live and there are no interruptions in transmission. Bandwidth is limited: clients send requests to the same server"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"crust-storage",children:"Crust Storage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://crust.network",children:"Crust Network"})," provides a Web3.0 decentralized storage network for the\nMetaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust\nsupports multiple storage-layer protocols such as ",(0,i.jsx)(t.a,{href:"#ipfs-interplanetary-file-system",children:"IPFS"}),", and\nexposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also\ncapable of supporting data manipulating and computing."]}),"\n",(0,i.jsxs)(t.p,{children:["Crust provides a native cross-chain communication pallet based on\n",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-xcm",children:"XCMP"}),", called\n",(0,i.jsx)(t.a,{href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage",children:"xStorage"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The protocol also supports most smart contract platforms, including Ethereum, with its\n",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/docs/en/buildCrossChainSolution",children:"cross-chain dStorage solution"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Learn more about Crust",type:"note",children:(0,i.jsxs)(t.p,{children:["To learn more about Crust, check out the ",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/en",children:"Crust Network Wiki"}),". Try\nintegrating with Crust by following their\n",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/docs/en/build101",children:"Crust Storage 101"})," guide."]})}),"\n",(0,i.jsx)(t.h3,{id:"filebase",children:"Filebase"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://filebase.com",children:"Filebase"})," is the first S3-compatible object storage platform that allows you\nto store data in a secure, redundant, and performant manner across multiple decentralized storage\nnetworks."]}),"\n",(0,i.jsx)(t.p,{children:"Filebase offers a geo-redundant IPFS pinning service that allows you to pin files to IPFS across\nmultiple diverse geographic locations. All files uploaded to IPFS through Filebase are automatically\npinned to the Filebase infrastructure with 3x replication across the globe. This ensures that your\ndata is globally available and redundant at all times."}),"\n",(0,i.jsx)(t.p,{children:"Filebase acts as an easy on-ramp to IPFS and decentralized storage by offering a user-friendly web\nconsole dashboard, making drag-and-dropping files onto Web3 simple and easy. Filebase also provides\nan S3-compatible API for widespread integrations and configurations in current workflows."}),"\n",(0,i.jsx)(t.admonition,{title:"Learn more about Filebase",type:"note",children:(0,i.jsxs)(t.p,{children:["To learn more about Filebase, check out the ",(0,i.jsx)(t.a,{href:"https://docs.filebase.com",children:"Filebase Documentation"}),", and\nspecifically the documentation on\n",(0,i.jsx)(t.a,{href:"https://docs.filebase.com/web3-education/web3-tutorials/polkadot/polkadot-deploy-a-polkadot-dapp-on-decentralized-storage",children:"deploying Polkadot dApp on decentralized storage."}),"\nYou can get started with Filebase by signing up ",(0,i.jsx)(t.a,{href:"https://filebase.com/signup",children:"here."})]})}),"\n",(0,i.jsx)(t.h4,{id:"using-polkadot-js-files-ipfs-module",children:"Using Polkadot-JS Files (IPFS) module"}),"\n",(0,i.jsxs)(t.p,{children:["Polkadot-JS UI includes a decentralized storage module that allows Substrate-based chain users to\nupload their files to an\n",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW",children:"IPFS W3Auth Gateway"})," and use the\n",(0,i.jsx)(t.a,{href:"https://wiki.crust.network/docs/en/buildIPFSW3AuthPin",children:"IPFS W3Auth Pinning Service"})," to pin their\nfiles on Crust Network."]}),"\n",(0,i.jsx)(t.p,{children:"Start by uploading a single file or folder:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"upload",src:s(51947).A+"",width:"1917",height:"968"})}),"\n",(0,i.jsx)(t.p,{children:"Choose a Gateway:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"gateway",src:s(70192).A+"",width:"1916",height:"966"})}),"\n",(0,i.jsx)(t.p,{children:"Sign the message:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"sign",src:s(2297).A+"",width:"1918",height:"968"})}),"\n",(0,i.jsx)(t.p,{children:"You should be able to view the file info, as follows:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"file info",src:s(97318).A+"",width:"1917",height:"966"})}),"\n",(0,i.jsx)(t.p,{children:"As well as the file status:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"file statue",src:s(82415).A+"",width:"1916",height:"966"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The whole files module is decentralized, so your file directory is only cached in browser. The file\ndirectory info will not be visible if you switch to a new browser or clear the browser cache. The\nstorage module allows you to export file directory info from the current browser and import it to\nthe new browser."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"manage file dir",src:s(59956).A+"",width:"1917",height:"965"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["These above images are taken from this ",(0,i.jsx)(t.a,{href:"https://github.com/polkadot-js/apps/pull/6106",children:"pull request"})]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},51947:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-1-b911815ce2aa992118b70e76adff406a.png"},70192:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-2-b16e86055a05152fd766c6c8fb2478b3.png"},2297:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-3-6b5badf567f42956c47ce5dcd7edd78c.png"},97318:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-4-80c0cc191b4a9d3dbcd336f2413e1922.png"},82415:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-5-9906fb4cea40075a2e3eb225a9d14dd7.png"},59956:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/substrate-files-6-e1d84abd6cf39f3b3651ae30a33b38b5.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
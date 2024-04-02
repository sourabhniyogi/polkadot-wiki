"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5052],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||i;return n?t.createElement(m,o(o({ref:a},p),{},{components:n})):t.createElement(m,o({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1421:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"learn-elastic-scaling",title:"Polkadot's Elastic Scaling",sidebar_label:"Elastic Scaling",description:"Enabling parachains to scale on-demand through instantaneous coretime.",keywords:["elastic scaling","parachains","coretime","blockspace"],slug:"../learn-elastic-scaling"},c=void 0,s={unversionedId:"learn/learn-elastic-scaling",id:"learn/learn-elastic-scaling",title:"Polkadot's Elastic Scaling",description:"Enabling parachains to scale on-demand through instantaneous coretime.",source:"@site/../docs/learn/learn-elastic-scaling.md",sourceDirName:"learn",slug:"/learn-elastic-scaling",permalink:"/docs/learn-elastic-scaling",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-elastic-scaling.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1712052468,formattedLastUpdatedAt:"Apr 2, 2024",frontMatter:{id:"learn-elastic-scaling",title:"Polkadot's Elastic Scaling",sidebar_label:"Elastic Scaling",description:"Enabling parachains to scale on-demand through instantaneous coretime.",keywords:["elastic scaling","parachains","coretime","blockspace"],slug:"../learn-elastic-scaling"},sidebar:"docs",previous:{title:"Asynchronous Backing",permalink:"/docs/learn-async-backing"},next:{title:"SASSAFRAS",permalink:"/docs/learn-sassafras"}},p={},h=[{value:"Technical Considerations",id:"technical-considerations",level:2}],d={toc:h},u="wrapper";function m(e){var a=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(u,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The path of parablocks from their creation to their inclusion into the relay chain (discussed in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachain Protocol Page"),") spans two domains: the parachain's and\nrelay chain's. Scaling the Polkadot protocol involves consideration of how parablocks are produced\nby the parachain and then validated, processed, secured, made available for additional checks, and\nfinally included on the relay chain."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-async-backing"},"Asynchronous backing")," is the optimization implemented on the relay chain\nthat allows parachains to produce blocks faster and allows relay chain to process them seamlessly.\nAsynchronous backing also improves the parachain side with unincluded segments and augmented info\nthat allows collators to produce multiple parablocks even if the previous blocks are not yet\nincluded. This upgrade allows parachains to utilize up to 2 seconds execution time per parablock,\nand the relay chain will be able to include a parablock every 6 seconds."),(0,i.kt)("p",null,"With elastic scaling, parachains can use multiple cores to include multiple parablocks within the\nsame relay chain block."),(0,i.kt)("p",null,"The relay chain receives a sequence of parachain blocks on multiple cores, which are validated and\nchecked if all their state roots line up during their inclusion, but assume they\u2019re unrelated\nparachain blocks during backing, availability, and approvals. With elastic scaling implemented, a\nparachain's throughput depends upon its collator infrastructure."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/issues/1829"},"elastic scaling implementation")," will be\nrolled out in multiple phases. In the first phase, elastic scaling is set to work on parachains with\na trusted/permissioned collator set. With this restriction, it is possible to launch elastic scaling\nwithout changing the candidate receipt. After successfully implementing the first phase, changes can\nbe made to the candidate receipt so the collator set can be untrusted/permissionless again. The\nfinal phase will feature full integration with the Cumulus framework, enabling parachains to be\nconfigured to access multiple cores continuously."),(0,i.kt)("p",null,"Take, for example, a parachain that wants to submit four parablocks to the relay chain. Without\nelastic scaling, it will take 24 seconds to include all of them through one core. Remember that a\ncore is occupied after backing and before inclusion, i.e., for the whole data availability process.\nA block cannot enter a core before the previous block has been declared available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"              R1 <----- R2 <----- R3 <----- R4 <----- R5\n\nC1    |P1     B          I\n      |P2                B         I\n      |P3                          B         I\n      |P4                                    B         I\n\n")),(0,i.kt)("p",null,"The diagram above shows how the backing and inclusion of parablocks (P) happen within the same relay\nchain block (R). With one core (C1), a parablock is included every 6 seconds. Note how P4 is\nincluded after 30 seconds (not 24 seconds) because when P1 was pushed to the relay chain for being\nbacked, there was no previous parablock."),(0,i.kt)("p",null,"With elastic scaling, it will take just 12 seconds (3-second block time) to include all four\nparablocks using two cores."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"              R1 <----- R2 <----- R3\n\nC1    |P1     B          I\n      |P2                B         I\nC2    |P3     B          I\n      |P4                B         I\n\n")),(0,i.kt)("p",null,"The diagram above shows how four parablocks are backed and included in the relay chain using two\ncores (C1 and C2). Note how P2 and P4 are included after 18 seconds (not 12 seconds) because when P1\nand P3 were pushed to the relay chain for being backed, there were no other parablocks before them."),(0,i.kt)("h2",{id:"technical-considerations"},"Technical Considerations"),(0,i.kt)("p",null,"If the pace per core on the relay chain will not change (backing and inclusion every 6 seconds per\ncore), on the parachain side, collators will need to increase the parablock production rate to push\nP1 and P2 to the two relay chain cores."),(0,i.kt)("p",null,"Assuming a constant number of cores, from the relay chain side, elastic scaling will not see major\nupgrades as a parachain will use multiple existing cores instead of just one. However, from the\nparachain side, collators must produce more parablocks per unit of time, implying that technical\nspecifications for collators will likely increase."),(0,i.kt)("p",null,"For more advanced technical challenges, see the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/issues/1829"},"Elastic Scaling GitHub PR"),"."))}m.isMDXComponent=!0}}]);
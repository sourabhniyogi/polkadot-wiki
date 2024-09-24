"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9110],{24225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var t=s(74848),a=s(28453);const i={id:"learn-xcm-docs-journey-channels",title:"Channels and Bridges",sidebar_label:"Channels and Bridges",description:"Establishment of HRMP Channels between Parachains.",keywords:["xcm","cross-consensus messaging","channels","bridges"],slug:"../journey-channels"},r="Channels",c={id:"learn/xcm/journey/learn-xcm-docs-journey-channels",title:"Channels and Bridges",description:"Establishment of HRMP Channels between Parachains.",source:"@site/../docs/learn/xcm/journey/channels-and-bridges.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-channels",permalink:"/docs/learn/xcm/journey-channels",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/channels-and-bridges.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593e3,frontMatter:{id:"learn-xcm-docs-journey-channels",title:"Channels and Bridges",sidebar_label:"Channels and Bridges",description:"Establishment of HRMP Channels between Parachains.",keywords:["xcm","cross-consensus messaging","channels","bridges"],slug:"../journey-channels"},sidebar:"docs",previous:{title:"Locks",permalink:"/docs/learn/xcm/journey-locks"},next:{title:"Executor Configuration",permalink:"/docs/learn/xcm/config-deep-dive"}},o={},h=[{value:"HrmpNewChannelOpenRequest",id:"hrmpnewchannelopenrequest",level:2},{value:"HrmpChannelAccepted",id:"hrmpchannelaccepted",level:2},{value:"HrmpChannelClosing",id:"hrmpchannelclosing",level:2},{value:"ExportMessage",id:"exportmessage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"channels",children:"Channels"})}),"\n",(0,t.jsx)(n.p,{children:"XCM has instructions that aid in the establishment of a HRMP channel between parachains. HRMP\nchannels are always unidirectional (one-way); every channel has a static sender and a static\nrecipient. To send messages in the opposite direction (i.e. from recipient to sender), another new\nHRMP channel must be opened. Unlike other XCM instructions, these HRMP instructions are related to\nthe underlying transport mechanism, and will normally not be sent by developers. We still want to\nlist them, as they are part of XCM:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HrmpNewChannelOpenRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HrmpChannelAccepted"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"HrmpChannelClosing"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hrmpnewchannelopenrequest",children:"HrmpNewChannelOpenRequest"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"HrmpNewChannelOpenRequest {\n    #[codec(compact)]\n    sender: u32,\n    #[codec(compact)]\n    max_message_size: u32,\n    #[codec(compact)]\n    max_capacity: u32,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HrmpNewChannelOpenRequest"})," is an instruction to notify about a new incoming HRMP channel. This\nmessage is meant to be sent by the relay chain to a parachain."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sender"})," field represents the ParaId of the parachain initializing the channel. This parachain\nwill also be the sender in the to-be opened channel."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"max_message_size"})," field is the maximum size of a message that is send through the channel. This\nfield is the size proposed by the sender, and needs to be accepted by the recipient."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"max_capacity"})," is the maximum number of messages that can be queued in the channel."]}),"\n",(0,t.jsx)(n.h2,{id:"hrmpchannelaccepted",children:"HrmpChannelAccepted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"HrmpChannelAccepted {\n    #[codec(compact)]\n    recipient: u32,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HrmpChannelAccepted"})," instruction is used to notify about that a previously sent open channel\nrequest has been accepted by the recipient. That means that the channel will be opened during the\nnext relay chain session change. This message is meant to be sent by the relay chain to a parachain."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"recipient"})," field represents the ParaId of the parachain that initialized the channel, so it\nequals the ",(0,t.jsx)(n.code,{children:"sender"})," field in the preceding ",(0,t.jsx)(n.code,{children:"HrmpNewChannelOpenRequest"})," instruction."]}),"\n",(0,t.jsx)(n.h2,{id:"hrmpchannelclosing",children:"HrmpChannelClosing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"HrmpChannelClosing {\n    #[codec(compact)]\n    initiator: u32,\n    #[codec(compact)]\n    sender: u32,\n    #[codec(compact)]\n    recipient: u32,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"HrmpChannelClosing"})," instruction is used to notify that the other party in an open channel\ndecided to close it. In particular, ",(0,t.jsx)(n.code,{children:"initiator"})," is going to close the channel opened from ",(0,t.jsx)(n.code,{children:"sender"}),"\nto the ",(0,t.jsx)(n.code,{children:"recipient"}),". The close will be enacted at the next relay chain session change. This message\nis meant to be sent by the relay chain to a para."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"initiator"})," field represents the ParaId of the parachain that is closing the channel. It is\nequal to either the ",(0,t.jsx)(n.code,{children:"sender"})," or ",(0,t.jsx)(n.code,{children:"recipient"})," field."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sender"})," field represents the ParaId of the parachain that is the sender side of the channel."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"recipient"})," field represents the ParaId of the parachain that is the recipient side of the\nchannel."]}),"\n",(0,t.jsx)(n.p,{children:"Important to note is that both the sender and recipient can close the channel."}),"\n",(0,t.jsx)(n.h1,{id:"message-export-bridging",children:"Message Export (Bridging)"}),"\n",(0,t.jsxs)(n.p,{children:["XCM has an instruction that allows us to send an XCM to a Non-Local Consensus System, meaning to\nMultiLocation that is outside our current GlobalConsensus. For example, it allows us to send an XCM\nfrom Kusama to Polkadot or from Polkadot to an Ethereum-based chain. Exporting an XCM to another\nNon-Local Consensus System will tend to utilize some extra consensus layer/mechanism, the obvious\none being a bridge. The instruction to export an XCM is called ",(0,t.jsx)(n.code,{children:"ExportMessage"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"exportmessage",children:"ExportMessage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"ExportMessage { network: NetworkId, destination: InteriorMultiLocation, xcm: Xcm<()> },\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ExportMessage"})," instruction can be used to export a message to a Non-Local Consensus System. The\nmessage is sent to the bridge (or other consensus mechanism) that is able to export the message. A\nfee is charged for exporting the message via the bridge."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"network"})," field is the remote consensus system to which the message should be exported."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"destination"})," field is the location relative to the remote consensus system to which the message\nshould be sent on arrival."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"xcm"})," field is the message to be exported."]}),"\n",(0,t.jsxs)(n.p,{children:["As an example, to export a message for execution on Statemine (parachain ",(0,t.jsx)(n.code,{children:"#1000"})," in the Kusama\nnetwork), you would call with ",(0,t.jsx)(n.code,{children:"network: NetworkId::Kusama"})," and ",(0,t.jsx)(n.code,{children:"destination: X1(Parachain(1000))"}),".\nAlternatively, to export a message for execution on Polkadot, you would call with\n",(0,t.jsx)(n.code,{children:"network: NetworkId:: Polkadot"})," and ",(0,t.jsx)(n.code,{children:"destination: Here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(96540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
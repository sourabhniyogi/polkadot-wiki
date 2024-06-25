"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,N=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(N,o(o({ref:t},u),{},{components:n})):a.createElement(N,o({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"dunesql-cheatsheet",title:"DuneSQL Cheatsheet",sidebar_label:"DuneSQL Cheatsheet",description:"A brief comparison of common features between DuneSQL and Common SQL.",keywords:["polkadot","dashboard","dune","sql","dunesql"],slug:"../dunesql-cheatsheet"},d="DuneSQL Cheatsheet",s={unversionedId:"general/dune-analytics/dunesql-cheatsheet",id:"general/dune-analytics/dunesql-cheatsheet",title:"DuneSQL Cheatsheet",description:"A brief comparison of common features between DuneSQL and Common SQL.",source:"@site/../docs/general/dune-analytics/dunesql-cheatsheet.md",sourceDirName:"general/dune-analytics",slug:"/general/dunesql-cheatsheet",permalink:"/docs/general/dunesql-cheatsheet",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/dune-analytics/dunesql-cheatsheet.md",tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"dunesql-cheatsheet",title:"DuneSQL Cheatsheet",sidebar_label:"DuneSQL Cheatsheet",description:"A brief comparison of common features between DuneSQL and Common SQL.",keywords:["polkadot","dashboard","dune","sql","dunesql"],slug:"../dunesql-cheatsheet"},sidebar:"docs",previous:{title:"Project Dashboards",permalink:"/docs/general/project-dashboards"},next:{title:"Parity Data Dashboards",permalink:"/docs/parity-data-dashboards"}},u={},p=[],m={toc:p},c="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dunesql-cheatsheet"},"DuneSQL Cheatsheet"),(0,l.kt)("p",null,"It is important to note that when querying on Dune Analytics, DuneSQL is employed. Although most\nfunctions and syntax are similar to standard SQL, there are still some differences compared to other\nversions of SQL. Below is a comparison table of common features between DuneSQL and Google BigQuery\nSQL."),(0,l.kt)("admonition",{title:"DuneSQL Reference",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL documentation"),".")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Problem Type"),(0,l.kt)("th",{parentName:"tr",align:null},"BigQuery"),(0,l.kt)("th",{parentName:"tr",align:null},"DuneSQL(V2)"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON Reading Method"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'JSON_EXTRACT_SCALAR(call_args, "$.remark")')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"JSON_EXTRACT_SCALAR(JSON_PARSE(call_args), '$.remark')")),(0,l.kt)("td",{parentName:"tr",align:null},"In DuneSQL, ",(0,l.kt)("inlineCode",{parentName:"td"},"JSON_PARSE")," is needed to split the JSON if it is initially not in JSON format but is transformed into a JSON string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"JSON array to SQL array"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"JSON_EXTRACT_ARRAY(JSON_EXTRACT(pv, '$.others'))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cast(json_extract(pv, '$.others') as array<json>)")),(0,l.kt)("td",{parentName:"tr",align:null},"BigQuery uses a function for this conversion, while DuneSQL utilizes casting and supports the JSON data type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEX to UTF8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAFE_CONVERT_BYTES_TO_STRING(FROM_HEX(SUBSTR(hex_encode, 3)))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FROM_UTF8(from_hex(SUBSTR(hex_encode, 3)))")),(0,l.kt)("td",{parentName:"tr",align:null},"In DuneSQL, the ",(0,l.kt)("inlineCode",{parentName:"td"},"SAFE_CONVERT_BYTES_TO_STRING")," is not required.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time Series"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'TIMESTAMP_TRUNC(block_time, DAY) >= TIMESTAMP("2023-12-01")')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"block_time >= date('2023-12-01')")),(0,l.kt)("td",{parentName:"tr",align:null},"Time conversion in DuneSQL is simpler, involving direct usage of ",(0,l.kt)("inlineCode",{parentName:"td"},"variable operator date(value)"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Type Conversion (FLOAT64 to DOUBLE)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.lastRecordedRewardCounter') AS FLOAT64)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CAST(JSON_EXTRACT_SCALAR(nominationpools_rewardpools, '$.lastRecordedRewardCounter')")),(0,l.kt)("td",{parentName:"tr",align:null},"BigQuery refers to the data format as FLOAT64, while in DuneSQL, it is termed DOUBLE.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Handling Null Values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IFNULL(prev_member_bonded, 0)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"COALESCE(prev_member_bonded, 0)")),(0,l.kt)("td",{parentName:"tr",align:null},"In DuneSQL, BigQuery's ",(0,l.kt)("inlineCode",{parentName:"td"},"IFNULL")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"td"},"COALESCE"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calculating Local Time and Subtracting Days"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TIMESTAMP_TRUNC(ts, DAY) >= TIMESTAMP(DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ts >= date(current_date - interval '30' day)")),(0,l.kt)("td",{parentName:"tr",align:null},"In BigQuery, operations on dates require functions, but DuneSQL allows direct use of ",(0,l.kt)("inlineCode",{parentName:"td"},"+")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"-"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using Hyperlinks in Tables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SELECT concat(concat(concat(\"<a href='https://analytics.polkaholic.io/superset/dashboard/77/?account=\", address_ss58), \"'>\"), if(address_name is null, concat(address_ss58, '</a>'), concat(address_name, '</a>')))")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CONCAT('<a target=\"_new\" href=\"https://analytics.polkaholic.io/superset/dashboard/77/?account=', address_ss58, '\">', address_ss58 ,'</a>') AS address_ss58")),(0,l.kt)("td",{parentName:"tr",align:null},"DuneSQL enables string concatenation using ",(0,l.kt)("inlineCode",{parentName:"td"},"CONCAT"),", making it straightforward compared to the multiple ",(0,l.kt)("inlineCode",{parentName:"td"},"concat")," functions required in BigQuery.")))))}N.isMDXComponent=!0}}]);
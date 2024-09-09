"use strict";(self.webpackChunkopendomains=self.webpackChunkopendomains||[]).push([[554],{7755:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});var r=s(4848),i=s(8453);const o={sidebar_position:1,title:"Understanding DNS"},d="Understanding DNS Record Types",t={id:"tutorial-basics/dns",title:"Understanding DNS",description:"DNS (Domain Name System) is essential for translating domain names into IP addresses, enabling browsers to find websites. Here's a quick guide to different DNS record types you might encounter:",source:"@site/docs/tutorial-basics/dns.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/dns",permalink:"/docs/tutorial-basics/dns",draft:!1,unlisted:!1,editUrl:"https://github.com/open-domains/website/tree/main/docs/tutorial-basics/dns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Understanding DNS"},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Registering",permalink:"/docs/tutorial-basics/register"}},c={},l=[{value:"<strong>A Record</strong>",id:"a-record",level:2},{value:"<strong>AAAA Record</strong>",id:"aaaa-record",level:2},{value:"<strong>CNAME Record</strong>",id:"cname-record",level:2},{value:"<strong>MX Record</strong>",id:"mx-record",level:2},{value:"<strong>TXT Record</strong>",id:"txt-record",level:2},{value:"<strong>SRV Record</strong>",id:"srv-record",level:2},{value:"<strong>CAA Record</strong>",id:"caa-record",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"understanding-dns-record-types",children:"Understanding DNS Record Types"})}),"\n",(0,r.jsx)(n.p,{children:"DNS (Domain Name System) is essential for translating domain names into IP addresses, enabling browsers to find websites. Here's a quick guide to different DNS record types you might encounter:"}),"\n",(0,r.jsx)(n.h2,{id:"a-record",children:(0,r.jsx)(n.strong,{children:"A Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Maps a domain name to an IPv4 address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:"192.0.2.1"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aaaa-record",children:(0,r.jsx)(n.strong,{children:"AAAA Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Maps a domain name to an IPv6 address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:"2001:db8::1"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"cname-record",children:(0,r.jsx)(n.strong,{children:"CNAME Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Alias for another domain name. It points one domain name to another."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"www.example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:"example.com"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mx-record",children:(0,r.jsx)(n.strong,{children:"MX Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Specifies the mail servers responsible for receiving emails for the domain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:"mail.example.com"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"txt-record",children:(0,r.jsx)(n.strong,{children:"TXT Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Stores text-based information related to the domain, often used for verification and security purposes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:'"v=spf1 include:_spf.example.com ~all"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"srv-record",children:(0,r.jsx)(n.strong,{children:"SRV Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Defines the location of servers for specific services, like VoIP or instant messaging."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"_sip._tcp.example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:"sipserver.example.com"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"caa-record",children:(0,r.jsx)(n.strong,{children:"CAA Record"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Specifies which certificate authorities (CAs) are allowed to issue certificates for the domain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Example"}),": ",(0,r.jsx)(n.code,{children:"example.com"})," \u2192 ",(0,r.jsx)(n.code,{children:'0 issue "letsencrypt.org"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Learn more about ",(0,r.jsx)(n.a,{href:"https://example.com/dns-management",children:"DNS record management"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Explore ",(0,r.jsx)(n.a,{href:"https://example.com/advanced-dns",children:"advanced DNS configurations"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Join the ",(0,r.jsx)(n.a,{href:"https://example.com/dns-community",children:"DNS community"})," for support and discussions."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(6540);const i={},o=r.createContext(i);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2663:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var n=r(482),s=r(9108),i=r(2563),a=r.n(i),l=r(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,101)),"/Users/yulinfeng/src/open-react-template/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=[],u="/_not-found",x={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8856:(e,t,r)=>{Promise.resolve().then(r.bind(r,9631)),Promise.resolve().then(r.t.bind(r,1476,23))},8589:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9631:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5344),s=r(3729),i=r(6506);function a(){let[e,t]=(0,s.useState)(!1),r=(0,s.useRef)(null),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let n=({target:n})=>{a.current&&r.current&&(!e||a.current.contains(n)||r.current.contains(n)||t(!1))};return document.addEventListener("click",n),()=>document.removeEventListener("click",n)}),(0,s.useEffect)(()=>{let r=({keyCode:r})=>{e&&27===r&&t(!1)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)}),(0,n.jsxs)("div",{className:"md:hidden",children:[(0,n.jsxs)("button",{ref:r,className:`hamburger ${e&&"active"}`,"aria-controls":"mobile-nav","aria-expanded":e,onClick:()=>t(!e),children:[n.jsx("span",{className:"sr-only",children:"Menu"}),(0,n.jsxs)("svg",{className:"w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("rect",{y:"4",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"11",width:"24",height:"2",rx:"1"}),n.jsx("rect",{y:"18",width:"24",height:"2",rx:"1"})]})]}),n.jsx("nav",{id:"mobile-nav",ref:a,className:"absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out",style:e?{maxHeight:a.current?.scrollHeight,opacity:1}:{maxHeight:0,opacity:.8},children:(0,n.jsxs)("ul",{className:"bg-gray-800 px-4 py-2",children:[n.jsx("li",{children:n.jsx(i.default,{href:"/signin",className:"flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center",onClick:()=>t(!1),children:"Sign in"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/signup",className:"font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out",onClick:()=>t(!1),children:"Sign up"})})]})})]})}},101:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,metadata:()=>p});var n=r(5036),s=r(7841),i=r.n(s),a=r(6811),l=r.n(a);r(2729);var o=r(6274);let c=(0,r(6843).createProxy)(String.raw`/Users/yulinfeng/src/open-react-template/components/ui/mobile-menu.tsx`),{__esModule:d,$$typeof:u}=c,x=c.default;function m(){return n.jsx("header",{className:"absolute w-full z-30",children:n.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,n.jsxs)("div",{className:"flex items-center justify-between h-20",children:[n.jsx("div",{className:"shrink-0 mr-4",children:n.jsx(o.default,{href:"/",className:"block","aria-label":"Cruip",children:n.jsx("div",{children:"Personium"})})}),n.jsx("nav",{className:"hidden md:flex md:grow"}),n.jsx(x,{})]})})})}let p={title:"Create Next App",description:"Generated by create next app"};function h({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:`${i().variable} ${l().variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`,children:(0,n.jsxs)("div",{className:"flex flex-col min-h-screen overflow-hidden",children:[n.jsx(m,{}),e]})})})}},2729:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,999],()=>r(2663));module.exports=n})();
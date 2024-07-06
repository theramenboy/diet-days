import{d,q as w,o as i,p as u,w as c,v as l,E as h,G as b,u as t,a4 as j,a5 as S,D as k,c as f,h as g,a6 as O,a7 as z,s as m,k as p,a8 as D,a9 as I,e as P,a as B,n as $,aa as x,ab as M,ac as F,ad as L,ae as N,af as E,ag as q,ah as G,ai as H,aj as K,ak as U,al as X,am as R,an as Z,ao as J}from"./index-C5AEnRaf.js";const oe=d({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(s,{emit:e}){const n=w(s,e);return(r,_)=>(i(),u(t(j),h(b(t(n))),{default:c(()=>[l(r.$slots,"default")]),_:3},16))}}),ne=d({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(s,{emit:e}){const n=w(s,e);return(r,_)=>(i(),u(t(S),h(b(t(n))),{default:c(()=>[l(r.$slots,"default")]),_:3},16))}});/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(s,e)=>({size:a,strokeWidth:o=2,absoluteStrokeWidth:n,color:r,class:_,...v},{attrs:A,slots:C})=>k("svg",{...y,width:a||y.width,height:a||y.height,stroke:r||y.stroke,"stroke-width":n?Number(o)*24/Number(a):o,...A,class:["lucide",`lucide-${Q(s)}`],...v},[...e.map(T=>k(...T)),...C.default?[C.default()]:[]]);/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=V("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.364.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=V("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ee=P("span",{class:"sr-only"},"Close",-1),re=d({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:e}){const a=s,o=e,n=f(()=>{const{class:_,...v}=a;return v}),r=w(n,o);return(_,v)=>(i(),u(t(I),null,{default:c(()=>[g(t(O),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),g(t(z),m(t(r),{class:t(p)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:c(()=>[l(_.$slots,"default"),g(t(D),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:c(()=>[g(t(W),{class:"w-4 h-4"}),ee]),_:1})]),_:3},16,["class"])]),_:3}))}}),le=d({__name:"DialogFooter",props:{class:{}},setup(s){const e=s;return(a,o)=>(i(),B("div",{class:$(t(p)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",e.class))},[l(a.$slots,"default")],2))}}),ce=d({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(s){const e=s;return(a,o)=>(i(),u(t(D),h(b(e)),{default:c(()=>[l(a.$slots,"default")]),_:3},16))}}),de=d({__name:"DialogHeader",props:{class:{}},setup(s){const e=s;return(a,o)=>(i(),B("div",{class:$(t(p)("flex flex-col gap-y-1.5 text-center sm:text-left",e.class))},[l(a.$slots,"default")],2))}}),ie=d({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:n,...r}=e;return r}),o=x(a);return(n,r)=>(i(),u(t(M),m(t(o),{class:t(p)("text-sm text-muted-foreground",e.class)}),{default:c(()=>[l(n.$slots,"default")]),_:3},16,["class"]))}}),ue=d({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:n,...r}=e;return r}),o=x(a);return(n,r)=>(i(),u(t(F),m(t(o),{class:t(p)("text-lg font-semibold leading-none tracking-tight",e.class)}),{default:c(()=>[l(n.$slots,"default")]),_:3},16,["class"]))}}),pe=d({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){const e=s;return(a,o)=>(i(),u(t(L),h(b(e)),{default:c(()=>[l(a.$slots,"default")]),_:3},16))}}),fe=d({__name:"Accordion",props:{collapsible:{type:Boolean},disabled:{type:Boolean},dir:{},orientation:{},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(s,{emit:e}){const n=w(s,e);return(r,_)=>(i(),u(t(N),h(b(t(n))),{default:c(()=>[l(r.$slots,"default")]),_:3},16))}}),me=d({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:n,...r}=e;return r}),o=x(a);return(n,r)=>(i(),u(t(E),m(t(o),{class:t(p)("border-b",e.class)}),{default:c(()=>[l(n.$slots,"default")]),_:3},16,["class"]))}}),_e=d({__name:"AccordionContent",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:o,...n}=e;return n});return(o,n)=>(i(),u(t(q),m(a.value,{class:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:c(()=>[P("div",{class:$(t(p)("pb-4 pt-0",e.class))},[l(o.$slots,"default")],2)]),_:3},16))}}),ge=d({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:o,...n}=e;return n});return(o,n)=>(i(),u(t(H),{class:"flex"},{default:c(()=>[g(t(G),m(a.value,{class:t(p)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e.class)}),{default:c(()=>[l(o.$slots,"default"),l(o.$slots,"icon",{},()=>[g(t(Y),{class:"h-4 w-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}}),he=d({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:o,...n}=e;return n});return(o,n)=>(i(),u(t(K),m({class:t(p)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e.class)},a.value),{default:c(()=>[l(o.$slots,"default")]),_:3},16,["class"]))}}),be=d({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:o,...n}=e;return n});return(o,n)=>(i(),u(t(U),m(a.value,{class:t(p)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e.class)}),{default:c(()=>[l(o.$slots,"default")]),_:3},16,["class"]))}}),ve=d({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const e=s,a=f(()=>{const{class:n,...r}=e;return r}),o=x(a);return(n,r)=>(i(),u(t(X),m(t(o),{class:t(p)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e.class)}),{default:c(()=>[l(n.$slots,"default")]),_:3},16,["class"]))}}),se=R("diet-track-settings",{}),ye=Z("main",()=>{const s=se;function e(r){s.value.username=r}function a(r){r!=null&&r.completed||(s.value.currentDietDay=r)}function o(r){s.value.dietDays=r}function n(r){s.value.state=r}return{settings:s,setupUsername:e,setupCurrentDay:a,setupDietDays:o,setupState:n}}),te=J("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}}),we=d({__name:"Badge",props:{variant:{},class:{}},setup(s){const e=s;return(a,o)=>(i(),B("div",{class:$(t(p)(t(te)({variant:a.variant}),e.class))},[l(a.$slots,"default")],2))}});export{oe as _,ve as a,be as b,he as c,fe as d,pe as e,ue as f,ie as g,de as h,ce as i,le as j,re as k,ne as l,we as m,ge as n,_e as o,me as p,ye as u};
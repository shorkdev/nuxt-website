import{s as w,v as g,C as j,r as h,x as R,D as M,E as q,G as V,_ as J,H as F,I as B,J as W,K as G,z as Q,L as Y,M as L,N as Z,O as x,B as C,o as P,c as A,F as ee,P as te,Q as S,R as oe,w as b,b as D,S as z,T as K,U as ne,V as se,W as le,X as ae,Y as re,a as ue,d as ie,t as ce,Z as de}from"./Dxg1tV5G.js";import{u as pe}from"./B60pfxz9.js";import{I as N,u as T,o as y,A as $,N as U,a as I,l as fe}from"./CbhjDNl-.js";import{s as ve}from"./fxHZOslV.js";import{t as me,i as O,l as ge}from"./EHGVENuo.js";const ye={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};var he=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(he||{});let X=Symbol("DisclosureContext");function H(e){let c=V(X,null);if(c===null){let p=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,H),p}return c}let _=Symbol("DisclosurePanelContext");function be(){return V(_,null)}let De=w({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:c,attrs:p}){let r=g(e.defaultOpen?0:1),o=g(null),d=g(null),a={buttonId:g(`headlessui-disclosure-button-${N()}`),panelId:g(`headlessui-disclosure-panel-${N()}`),disclosureState:r,panel:o,button:d,toggleDisclosure(){r.value=T(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(l){a.closeDisclosure();let i=l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?y(l):y(a.button):y(a.button);i==null||i.focus()}};return j(X,a),me(h(()=>T(r.value,{0:O.Open,1:O.Closed}))),()=>{let{defaultOpen:l,...i}=e,f={open:r.value===0,close:a.close};return $({theirProps:i,ourProps:{},slot:f,slots:c,attrs:p,name:"Disclosure"})}}}),Ie=w({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:c,slots:p,expose:r}){let o=H("DisclosureButton"),d=be(),a=h(()=>d===null?!1:d.value===o.panelId.value);R(()=>{a.value||e.id!==null&&(o.buttonId.value=e.id)}),M(()=>{a.value||(o.buttonId.value=null)});let l=g(null);r({el:l,$el:l}),a.value||q(()=>{o.button.value=l.value});let i=ve(h(()=>({as:e.as,type:c.type})),l);function f(){var t;e.disabled||(a.value?(o.toggleDisclosure(),(t=y(o.button))==null||t.focus()):o.toggleDisclosure())}function m(t){var n;if(!e.disabled)if(a.value)switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(n=y(o.button))==null||n.focus();break}else switch(t.key){case I.Space:case I.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function u(t){switch(t.key){case I.Space:t.preventDefault();break}}return()=>{var t;let n={open:o.disclosureState.value===0},{id:s,...v}=e,E=a.value?{ref:l,type:i.value,onClick:f,onKeydown:m}:{id:(t=o.buttonId.value)!=null?t:s,ref:l,type:i.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||y(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:m,onKeyup:u};return $({ourProps:E,theirProps:v,slot:n,attrs:c,slots:p,name:"DisclosureButton"})}}}),Se=w({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:c,slots:p,expose:r}){let o=H("DisclosurePanel");R(()=>{e.id!==null&&(o.panelId.value=e.id)}),M(()=>{o.panelId.value=null}),r({el:o.panel,$el:o.panel}),j(_,o.panelId);let d=ge(),a=h(()=>d!==null?(d.value&O.Open)===O.Open:o.disclosureState.value===0);return()=>{var l;let i={open:o.disclosureState.value===0,close:o.close},{id:f,...m}=e,u={id:(l=o.panelId.value)!=null?l:f,ref:o.panel};return $({ourProps:u,theirProps:m,slot:i,attrs:c,slots:p,features:U.RenderStrategy|U.Static,visible:a.value,name:"DisclosurePanel"})}}});const k=F(B.ui.strategy,B.ui.accordion,ye),Be=F(B.ui.strategy,B.ui.button,W),Oe=w({components:{HDisclosure:De,HDisclosureButton:Ie,HDisclosurePanel:Se,UIcon:G,UButton:Q},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>k.default.openIcon},closeIcon:{type:String,default:()=>k.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:c}){const{ui:p,attrs:r}=Y("accordion",L(e,"ui"),k,L(e,"class")),o=h(()=>Be),d=g([]),a=h(()=>d.value.map(({open:t})=>t));Z(a,(t,n)=>{for(const s in t){const v=n[s],E=t[s];!v&&E&&c("open",s)}},{immediate:!0});function l(t,n){!e.items[t].closeOthers&&e.multiple||d.value.forEach(s=>{s.open&&s.close(n.target)})}function i(t,n){const s=t;s.style.height="0",s.offsetHeight,s.style.height=s.scrollHeight+"px",s.addEventListener("transitionend",n,{once:!0})}function f(t){const n=t;n.style.height=n.scrollHeight+"px",n.offsetHeight}function m(t){const n=t;n.style.height="auto"}function u(t,n){const s=t;s.style.height="0",s.addEventListener("transitionend",n,{once:!0})}return fe(()=>pe("$2NGpy3q83X")),{ui:p,uiButton:o,attrs:r,buttonRefs:d,closeOthers:l,omit:x,onEnter:i,onBeforeLeave:f,onAfterEnter:m,onLeave:u}}});function we(e,c,p,r,o,d){const a=G,l=Q,i=C("HDisclosureButton"),f=C("HDisclosurePanel"),m=C("HDisclosure");return P(),A("div",{class:S(e.ui.wrapper)},[(P(!0),A(ee,null,te(e.items,(u,t)=>(P(),oe(m,{key:t,as:"div",class:S(e.ui.container),"default-open":e.defaultOpen||u.defaultOpen},{default:b(({open:n,close:s})=>[D(i,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:n,close:s},as:"template",disabled:u.disabled,onClick:v=>e.closeOthers(t,v),onKeydown:[z(v=>e.closeOthers(t,v),["enter"]),z(v=>e.closeOthers(t,v),["space"])]},{default:b(()=>[K(e.$slots,"default",{item:u,index:t,open:n,close:s},()=>[D(l,ne(se({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(u,["slot","disabled","content","defaultOpen"])})),{trailing:b(()=>[D(a,{name:n&&e.closeIcon?e.closeIcon:e.openIcon,class:S([n&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[u.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),D(le,ae(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:b(()=>[re(ue("div",null,[D(f,{class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:b(()=>[K(e.$slots,u.slot||"item",{item:u,index:t,open:n,close:s},()=>[ie(ce(u.content),1)])]),_:2},1032,["class"])],512),[[de,n]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const He=J(Oe,[["render",we]]);export{He as default};
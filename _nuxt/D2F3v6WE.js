import{_ as w,H as C,I as d,s as U,K as h,aF as y,L as $,M as p,aG as B,a0 as L,a1 as A,o as r,c as t,a as I,F as m,P as M,Q as i,X as g,b as P,w as S,T as o,R as f,a2 as n,t as v}from"./eEb52cPw.js";const F={wrapper:"relative",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid"}},b=C(d.ui.strategy,d.ui.breadcrumb,F),N=U({components:{UIcon:h,ULink:y},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>b.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:l,attrs:u}=$("breadcrumb",p(e,"ui"),b,p(e,"class"));return{ui:l,attrs:u,getULinkProps:B,twMerge:L,twJoin:A}}}),V={key:1,role:"presentation"};function j(e,l,u,J,O,R){const c=h,k=y;return r(),t("nav",g({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[I("ol",{class:i(e.ui.ol)},[(r(!0),t(m,null,M(e.links,(a,s)=>(r(),t("li",{key:s,class:i(e.ui.li)},[P(k,g({as:"span",class:[e.ui.base,s===e.links.length-1?e.ui.active:a.to?e.ui.inactive:""]},e.getULinkProps(a),{"aria-current":s===e.links.length-1?"page":void 0}),{default:S(()=>[o(e.$slots,"icon",{link:a,index:s,isActive:s===e.links.length-1},()=>[a.icon?(r(),f(c,{key:0,name:a.icon,class:i(e.twMerge(e.twJoin(e.ui.icon.base,s===e.links.length-1?e.ui.icon.active:a.to?e.ui.icon.inactive:""),a.iconClass))},null,8,["name","class"])):n("",!0)]),o(e.$slots,"default",{link:a,index:s,isActive:s===e.links.length-1},()=>[a.label?(r(),t("span",{key:0,class:i(e.twMerge(e.ui.label,a.labelClass))},v(a.label),3)):n("",!0)])]),_:2},1040,["class","aria-current"]),s<e.links.length-1?o(e.$slots,"divider",{key:0},()=>[e.divider?(r(),t(m,{key:0},[e.divider.startsWith("i-")?(r(),f(c,{key:0,name:e.divider,class:i(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(r(),t("span",V,v(e.divider),1))],64)):n("",!0)]):n("",!0)],2))),128))],2)],16)}const D=w(N,[["render",j]]);export{D as default};
import{u as b}from"./ciMUEMVk.js";import{W as T,G as B,S as k,h as H}from"./CX4aGPOl.js";import{l as V}from"./DiYDCdw5.js";import{_ as D,H as $,I as f,s as O,L as R,M as y,r as g,B as n,o as v,R as h,w as o,b as u,X as p,a as d,Q as r,a2 as S,T as j}from"./eEb52cPw.js";import"./BLiRUC50.js";import"./Bhs2c9U_.js";import"./g4RH3j9h.js";import"./dr8U-yhR.js";import"./jthpZqva.js";import"./CxIZtCgj.js";import"./B5jQ0cQm.js";const F={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},P=$(f.ui.strategy,f.ui.modal,F),A=O({components:{HDialog:T,HDialogPanel:B,TransitionRoot:k,TransitionChild:H},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:t}){const{ui:l,attrs:m}=R("modal",y(e,"ui"),P,y(e,"class")),i=g({get(){return e.modelValue},set(a){t("update:modelValue",a)}}),c=g(()=>e.transition?{...l.value.transition}:{});function s(a){if(e.preventClose){t("close-prevented");return}i.value=a,t("close")}return V(()=>b("$Os2ZSUWjAf")),{ui:l,attrs:m,isOpen:i,transitionClass:c,close:s}}});function I(e,t,l,m,i,c){const s=n("TransitionChild"),a=n("HDialogPanel"),w=n("HDialog"),C=n("TransitionRoot");return v(),h(C,{appear:e.appear,show:e.isOpen,as:"template"},{default:o(()=>[u(w,p({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(v(),h(s,p({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[d("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):S("",!0),d("div",{class:r(e.ui.inner)},[d("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(s,p({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[u(a,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:o(()=>[j(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const E=D(A,[["render",I]]);export{E as default};
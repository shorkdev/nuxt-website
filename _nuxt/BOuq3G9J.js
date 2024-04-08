import{_ as N,H as V,au as $,I as c,s as q,L as F,M as B,v as z,k as H,x as h,N as x,ac as A,r as R,a0 as D,a1 as E,o as G,c as J,a as L,X as P,T as Q,Q as U,ak as X}from"./eEb52cPw.js";import{u as K}from"./CA3u9IiS.js";const u=V(c.ui.strategy,c.ui.textarea,$),W=q({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(u.size).includes(e)}},color:{type:String,default:()=>u.default.color,validator(e){return[...c.ui.colors,...Object.keys(u.color)].includes(e)}},variant:{type:String,default:()=>u.default.variant,validator(e){return[...Object.keys(u.variant),...Object.values(u.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:l,attrs:m}=F("textarea",B(e,"ui"),u,B(e,"class")),{emitFormBlur:p,emitFormInput:g,inputId:r,color:v,size:y,name:C}=K(e,u),n=z(H({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),s=z(null),b=()=>{var a;e.autofocus&&((a=s.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!s.value)return;s.value.rows=e.rows;const a=window.getComputedStyle(s.value),o=parseInt(a.paddingTop),i=parseInt(a.paddingBottom),M=o+i,O=parseInt(a.lineHeight),{scrollHeight:T}=s.value,f=(T-M)/O;f>e.rows&&(s.value.rows=e.maxrows?Math.min(f,e.maxrows):f)}},w=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=X(a)),t("update:modelValue",a),g()},I=a=>{d(),n.value.lazy||w(a.target.value)},S=a=>{const o=a.target.value;t("change",o),n.value.lazy&&w(o),n.value.trim&&(a.target.value=o.trim())},k=a=>{t("blur",a),p()};h(()=>{setTimeout(()=>{b()},e.autofocusDelay)}),x(()=>e.modelValue,()=>{A(d)}),h(()=>{setTimeout(()=>{b(),d()},100)});const j=R(()=>{var o,i;const a=((i=(o=l.value.color)==null?void 0:o[v.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return D(E(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[y.value],e.padded?l.value.padding[y.value]:"p-0",a==null?void 0:a.replaceAll("{color}",v.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:m,name:C,inputId:r,textarea:s,textareaClass:j,onInput:I,onChange:S,onBlur:k}}}),Y=["id","value","name","rows","required","disabled","placeholder"];function Z(e,t,l,m,p,g){return G(),J("div",{class:U(e.ui.wrapper)},[L("textarea",P({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:t[1]||(t[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:t[2]||(t[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Y),Q(e.$slots,"default")],2)}const ae=N(W,[["render",Z]]);export{ae as default};
import{R as m,P as a,Q as i,U as e,m as t,V as f,I as g,W as x,K as n,X as c,Y as p}from"./@vue.a6ed1cbc.js";import{a as V,b as k,d as b,e as v,f as w,g as C,h as B,i as A,j as K,k as U,l as y}from"./vuetify.ebb4c956.js";import{_ as L}from"./plugin-vueexport-helper.2444895f.js";const T="/favicon.png";function E(u,s,_,d,o,r){const h=m("router-link");return a(),i(A,{flat:"",color:"indigo-darken-3",elevation:"1",density:"compact"},{prepend:e(()=>[t(V,{src:T,height:"28px","min-width":"28px"})]),extension:e(()=>[t(k),t(b,{"fixed-tabs":"","center-active":"",modelValue:o.tab,"onUpdate:modelValue":s[0]||(s[0]=l=>o.tab=l)},{default:e(()=>[(a(!0),f(g,null,x(o.tabs,l=>(a(),i(h,{class:"text-white text-decoration-none",to:"/"+r.lang+l.path,"active-class":"indigo-lighten-2"},{default:e(()=>[t(v,{style:{"min-width":"5em"}},{default:e(()=>[n(c(l[r.lang]),1)]),_:2},1024)]),_:2},1032,["to"]))),256))]),_:1},8,["modelValue"])]),default:e(()=>[t(w,null,{default:e(()=>[t(h,{class:"text-white text-decoration-none",to:"/"+r.lang,"active-class":"indigo-lighten-2"},{default:e(()=>[n("ELU Lab @ CAU")]),_:1},8,["to"])]),_:1}),t(C,{size:"small",onClick:r.langChange},{default:e(()=>[t(B,{class:"mr-1"},{default:e(()=>[n("mdi-translate")]),_:1}),p("span",null,c(o.isKorean?"Eng":"\uD55C\uAD6D\uC5B4"),1)]),_:1},8,["onClick"])]),_:1})}const j={name:"AppBar",data(){return{isKorean:!1,tabs:[{path:"",ko:"\uC18C\uAC1C",en:"About"},{path:"/team",ko:"\uC0AC\uB78C\uB4E4",en:"Team"},{path:"/project",ko:"\uD504\uB85C\uC81D\uD2B8",en:"Projects"},{path:"/pub",ko:"\uB17C\uBB38",en:"Papers"},{path:"/course",ko:"\uAC15\uC758",en:"Courses"},{path:"/contact",ko:"\uBB38\uC758\uD558\uAE30",en:"Contact"}],tab:""}},methods:{langChange(){this.isKorean=!this.isKorean,this.isKorean?this.$router.push({path:this.$route.path.replace("en","ko")}):this.$router.push({path:this.$route.path.replace("ko","en")})}},computed:{lang(){return this.isKorean?"ko":"en"}}},D=L(j,[["render",E]]),F={__name:"View",setup(u){return(s,_)=>{const d=m("router-view");return a(),i(K,null,{default:e(()=>[t(d)]),_:1})}}},I={class:"text-right w-100"},N=p("strong",null,"ELU Lab",-1),$={__name:"Default",setup(u){return(s,_)=>(a(),i(U,null,{default:e(()=>[t(D),t(F),t(y,{class:"d-flex flex-column px-4 py-2 bg-indigo-lighten-3"},{default:e(()=>[p("div",I,[n(c(new Date().getFullYear())+" \u2014 ",1),N,n(", Chung-Ang University, Seoul, Korea.")])]),_:1})]),_:1}))}};export{$ as default};
//# sourceMappingURL=Default.ba6f95b6.js.map

import{P as d,N as i,O as c,R as e,k as t,M as a,S as r}from"./@vue.e8a385ec.js";import{V as f,a as s,b as g,d as m,e as x}from"./vuetify.bbe57071.js";import{_ as k}from"./plugin-vueexport-helper.2444895f.js";function K(u,_,p,h,n,o){const l=d("router-link");return i(),c(g,{flat:"",color:"indigo-darken-3",elevation:"1"},{default:e(()=>[t(f,null,{default:e(()=>[a("ELU Lab @ CAU")]),_:1}),t(l,{class:"text-white text-decoration-none",to:"/"+o.lang,"active-class":"indigo-lighten-2"},{default:e(()=>[t(s,null,{default:e(()=>[a(r(n.isKorean?"\uC18C\uAC1C":"About"),1)]),_:1})]),_:1},8,["to"]),t(l,{class:"text-white text-decoration-none",to:"/"+o.lang+"/team","active-class":"indigo-lighten-2"},{default:e(()=>[t(s,null,{default:e(()=>[a(r(n.isKorean?"\uC0AC\uB78C\uB4E4":"People"),1)]),_:1})]),_:1},8,["to"]),t(l,{class:"text-white text-decoration-none",to:"/"+o.lang+"/pub","active-class":"indigo-lighten-2"},{default:e(()=>[t(s,null,{default:e(()=>[a(r(n.isKorean?"\uB17C\uBB38":"Publication"),1)]),_:1})]),_:1},8,["to"]),t(l,{class:"text-white text-decoration-none",to:"/"+o.lang+"/contact","active-class":"indigo-lighten-2"},{default:e(()=>[t(s,null,{default:e(()=>[a(r(n.isKorean?"\uBB38\uC758\uD558\uAE30":"Contact"),1)]),_:1})]),_:1},8,["to"]),t(s,{onClick:o.langChange},{default:e(()=>[a("["+r(n.isKorean?"Eng":"\uD55C\uAD6D\uC5B4")+"]",1)]),_:1},8,["onClick"])]),_:1})}const V={name:"AppBar",data(){return{isKorean:!0}},methods:{langChange(){this.isKorean=!this.isKorean,this.isKorean?this.$router.push({path:this.$route.path.replace("en","ko")}):this.$router.push({path:this.$route.path.replace("ko","en")})}},computed:{lang(){return this.isKorean?"ko":"en"}}},v=k(V,[["render",K]]),w={__name:"View",setup(u){return(_,p)=>{const h=d("router-view");return i(),c(m,null,{default:e(()=>[t(h)]),_:1})}}},b={__name:"Default",setup(u){return(_,p)=>(i(),c(x,null,{default:e(()=>[t(v),t(w)]),_:1}))}};export{b as default};

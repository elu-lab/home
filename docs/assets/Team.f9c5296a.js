import{h as _,m as w,n as N}from"./util.71f2e468.js";import{_ as m}from"./lodash.82e2f9b4.js";import{B as C}from"./bibtex-parse.1bbbaa52.js";import{_ as M}from"./team.dcafdadb.js";import{_ as g}from"./noimg.5dd472c1.js";import{r as T,s as b,a as f,n as y,q as O}from"./vuetify.62fede60.js";import{R as c,W as i,Z as s,Y as l,l as n,V as d,F as p,X as v,_ as x,$ as R,a0 as V,a1 as A,S as B}from"./@vue.f6e88dbc.js";import{_ as I}from"./plugin-vueexport-helper.2444895f.js";const S=e=>(V("data-v-b2dbcb64"),e=e(),A(),e),D={style:{background:"#cecece",height:"20vh",width:"100%"}},P=S(()=>s("td",null,[s("img",{src:M,style:{height:"20vh"}})],-1)),H={class:"text-white text-shadow text-h3 font-weight-black text-center"},E={class:"v-col-12"},L={class:"text-indigo-accent-2"},z={class:"v-col-6 v-col-sm-4 v-col-md-3 v-col-lg-2"},F={class:"ml-3 text-white font-weight-black text-border-white text-h4"},U={key:0,class:"v-col-12"},Y={class:"text-indigo-accent-2"},j={class:"v-col-6 v-col-sm-4 v-col-md-3 v-col-lg-2"},q={class:"ml-3 text-white font-weight-black text-border-white text-h4"};function G(e,t,r,u,h,o){return c(),i("div",null,[s("table",D,[s("tr",null,[P,s("td",null,[s("div",H,l(r.lang==="ko"?"\uC5F0\uAD6C\uC2E4 \uC0AC\uB78C\uB4E4":"Our Team"),1)])])]),n(O,null,{default:d(()=>[n(T,null,{default:d(()=>[s("div",E,[s("h1",L,l(r.lang==="ko"?"\uD604\uC7AC \uAD6C\uC131\uC6D0":"Current Members"),1)]),(c(!0),i(p,null,v(o.presentMembers,a=>(c(),i("div",z,[n(b,{elevation:"3",rounded:"",hover:"",onClick:k=>e.$router.push("/"+r.lang+"/"+a.path)},{default:d(()=>[n(f,{class:"align-end","lazy-src":g,src:a.image,"aspect-ratio":"0.75",cover:"",gradient:"to top, rgba(100,100,100,1) 0%, rgba(100,100,100,.5) 15%, rgba(100,100,100,0) 100%"},{default:d(()=>[s("p",{class:x(["ml-3 font-weight-black text-border-white text-h6",o.getColor(a.role)])},l(o.getRole(a.role,r.lang)),3),s("p",F,l(r.lang==="en"?a.fullName:a.koreanName),1)]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),256)),o.alumniMembers.length?(c(),i("div",U,[n(y),s("h1",Y,l(r.lang==="ko"?"\uC878\uC5C5/\uD1F4\uC9C1\uD55C \uAD6C\uC131\uC6D0":"Alumni Members"),1)])):R("",!0),(c(!0),i(p,null,v(o.alumniMembers,a=>(c(),i("div",j,[n(b,{elevation:"3",rounded:"",hover:"",onClick:k=>e.$router.push("/"+r.lang+"/"+a.path)},{default:d(()=>[n(f,{class:"align-end","lazy-src":g,src:a.image,"aspect-ratio":"0.75",cover:"",gradient:"to top, rgba(100,100,100,1) 0%, rgba(100,100,100,.5) 15%, rgba(100,100,100,0) 100%"},{default:d(()=>[s("p",{class:x(["ml-3 font-weight-black text-border-white text-h6",o.getColor(a.role)])},l(o.getRole(a.role,r.lang)),3),s("p",q,l(r.lang==="en"?a.fullName:a.koreanName),1)]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),256))]),_:1})]),_:1})])}const W={name:"Team",props:["lang"],data(){return{members:[],publications:[]}},mounted(){_(["data","member-list.txt"],e=>{this.members=e.split(`
`).map(t=>{const[r,u,h,o,a]=t.split(",");return{familyName:r,givenName:u,fullName:u+" "+r,koreanName:h,role:o,image:"/img/members/"+u.toLowerCase().replace(" ","-")+"-"+r.toLowerCase().replace(" ","-")+".jpg",path:u+"/"+r,isAlumni:a==="\uC878\uC5C5"}})},()=>{}),_(["data","publications.bib"],e=>{this.publications=m.sortBy(C.entries(e).map(t=>(t.tags=t.NOTE?t.NOTE.split(" "):[],t.MONTH=w(t.MONTH),t.AUTHOR=N(t.AUTHOR),t)),[t=>-t.YEAR,t=>-t.MONTH])},e=>{})},methods:{getRole(e,t){return t==="en"?e:e==="Prof."?"\uC9C0\uB3C4\uAD50\uC218":e==="Researcher"?"\uC5F0\uAD6C\uC6D0":e==="Ph.D student"?"\uBC15\uC0AC\uACFC\uC815":e==="M.S. student"?"\uC11D\uC0AC\uACFC\uC815":e==="Ph.D."?"\uBC15\uC0AC":e==="M.S."?"\uC11D\uC0AC":"\uD559\uBD80\uC0DD \uC778\uD134"},getColor(e){return"text-indigo-lighten-4"},openLink(e){e.DOI&&window.open("https://doi.org/"+e.DOI)}},computed:{presentMembers(){return m.filter(this.members,e=>!e.isAlumni)},alumniMembers(){return m.filter(this.members,e=>e.isAlumni)}}},X=I(W,[["render",G],["__scopeId","data-v-b2dbcb64"]]),ae={__name:"Team",setup(e){return(t,r)=>(c(),B(X))}};export{ae as default};
//# sourceMappingURL=Team.f9c5296a.js.map

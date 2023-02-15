import{h as y,m as V,n as S}from"./util.38ceb913.js";import{_ as g}from"./lodash.82e2f9b4.js";import{B as C}from"./bibtex-parse.1bbbaa52.js";import{_ as k}from"./placeholder.091cf2cc.js";import{k as T,h as L,i as O,l as R,m as p,n as w,o as N,p as b,g as I,q as D,r as A,j as H}from"./vuetify.bbe57071.js";import{N as l,O as u,R as a,V as o,k as r,M as f,S as n,U as d,F as x,W as v,Y as M}from"./@vue.e8a385ec.js";import{_ as B}from"./plugin-vueexport-helper.2444895f.js";const E={class:"text-center mb-3 text-indigo-darken-4"},U=o("p",{class:"text-h5 text-red-darken-3"},[f("\uC5F0\uAD6C\uC2E4\uC758 \uCCAB \uD559\uBD80\uC0DD \uC778\uD134, \uC11D\uBC15\uC0AC\uACFC\uC815 \uD559\uC0DD\uC744 \uBAA8\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. '\uBB38\uC758\uD558\uAE30'\uB97C \uB20C\uB7EC \uBB38\uC758\uD574\uC8FC\uC138\uC694!"),o("br"),f("We're looking for the first MS/PhD students and interns who are interested in our study!"),o("br"),f("If you're interested in our study, please contact advisor through 'Contact' tab.")],-1),P={class:"v-col-12 v-col-md-auto"},z=["innerHTML"],j={class:"mr-2 text-grey"},Y={class:"text-grey"},F={class:"my-0 py-0"},W={key:0,class:"mt-0 pt-0 font-italic text-right text-grey"},q={key:1,class:"mt-0 pt-0 font-italic text-right text-grey"},G={class:"v-col-12"},J={class:"text-indigo-accent-2"},K={class:"v-col-2"},Q={class:"d-flex flex-column fill-height justify-center align-end text-white text-shadow"},X={key:0,class:"font-weight-black text-h6"},Z={key:1,class:"font-weight-black text-h6"},$={key:0,class:"v-col-12"},ee={class:"text-indigo-accent-2"},te={class:"v-col-2"},se={class:"d-flex flex-column fill-height justify-center align-end text-white text-shadow"},ae={key:0,class:"font-weight-black text-h6"},le={key:1,class:"font-weight-black text-h6"},ne={class:"v-col-12 v-col-md-auto"},re=["innerHTML"];function oe(t,s,c,m,h,i){return l(),u(H,null,{default:a(()=>[o("h1",E,[r(T,{class:"ma-2",size:"small"},{default:a(()=>[f("mdi-account-group")]),_:1}),o("span",null,n(c.lang==="ko"?"\uC5F0\uAD6C\uC2E4 \uC0AC\uB78C\uB4E4":"Our Team"),1)]),r(L,{class:"my-5",icon:"mdi-bullhorn",color:"red"},{default:a(()=>[r(O,null,{default:a(()=>[U]),_:1})]),_:1}),r(R,{modelValue:h.dialog,"onUpdate:modelValue":s[0]||(s[0]=e=>h.dialog=e),"max-width":"75vw","max-height":"75vh"},{default:a(()=>[r(p,null,{default:a(()=>[r(w,null,{default:a(()=>[r(N,{class:"margin-inside"},{default:a(()=>[o("div",P,[r(b,{"lazy-src":k,src:i.dialogInfo.image,width:"250px"},null,8,["src"])]),o("div",{class:"v-col-12 v-col-md-auto",innerHTML:i.dialogInfo.text},null,8,z)]),_:1}),r(I,{class:"my-5"}),o("h3",null,n(c.lang==="ko"?"\uB17C\uBB38 \uBAA9\uB85D":"Publications"),1),r(D,{lines:"three",density:"compact"},{default:a(()=>[(l(!0),d(x,null,v(i.dialogInfo.pubs,e=>(l(),u(A,{"active-color":"primary",variant:"plain",onClick:_=>i.openLink(e)},{append:a(()=>[e.DOI?(l(),u(T,{key:0,size:"small",color:"green"},{default:a(()=>[f("mdi-link")]),_:1})):(l(),u(T,{key:1,size:"small",color:"grey"},{default:a(()=>[f("mdi-link-off")]),_:1}))]),default:a(()=>[(l(!0),d(x,null,v(e.AUTHOR,_=>(l(),d("span",j,n(_)+";",1))),256)),o("span",Y,"("+n(e.YEAR)+")",1),o("p",F,n(e.TITLE),1),e.type==="inproceedings"?(l(),d("p",W,"@ "+n(e.SERIES)+" conference",1)):e.type==="article"?(l(),d("p",q,n(e.JOURNAL)+" "+n(e.VOLUME)+", No. "+n(e.NUMBER),1)):M("",!0)]),_:2},1032,["onClick"]))),256))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),i.presentMembers.length>1?(l(),u(N,{key:0},{default:a(()=>[o("div",G,[o("h1",J,n(c.lang==="ko"?"\uD604\uC7AC \uAD6C\uC131\uC6D0":"Present Members"),1)]),(l(!0),d(x,null,v(i.presentMembers,e=>(l(),d("div",K,[r(p,{class:"rounded-5",elevation:"3",onClick:_=>i.openDialog(e)},{default:a(()=>[r(b,{class:"align-end","lazy-src":k,src:e.image,"aspect-ratio":"0.75",cover:""},{default:a(()=>[o("div",Q,[c.lang==="en"?(l(),d("div",X,n(i.getRole(e.role,"en"))+" "+n(e.fullName),1)):(l(),d("div",Z,n(e.koreanName)+" "+n(e.role),1))])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),256)),i.alumniMembers.length?(l(),d("div",$,[o("h1",ee,n(c.lang==="ko"?"\uC878\uC5C5/\uD1F4\uC9C1\uD55C \uAD6C\uC131\uC6D0":"Alumni Members"),1)])):M("",!0),(l(!0),d(x,null,v(i.alumniMembers,e=>(l(),d("div",te,[r(p,{class:"rounded-5",elevation:"3",onClick:_=>i.openDialog(e)},{default:a(()=>[r(b,{class:"align-end","lazy-src":k,src:e.image,"aspect-ratio":"0.75",cover:""},{default:a(()=>[o("div",se,[c.lang==="en"?(l(),d("div",ae,n(i.getRole(e.role,"en"))+" "+n(e.fullName),1)):(l(),d("div",le,n(e.koreanName)+" "+n(e.role),1))])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),256))]),_:1})):(l(),u(p,{key:1,elevation:"3"},{default:a(()=>[r(w,null,{default:a(()=>[r(N,{class:"margin-inside"},{default:a(()=>[o("div",ne,[r(b,{"lazy-src":k,src:i.dialogInfo.image,width:"250px"},null,8,["src"])]),o("div",{class:"v-col-12 v-col-md-auto",innerHTML:i.dialogInfo.text},null,8,re)]),_:1})]),_:1})]),_:1}))]),_:1})}const ie={name:"Team",props:["lang"],data(){return{members:[],publications:[],dialog:!1,memberSelected:{}}},mounted(){y(["data","member-list.txt"],t=>{this.members=t.split(`
`).map(s=>{const[c,m,h,i,e,_]=s.split(",");return{familyName:c,givenName:m,fullName:m+" "+c,koreanName:h,role:i,image:"/img/members/"+m.toLowerCase()+"-"+c.toLowerCase()+"."+e,isAlumni:_==="\uC878\uC5C5"}}),this.$nextTick(()=>{this.presentMembers.length===1&&this.openDialog(this.presentMembers[0],!1)})},()=>{}),y(["data","publications.bib"],t=>{this.publications=g.sortBy(C.entries(t).map(s=>(s.tags=s.NOTE?s.NOTE.split(" "):[],s.MONTH=V(s.MONTH),s.AUTHOR=S(s.AUTHOR),s)),[s=>-s.YEAR,s=>-s.MONTH])},t=>{})},methods:{getRole(t,s){return s==="ko"?t:t==="\uAD50\uC218"?"Prof.":t==="\uC5F0\uAD6C\uC6D0"?"Researcher":t==="\uBC15\uC0AC\uACFC\uC815"?"(Ph.D student)":t==="\uC11D\uC0AC\uACFC\uC815"?"(M.S. student)":t==="\uBC15\uC0AC"?"Ph.D.":t==="\uC11D\uC0AC"?"M.S.":"(Undergrad intern)"},openLink(t){t.DOI&&window.open("https://doi.org/"+t.DOI)},openDialog(t,s=!0){this.memberSelected=t,y(["data","members",t.givenName.toLowerCase()+"-"+t.familyName.toLowerCase()+".md"],c=>{const[m,h]=c.split("---");this.memberSelected.enText=m,this.memberSelected.koText=h},c=>{}),this.dialog=s}},computed:{presentMembers(){return g.filter(this.members,t=>!t.isAlumni)},alumniMembers(){return g.filter(this.members,t=>t.isAlumni)},dialogInfo(){return this.memberSelected.enText?{name:this.lang==="ko"?this.memberSelected.koreanName:this.memberSelected.fullName,text:window.marked.parse(this.lang==="ko"?this.memberSelected.koText:this.memberSelected.enText),role:this.getRole(this.memberSelected.role,this.lang),image:this.memberSelected.image,pubs:g.filter(this.publications,t=>g.includes(t.AUTHOR,this.memberSelected.fullName))}:{}}}},ce=B(ie,[["render",oe]]),ke={__name:"Team",setup(t){return(s,c)=>(l(),u(ce))}};export{ke as default};

import{P as d,Q as h,R as g,S as y}from"./@vue.4e466777.js";/* empty css             */import{c as E,V as v}from"./vuetify.7ced8f5b.js";import{c as L,a as P}from"./vue-router.ff352691.js";import{i as R}from"./vue-gtag.ce43636a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const A={__name:"App",setup(s){return(o,a)=>{const c=g("router-view");return d(),h(c)}}},O="modulepreload",T=function(s){return"/"+s},p={},n=function(o,a,c){if(!a||a.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=T(e),e in p)return;p[e]=!0;const r=e.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":O,r||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),r)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};async function V(){(await n(()=>import("./webfontloader.b777d690.js").then(o=>o.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const b=E({components:{VDataTable:v},theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}}),D=[{path:"/",component:()=>n(()=>import("./Default.a2be7044.js"),["assets/Default.a2be7044.js","assets/@vue.4e466777.js","assets/vuetify.7ced8f5b.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"]),children:[{path:"",redirect:"ko"},{path:":lang",name:"About",props:!0,component:()=>n(()=>import("./About.78c453cb.js"),["assets/About.78c453cb.js","assets/util.71f2e468.js","assets/lodash.82e2f9b4.js","assets/bibtex-parse.1bbbaa52.js","assets/vuetify.7ced8f5b.js","assets/@vue.4e466777.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/team",name:"Team",props:!0,component:()=>n(()=>import("./Team.b1094ff6.js"),["assets/Team.b1094ff6.js","assets/util.71f2e468.js","assets/lodash.82e2f9b4.js","assets/bibtex-parse.1bbbaa52.js","assets/team.dcafdadb.js","assets/noimg.5dd472c1.js","assets/vuetify.7ced8f5b.js","assets/@vue.4e466777.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/pub",name:"Publication",props:!0,component:()=>n(()=>import("./Publication.00d3ef72.js"),["assets/Publication.00d3ef72.js","assets/util.71f2e468.js","assets/bibtex-parse.1bbbaa52.js","assets/lodash.82e2f9b4.js","assets/@vue.4e466777.js","assets/noimg.5dd472c1.js","assets/vuetify.7ced8f5b.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/course",name:"Course",props:!0,component:()=>n(()=>import("./Course.84bd0eba.js"),["assets/Course.84bd0eba.js","assets/util.71f2e468.js","assets/vuetify.7ced8f5b.js","assets/@vue.4e466777.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/project",name:"Project",props:!0,component:()=>n(()=>import("./Project.24b977b1.js"),["assets/Project.24b977b1.js","assets/util.71f2e468.js","assets/vuetify.7ced8f5b.js","assets/@vue.4e466777.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/contact",name:"Contact",props:!0,component:()=>n(()=>import("./Contact.53f9060d.js"),["assets/Contact.53f9060d.js","assets/util.71f2e468.js","assets/@vue.4e466777.js","assets/plugin-vueexport-helper.2444895f.js","assets/vuetify.7ced8f5b.js","assets/vuetify.c62c93b4.css","assets/Contact.2b19d5f9.css"])},{path:":lang/:role/:given/:family",name:"Person",props:!0,component:()=>n(()=>import("./Person.f02e05e8.js"),["assets/Person.f02e05e8.js","assets/util.71f2e468.js","assets/lodash.82e2f9b4.js","assets/bibtex-parse.1bbbaa52.js","assets/team.dcafdadb.js","assets/noimg.5dd472c1.js","assets/vuetify.7ced8f5b.js","assets/@vue.4e466777.js","assets/vuetify.c62c93b4.css","assets/plugin-vueexport-helper.2444895f.js"])}]}],m=L({history:P({}.BASE_URL),mode:"hash",routes:D});function w(s){V(),s.use(b).use(m).use(R,{config:{id:"G-89DJ3XMCHN"}},m)}const _=y(A);w(_);_.mount("#app");

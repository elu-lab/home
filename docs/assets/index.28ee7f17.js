import{N as f,O as d,P as h,Q as y}from"./@vue.e8a385ec.js";/* empty css             */import{c as g}from"./vuetify.bbe57071.js";import{c as v,a as E}from"./vue-router.76df84db.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const L={__name:"App",setup(n){return(o,i)=>{const c=h("router-view");return f(),d(c)}}},P="modulepreload",R=function(n){return"/"+n},p={},a=function(o,i,c){if(!i||i.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=R(e),e in p)return;p[e]=!0;const r=e.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${_}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":P,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};async function A(){(await a(()=>import("./webfontloader.b777d690.js").then(o=>o.w),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const O=g({theme:{themes:{light:{colors:{primary:"#1867C0",secondary:"#5CBBF6"}}}}}),b=[{path:"/",component:()=>a(()=>import("./Default.a2a11b67.js"),["assets/Default.a2a11b67.js","assets/@vue.e8a385ec.js","assets/vuetify.bbe57071.js","assets/vuetify.1d1c1262.css","assets/plugin-vueexport-helper.2444895f.js"]),children:[{path:"",redirect:"ko"},{path:":lang",name:"About",props:!0,component:()=>a(()=>import("./About.f66c48f0.js"),["assets/About.f66c48f0.js","assets/util.71f2e468.js","assets/lodash.82e2f9b4.js","assets/bibtex-parse.1bbbaa52.js","assets/@vue.e8a385ec.js","assets/vuetify.bbe57071.js","assets/vuetify.1d1c1262.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/team",name:"Team",props:!0,component:()=>a(()=>import("./Team.8f03c2de.js"),["assets/Team.8f03c2de.js","assets/util.71f2e468.js","assets/lodash.82e2f9b4.js","assets/bibtex-parse.1bbbaa52.js","assets/placeholder.091cf2cc.js","assets/vuetify.bbe57071.js","assets/@vue.e8a385ec.js","assets/vuetify.1d1c1262.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/pub",name:"Publication",props:!0,component:()=>a(()=>import("./Publication.df20a45c.js"),["assets/Publication.df20a45c.js","assets/util.71f2e468.js","assets/bibtex-parse.1bbbaa52.js","assets/lodash.82e2f9b4.js","assets/@vue.e8a385ec.js","assets/placeholder.091cf2cc.js","assets/vuetify.bbe57071.js","assets/vuetify.1d1c1262.css","assets/plugin-vueexport-helper.2444895f.js"])},{path:":lang/contact",name:"Contact",props:!0,component:()=>a(()=>import("./Contact.00474b52.js"),["assets/Contact.00474b52.js","assets/util.71f2e468.js","assets/vuetify.bbe57071.js","assets/@vue.e8a385ec.js","assets/vuetify.1d1c1262.css","assets/plugin-vueexport-helper.2444895f.js"])}]}],w=v({history:E({}.BASE_URL),mode:"hash",routes:b});function k(n){A(),n.use(O).use(w)}const m=y(L);k(m);m.mount("#app");

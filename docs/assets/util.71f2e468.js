const e="/";function a(t,i,r){window.axios.get(e+t.join("/"),{withCredentials:!0}).then(s=>{if(s.status!==200)return r("HTTP connection error");i(s.data)}).catch(s=>r(s))}function u(t){if(t=t.toLowerCase(),t.startsWith("jan"))return"01";if(t.startsWith("feb"))return"02";if(t.startsWith("mar"))return"03";if(t.startsWith("apr"))return"04";if(t.startsWith("may"))return"05";if(t.startsWith("jun"))return"06";if(t.startsWith("jul"))return"07";if(t.startsWith("aug"))return"08";if(t.startsWith("sep"))return"09";if(t.startsWith("oct"))return"10";if(t.startsWith("nov"))return"11";if(t.startsWith("dec"))return"12"}function n(t){return t.split("and").map(i=>{const r=i.split(",");return r.length>1?r[1].trim()+" "+r[0].trim():i.trim()})}export{a as h,u as m,n};

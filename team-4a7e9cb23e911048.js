(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7156:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return r(6833)}])},3353:function(e,n,r){"use strict";var t=r(3967),i=r.n(t),a=r(7294),s=r(4728),c=r(5893);let l=a.forwardRef((e,n)=>{let{bsPrefix:r,fluid:t=!1,as:a="div",className:l,...o}=e,u=(0,s.vE)(r,"container");return(0,c.jsx)(a,{ref:n,...o,className:i()(l,t?"".concat(u).concat("string"==typeof t?"-".concat(t):"-fluid"):u)})});l.displayName="Container",n.Z=l},8888:function(e,n,r){"use strict";var t=r(3967),i=r.n(t),a=r(7294),s=r(4728),c=r(5893);let l=a.forwardRef((e,n)=>{let{bsPrefix:r,className:t,as:a="div",...l}=e,o=(0,s.vE)(r,"row"),u=(0,s.pi)(),d=(0,s.zG)(),f="".concat(o,"-cols"),m=[];return u.forEach(e=>{let n;let r=l[e];delete l[e],null!=r&&"object"==typeof r?{cols:n}=r:n=r,null!=n&&m.push("".concat(f).concat(e!==d?"-".concat(e):"","-").concat(n))}),(0,c.jsx)(a,{ref:n,...l,className:i()(t,o,...m)})});l.displayName="Row",n.Z=l},4728:function(e,n,r){"use strict";r.d(n,{SC:function(){return u},pi:function(){return l},vE:function(){return c},zG:function(){return o}});var t=r(7294);r(5893);let i=t.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:s}=i;function c(e,n){let{prefixes:r}=(0,t.useContext)(i);return e||r[n]||n}function l(){let{breakpoints:e}=(0,t.useContext)(i);return e}function o(){let{minBreakpoint:e}=(0,t.useContext)(i);return e}function u(){let{dir:e}=(0,t.useContext)(i);return"rtl"===e}},6833:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),i=r(7294),a=r(3353),s=r(8888);function c(){let[e,n]=(0,i.useState)([{name:"Tom Peukert",job:"Firmenleitung / Gr\xfcnder",education:"Krankenpfleger",skill:"Experte f\xfcr spezielle Probleml\xf6sungen",hobby:"Morgentliche Besprechung mit den Mitarbeitern",image:"/bilder/Firma.jpeg"},{name:"Laura Peukert",job:"Kauffrau f\xfcr B\xfcromanagement",education:"Ausbildung zur Kauffrau f\xfcr B\xfcromanagement",skill:"Expertin f\xfcr Ausbildungsthemen",hobby:"Lohnabrechnungen und B\xfcro-Assistenz",image:"/bilder/Firma.jpeg"},{name:"Bastian Peukert",job:"",education:"",skill:"",hobby:"",image:"/bilder/Firma.jpeg"},{name:"Eva Musterfrau",job:"KFZ-Mechanikerin",education:"KFZ-Mechatronikerin",skill:"Reparatur von Fahrzeugen",hobby:"Fitness",image:"/bilder/Firma.jpeg"}]);return(0,t.jsx)(a.Z,{fluid:!0,className:"px-4 py-5 bg-dark-gray",style:{minHeight:"86vh"},children:(0,t.jsx)(s.Z,{className:"justify-content-center mb-4",children:(0,t.jsxs)("div",{className:"container-fluid px-4",id:"team-page",children:[(0,t.jsx)("div",{className:"row justify-content-center mb-4",children:(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("h1",{className:"text-light",children:"Team"}),(0,t.jsx)("p",{className:"text-light",children:"Unser Team setzt sich derzeit aus 42 Mitarbeitern (m/w/d) zusammen. Unser Personal hat die verschiedensten Handwerksberufe erlernt, wie z.B. G\xe4rtner, Heizungsbauer, Elektriker, Maurer, KFZ-Mechaniker, Fliesenleger und werden f\xfcr die verschiedenen Dienstleistungen bei uns gezielt eingesetzt."})]})}),(0,t.jsx)("div",{className:"row justify-content-center",children:e.map((e,n)=>(0,t.jsx)("div",{className:"col-xs-12 col-md-4 col-lg-3 mb-4",role:"region","aria-labelledby":"team-member-".concat(n),children:(0,t.jsx)("div",{className:"profile-card-wrapper",tabIndex:"0","aria-label":"Profil von ".concat(e.name),children:(0,t.jsx)("div",{className:"profile-card",children:(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsxs)("div",{className:"card-front",children:[(0,t.jsx)("img",{src:e.image,alt:"Portr\xe4t von ".concat(e.name),className:"profile-img rounded",style:{width:"100%",height:"auto",objectFit:"cover"}}),(0,t.jsx)("h2",{className:"name",id:"team-member-".concat(n),children:e.name})]}),(0,t.jsx)("div",{className:"card-back",children:(0,t.jsxs)("ul",{className:"info-list",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Beruf:"})," ",e.job]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Ausbildung:"})," ",e.education]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"F\xe4higkeit:"})," ",e.skill]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Lieblingsaktivit\xe4t:"})," ",e.hobby]})]})})]})})})},n))})]})})})}function l(){return(0,t.jsx)("div",{children:(0,t.jsx)(c,{})})}},3967:function(e,n){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e="",n=0;n<arguments.length;n++){var r=arguments[n];r&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var r in e)t.call(e,r)&&e[r]&&(n=a(n,r));return n}(r)))}return e}function a(e,n){return n?e?e+" "+n:e+n:e}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(n,[]))&&(e.exports=r)}()}},function(e){e.O(0,[888,774,179],function(){return e(e.s=7156)}),_N_E=e.O()}]);
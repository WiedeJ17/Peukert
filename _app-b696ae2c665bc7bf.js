(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4092)}])},6691:function(e,t){"use strict";var r,n,i,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return s},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return u},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",s="navigate",a="restore",u="server-patch",c="prefetch",f="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(i=r||(r={})).AUTO="auto",i.FULL="full",i.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(8754),i=r(1757),o=r(5893),l=i._(r(7294)),s=n._(r(3935)),a=n._(r(7828)),u=r(7367),c=r(7903),f=r(4938);r(1997);let d=r(9953),p=n._(r(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,l){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:s,width:a,decoding:u,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:b,fill:x,onLoadRef:v,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:_,sizesInput:w,onLoad:C,onError:k,...P}=e;return(0,o.jsx)("img",{...P,...g(d),loading:h,width:a,height:s,decoding:u,"data-nimg":x?"fill":"1",className:c,style:f,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,p,v,y,j,b,w))},[r,p,v,y,j,k,b,w,t]),onLoad:e=>{m(e.currentTarget,p,v,y,j,b,w)},onError:e=>{_(!0),"empty"!==p&&j(!0),k&&k(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(f.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:a}=e,m=(0,l.useRef)(s);(0,l.useEffect)(()=>{m.current=s},[s]);let g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let[v,y]=(0,l.useState)(!1),[j,_]=(0,l.useState)(!1),{props:w,meta:C}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:j});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...w,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.priority?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),i=r(5893),o=n._(r(7294)),l=r(1401),s=r(2045),a=r(7420),u=r(7201),c=r(1443),f=r(9953),d=r(5320),p=r(2905),h=r(4318),m=r(953),g=r(6691),b=new Set;function x(e,t,r,n,i,o){if(o||(0,s.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(i))return;b.add(i)}(async()=>o?e.prefetch(t,i):e.prefetch(t,r,n))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:y,prefetch:j=null,passHref:_,replace:w,shallow:C,scroll:k,locale:P,onClick:S,onMouseEnter:E,onTouchStart:O,legacyBehavior:N=!1,...M}=e;r=y,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let R=o.default.useContext(f.RouterContext),T=o.default.useContext(d.AppRouterContext),I=null!=R?R:T,z=!R,A=!1!==j,D=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:L,as:F}=o.default.useMemo(()=>{if(!R){let e=v(a);return{href:e,as:b?v(b):e}}let[e,t]=(0,l.resolveHref)(R,a,!0);return{href:e,as:b?(0,l.resolveHref)(R,b):t||e}},[R,a,b]),H=o.default.useRef(L),U=o.default.useRef(F);N&&(n=o.default.Children.only(r));let G=N?n&&"object"==typeof n&&n.ref:t,[K,B,V]=(0,p.useIntersection)({rootMargin:"200px"}),W=o.default.useCallback(e=>{(U.current!==F||H.current!==L)&&(V(),U.current=F,H.current=L),K(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[F,G,L,V,K]);o.default.useEffect(()=>{I&&B&&A&&x(I,L,F,{locale:P},{kind:D},z)},[F,L,B,P,A,null==R?void 0:R.locale,I,z,D]);let q={ref:W,onClick(e){N||"function"!=typeof S||S(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,i,l,a,u,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(d):d()}(e,I,L,F,w,C,k,P,z)},onMouseEnter(e){N||"function"!=typeof E||E(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(A||!z)&&x(I,L,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:D},z)},onTouchStart:function(e){N||"function"!=typeof O||O(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(A||!z)&&x(I,L,F,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:D},z)}};if((0,u.isAbsoluteUrl)(F))q.href=F;else if(!N||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,h.getDomainLocale)(F,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=t||(0,m.addBasePath)((0,c.addLocale)(F,e,null==R?void 0:R.defaultLocale))}return N?o.default.cloneElement(n,q):(0,i.jsx)("a",{...M,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),i=r(3815),o="function"==typeof IntersectionObserver,l=new Map,s=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,u=a||!o,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},s.push(r),l.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(n);let e=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(1997);let n=r(9919),i=r(7903);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,a,u,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:h,className:m,quality:g,width:b,height:x,fill:v=!1,style:y,overrideSrc:j,onLoad:_,onLoadingComplete:w,placeholder:C="empty",blurDataURL:k,fetchPriority:P,layout:S,objectFit:E,objectPosition:O,lazyBoundary:N,lazyRoot:M,...R}=e,{imgConf:T,showAltText:I,blurComplete:z,defaultLoader:A}=t,D=T||i.imageConfigDefault;if("allSizes"in D)s=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);s={...D,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=R.loader||A;delete R.loader,delete R.srcSet;let F="__next_img_default"in L;if(F){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!f&&(f=t)}let H="",U=l(b),G=l(x);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,k=k||e.blurDataURL,H=e.src,!v){if(U||G){if(U&&!G){let t=U/e.width;G=Math.round(e.height*t)}else if(!U&&G){let t=G/e.height;U=Math.round(e.width*t)}}else U=e.width,G=e.height}}let K=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:H)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,K=!1),s.unoptimized&&(d=!0),F&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(d=!0),p&&(P="high");let B=l(g),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},I?{}:{color:"transparent"},y),W=z||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:G,blurWidth:a,blurHeight:u,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+C+'")',q=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),c=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[c]})}}({config:s,src:c,unoptimized:d,width:U,quality:B,sizes:f,loader:L});return{props:{...R,loading:K?"lazy":h,fetchPriority:P,width:U,height:G,decoding:"async",className:m,style:{...V,...q},sizes:J.sizes,srcSet:J.srcSet,src:j||J.src},meta:{unoptimized:d,priority:p,placeholder:C,fill:v}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,s=n?40*n:t,a=i?40*i:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return s}});let n=r(8754),i=r(7367),o=r(6541),l=n._(r(6663));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=o.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4092:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893);r(9311),r(4005);var i=r(9008),o=r.n(i),l=r(7294),s=r(1664),a=r.n(s),u=r(5675),c=r.n(u);function f(){let[e,t]=(0,l.useState)(!1),r=[{href:"/",text:"Firma"},{href:"/dienstleistung",text:"Dienstleistung"},{href:"/fuhrpark",text:"Fuhrpark"},{href:"/team",text:"Team"},{href:"/karriere",text:"Karriere"},{href:"/kontakt",text:"Kontakt"},{href:"/socialmedia",text:"Social Media"},{href:"/impressum",text:"Impressum"},{href:"/datenschutz",text:"Datenschutz"}],i=[{href:"https://www.facebook.com/Tompeukerthausmeisterservice/",image:"/bilder/Facebook.png",alt:"Facebook-Seite von Tom Peukert"},{href:"https://www.instagram.com/tompeukert/",image:"/bilder/Instagram.png",alt:"Instagram-Profil von Tom Peukert"}];return(0,n.jsxs)("nav",{className:"shadow sticky-top p-2 mb-2 bg-success text-center",role:"navigation","aria-label":"Hauptnavigation",children:[(0,n.jsxs)("div",{className:"d-none d-md-flex justify-content-between align-items-center px-4",children:[(0,n.jsx)("div",{className:"d-flex align-items-center",children:(0,n.jsx)(a(),{href:"/","aria-label":"Zur Startseite",children:(0,n.jsx)(c(),{src:"/bilder/logo.png",alt:"Logo von Tom Peukert Hausmeisterservice",width:200,height:60,priority:!0})})}),(0,n.jsx)("ul",{className:"d-flex list-unstyled mb-0",role:"menubar",children:r.map((e,t)=>(0,n.jsx)("li",{className:"mx-3",role:"none",children:(0,n.jsx)(a(),{href:e.href,className:"nav-link fw-bold text-white",role:"menuitem",children:e.text})},t))}),(0,n.jsx)("div",{className:"d-flex align-items-center",children:i.map((e,t)=>(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"mx-2","aria-label":e.alt,children:(0,n.jsx)(c(),{src:e.image,alt:e.alt,width:30,height:30})},t))})]}),(0,n.jsxs)("div",{className:"d-flex d-md-none justify-content-between align-items-center px-3",children:[(0,n.jsx)(a(),{href:"/","aria-label":"Zur Startseite",children:(0,n.jsx)(c(),{src:"/bilder/logo.png",alt:"Logo von Tom Peukert Hausmeisterservice",width:160,height:50})}),(0,n.jsx)("button",{onClick:()=>t(!e),"aria-label":e?"Men\xfc schlie\xdfen":"Men\xfc \xf6ffnen","aria-expanded":e,"aria-controls":"mobile-menu",style:{width:"50px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",borderRadius:"8px",backgroundColor:"black",border:"none"},"aria-live":"polite",children:(0,n.jsx)("span",{style:{color:"white",fontSize:"2rem"},"aria-hidden":"true",children:e?"✖":"☰"})})]}),e&&(0,n.jsxs)("ul",{id:"mobile-menu",className:"list-unstyled d-md-none px-3 py-2",style:{backgroundColor:"black",transition:"all 0.3s ease-in-out"},role:"menu",children:[r.map((e,r)=>(0,n.jsx)("li",{className:"py-2",role:"none",children:(0,n.jsx)(a(),{href:e.href,className:"nav-link",onClick:()=>t(!1),style:{color:"white"},role:"menuitem",children:e.text})},r)),(0,n.jsx)("li",{className:"d-flex justify-center py-3",children:i.map((e,t)=>(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.alt,className:"mx-2",children:(0,n.jsx)(c(),{src:e.image,alt:e.alt,width:30,height:30})},t))})]})]})}function d(){return(0,n.jsx)("footer",{className:"fusszeile fixed bottom-0 left-0 right-0 text-center py-2",role:"contentinfo",children:(0,n.jsxs)("h6",{className:"text-xs sm:text-sm md:text-base lg:text-lg flex flex-wrap justify-center gap-2",children:[(0,n.jsx)("span",{children:"Tom Peukert Hausmeisterservice"}),(0,n.jsx)("span",{className:"hidden sm:inline",children:" | "}),(0,n.jsxs)("span",{children:["\uD83D\uDCDE ",(0,n.jsx)("a",{href:"tel:+4983419559675","aria-label":"Telefonnummer anrufen",style:{color:"black",textDecoration:"none"},children:"08341 9559675"})]}),(0,n.jsx)("span",{className:"hidden sm:inline",children:" | "}),(0,n.jsx)("span",{children:(0,n.jsx)("a",{href:"mailto:info@tom-peukert.de","aria-label":"E-Mail senden",style:{color:"black",textDecoration:"none"},children:"\uD83D\uDCE7 info@tom-peukert.de"})}),(0,n.jsx)("span",{className:"hidden sm:inline",children:" | "}),(0,n.jsx)("span",{children:"\xa9 Tom Peukert Hausmeisterservice, alle Rechte vorbehalten."})]})})}function p(e){let{children:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"Tom Peukert Hausmeisterservice"}),(0,n.jsx)("meta",{name:"description",content:"Genareded by JW"}),(0,n.jsx)("link",{rel:"icon",href:"...."})]}),(0,n.jsx)(f,{}),(0,n.jsx)("div",{className:"container",children:t}),(0,n.jsx)(d,{})]})}function h(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(p,{children:(0,n.jsx)(t,{...r})})}r(2427)},4005:function(){},9311:function(){},2427:function(){},9008:function(e,t,r){e.exports=r(7828)},5675:function(e,t,r){e.exports=r(5666)},1664:function(e,t,r){e.exports=r(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);
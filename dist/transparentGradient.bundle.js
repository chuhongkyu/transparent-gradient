var transparentGradient;(()=>{"use strict";var t={d:(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};(()=>{function r(t,e="right"){if(!t)throw new Error("element is required");const r=["right","bottom","top","left"].includes(e)?e:"right";t.setAttribute("style",`\n      -webkit-mask-size: cover;\n      mask-size: cover;\n      -webkit-mask-repeat: no-repeat;\n      -webkit-mask-position: ${r};\n      mask-repeat: no-repeat;\n      -webkit-mask-image: linear-gradient(to ${r},black, transparent), linear-gradient(to ${r},black,transparent);\n      mask-image: linear-gradient(to ${r},black, transparent), linear-gradient(to ${r},black,transparent);\n    `)}t.d(e,{transparentGradient:()=>r})})(),transparentGradient=e.transparentGradient})();
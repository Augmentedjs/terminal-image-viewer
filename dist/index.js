!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){const r=["[48;5;0m","[48;5;9m","[48;5;10m","[48;5;12m","[48;5;11m","[48;5;13m","[48;5;14m","[107m","[48;5;8m","[48;5;1m","[48;5;2m","[48;5;4m","[48;5;3m","[48;5;5m","[48;5;6m","[48;5;7m"],o=["[38;5;0m","[38;5;9m","[38;5;10m","[38;5;12m","[38;5;11m","[38;5;13m","[38;5;14m","[97m","[38;5;8m","[38;5;1m","[38;5;2m","[38;5;4m","[38;5;3m","[38;5;5m","[38;5;6m","[38;5;7m"];e.exports={PALETTE:r,PALETTE_FG:o,RESET:"[0m",DIM:"[2m",SQUARE:" ",HALF:"▀",ESCAPE_256_STRING_BG:"[48;5;",ESCAPE_256_STRING_FG:"[38;5;"}},function(e,t,r){e.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>{const t=typeof e;return"function"===t||"object"===t&&!!e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>"[object Function]"==Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;const n=(e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,o)),n<=1&&(t=void 0),r)};t.default=n},function(e,t,r){"use strict";var o=$(r(4)),n=$(r(1)),l=$(r(5)),s=$(r(6)),i=$(r(7)),u=$(r(8)),a=$(r(0)),c=$(r(9)),f=$(r(10)),p=$(r(11)),d=$(r(12)),b=$(r(13)),y=$(r(14)),m=$(r(15)),_=$(r(16)),g=$(r(2)),h=$(r(17)),O=r(18),S=r(19),j=r(20),x=$(r(21)),v=r(22),P=$(r(23)),M=r(24);function $(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=S.shuffle,e.exports.prettyPrint=S.prettyPrint,e.exports.binarySearch=S.binarySearch,e.exports.TransformerType=S.TransformerType,e.exports.Transformer=S.Transformer,e.exports.wrap=S.wrap,e.exports.filterObject=S.filterObject,e.exports.findByMatchingProperties=S.findByMatchingProperties,e.exports.sortObjects=j.sortObjects,e.exports.mergeSort=j.mergeSort,e.exports.quickSort=j.quickSort,e.exports.insertionSort=j.insertionSort,e.exports.bubbleSort=j.bubbleSort,e.exports.formatDate=x.default,e.exports.formatBinary=v.formatBinary,e.exports.binaryToHex=v.binaryToHex,e.exports.isString=o.default,e.exports.isFunction=n.default,e.exports.extend=l.default,e.exports.pad=s.default,e.exports.uniqueId=i.default,e.exports.has=u.default,e.exports.isObject=a.default,e.exports.allKeys=c.default,e.exports.create=f.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=b.default,e.exports.isDefined=y.default,e.exports.some=m.default,e.exports.splice=_.default,e.exports.before=g.default,e.exports.once=h.default,e.exports.filter=P.default,e.exports.fibonacci=O.fibonacci,e.exports.fibonacciSequence=O.fibonacciSequence,e.exports.sizeOf=M.sizeOf,e.exports.formatByteSize=M.formatByteSize,e.exports.memorySizeOf=M.memorySizeOf},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=e=>`${e}${++o}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>null!==e&&hasOwnProperty.call(e,t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=r(0))&&o.__esModule?o:{default:o};t.default=e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=r(0))&&o.__esModule?o:{default:o};t.default=(e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=r(1))&&o.__esModule?o:{default:o};t.default=(e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>-1!==e.indexOf(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,...r)=>{const o=e.split("."),n=o.pop(),l=o.length;let s=0;for(s=0;s<l;s++)t=t[o[s]];return t[n].apply(t,r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>void 0!==e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>!!Array.isArray(e)&&e.some(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let o=Array(e.length-r);const n=t.length;let l;for(l=0;l<o.length;l++)o[l]=e[l+r];for(l=0;l<n;l++)e[l+r]=t[l];for(l=0;l<o.length;l++)e[l+n+r]=o[l]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=r(2))&&o.__esModule?o:{default:o};t.default=e=>(0,n.default)(2,e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=t.fibonacci=e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)};t.fibonacciSequence=e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(o(r));return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.shuffle=e=>{const t=e.slice(0);let r,o,n=0;for(n=e.length-1;n>0;n--)o=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[o],t[o]=r;return t},t.prettyPrint=(e,t,r)=>{let o="\t";return t&&(o=" ".repeat(r)),JSON.stringify(e,null,o)},t.binarySearch=(e,t,r)=>{let o,n,l=0,s=e.length-1;for(;l<=s;)if((n=r(e[o=Math.floor((l+s)/2)],t))<0)l=o+1;else{if(!(n>0))return o;s=o-1}return null};const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null");class l{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}}t.Transformer=l,t.wrap=(e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(o))),t.filterObject=(e,t)=>{const r={};if(e&&t){const o=t.length;let n=0;for(n=0;n<o;n++)r[t[n]]=e[t[n]]}return r},t.findByMatchingProperties=(e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=(e,t)=>e.sort((e,r)=>{const o=e[t],n=r[t];return o<n?-1:o>n?1:0});const o=t.mergeSort=e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),l=e.slice(t);return n(o(r),o(l))},n=(e,t)=>{let r=[],o=0,n=0;for(;o<e.length&&n<t.length;)e[o]<t[n]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(e.slice(o)).concat(t.slice(n))},l=t.quickSort=e=>{if(0===e.length)return[];let t=1;const r=e.length,o=[],n=[],s=e[0];for(t=1;t<r;t++)e[t]<s?o.push(e[t]):n.push(e[t]);return l(o).concat(s,l(n))};t.insertionSort=e=>{let t=[];if(e){const r=(t=e.slice()).length;let o,n,l;for(o=1;o<r;o++){for(l=t[o],n=o-1;n>=0&&t[n]>l;n--)t[n+1]=t[n];t[n+1]=l}}return t},t.bubbleSort=e=>{let t=[];if(e){let r,o,n;const l=(t=e.slice()).length-1;do{for(r=!1,o=0;o<l;o++)t[o]>t[o+1]&&(n=t[o],t[o]=t[o+1],t[o+1]=n,r=!0)}while(r)}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const r=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),l=e.getHours(),s=e.getMinutes();return e.getSeconds(),t?`${o}/${n}/${r}`:`${o}/${n}/${r} ${l%12||12}:${s<10?"0"+s:s}${l<12?"am":"pm"}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatBinary=(e,t)=>(e=>{let t=0,r=e,o="";for(t=0;t<32;t++,o+=String(r>>>31),r<<=1);return o})(e).split("").reverse().join("").substring(0,t),t.binaryToHex=(e,t)=>{const r=parseInt(e.split("").reverse().join(""),2);let o="";return r<16&&t&&(o="0"),`${o}${r.toString(16)}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=e=>{let t=0;if(null!=e)switch(typeof e){case"number":t+=8;break;case"string":t+=2*e.length;break;case"boolean":t+=4;break;case"object":let r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r||"Array"===r){let r=null;for(r in e)e.hasOwnProperty(r)&&(t+=o(e[r]))}else t+=2*e.toString().length}return t},n=e=>e<1024?e+" bytes":e<1048576?(e/1024).toFixed(3)+" KB":e<1073741824?(e/1048576).toFixed(3)+" MB":(e/1073741824).toFixed(3)+" GB";t.sizeOf=o,t.formatByteSize=n,t.memorySizeOf=e=>n(o(e))}])},function(e,t,r){e.exports=r(3)},function(e,t,r){const o=r(4),n=r(5);if(process.argv&&process.argv.length>=3){const e=r(6),t=process.argv[2];try{e.existsSync(t)?e.readFile(t,"utf8",(e,t)=>{if(e)throw e;const r=JSON.parse(t);r&&"object"==typeof r?r&&r.shape&&"square"===r.shape?n(r):o(r):console.error("Problem with json file.")}):console.error("Please pass a JSON file with bitmap data.")}catch(e){console.error(e)}}else console.error("Please pass a JSON file with bitmap data.")},function(e,t,r){const{ESCAPE_256_STRING_BG:o,ESCAPE_256_STRING_FG:n,PALETTE:l,PALETTE_FG:s,RESET:i,SQUARE:u,HALF:a}=r(0),{formatBinary:c}=r(1),f=e=>{if(!e)return;let t=0,r="";for(t=0;t<e.length;t+=2){const o=parseInt(`${e[t]}${e[t+1]}`,16),n=c(o,8).split("");let s=0;for(;s<n.length;s++)r+=`${"0"===n[s]?l[0]:l[7]}${u}${i}`}return console.log(r),r},p=e=>{if(!e)return;let t=0,r="";for(t=0;t<e.length;t++){const o=parseInt(e[t],16);r+=`${l[o]}${u}${i}`}return console.log(r),r},d=e=>{if(!e)return;let t=0,r="";for(t=0;t<e.length;t+=2){const n=parseInt(`${e[t]}${e[t+1]}`,16);r+=`${o+n+"m"}${u}${i}`}return console.log(r),r};e.exports=e=>{if(e){let t=0;for(t=0;t<e.height;t++)256===e.palette.length?d(e.bitmap[t]):2===e.palette.length?f(e.bitmap[t]):p(e.bitmap[t])}return!0}},function(e,t,r){const{ESCAPE_256_STRING_BG:o,ESCAPE_256_STRING_FG:n,PALETTE:l,PALETTE_FG:s,RESET:i,SQUARE:u,HALF:a}=r(0),{formatBinary:c}=r(1),f=(e,t)=>{if(!e)return;const r=e.slice();let o;o=t?t.slice():new Array(r.length).fill("0");let n=0,u="";for(n=0;n<r.length;n+=2)if(r&&o){const e=parseInt(`${r[n]}${r[n+1]}`,16),t=c(e,8).split(""),f=parseInt(`${o[n]}${o[n+1]}`,16),p=c(f,8).split("");let d=0;for(;d<t.length;d++)u+=`${"0"===p[d]?l[0]:l[7]}${"0"===t[d]?s[0]:s[7]}${a}${i}`}return console.log(u),u},p=(e,t)=>{if(!e)return;const r=e.slice();let o;o=t?t.slice():new Array(r.length).fill("0");let n=0,u="";for(n=0;n<r.length;n++)if(r&&o){const e=parseInt(r[n],16),t=parseInt(o[n],16);u+=`${l[t]}${s[e]}${a}${i}`}return console.log(u),u},d=(e,t)=>{if(!e)return;const r=e.slice();let l;l=t?t.slice():new Array(r.length).fill("0");let s=0,u="";for(s=0;s<r.length;s+=2)if(r&&l){const e=parseInt(`${r[s]}${r[s+1]}`,16),t=parseInt(`${l[s]}${l[s+1]}`,16);u+=`${o+t+"m"}${n+e+"m"}${a}${i}`}return console.log(u),u};e.exports=e=>{if(e){let t=0;for(t=0;t<e.height;t+=2)256===e.palette.length?d(e.bitmap[t],e.bitmap[t+1]):2===e.palette.length?f(e.bitmap[t],e.bitmap[t+1]):p(e.bitmap[t],e.bitmap[t+1])}return!0}},function(e,t){e.exports=require("fs")}]);
//# sourceMappingURL=index.js.map
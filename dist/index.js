/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next-core-utilities/dist/next-core-utilities.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-core-utilities/dist/next-core-utilities.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>{const t=typeof e;return"function"===t||"object"===t&&!!e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>"[object Function]"==Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;const n=(e,t)=>{let r,n;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return n=Number.parseInt(e),()=>(--n>0&&(r=t.apply(void 0,o)),n<=1&&(t=void 0),r)};t.default=n},function(e,t,r){"use strict";var o=T(r(4)),n=T(r(1)),u=T(r(5)),s=T(r(6)),l=T(r(7)),i=T(r(8)),c=T(r(0)),f=T(r(9)),a=T(r(10)),p=T(r(11)),d=T(r(12)),y=T(r(13)),b=T(r(14)),O=T(r(15)),_=T(r(16)),j=T(r(2)),x=T(r(17)),g=r(18),h=r(19),m=r(20),M=T(r(21)),S=r(22),v=T(r(23)),P=r(24);function T(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=h.shuffle,e.exports.prettyPrint=h.prettyPrint,e.exports.binarySearch=h.binarySearch,e.exports.TransformerType=h.TransformerType,e.exports.Transformer=h.Transformer,e.exports.wrap=h.wrap,e.exports.filterObject=h.filterObject,e.exports.findByMatchingProperties=h.findByMatchingProperties,e.exports.sortObjects=m.sortObjects,e.exports.mergeSort=m.mergeSort,e.exports.quickSort=m.quickSort,e.exports.insertionSort=m.insertionSort,e.exports.bubbleSort=m.bubbleSort,e.exports.formatDate=M.default,e.exports.formatBinary=S.formatBinary,e.exports.binaryToHex=S.binaryToHex,e.exports.isString=o.default,e.exports.isFunction=n.default,e.exports.extend=u.default,e.exports.pad=s.default,e.exports.uniqueId=l.default,e.exports.has=i.default,e.exports.isObject=c.default,e.exports.allKeys=f.default,e.exports.create=a.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=y.default,e.exports.isDefined=b.default,e.exports.some=O.default,e.exports.splice=_.default,e.exports.before=j.default,e.exports.once=x.default,e.exports.filter=v.default,e.exports.fibonacci=g.fibonacci,e.exports.fibonacciSequence=g.fibonacciSequence,e.exports.sizeOf=P.sizeOf,e.exports.formatByteSize=P.formatByteSize,e.exports.memorySizeOf=P.memorySizeOf},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=0;t.default=e=>{return`${e}${++o}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>null!==e&&hasOwnProperty.call(e,t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(0),u=(o=n)&&o.__esModule?o:{default:o};t.default=e=>(0,u.default)(e)?Object.getOwnPropertyNames(e):[]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(0),u=(o=n)&&o.__esModule?o:{default:o};t.default=(e,t)=>{const r=(e=>(0,u.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(1),u=(o=n)&&o.__esModule?o:{default:o};t.default=(e,t)=>{if(null===e)return;const r=e[t];return(0,u.default)(r)?r.call(e):r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>-1!==e.indexOf(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,...r)=>{const o=e.split("."),n=o.pop(),u=o.length;let s=0;for(s=0;s<u;s++)t=t[o[s]];return t[n].apply(t,r)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=e=>void 0!==e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>!!Array.isArray(e)&&e.some(t)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let o=Array(e.length-r);const n=t.length;let u;for(u=0;u<o.length;u++)o[u]=e[u+r];for(u=0;u<n;u++)e[u+r]=t[u];for(u=0;u<o.length;u++)e[u+n+r]=o[u]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=r(2),u=(o=n)&&o.__esModule?o:{default:o};t.default=e=>(0,u.default)(2,e)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=t.fibonacci=e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)};t.fibonacciSequence=e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(o(r));return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=arguments;t.shuffle=e=>{const t=e.slice(0);let r,o,n=0;for(n=e.length-1;n>0;n--)o=Math.floor(Math.random()*(n+1)),r=t[n],t[n]=t[o],t[o]=r;return t},t.prettyPrint=(e,t,r)=>{let o="\t";return t&&(o=" ".repeat(r)),JSON.stringify(e,null,o)},t.binarySearch=(e,t,r)=>{let o,n,u=0,s=e.length-1;for(;u<=s;)if((n=r(e[o=Math.floor((u+s)/2)],t))<0)u=o+1;else{if(!(n>0))return o;s=o-1}return null};const n=t.TransformerType={};n.STRING=Symbol("String"),n.INTEGER=Symbol("Integer"),n.NUMBER=Symbol("Number"),n.BOOLEAN=Symbol("Boolean"),n.ARRAY=Symbol("Array"),n.OBJECT=Symbol("Object"),n.NULL=Symbol("Null");class u{constructor(){this.type=n}static transform(e,t){let r=null;switch(t){case n.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case n.INTEGER:r=parseInt(e);break;case n.NUMBER:r=Number(e);break;case n.BOOLEAN:r=Boolean(e);break;case n.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case n.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?n.NULL:"string"==typeof e?n.STRING:"number"==typeof e?n.NUMBER:"boolean"==typeof e?n.BOOLEAN:Array.isArray(e)?n.ARRAY:"object"==typeof e?n.OBJECT:void 0}}t.Transformer=u;t.wrap=(e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(o))),t.filterObject=(e,t)=>{const r={};if(e&&t){const o=t.length;let n=0;for(n=0;n<o;n++)r[t[n]]=e[t[n]]}return r},t.findByMatchingProperties=(e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r]))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sortObjects=(e,t)=>e.sort((e,r)=>{const o=e[t],n=r[t];return o<n?-1:o>n?1:0});const o=t.mergeSort=e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),u=e.slice(t);return n(o(r),o(u))},n=(e,t)=>{let r=[],o=0,n=0;for(;o<e.length&&n<t.length;)e[o]<t[n]?(r.push(e[o]),o++):(r.push(t[n]),n++);return r.concat(e.slice(o)).concat(t.slice(n))},u=t.quickSort=e=>{if(0===e.length)return[];let t=1;const r=e.length,o=[],n=[],s=e[0];for(t=1;t<r;t++)e[t]<s?o.push(e[t]):n.push(e[t]);return u(o).concat(s,u(n))};t.insertionSort=e=>{let t=[];if(e){const r=(t=e.slice()).length;let o,n,u;for(o=1;o<r;o++){for(u=t[o],n=o-1;n>=0&&t[n]>u;n--)t[n+1]=t[n];t[n+1]=u}}return t},t.bubbleSort=e=>{let t=[];if(e){let r,o,n;const u=(t=e.slice()).length-1;do{for(r=!1,o=0;o<u;o++)t[o]>t[o+1]&&(n=t[o],t[o]=t[o+1],t[o+1]=n,r=!0)}while(r)}return t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>{const r=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),u=e.getHours(),s=e.getMinutes();e.getSeconds();return t?`${o}/${n}/${r}`:`${o}/${n}/${r} ${u%12||12}:${s<10?"0"+s:s}${u<12?"am":"pm"}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.formatBinary=(e,t)=>(e=>{let t=0,r=e,o="";for(t=0;t<32;t++,o+=String(r>>>31),r<<=1);return o})(e).split("").reverse().join("").substring(0,t),t.binaryToHex=(e,t)=>{const r=parseInt(e.split("").reverse().join(""),2);let o="";return r<16&&t&&(o="0"),`${o}${r.toString(16)}`}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(e,t)=>e&&t?[].filter.call(e,e=>e!=t).join(""):null},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=e=>{let t=0;if(null!=e)switch(typeof e){case"number":t+=8;break;case"string":t+=2*e.length;break;case"boolean":t+=4;break;case"object":let r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r||"Array"===r){let r=null;for(r in e)e.hasOwnProperty(r)&&(t+=o(e[r]))}else t+=2*e.toString().length}return t},n=e=>e<1024?e+" bytes":e<1048576?(e/1024).toFixed(3)+" KB":e<1073741824?(e/1048576).toFixed(3)+" MB":(e/1073741824).toFixed(3)+" GB";t.sizeOf=o,t.formatByteSize=n,t.memorySizeOf=e=>n(o(e))}])}));
//# sourceMappingURL=next-core-utilities.js.map

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const Reset = "\x1b[0m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Underscore = "\x1b[4m";
const Blink = "\x1b[5m";
const Reverse = "\x1b[7m";
const Hidden = "\x1b[8m";
const FgBlack = "\u001b[38;5;0m";
const FgRed = "\u001b[38;5;1m";
const FgGreen = "\u001b[38;5;2m";
const FgYellow = "\u001b[38;5;3m";
const FgBlue = "\u001b[38;5;4m";
const FgMagenta = "\u001b[38;5;5m";
const FgCyan = "\u001b[38;5;6m";
const FgGray = "\u001b[38;5;7m";
const FgDarkGray = "\u001b[38;5;8m";
const FgBrightRed = "\u001b[38;5;9m";
const FgBrightGreen = "\u001b[38;5;10m";
const FgBrightYellow = "\u001b[38;5;11m";
const FgBrightBlue = "\u001b[38;5;12m";
const FgBrightMagenta = "\u001b[38;5;13m";
const FgBrightCyan = "\u001b[38;5;14m";
const FgWhite = "\x1b[97m";
const BgBlack = "\u001b[48;5;0m";
const BgRed = "\u001b[48;5;1m";
const BgGreen = "\u001b[48;5;2m";
const BgYellow = "\u001b[48;5;3m";
const BgBlue = "\u001b[48;5;4m";
const BgMagenta = "\u001b[48;5;5m";
const BgCyan = "\u001b[48;5;6m";
const BgGray = "\u001b[48;5;7m";
const BgDarkGray = "\u001b[48;5;8m";
const BgBrightRed = "\u001b[48;5;9m";
const BgBrightGreen = "\u001b[48;5;10m";
const BgBrightYellow = "\u001b[48;5;11m";
const BgBrightBlue = "\u001b[48;5;12m";
const BgBrightMagenta = "\u001b[48;5;13m";
const BgBrightCyan = "\u001b[48;5;14m";
const BgWhite = "\x1b[107m";
const PALETTE = [`${BgBlack}`, `${BgBrightRed}`, `${BgBrightGreen}`, `${BgBrightBlue}`, `${BgBrightYellow}`, `${BgBrightMagenta}`, `${BgBrightCyan}`, `${BgWhite}`, `${BgDarkGray}`, `${BgRed}`, `${BgGreen}`, `${BgBlue}`, `${BgYellow}`, `${BgMagenta}`, `${BgCyan}`, `${BgGray}`];
const PALETTE_FG = [`${FgBlack}`, `${FgBrightRed}`, `${FgBrightGreen}`, `${FgBrightBlue}`, `${FgBrightYellow}`, `${FgBrightMagenta}`, `${FgBrightCyan}`, `${FgWhite}`, `${FgDarkGray}`, `${FgRed}`, `${FgGreen}`, `${FgBlue}`, `${FgYellow}`, `${FgMagenta}`, `${FgCyan}`, `${FgGray}`];
const SQUARE = " ";
const HALF = "▀";
const ESCAPE_256_STRING_BG = "\u001b[48;5;";
const ESCAPE_256_STRING_FG = "\u001b[38;5;";
module.exports = {
  "PALETTE": PALETTE,
  "PALETTE_FG": PALETTE_FG,
  "RESET": Reset,
  "DIM": Dim,
  "SQUARE": SQUARE,
  "HALF": HALF,
  "ESCAPE_256_STRING_BG": ESCAPE_256_STRING_BG,
  "ESCAPE_256_STRING_FG": ESCAPE_256_STRING_FG
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const printBitmapSingle = __webpack_require__(/*! ./printSingle.js */ "./src/printSingle.js");

const printBitmapDouble = __webpack_require__(/*! ./printDouble.js */ "./src/printDouble.js");

if (process.argv && process.argv.length >= 3) {
  const fs = __webpack_require__(/*! fs */ "fs");

  const filename = process.argv[2];

  try {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        const json = JSON.parse(data);

        if (!json || typeof json !== "object") {
          console.error("Problem with json file.");
          return;
        }

        if (json && json.shape && json.shape === "square") {
          printBitmapDouble(json);
        } else {
          printBitmapSingle(json);
        }
      });
    } else {
      console.error("Please pass a JSON file with bitmap data.");
    }
  } catch (err) {
    console.error(err);
  }
} else {
  console.error("Please pass a JSON file with bitmap data.");
}

/***/ }),

/***/ "./src/printDouble.js":
/*!****************************!*\
  !*** ./src/printDouble.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  ESCAPE_256_STRING_BG,
  ESCAPE_256_STRING_FG,
  PALETTE,
  PALETTE_FG,
  RESET,
  SQUARE,
  HALF
} = __webpack_require__(/*! ./colors.js */ "./src/colors.js");

const {
  formatBinary
} = __webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js");

const printDoubleMono = (y1, y2) => {
  if (!y1) {
    return;
  }

  const row1 = y1.slice();
  let row2;

  if (!y2) {
    row2 = new Array(row1.length).fill("0");
  } else {
    row2 = y2.slice();
  }

  let x = 0,
      text = "";

  for (x = 0; x < row1.length; x = x + 2) {
    if (row1 && row2) {
      const i1 = parseInt(`${row1[x]}${row1[x + 1]}`, 16);
      const i1b = formatBinary(i1, 8).split(""); //console.log(i1b);

      const i2 = parseInt(`${row2[x]}${row2[x + 1]}`, 16);
      const i2b = formatBinary(i2, 8).split("");
      let xx = 0;

      for (xx; xx < i1b.length; xx++) {
        text += `${i2b[xx] === "0" ? PALETTE[0] : PALETTE[7]}${i1b[xx] === "0" ? PALETTE_FG[0] : PALETTE_FG[7]}${HALF}${RESET}`;
      }
    }
  }

  console.log(text);
  return text;
};

const printDouble = (y1, y2) => {
  if (!y1) {
    return;
  }

  const row1 = y1.slice();
  let row2;

  if (!y2) {
    row2 = new Array(row1.length).fill("0");
  } else {
    row2 = y2.slice();
  }

  let x = 0,
      text = "";

  for (x = 0; x < row1.length; x++) {
    if (row1 && row2) {
      const i1 = parseInt(row1[x], 16);
      const i2 = parseInt(row2[x], 16);
      text += `${PALETTE[i2]}${PALETTE_FG[i1]}${HALF}${RESET}`;
    }
  }

  console.log(text);
  return text;
};

const printDouble256 = (y1, y2) => {
  if (!y1) {
    return;
  }

  const row1 = y1.slice();
  let row2;

  if (!y2) {
    row2 = new Array(row1.length).fill("0");
  } else {
    row2 = y2.slice();
  }

  let x = 0,
      text = "";

  for (x = 0; x < row1.length; x = x + 2) {
    if (row1 && row2) {
      const i1 = parseInt(`${row1[x]}${row1[x + 1]}`, 16);
      const i2 = parseInt(`${row2[x]}${row2[x + 1]}`, 16);
      text += `${ESCAPE_256_STRING_BG + i2 + "m"}${ESCAPE_256_STRING_FG + i1 + "m"}${HALF}${RESET}`;
    }
  }

  console.log(text);
  return text;
};

const printBitmapDouble = bitmap => {
  if (bitmap) {
    let y = 0;

    for (y = 0; y < bitmap.height; y = y + 2) {
      if (bitmap.palette.length === 256) {
        printDouble256(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
      } else if (bitmap.palette.length === 2) {
        // monochrome
        printDoubleMono(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
      } else {
        printDouble(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
      }
    }
  }

  return true;
};

module.exports = printBitmapDouble;

/***/ }),

/***/ "./src/printSingle.js":
/*!****************************!*\
  !*** ./src/printSingle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  ESCAPE_256_STRING_BG,
  ESCAPE_256_STRING_FG,
  PALETTE,
  PALETTE_FG,
  RESET,
  SQUARE,
  HALF
} = __webpack_require__(/*! ./colors.js */ "./src/colors.js");

const {
  formatBinary
} = __webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js");

const printMono = row => {
  if (!row) {
    return;
  }

  let x = 0,
      text = "";

  for (x = 0; x < row.length; x = x + 2) {
    const i1 = parseInt(`${row[x]}${row[x + 1]}`, 16);
    const i1b = formatBinary(i1, 8).split("");
    let xx = 0;

    for (xx; xx < i1b.length; xx++) {
      text += `${i1b[xx] === "0" ? PALETTE[0] : PALETTE[7]}${SQUARE}${RESET}`;
    }
  }

  console.log(text);
  return text;
};

const print = row => {
  if (!row) {
    return;
  }

  let x = 0,
      text = "";

  for (x = 0; x < row.length; x++) {
    const i = parseInt(row[x], 16);
    text += `${PALETTE[i]}${SQUARE}${RESET}`;
  }

  console.log(text);
  return text;
};

const print256 = row => {
  if (!row) {
    return;
  }

  let x = 0,
      text = "";

  for (x = 0; x < row.length; x = x + 2) {
    const i = parseInt(`${row[x]}${row[x + 1]}`, 16);
    text += `${ESCAPE_256_STRING_BG + i + "m"}${SQUARE}${RESET}`;
  }

  console.log(text);
  return text;
};

const printBitmapSingle = bitmap => {
  if (bitmap) {
    let y = 0;

    for (y = 0; y < bitmap.height; y++) {
      if (bitmap.palette.length === 256) {
        print256(bitmap.bitmap[y]);
      } else if (bitmap.palette.length === 2) {
        printMono(bitmap.bitmap[y]);
      } else {
        print(bitmap.bitmap[y]);
      }
    }
  }

  return true;
};

module.exports = printBitmapSingle;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
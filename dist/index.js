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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  printBitmapSingle,
  printBitmapDouble
} = __webpack_require__(/*! ./printBitmap.js */ "./src/printBitmap.js");

if (process.argv && process.argv.length >= 3) {
  const fs = __webpack_require__(/*! fs */ "fs");

  const filename = process.argv[2];
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
  console.warn("Please pass a JSON file with bitmap data.");
}

/***/ }),

/***/ "./src/printBitmap.js":
/*!****************************!*\
  !*** ./src/printBitmap.js ***!
  \****************************/
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
const FgWhite = "\u001b[38;5;7m";
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
const BgWhite = "\x1b[47m";
const PALETTE = [`${BgBlack}`, `${BgBrightRed}`, `${BgBrightGreen}`, `${BgBrightBlue}`, `${BgBrightYellow}`, `${BgBrightMagenta}`, `${BgBrightCyan}`, `${BgWhite}`, `${BgDarkGray}`, `${BgRed}`, `${BgGreen}`, `${BgBlue}`, `${BgYellow}`, `${BgMagenta}`, `${BgCyan}`, `${BgGray}`];
const PALETTE_FG = [`${FgBlack}`, `${FgBrightRed}`, `${FgBrightGreen}`, `${FgBrightBlue}`, `${FgBrightYellow}`, `${FgBrightMagenta}`, `${FgBrightCyan}`, `${FgWhite}`, `${FgDarkGray}`, `${FgRed}`, `${FgGreen}`, `${FgBlue}`, `${FgYellow}`, `${FgMagenta}`, `${FgCyan}`, `${FgGray}`];
const SQUARE = " ";
const HALF = "▀";

const print = row => {
  let x = 0,
      text = "";

  for (x = 0; x < row.length; x++) {
    text += `${PALETTE[row[x]]}${SQUARE}`;
  }

  text += Reset;
  console.log(text);
  return text;
};

const printDouble = (row1, row2) => {
  let x = 0,
      text = "";

  for (x = 0; x < row.length; x++) {
    text += `${PALETTE[row2[x]]}${PALETTE_FG[row1[x]]}${HALF}`;
  }

  text += Reset;
  console.log(text);
  return text;
};

const printBitmapSingle = bitmap => {
  if (bitmap) {
    let y = 0;

    for (y = 0; y < bitmap.height; y++) {
      print(bitmap.bitmap[y]);
    }
  }

  return true;
};

const printBitmapDouble = bitmap => {
  if (bitmap) {
    let y = 0;

    for (y = 0; y < bitmap.height; y = y + 2) {
      printDouble(bitmap.bitmap[y], bitmap.bitmap[y + 1]);
    }
  }

  return true;
};

module.exports = {
  "printBitmapSingle": printBitmapSingle,
  "printBitmapDouble": printBitmapDouble
};

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
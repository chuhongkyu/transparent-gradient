(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tGradient"] = factory();
	else
		root["tGradient"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tGradient": () => (/* binding */ tGradient)
/* harmony export */ });
//module

function tGradient(element, direction = 'right') {
  if (!element) {
    throw new Error('element is required');
  }
  const validDirections = ['right', 'bottom', 'top', 'left'];
  const normalizedDirection = validDirections.includes(direction) ? direction : 'right';
  element.setAttribute('style', `
      -webkit-mask-size: cover;
      mask-size: cover;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: ${normalizedDirection};
      mask-repeat: no-repeat;
      -webkit-mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
      mask-image: linear-gradient(to ${normalizedDirection},black, transparent), linear-gradient(to ${normalizedDirection},black,transparent);
    `);
}
/******/ 	return __webpack_exports__;
/******/ })()
;
});
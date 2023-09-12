/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tGradient = ({ target, direction }) => {
    let main = null; // main을 Element 또는 null로 타입 지정
    if (typeof target === "string") {
        main = document.querySelector(target);
    }
    else {
        main = target;
    }
    if (!main) {
        throw new Error('target is required or invalid');
    }
    const validDirections = ['right', 'bottom', 'top', 'left'];
    const normalizedDirection = direction && validDirections.includes(direction) ? direction : 'right';
    main.setAttribute('style', `
    -webkit-mask-size: cover;
    mask-size: cover;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: ${normalizedDirection};
    mask-repeat: no-repeat;
    -webkit-mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
    mask-image: linear-gradient(to ${normalizedDirection}, black, transparent), linear-gradient(to ${normalizedDirection}, black, transparent);
  `);
};
exports["default"] = tGradient;

})();

module.exports = __webpack_exports__;
/******/ })()
;
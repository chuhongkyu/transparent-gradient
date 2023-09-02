(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tGradient = function (_a) {
    var target = _a.target, direction = _a.direction;
    var main;
    if (!target) {
        throw new Error('target is required');
    }
    main = target;
    var validDirections = ['right', 'bottom', 'top', 'left'];
    var normalizedDirection = validDirections.includes(direction) ? direction : 'right';
    if (typeof target == "string") {
        main = document.querySelector(target);
    }
    else {
        main = target;
    }
    main.setAttribute('style', "\n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-repeat: no-repeat;\n    -webkit-mask-position: ".concat(normalizedDirection, ";\n    mask-repeat: no-repeat;\n    -webkit-mask-image: linear-gradient(to ").concat(normalizedDirection, ",black, transparent), linear-gradient(to ").concat(normalizedDirection, ",black,transparent);\n    mask-image: linear-gradient(to ").concat(normalizedDirection, ",black, transparent), linear-gradient(to ").concat(normalizedDirection, ",black,transparent);\n  "));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tGradient);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwYXJlbnRHcmFkaWVudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7VUNWQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKQSxJQUFNLFNBQVMsR0FBRyxVQUFDLEVBQTJCO1FBQTFCLE1BQU0sY0FBRSxTQUFTO0lBQ25DLElBQUksSUFBSSxDQUFDO0lBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUN2QztJQUNELElBQUksR0FBRyxNQUFNLENBQUM7SUFDZCxJQUFNLGVBQWUsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQU0sbUJBQW1CLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFFdEYsSUFBRyxPQUFPLE1BQU0sSUFBSSxRQUFRLEVBQUM7UUFDM0IsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3RDO1NBQUk7UUFDSCxJQUFJLEdBQUcsTUFBTTtLQUNkO0lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsa0lBSUEsbUJBQW1CLHdGQUVILG1CQUFtQixzREFBNEMsbUJBQW1CLHNFQUMxRixtQkFBbUIsc0RBQTRDLG1CQUFtQiw2QkFDcEgsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc3BhcmVudC1ncmFkaWVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYW5zcGFyZW50LWdyYWRpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFuc3BhcmVudC1ncmFkaWVudC8uL3NyYy90cmFuc3BhcmVudEdyYWRpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJVGFyZ2V0IH0gZnJvbSBcIi4vdEdyYWRpZW50VHlwZVwiO1xuXG5jb25zdCB0R3JhZGllbnQgPSAoe3RhcmdldCwgZGlyZWN0aW9ufTpJVGFyZ2V0KSA9PiB7XG4gIGxldCBtYWluO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgbWFpbiA9IHRhcmdldDtcbiAgY29uc3QgdmFsaWREaXJlY3Rpb25zID0gWydyaWdodCcsICdib3R0b20nLCAndG9wJywgJ2xlZnQnXTtcbiAgY29uc3Qgbm9ybWFsaXplZERpcmVjdGlvbiA9IHZhbGlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb24pID8gZGlyZWN0aW9uIDogJ3JpZ2h0JztcblxuICBpZih0eXBlb2YgdGFyZ2V0ID09IFwic3RyaW5nXCIpe1xuICAgIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbiAgfWVsc2V7XG4gICAgbWFpbiA9IHRhcmdldFxuICB9XG4gIG1haW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XG4gICAgbWFzay1zaXplOiBjb3ZlcjtcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAke25vcm1hbGl6ZWREaXJlY3Rpb259O1xuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gJHtub3JtYWxpemVkRGlyZWN0aW9ufSxibGFjaywgdHJhbnNwYXJlbnQpLCBsaW5lYXItZ3JhZGllbnQodG8gJHtub3JtYWxpemVkRGlyZWN0aW9ufSxibGFjayx0cmFuc3BhcmVudCk7XG4gICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvICR7bm9ybWFsaXplZERpcmVjdGlvbn0sYmxhY2ssIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KHRvICR7bm9ybWFsaXplZERpcmVjdGlvbn0sYmxhY2ssdHJhbnNwYXJlbnQpO1xuICBgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdEdyYWRpZW50Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
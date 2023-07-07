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
/* harmony export */   tGradient: () => (/* binding */ tGradient)
/* harmony export */ });
function tGradient(_a) {
    var target = _a.target, direction = _a.direction;
    if (!target) {
        throw new Error('target is required');
    }
    var validDirections = ['right', 'bottom', 'top', 'left'];
    var normalizedDirection = validDirections.includes(direction) ? direction : 'right';
    target.setAttribute('style', "\n      -webkit-mask-size: cover;\n      mask-size: cover;\n      -webkit-mask-repeat: no-repeat;\n      -webkit-mask-position: ".concat(normalizedDirection, ";\n      mask-repeat: no-repeat;\n      -webkit-mask-image: linear-gradient(to ").concat(normalizedDirection, ",black, transparent), linear-gradient(to ").concat(normalizedDirection, ",black,transparent);\n      mask-image: linear-gradient(to ").concat(normalizedDirection, ",black, transparent), linear-gradient(to ").concat(normalizedDirection, ",black,transparent);\n    "));
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwYXJlbnRHcmFkaWVudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7VUNWQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNKTyxTQUFTLFNBQVMsQ0FBQyxFQUEyQjtRQUExQixNQUFNLGNBQUUsU0FBUztJQUN4QyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsSUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzRCxJQUFNLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBRXRGLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBJQUlGLG1CQUFtQiw0RkFFSCxtQkFBbUIsc0RBQTRDLG1CQUFtQix3RUFDMUYsbUJBQW1CLHNEQUE0QyxtQkFBbUIsK0JBQ3BILENBQUMsQ0FBQztBQUNQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFuc3BhcmVudC1ncmFkaWVudC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RyYW5zcGFyZW50LWdyYWRpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJhbnNwYXJlbnQtZ3JhZGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cmFuc3BhcmVudC1ncmFkaWVudC8uL3NyYy90cmFuc3BhcmVudEdyYWRpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJVGFyZ2V0IH0gZnJvbSBcIi4vdEdyYWRpZW50VHlwZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRHcmFkaWVudCh7dGFyZ2V0LCBkaXJlY3Rpb259OklUYXJnZXQpIHtcclxuICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IGlzIHJlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCB2YWxpZERpcmVjdGlvbnMgPSBbJ3JpZ2h0JywgJ2JvdHRvbScsICd0b3AnLCAnbGVmdCddO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZERpcmVjdGlvbiA9IHZhbGlkRGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb24pID8gZGlyZWN0aW9uIDogJ3JpZ2h0JztcclxuICBcclxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICAtd2Via2l0LW1hc2stc2l6ZTogY292ZXI7XHJcbiAgICAgIG1hc2stc2l6ZTogY292ZXI7XHJcbiAgICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiAke25vcm1hbGl6ZWREaXJlY3Rpb259O1xyXG4gICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byAke25vcm1hbGl6ZWREaXJlY3Rpb259LGJsYWNrLCB0cmFuc3BhcmVudCksIGxpbmVhci1ncmFkaWVudCh0byAke25vcm1hbGl6ZWREaXJlY3Rpb259LGJsYWNrLHRyYW5zcGFyZW50KTtcclxuICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvICR7bm9ybWFsaXplZERpcmVjdGlvbn0sYmxhY2ssIHRyYW5zcGFyZW50KSwgbGluZWFyLWdyYWRpZW50KHRvICR7bm9ybWFsaXplZERpcmVjdGlvbn0sYmxhY2ssdHJhbnNwYXJlbnQpO1xyXG4gICAgYCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
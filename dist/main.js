/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/baselayout.js":
/*!***************************!*\
  !*** ./src/baselayout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element.js */ "./src/create-element.js");
//create base layout for website


const layout = document.createDocumentFragment();

//text to go into tabs
const tabsText = ['About',' Menu', 'Contact'] 


function createTabs(){
    const tabContainer = (0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tabContainer')
    
    tabsText.forEach(element => {
        tabContainer.appendChild((0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', element, 'menuTab'))
    });
    
    return tabContainer;
}
//create header
layout.appendChild((0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'Header', 'header'));
layout.appendChild(createTabs());

//create container for tabs and dynamic container and append
const container = (0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'mainContainer');
container.appendChild((0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'This is content', 'dynamicContainer'));
layout.appendChild(container);

//create footer
layout.appendChild((0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'Footer', 'footer'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createElement = function(html, text, classes){
    
    const element = document.createElement(`${html}`);
    
    element.innerText = text;
    element.classList.add(classes);
    
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baselayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baselayout */ "./src/baselayout.js");


const container = document.querySelector('#content');

container.appendChild(_baselayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnRDs7QUFFaEQ7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx5QkFBeUIsOERBQWE7QUFDdEM7QUFDQTtBQUNBLGlDQUFpQyw4REFBYTtBQUM5QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOERBQWE7QUFDaEM7O0FBRUE7QUFDQSxrQkFBa0IsOERBQWE7QUFDL0Isc0JBQXNCLDhEQUFhO0FBQ25DOztBQUVBO0FBQ0EsbUJBQW1CLDhEQUFhOztBQUVoQyxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzlCckI7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUNWNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7O0FBRUEsc0JBQXNCLG1EQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWdlLy4vc3JjL2Jhc2VsYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWdlLy4vc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBiYXNlIGxheW91dCBmb3Igd2Vic2l0ZVxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnQuanNcIjtcblxuY29uc3QgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4vL3RleHQgdG8gZ28gaW50byB0YWJzXG5jb25zdCB0YWJzVGV4dCA9IFsnQWJvdXQnLCcgTWVudScsICdDb250YWN0J10gXG5cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpe1xuICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAndGFiQ29udGFpbmVyJylcbiAgICBcbiAgICB0YWJzVGV4dC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgZWxlbWVudCwgJ21lbnVUYWInKSlcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdGFiQ29udGFpbmVyO1xufVxuLy9jcmVhdGUgaGVhZGVyXG5sYXlvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgJ0hlYWRlcicsICdoZWFkZXInKSk7XG5sYXlvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygpKTtcblxuLy9jcmVhdGUgY29udGFpbmVyIGZvciB0YWJzIGFuZCBkeW5hbWljIGNvbnRhaW5lciBhbmQgYXBwZW5kXG5jb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnJywgJ21haW5Db250YWluZXInKTtcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCAnVGhpcyBpcyBjb250ZW50JywgJ2R5bmFtaWNDb250YWluZXInKSk7XG5sYXlvdXQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy9jcmVhdGUgZm9vdGVyXG5sYXlvdXQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgJ0Zvb3RlcicsICdmb290ZXInKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dDsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oaHRtbCwgdGV4dCwgY2xhc3Nlcyl7XG4gICAgXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7aHRtbH1gKTtcbiAgICBcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICAgIFxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJhc2VsYXlvdXQgZnJvbSAnLi9iYXNlbGF5b3V0JztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGJhc2VsYXlvdXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
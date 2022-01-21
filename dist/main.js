/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");


const aboutFragement = document.createDocumentFragment();

const aboutText =  `JJ Joy Asian Cusine brings a mix of well known classics with a korean twist.`;

const phoneNumber = `236-422-3344`;

const hours = 
`Dine-In Open
11:30am-2:30pm
Takeout
11:30am-2:30pm
4:30pm-8:00pm
Delivery
4:30pm-8:00pm`;

aboutFragement.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'about'));
aboutFragement.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])(`div`, aboutText, 'aboutMessagge'));
aboutFragement.appendChild((0,_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', hours, 'hours'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutFragement);


/***/ }),

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
container.appendChild((0,_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'dynamicContainer'));
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");



const content = document.querySelector('#content');

content.appendChild(_baselayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

const dynamicContainer = document.querySelector('.dynamicContainer');

dynamicContainer.appendChild(_about__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDJEQUFhO0FBQ3hDLDJCQUEyQiwyREFBYTtBQUN4QywyQkFBMkIsMkRBQWE7O0FBRXhDLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCOUI7QUFDZ0Q7O0FBRWhEOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EseUJBQXlCLDhEQUFhO0FBQ3RDO0FBQ0E7QUFDQSxpQ0FBaUMsOERBQWE7QUFDOUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFhO0FBQ2hDOztBQUVBO0FBQ0Esa0JBQWtCLDhEQUFhO0FBQy9CLHNCQUFzQiw4REFBYTtBQUNuQzs7QUFFQTtBQUNBLG1CQUFtQiw4REFBYTs7QUFFaEMsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUM5QnJCO0FBQ0E7QUFDQSw4Q0FBOEMsS0FBSztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7O1VDVjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0Q7O0FBRXJDOztBQUVBLG9CQUFvQixtREFBVTs7QUFFOUI7O0FBRUEsNkJBQTZCLDhDQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS8uL3NyYy9iYXNlbGF5b3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS8uL3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlLWVsZW1lbnRcIjtcblxuY29uc3QgYWJvdXRGcmFnZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbmNvbnN0IGFib3V0VGV4dCA9ICBgSkogSm95IEFzaWFuIEN1c2luZSBicmluZ3MgYSBtaXggb2Ygd2VsbCBrbm93biBjbGFzc2ljcyB3aXRoIGEga29yZWFuIHR3aXN0LmA7XG5cbmNvbnN0IHBob25lTnVtYmVyID0gYDIzNi00MjItMzM0NGA7XG5cbmNvbnN0IGhvdXJzID0gXG5gRGluZS1JbiBPcGVuXG4xMTozMGFtLTI6MzBwbVxuVGFrZW91dFxuMTE6MzBhbS0yOjMwcG1cbjQ6MzBwbS04OjAwcG1cbkRlbGl2ZXJ5XG40OjMwcG0tODowMHBtYDtcblxuYWJvdXRGcmFnZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICdhYm91dCcpKTtcbmFib3V0RnJhZ2VtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoYGRpdmAsIGFib3V0VGV4dCwgJ2Fib3V0TWVzc2FnZ2UnKSk7XG5hYm91dEZyYWdlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBob3VycywgJ2hvdXJzJykpO1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dEZyYWdlbWVudDtcbiIsIi8vY3JlYXRlIGJhc2UgbGF5b3V0IGZvciB3ZWJzaXRlXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGUtZWxlbWVudC5qc1wiO1xuXG5jb25zdCBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbi8vdGV4dCB0byBnbyBpbnRvIHRhYnNcbmNvbnN0IHRhYnNUZXh0ID0gWydBYm91dCcsJyBNZW51JywgJ0NvbnRhY3QnXSBcblxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCl7XG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJycsICd0YWJDb250YWluZXInKVxuICAgIFxuICAgIHRhYnNUZXh0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCBlbGVtZW50LCAnbWVudVRhYicpKVxuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB0YWJDb250YWluZXI7XG59XG4vL2NyZWF0ZSBoZWFkZXJcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCAnSGVhZGVyJywgJ2hlYWRlcicpKTtcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuXG4vL2NyZWF0ZSBjb250YWluZXIgZm9yIHRhYnMgYW5kIGR5bmFtaWMgY29udGFpbmVyIGFuZCBhcHBlbmRcbmNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnbWFpbkNvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsICcnLCAnZHluYW1pY0NvbnRhaW5lcicpKTtcbmxheW91dC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4vL2NyZWF0ZSBmb290ZXJcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCAnRm9vdGVyJywgJ2Zvb3RlcicpKTtcblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0OyIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihodG1sLCB0ZXh0LCBjbGFzc2VzKXtcbiAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtodG1sfWApO1xuICAgIFxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYmFzZWxheW91dCBmcm9tICcuL2Jhc2VsYXlvdXQnO1xuaW1wb3J0IGFib3V0RnJhZ2VtZW50IGZyb20gJy4vYWJvdXQnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChiYXNlbGF5b3V0KTtcblxuY29uc3QgZHluYW1pY0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keW5hbWljQ29udGFpbmVyJyk7XG5cbmR5bmFtaWNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRGcmFnZW1lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
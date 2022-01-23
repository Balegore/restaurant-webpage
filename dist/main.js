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
/* harmony import */ var _createnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createnode */ "./src/createnode.js");


const about = function() {
    const aboutFragement = document.createDocumentFragment();
    const aboutContainer = (0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'aboutContainer');
    const timeContainer = (0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, 'timeContainer');

    const aboutText =  `Joy Buffet Asian Cusine brings a mix of well known classics with a korean twist.`;
    const phoneNumber = `236-422-3344`;

    const morningHours = `11:30am-2:30pm`;
    const eveningHours = `4:30pm-8:00pm`;
    const timeHeaders = [   {name:'Dine-in',
                            morning: true,
                            evening: false,},
                            {name: 'Take-out',
                            morning: true,
                            evening: true}, 
                            {name: 'Delivery',
                            morning: false,
                            evening: true,}];
    
    function createTimeTable(header, morning, evening){
        const timeTable = (0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])('li', header, 'timeHeader');
        if(morning){ timeTable.appendChild((0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])('li', morningHours)) };      
        if(evening){ timeTable.appendChild((0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])('li', eveningHours)) };

        return timeTable;
    }

    aboutContainer.appendChild((0,_createnode__WEBPACK_IMPORTED_MODULE_0__["default"])(`div`, aboutText, 'aboutMessage'));

    timeHeaders.forEach(element => {
        timeContainer.appendChild(createTimeTable(element.name, element.morning, element.evening))
    });

    aboutFragement.appendChild(aboutContainer);
    aboutFragement.appendChild(timeContainer);
    
    return aboutFragement;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


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
/* harmony import */ var _createnode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createnode.js */ "./src/createnode.js");
//create base layout for website


const layout = document.createDocumentFragment();

//text to go into tabs
const tabsText = ['About', 'Menu', 'Contact'] 


function createTabs(){
    const tabContainer = (0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'tabContainer')
    
    tabsText.forEach(element => {
        tabContainer.appendChild((0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', element, 'tab', element.toLowerCase() + 'Tab'));
    });
    
    return tabContainer;
}
//create header
layout.appendChild((0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'Header', 'header'));
layout.appendChild(createTabs());

//create container for tabs and dynamic container and append
const container = (0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'mainContainer');
container.appendChild((0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'dynamicContainer'));
layout.appendChild(container);

//create footer
layout.appendChild((0,_createnode_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'Footer', 'footer'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contact = function () {
    const contacFragment = document.createDocumentFragment();
    
    return contacFragment
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/createnode.js":
/*!***************************!*\
  !*** ./src/createnode.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNode = function(nodeType, text, classes, id){
    
    const element = document.createElement(`${nodeType}`);
    
    if(text){ 
        element.innerText = text; 
    };    
    if(classes){ 
        element.classList.add(classes); 
    };
    if(id){ 
        element.setAttribute('id', id)
    };
    
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNode);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menu = function(){
    const menuFragment = document.createDocumentFragment();
    return menuFragment;    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");


 


//apply base content
const content = document.querySelector('#content');
content.appendChild(_baselayout__WEBPACK_IMPORTED_MODULE_0__["default"]);

//apply first page and select tabs
const dynamicContainer = document.querySelector('.dynamicContainer');
const menuTab = document.getElementById('menuTab');
const contactTab = document.getElementById('contactTab');
const aboutTab = document.getElementById('aboutTab');

aboutTab.addEventListener('click', () => renderContainer(_about__WEBPACK_IMPORTED_MODULE_1__["default"]));
contactTab.addEventListener('click', () => renderContainer(_contact__WEBPACK_IMPORTED_MODULE_3__["default"]));
menuTab.addEventListener('click', () => renderContainer(_menu__WEBPACK_IMPORTED_MODULE_2__["default"]));

function renderContainer(fragmentfunction){
    let dynamicFragment = fragmentfunction();
    dynamicContainer.replaceChildren(dynamicFragment);
};


renderContainer(_about__WEBPACK_IMPORTED_MODULE_1__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVU7QUFDckMsMEJBQTBCLHVEQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw0Q0FBNEM7QUFDNUMsNkJBQTZCO0FBQzdCO0FBQ0EsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QjtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsMEJBQTBCLHVEQUFVO0FBQ3BDLHFCQUFxQixzQkFBc0IsdURBQVU7QUFDckQscUJBQXFCLHNCQUFzQix1REFBVTs7QUFFckQ7QUFDQTs7QUFFQSwrQkFBK0IsdURBQVU7O0FBRXpDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNyQjtBQUN5Qzs7QUFFekM7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx5QkFBeUIsMERBQVU7QUFDbkM7QUFDQTtBQUNBLGlDQUFpQywwREFBVTtBQUMzQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQVU7QUFDN0I7O0FBRUE7QUFDQSxrQkFBa0IsMERBQVU7QUFDNUIsc0JBQXNCLDBEQUFVO0FBQ2hDOztBQUVBO0FBQ0EsbUJBQW1CLDBEQUFVOztBQUU3QixpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzlCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNQdEI7QUFDQTtBQUNBLDhDQUE4QyxTQUFTO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDakJ6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNMbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNOO0FBQ0Y7QUFDTTs7QUFFaEM7QUFDQTtBQUNBLG9CQUFvQixtREFBTTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5REFBeUQsOENBQUs7QUFDOUQsMkRBQTJELGdEQUFPO0FBQ2xFLHdEQUF3RCw2Q0FBSTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGdCQUFnQiw4Q0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2VicGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvYmFzZWxheW91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvY3JlYXRlbm9kZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZU5vZGUgZnJvbSBcIi4vY3JlYXRlbm9kZVwiO1xuXG5jb25zdCBhYm91dCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFib3V0RnJhZ2VtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGFib3V0Q29udGFpbmVyID0gY3JlYXRlTm9kZSgnZGl2JywgbnVsbCwgJ2Fib3V0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGNyZWF0ZU5vZGUoJ2RpdicsIG51bGwsICd0aW1lQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhYm91dFRleHQgPSAgYEpveSBCdWZmZXQgQXNpYW4gQ3VzaW5lIGJyaW5ncyBhIG1peCBvZiB3ZWxsIGtub3duIGNsYXNzaWNzIHdpdGggYSBrb3JlYW4gdHdpc3QuYDtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGAyMzYtNDIyLTMzNDRgO1xuXG4gICAgY29uc3QgbW9ybmluZ0hvdXJzID0gYDExOjMwYW0tMjozMHBtYDtcbiAgICBjb25zdCBldmVuaW5nSG91cnMgPSBgNDozMHBtLTg6MDBwbWA7XG4gICAgY29uc3QgdGltZUhlYWRlcnMgPSBbICAge25hbWU6J0RpbmUtaW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcm5pbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmluZzogZmFsc2UsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ1Rha2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JuaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmc6IHRydWV9LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuaW5nOiB0cnVlLH1dO1xuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpbWVUYWJsZShoZWFkZXIsIG1vcm5pbmcsIGV2ZW5pbmcpe1xuICAgICAgICBjb25zdCB0aW1lVGFibGUgPSBjcmVhdGVOb2RlKCdsaScsIGhlYWRlciwgJ3RpbWVIZWFkZXInKTtcbiAgICAgICAgaWYobW9ybmluZyl7IHRpbWVUYWJsZS5hcHBlbmRDaGlsZChjcmVhdGVOb2RlKCdsaScsIG1vcm5pbmdIb3VycykpIH07ICAgICAgXG4gICAgICAgIGlmKGV2ZW5pbmcpeyB0aW1lVGFibGUuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZSgnbGknLCBldmVuaW5nSG91cnMpKSB9O1xuXG4gICAgICAgIHJldHVybiB0aW1lVGFibGU7XG4gICAgfVxuXG4gICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZShgZGl2YCwgYWJvdXRUZXh0LCAnYWJvdXRNZXNzYWdlJykpO1xuXG4gICAgdGltZUhlYWRlcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUaW1lVGFibGUoZWxlbWVudC5uYW1lLCBlbGVtZW50Lm1vcm5pbmcsIGVsZW1lbnQuZXZlbmluZykpXG4gICAgfSk7XG5cbiAgICBhYm91dEZyYWdlbWVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgYWJvdXRGcmFnZW1lbnQuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcik7XG4gICAgXG4gICAgcmV0dXJuIGFib3V0RnJhZ2VtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsIi8vY3JlYXRlIGJhc2UgbGF5b3V0IGZvciB3ZWJzaXRlXG5pbXBvcnQgY3JlYXRlTm9kZSBmcm9tIFwiLi9jcmVhdGVub2RlLmpzXCI7XG5cbmNvbnN0IGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuLy90ZXh0IHRvIGdvIGludG8gdGFic1xuY29uc3QgdGFic1RleHQgPSBbJ0Fib3V0JywgJ01lbnUnLCAnQ29udGFjdCddIFxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKXtcbiAgICBjb25zdCB0YWJDb250YWluZXIgPSBjcmVhdGVOb2RlKCdkaXYnLCAnJywgJ3RhYkNvbnRhaW5lcicpXG4gICAgXG4gICAgdGFic1RleHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUoJ2RpdicsIGVsZW1lbnQsICd0YWInLCBlbGVtZW50LnRvTG93ZXJDYXNlKCkgKyAnVGFiJykpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB0YWJDb250YWluZXI7XG59XG4vL2NyZWF0ZSBoZWFkZXJcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVOb2RlKCdkaXYnLCAnSGVhZGVyJywgJ2hlYWRlcicpKTtcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xuXG4vL2NyZWF0ZSBjb250YWluZXIgZm9yIHRhYnMgYW5kIGR5bmFtaWMgY29udGFpbmVyIGFuZCBhcHBlbmRcbmNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZU5vZGUoJ2RpdicsICcnLCAnbWFpbkNvbnRhaW5lcicpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUoJ2RpdicsICcnLCAnZHluYW1pY0NvbnRhaW5lcicpKTtcbmxheW91dC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4vL2NyZWF0ZSBmb290ZXJcbmxheW91dC5hcHBlbmRDaGlsZChjcmVhdGVOb2RlKCdkaXYnLCAnRm9vdGVyJywgJ2Zvb3RlcicpKTtcblxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0OyIsImNvbnN0IGNvbnRhY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGFjRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhY0ZyYWdtZW50XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJjb25zdCBjcmVhdGVOb2RlID0gZnVuY3Rpb24obm9kZVR5cGUsIHRleHQsIGNsYXNzZXMsIGlkKXtcbiAgICBcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtub2RlVHlwZX1gKTtcbiAgICBcbiAgICBpZih0ZXh0KXsgXG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDsgXG4gICAgfTsgICAgXG4gICAgaWYoY2xhc3Nlcyl7IFxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7IFxuICAgIH07XG4gICAgaWYoaWQpeyBcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTm9kZTsiLCJjb25zdCBtZW51ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBtZW51RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgcmV0dXJuIG1lbnVGcmFnbWVudDsgICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbGF5b3V0IGZyb20gJy4vYmFzZWxheW91dCc7XG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnOyBcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbi8vYXBwbHkgYmFzZSBjb250ZW50XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobGF5b3V0KTtcblxuLy9hcHBseSBmaXJzdCBwYWdlIGFuZCBzZWxlY3QgdGFic1xuY29uc3QgZHluYW1pY0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5keW5hbWljQ29udGFpbmVyJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVUYWInKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdFRhYicpO1xuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRUYWInKTtcblxuYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJDb250YWluZXIoYWJvdXQpKTtcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJDb250YWluZXIoY29udGFjdCkpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckNvbnRhaW5lcihtZW51KSk7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcihmcmFnbWVudGZ1bmN0aW9uKXtcbiAgICBsZXQgZHluYW1pY0ZyYWdtZW50ID0gZnJhZ21lbnRmdW5jdGlvbigpO1xuICAgIGR5bmFtaWNDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKGR5bmFtaWNGcmFnbWVudCk7XG59O1xuXG5cbnJlbmRlckNvbnRhaW5lcihhYm91dCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
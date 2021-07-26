/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showContact() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className= "disp";
    content.appendChild(disp);

    let phoneNum = document.createElement('p'); 
    phoneNum.className = "contWords"; 
    phoneNum.innerHTML = "Phone: 281-330-8004"; 
    disp.appendChild(phoneNum); 
    
    let addy = document.createElement('p'); 
    addy.className = "contWords"; 
    addy.innerHTML = "123 James Ave, Paris"; 
    disp.appendChild(addy);

    let map = document.createElement('img'); 
    map.className = "map";
    map.src = "/src/map.jpg"
    disp.appendChild(map); 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);

/***/ }),

/***/ "./src/head.js":
/*!*********************!*\
  !*** ./src/head.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHead() {
    let content = document.querySelector('#content');
    let headBox = document.createElement('div'); 
    headBox.className = "headBox"; 
    content.appendChild(headBox);

    let title = document.createElement('h1'); 
    title.innerHTML = "Le Petite Croissant"; 
    title.className = "title"; 
    headBox.appendChild(title); 

    let nav = document.createElement('div');
    nav.className = "nav"; 
    headBox.appendChild(nav); 

    let home = document.createElement('a');
    home.className = "navItem";
    home.id = "homeNav";  
    home.innerHTML = "Home"; 
    nav.appendChild(home); 

    let menu = document.createElement('a');
    menu.className = "navItem";
    menu.id = "menuNav"; 
    menu.innerHTML = "Menu"; 
    nav.appendChild(menu); 

    let contact = document.createElement('a');
    contact.className = "navItem"; 
    contact.id = "contactNav"; 
    contact.innerHTML = "Contact"; 
    nav.appendChild(contact);

    // Background
    let back = document.createElement('div'); 
    back.className = "back"; 
    content.appendChild(back); 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHead); 

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function showHome() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className = "disp"; 
    content.appendChild(disp); 

    let desc = document.createElement('div'); 
    desc.className = "homeDesc"; 
    desc.innerHTML = "A French Ass Restaurant, Since 1705."; 
    disp.appendChild(desc); 

    let elf = document.createElement('img');
    elf.src = "/src/frenchelves.jpeg"; 
    elf.className = "elf"; 
    disp.appendChild(elf);

    let words = document.createElement('div');
    words.className = "wordsHome";
    words.innerHTML = "Our Master Bakers in The Kitchen"
    disp.appendChild(words); 

    let imgBox = document.createElement('div'); 
    imgBox.className = "imgBox"; 
    disp.appendChild(imgBox);

    let cro = document.createElement('img'); 
    cro.className = "cro"; 
    cro.src = "/src/cro.jpg"; 
    imgBox.appendChild(cro); 

    let frBeef = document.createElement('img');
    frBeef.className = "cro"; 
    frBeef.src = "/src/frenchbeef.jpg"; 
    imgBox.appendChild(frBeef); 

    let crep = document.createElement('img');
    crep.className = "cro";
    crep.src = "/src/crepes.jpeg";
    imgBox.appendChild(crep); 

    let chz = document.createElement('img'); 
    chz.className = "cro";
    chz.src = "/src/cheese.jpg";
    imgBox.appendChild(chz); 

    let order = document.createElement('button');
    order.className = "order"; 
    order.innerHTML = "Order Now"; 
    disp.appendChild(order);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);

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
function showMenu() {
    let content = document.querySelector('#content'); 
    let disp = document.createElement('div'); 
    disp.className = "disp"; 
    content.appendChild(disp);

    let menuHead = document.createElement('div');
    menuHead.className = "menuHead";
    menuHead.innerHTML = "Menu"; 
    disp.appendChild(menuHead);

    let menuImg = document.createElement('img');
    menuImg.className = "menuImg"; 
    menuImg.src = "/src/frenchmenu.jpg"; 
    disp.appendChild(menuImg); 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/head.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");

 



(0,_head__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)(); 


let disp = document.querySelector('.disp');
let dispOn = true; 

// Home Button 
let navHome = document.querySelector('#homeNav');
navHome.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    if (dispOn == true) {
        disp.remove(); 
    }
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();
    dispOn = true; 
});

// Menu Button 
let navMenu = document.querySelector('#menuNav'); 
navMenu.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    disp.remove();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)(); 
});

// Contact Button
let contMenu = document.querySelector('#contactNav'); 
contMenu.addEventListener('click', () => {
    let disp = document.querySelector('.disp');
    disp.remove(); 
    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)(); 
}); 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oZWFkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EscUQ7QUFDQSw2QztBQUNBO0FBQ0E7O0FBRUEsK0M7QUFDQSxxQztBQUNBLCtDO0FBQ0EsK0I7O0FBRUEsMkM7QUFDQSxpQztBQUNBLDRDO0FBQ0E7O0FBRUEsNEM7QUFDQTtBQUNBO0FBQ0EsMEI7QUFDQTs7QUFFQSxpRUFBZSxXOzs7Ozs7Ozs7Ozs7OztBQ3RCZjtBQUNBO0FBQ0EsZ0Q7QUFDQSxrQztBQUNBOztBQUVBLDZDO0FBQ0EsNEM7QUFDQSw4QjtBQUNBLCtCOztBQUVBO0FBQ0EsMEI7QUFDQSw2Qjs7QUFFQTtBQUNBO0FBQ0Esd0I7QUFDQSw0QjtBQUNBLDBCOztBQUVBO0FBQ0E7QUFDQSx3QjtBQUNBLDRCO0FBQ0EsMEI7O0FBRUE7QUFDQSxrQztBQUNBLDhCO0FBQ0Esa0M7QUFDQTs7QUFFQTtBQUNBLDZDO0FBQ0EsNEI7QUFDQSw4QjtBQUNBOzs7QUFHQSxpRUFBZSxVQUFVLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEN6QjtBQUNBLHFEO0FBQ0EsNkM7QUFDQSw0QjtBQUNBLDhCOztBQUVBLDZDO0FBQ0EsZ0M7QUFDQSw0RDtBQUNBLDJCOztBQUVBO0FBQ0Esc0M7QUFDQSwwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCOztBQUVBLCtDO0FBQ0EsZ0M7QUFDQTs7QUFFQSw0QztBQUNBLDBCO0FBQ0EsNkI7QUFDQSw0Qjs7QUFFQTtBQUNBLDZCO0FBQ0EsdUM7QUFDQSwrQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2Qjs7QUFFQSw0QztBQUNBO0FBQ0E7QUFDQSw0Qjs7QUFFQTtBQUNBLDhCO0FBQ0Esa0M7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFE7Ozs7Ozs7Ozs7Ozs7O0FDbkRmO0FBQ0EscUQ7QUFDQSw2QztBQUNBLDRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDO0FBQ0E7O0FBRUE7QUFDQSxrQztBQUNBLHdDO0FBQ0EsOEI7QUFDQTs7QUFFQSxpRUFBZSxROzs7Ozs7VUNqQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7O0FBRUY7QUFDSzs7QUFFbkMsOENBQVU7QUFDViw4Q0FBUSxHOzs7QUFHUjtBQUNBLGtCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQjtBQUNBO0FBQ0EsSUFBSSw4Q0FBUTtBQUNaLGtCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBUSxHO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLHFEO0FBQ0E7QUFDQTtBQUNBLGtCO0FBQ0EsSUFBSSxpREFBVyxHO0FBQ2YsQ0FBQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNob3dDb250YWN0KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTsgXG4gICAgbGV0IGRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGlzcC5jbGFzc05hbWU9IFwiZGlzcFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcCk7XG5cbiAgICBsZXQgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IFxuICAgIHBob25lTnVtLmNsYXNzTmFtZSA9IFwiY29udFdvcmRzXCI7IFxuICAgIHBob25lTnVtLmlubmVySFRNTCA9IFwiUGhvbmU6IDI4MS0zMzAtODAwNFwiOyBcbiAgICBkaXNwLmFwcGVuZENoaWxkKHBob25lTnVtKTsgXG4gICAgXG4gICAgbGV0IGFkZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IFxuICAgIGFkZHkuY2xhc3NOYW1lID0gXCJjb250V29yZHNcIjsgXG4gICAgYWRkeS5pbm5lckhUTUwgPSBcIjEyMyBKYW1lcyBBdmUsIFBhcmlzXCI7IFxuICAgIGRpc3AuYXBwZW5kQ2hpbGQoYWRkeSk7XG5cbiAgICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgIG1hcC5jbGFzc05hbWUgPSBcIm1hcFwiO1xuICAgIG1hcC5zcmMgPSBcIi9zcmMvbWFwLmpwZ1wiXG4gICAgZGlzcC5hcHBlbmRDaGlsZChtYXApOyBcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbnRhY3QiLCJmdW5jdGlvbiBjcmVhdGVIZWFkKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBsZXQgaGVhZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBoZWFkQm94LmNsYXNzTmFtZSA9IFwiaGVhZEJveFwiOyBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRCb3gpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTsgXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJMZSBQZXRpdGUgQ3JvaXNzYW50XCI7IFxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjsgXG4gICAgaGVhZEJveC5hcHBlbmRDaGlsZCh0aXRsZSk7IFxuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdlwiOyBcbiAgICBoZWFkQm94LmFwcGVuZENoaWxkKG5hdik7IFxuXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZS5jbGFzc05hbWUgPSBcIm5hdkl0ZW1cIjtcbiAgICBob21lLmlkID0gXCJob21lTmF2XCI7ICBcbiAgICBob21lLmlubmVySFRNTCA9IFwiSG9tZVwiOyBcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7IFxuXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWVudS5jbGFzc05hbWUgPSBcIm5hdkl0ZW1cIjtcbiAgICBtZW51LmlkID0gXCJtZW51TmF2XCI7IFxuICAgIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7IFxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTsgXG5cbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9IFwibmF2SXRlbVwiOyBcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0TmF2XCI7IFxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7IFxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIC8vIEJhY2tncm91bmRcbiAgICBsZXQgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBiYWNrLmNsYXNzTmFtZSA9IFwiYmFja1wiOyBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2spOyBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkOyAiLCJmdW5jdGlvbiBzaG93SG9tZSgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7IFxuICAgIGxldCBkaXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGRpc3AuY2xhc3NOYW1lID0gXCJkaXNwXCI7IFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcCk7IFxuXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGVzYy5jbGFzc05hbWUgPSBcImhvbWVEZXNjXCI7IFxuICAgIGRlc2MuaW5uZXJIVE1MID0gXCJBIEZyZW5jaCBBc3MgUmVzdGF1cmFudCwgU2luY2UgMTcwNS5cIjsgXG4gICAgZGlzcC5hcHBlbmRDaGlsZChkZXNjKTsgXG5cbiAgICBsZXQgZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWxmLnNyYyA9IFwiL3NyYy9mcmVuY2hlbHZlcy5qcGVnXCI7IFxuICAgIGVsZi5jbGFzc05hbWUgPSBcImVsZlwiOyBcbiAgICBkaXNwLmFwcGVuZENoaWxkKGVsZik7XG5cbiAgICBsZXQgd29yZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3Jkcy5jbGFzc05hbWUgPSBcIndvcmRzSG9tZVwiO1xuICAgIHdvcmRzLmlubmVySFRNTCA9IFwiT3VyIE1hc3RlciBCYWtlcnMgaW4gVGhlIEtpdGNoZW5cIlxuICAgIGRpc3AuYXBwZW5kQ2hpbGQod29yZHMpOyBcblxuICAgIGxldCBpbWdCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgaW1nQm94LmNsYXNzTmFtZSA9IFwiaW1nQm94XCI7IFxuICAgIGRpc3AuYXBwZW5kQ2hpbGQoaW1nQm94KTtcblxuICAgIGxldCBjcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgXG4gICAgY3JvLmNsYXNzTmFtZSA9IFwiY3JvXCI7IFxuICAgIGNyby5zcmMgPSBcIi9zcmMvY3JvLmpwZ1wiOyBcbiAgICBpbWdCb3guYXBwZW5kQ2hpbGQoY3JvKTsgXG5cbiAgICBsZXQgZnJCZWVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZnJCZWVmLmNsYXNzTmFtZSA9IFwiY3JvXCI7IFxuICAgIGZyQmVlZi5zcmMgPSBcIi9zcmMvZnJlbmNoYmVlZi5qcGdcIjsgXG4gICAgaW1nQm94LmFwcGVuZENoaWxkKGZyQmVlZik7IFxuXG4gICAgbGV0IGNyZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjcmVwLmNsYXNzTmFtZSA9IFwiY3JvXCI7XG4gICAgY3JlcC5zcmMgPSBcIi9zcmMvY3JlcGVzLmpwZWdcIjtcbiAgICBpbWdCb3guYXBwZW5kQ2hpbGQoY3JlcCk7IFxuXG4gICAgbGV0IGNoeiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyBcbiAgICBjaHouY2xhc3NOYW1lID0gXCJjcm9cIjtcbiAgICBjaHouc3JjID0gXCIvc3JjL2NoZWVzZS5qcGdcIjtcbiAgICBpbWdCb3guYXBwZW5kQ2hpbGQoY2h6KTsgXG5cbiAgICBsZXQgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci5jbGFzc05hbWUgPSBcIm9yZGVyXCI7IFxuICAgIG9yZGVyLmlubmVySFRNTCA9IFwiT3JkZXIgTm93XCI7IFxuICAgIGRpc3AuYXBwZW5kQ2hpbGQob3JkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZSIsImZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTsgXG4gICAgbGV0IGRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgZGlzcC5jbGFzc05hbWUgPSBcImRpc3BcIjsgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNwKTtcblxuICAgIGxldCBtZW51SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkLmNsYXNzTmFtZSA9IFwibWVudUhlYWRcIjtcbiAgICBtZW51SGVhZC5pbm5lckhUTUwgPSBcIk1lbnVcIjsgXG4gICAgZGlzcC5hcHBlbmRDaGlsZChtZW51SGVhZCk7XG5cbiAgICBsZXQgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJbWcuY2xhc3NOYW1lID0gXCJtZW51SW1nXCI7IFxuICAgIG1lbnVJbWcuc3JjID0gXCIvc3JjL2ZyZW5jaG1lbnUuanBnXCI7IFxuICAgIGRpc3AuYXBwZW5kQ2hpbGQobWVudUltZyk7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVudSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUhlYWQgZnJvbSBcIi4vaGVhZFwiO1xuaW1wb3J0IHNob3dIb21lIGZyb20gXCIuL2hvbWVcIjsgXG5pbXBvcnQgc2hvd01lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIlxuXG5jcmVhdGVIZWFkKCk7XG5zaG93SG9tZSgpOyBcblxuXG5sZXQgZGlzcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwJyk7XG5sZXQgZGlzcE9uID0gdHJ1ZTsgXG5cbi8vIEhvbWUgQnV0dG9uIFxubGV0IG5hdkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZU5hdicpO1xubmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgZGlzcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwJyk7XG4gICAgaWYgKGRpc3BPbiA9PSB0cnVlKSB7XG4gICAgICAgIGRpc3AucmVtb3ZlKCk7IFxuICAgIH1cbiAgICBzaG93SG9tZSgpO1xuICAgIGRpc3BPbiA9IHRydWU7IFxufSk7XG5cbi8vIE1lbnUgQnV0dG9uIFxubGV0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudU5hdicpOyBcbm5hdk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGRpc3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcCcpO1xuICAgIGRpc3AucmVtb3ZlKCk7XG4gICAgc2hvd01lbnUoKTsgXG59KTtcblxuLy8gQ29udGFjdCBCdXR0b25cbmxldCBjb250TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0TmF2Jyk7IFxuY29udE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGRpc3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcCcpO1xuICAgIGRpc3AucmVtb3ZlKCk7IFxuICAgIHNob3dDb250YWN0KCk7IFxufSk7IFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
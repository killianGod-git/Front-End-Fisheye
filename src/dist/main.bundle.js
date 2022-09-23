/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/photographerFactory */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api */ \"./src/scripts/services/api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function displayData(photographers) {\r\n    const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n    photographers.forEach((photographer) => {\r\n        const photographerModel = (0,_factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__.photographerFactory)(photographer);\r\n        const userCardDOM = photographerModel.getUserCardDOM();\r\n        photographersSection.appendChild(userCardDOM);\r\n    });\r\n};\r\n\r\nasync function init() {\r\n    // Récupère les datas des photographes\r\n    const  photographers  = await (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)();\r\n    console.log(photographers)\r\n    displayData(photographers);\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/factories/photographerFactory.js":
/*!******************************************************!*\
  !*** ./src/scripts/factories/photographerFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photographerFactory\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\nfunction photographerFactory(data) {\r\n    const { name, portrait, city, country, tagline, price } = data;\r\n\r\n    const picture = `assets/photographers/${portrait}`;\r\n\r\n    function getUserCardDOM() {\r\n        const article = document.createElement( 'article' );\r\n        const link = document.createElement('a');\r\n        link.setAttribute('href', 'photographer.html?id=' + name);\r\n        const img = document.createElement( 'img' );\r\n        img.setAttribute(\"src\", picture)\r\n        const h2 = document.createElement( 'h2' );\r\n        h2.textContent = name;\r\n        const h3 = document.createElement('h3');\r\n        h3.textContent = city + ' ' + country;\r\n        const h4 = document.createElement('h4');\r\n        h4.textContent = tagline;\r\n        const priceDom = document.createElement('span');\r\n        priceDom.textContent = price + '€/jours';\r\n        article.appendChild(link);\r\n        link.appendChild(img);\r\n        link.appendChild(h2);\r\n        article.appendChild(h3);\r\n        article.appendChild(h4);\r\n        article.appendChild(priceDom);\r\n        return (article);\r\n    }\r\n    return { name, picture, getUserCardDOM }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/services/api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMediaPhotographers\": () => (/* binding */ getMediaPhotographers),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// ici création requetes api \r\n// fetch\r\n// requete photographes\r\n// requete media \r\n//fonction return un photographe\r\nasync function getPhotographers() {\r\n   const dataPhotofraphers = await fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then(res => {\r\n\r\n        return res.photographers\r\n    })\r\n    return dataPhotofraphers\r\n  }\r\nasync function getMediaPhotographers(){\r\n    const dataPhotofraphersPage = await fetch(\"./data/photographers.json\")\r\n    .then(resmedia => resmedia.json())\r\n    .then(resmedia => {\r\n        console.log(resmedia.media)\r\n        return resmedia.media\r\n    })\r\n    return dataPhotofraphersPage\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/services/api.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/app.js");
/******/ 	
/******/ })()
;
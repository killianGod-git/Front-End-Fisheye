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

/***/ "./src/scripts/factories/photographerPageFactory.js":
/*!**********************************************************!*\
  !*** ./src/scripts/factories/photographerPageFactory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photographDataFactory\": () => (/* binding */ photographDataFactory),\n/* harmony export */   \"photographPageFactory\": () => (/* binding */ photographPageFactory)\n/* harmony export */ });\nfunction photographPageFactory(data){\r\n    const {name, portrait, city, country, tagline, price, id} = data;\r\n    function displayHeaderPhotographer(){\r\n        const headerPhotograph = `\r\n        <div>\r\n            <div>\r\n                <h1> ${name} </h1>\r\n                <h2> ${city} ${country}</h2>\r\n                <h3> ${tagline} </h3>\r\n            </div>\r\n            <div>\r\n                <button class=\"contact_button\" onclick=\"displayModal()\">Contactez-moi</button>\r\n            </div>\r\n            <div>\r\n                <img src=\"./assets/photographers/${name}/${portrait}\" alt=\"${name}\">\r\n            </div>\r\n        </div>\r\n        `;\r\n        return headerPhotograph\r\n    } return displayHeaderPhotographer;\r\n} \r\n\r\n\r\nfunction photographDataFactory(){\r\n    const {id, photographerId, title, image, likes, date, price} = MediaData;\r\n    function displayPhotographFilter(){\r\n        const photographFilter = `\r\n        <div>\r\n            <select>\r\n                <option>\r\n                <option>\r\n                <option>\r\n        </div>\r\n        `; \r\n        return photographFilter;\r\n    }\r\n    function displayMediaPhotograph(){\r\n        const photographGalery = `\r\n        <article>\r\n            <img src=\"${image}\">\r\n            <div>\r\n                <h2> ${title}</h2>\r\n                <p> ${likes}</p>\r\n        </article>\r\n        `; return photographGalery;\r\n    } return photographDataFactory;\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/photographerPageFactory.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ \"./src/scripts/services/api.js\");\n/* harmony import */ var _factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographerPageFactory */ \"./src/scripts/factories/photographerPageFactory.js\");\n//Mettre le code JavaScript lié à la page photographer.html\r\n\r\n\r\n\r\nconsole.log(_factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__.photographPageFactory); \r\n\r\nconst queryString = window.location.search;\r\nconsole.log(queryString);\r\nasync function displayHeaderData(){\r\n    const photographHeader = document.querySelector(\".photograph-header\");\r\n    const photographerModel = (0,_factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__.photographPageFactory)(photographer);\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/services/api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMediasPhotographer\": () => (/* binding */ getMediasPhotographer),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// ici création requetes api \r\n// fetch\r\n// requete photographes\r\n// requete media \r\n//fonction return un photographe\r\nasync function getData(){\r\n    const data = await fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then(res => {\r\n        return res\r\n    })\r\n    return data\r\n}\r\nasync function getPhotographers() {\r\n   const dataPhotofraphers = await getData()\r\n    return dataPhotofraphers.photographers\r\n  }\r\nasync function getMediasPhotographer(photographerId){\r\n    const dataPhotofraphersPage = await getData()\r\n    return dataPhotofraphersPage.media\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/services/api.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/photographer.js");
/******/ 	
/******/ })()
;
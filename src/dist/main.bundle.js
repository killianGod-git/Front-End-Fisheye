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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/photographerFactory */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api */ \"./src/scripts/services/api.js\");\n\r\n\r\n\r\nasync function displayData(photographers) {\r\n    const photographersSection = document.querySelector(\".photographer_section\");\r\n\r\n    photographers.forEach((photographer) => {\r\n        const photographerModel = (0,_factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__.photographerFactory)(photographer);\r\n        const userCardDOM = photographerModel.getUserCardDOM();\r\n        photographersSection.innerHTML += userCardDOM;\r\n    });\r\n};\r\n\r\nasync function init() {\r\n    // Récupère les datas des photographes\r\n    const  photographers  = await (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)();\r\n    displayData(photographers);\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/factories/photographerFactory.js":
/*!******************************************************!*\
  !*** ./src/scripts/factories/photographerFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photographerFactory\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\nfunction photographerFactory(data) {\r\n    const { name, portrait, city, country, tagline, price, id} = data;\r\n\r\n    const picture = `assets/photographers/${portrait}`;\r\n\r\n    function getUserCardDOM() {\r\n       const card = `\r\n       <article>\r\n            <a href=\"photographer.html?id=${id}\" aria-label=\"${name}\">\r\n                <img src=\"${picture}\" alt=\"${name}\">\r\n                <h2> ${name} </h2>\r\n            </a>\r\n            <h3> ${city} ${country}</h3>\r\n            <h4> ${tagline} </h4>\r\n            <span> ${price} €/jours </span>\r\n        </article>`;\r\n        return card;\r\n    }\r\n    return {  getUserCardDOM }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/services/api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMediasPhotographer\": () => (/* binding */ getMediasPhotographer),\n/* harmony export */   \"getOnePhotograph\": () => (/* binding */ getOnePhotograph),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// ici création requetes api \r\n// fetch\r\n// requete photographes\r\n// requete media \r\n//fonction return un photographe\r\nasync function getData(){\r\n    const data = await fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then(res => {\r\n        return res\r\n    })\r\n    return data\r\n}\r\nasync function getPhotographers() {\r\n   const dataPhotofraphers = await getData()\r\n    return dataPhotofraphers.photographers\r\n  }\r\nasync function getOnePhotograph(photographerId){\r\n    const dataPhotofraph = await getData();\r\n    let photographers = dataPhotofraph.photographers\r\n    let filterPhotograph = photographers.filter( photographers => photographers.id === photographerId)\r\n    console.log(filterPhotograph);\r\n    return filterPhotograph;\r\n}\r\nasync function getMediasPhotographer(photographerId){\r\n    const dataPhotofraphersPage = await getData();\r\n    let mediaPhotographers = dataPhotofraphersPage.media;\r\n    let filteredMediaById = mediaPhotographers.filter( mediaPhotographers => mediaPhotographers.photographerId === photographerId );\r\n    return filteredMediaById;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/services/api.js?");

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
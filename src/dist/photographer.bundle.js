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

/***/ "./src/scripts/factories/PhotographGaleryFactory.js":
/*!**********************************************************!*\
  !*** ./src/scripts/factories/PhotographGaleryFactory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographGaleryFactory)\n/* harmony export */ });\n/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/image */ \"./src/scripts/models/image.js\");\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/video */ \"./src/scripts/models/video.js\");\n\r\n\r\nclass PhotographGaleryFactory{\r\n    constructor (data){\r\n        if (data.image){\r\n            return new _models_image__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data)\r\n        }\r\n        else if(data.video){\r\n            return new _models_video__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data)\r\n        }\r\n        else{\r\n            throw 'erreur'\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/PhotographGaleryFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/photographerPageFactory.js":
/*!**********************************************************!*\
  !*** ./src/scripts/factories/photographerPageFactory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographerPageFactory)\n/* harmony export */ });\n/* harmony import */ var _models_ContactModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ContactModal */ \"./src/scripts/models/ContactModal.js\");\n/* harmony import */ var _models_photographModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/photographModel */ \"./src/scripts/models/photographModel.js\");\n\r\n\r\nclass PhotographerPageFactory{\r\n    constructor (data , type){\r\n        if (type === \"photograph\"){\r\n            return new _models_photographModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\r\n        }\r\n        else {\r\n            throw 'type inconnu'\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/photographerPageFactory.js?");

/***/ }),

/***/ "./src/scripts/models/ContactModal.js":
/*!********************************************!*\
  !*** ./src/scripts/models/ContactModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactModal)\n/* harmony export */ });\nclass ContactModal{\r\n    constructor(data){\r\n        this.name = data.name\r\n    }\r\n    renderModal(){\r\n        const modal = `\r\n        <div class=\"modal\">\r\n            <header>\r\n                <h2>Contactez-moi <br> ${this.name}</h2>\r\n                <img src=\"assets/icons/close.svg\" onclick=\"closeModal()\" />\r\n            </header>\r\n            <form id=\"contactPhotograph\">\r\n\t\t\t    <div>\r\n\t\t\t\t    <label>Prénom</label>\r\n\t\t\t    \t    <input type=\"text\" id=\"prenom\" />\r\n                    <label>Nom</label>\r\n\t\t\t\t\t    <input type=\"text\" id=\"nom\"/>\r\n                    <label>Email</label>\r\n\t\t\t\t\t    <input type=\"email\" id=\"email\"/>\r\n                    <label>Votre message</label>\r\n\t    \t\t\t\t<textarea cols=\"100\" rows=\"10\" id=\"message\"></textarea>\r\n\t\t    \t</div>\r\n                <button id=\"btn-submit\" class=\"contact_button\" type=\"submit\" onclick=\"closeModal()\"/>Envoyer</button>\r\n\t\t    </form>\r\n        </div>    \r\n        `\r\n        return modal\r\n    }\r\n}\r\n \n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/ContactModal.js?");

/***/ }),

/***/ "./src/scripts/models/image.js":
/*!*************************************!*\
  !*** ./src/scripts/models/image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./src/scripts/models/media.js\");\n\r\nclass Image extends _media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{ \r\n    constructor(data){\r\n        super(data)\r\n        this.image = data.image\r\n    }\r\n    renderGalery(){\r\n        const singleGaleryElement = `\r\n        <article>\r\n            <div class=\"media\">\r\n                <img  src=\"${this.url}/${this.image}\" alt=\"${this.title}\">\r\n            </div>\r\n            <div class=\"media-information\">\r\n                <p class=\"title-galery\"> ${this.title}</p>\r\n                <p class=\"likes-galery\"> ${this.likes} <i class=\"fa-solid fa-heart galery-element-like\" onclick=\"incrementLikes()\"></i></p>\r\n            </div>\r\n        </article>\r\n        `\r\n        return singleGaleryElement\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/image.js?");

/***/ }),

/***/ "./src/scripts/models/media.js":
/*!*************************************!*\
  !*** ./src/scripts/models/media.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Media)\n/* harmony export */ });\nclass Media  {\r\n    constructor(data){\r\n        this.id = data.id  \r\n        this.photographerId = data.photographerId\r\n        this.title = data.title\r\n        this.likes = data.likes \r\n        this.date = data.date\r\n        this.price = data.price\r\n        this.url = data.url\r\n    }\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/media.js?");

/***/ }),

/***/ "./src/scripts/models/photographModel.js":
/*!***********************************************!*\
  !*** ./src/scripts/models/photographModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographModel)\n/* harmony export */ });\nclass PhotographModel{\r\n    constructor(data){\r\n        this.name = data.name\r\n        this.id = data.id  \r\n        this.city = data.city\r\n        this.country = data.country\r\n        this.tagline = data.tagline \r\n        this.price = data.price\r\n        this.portrait = data.portrait\r\n    }\r\n    renderHeader(){\r\n        const headerContent = `\r\n        <div class=\"photograph-information\">\r\n            <h1 class=\"name\"> ${this.name} </h1>\r\n            <h2 class=\"location\"> ${this.city} ${this.country}</h2>\r\n            <p class=\"tagline\"> ${this.tagline} </p>\r\n        </div>\r\n        <div class=\"photograph-modal\">\r\n            <button class=\"contact_button\" onclick=\"displayModal()\">Contactez-moi</button>\r\n        </div>\r\n        <div class=\"photograph-portrait\">\r\n            <img class=\"portrait\" src=\"./assets/photographers/portrait/${this.portrait}\" alt=\"${this.name}\">\r\n        </div>\r\n        `\r\n\r\n        return headerContent\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/photographModel.js?");

/***/ }),

/***/ "./src/scripts/models/video.js":
/*!*************************************!*\
  !*** ./src/scripts/models/video.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Video)\n/* harmony export */ });\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./src/scripts/models/media.js\");\n\r\nclass Video extends _media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(data){\r\n        super(data)\r\n        this.video = data.video\r\n    }\r\n    renderGalery(){\r\n        const singleGaleryElement = `\r\n        <article>\r\n            <div class=\"media\">\r\n                <video>\r\n                    <source src=\"${this.url}/${this.video}\" type=\"video/mp4\">\r\n                </video>\r\n            </div>\r\n            <div class=\"media-information\" >\r\n                <p class=\"title-galery\"> ${this.title}</p>\r\n                <p class=\"likes-galery\"> ${this.likes} <i class=\"fa-solid fa-heart coeur\"></i></p>\r\n            </div>\r\n        </article>\r\n        `\r\n        return singleGaleryElement\r\n    }\r\n} \n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/video.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ \"./src/scripts/services/api.js\");\n/* harmony import */ var _factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographerPageFactory */ \"./src/scripts/factories/photographerPageFactory.js\");\n/* harmony import */ var _factories_PhotographGaleryFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/PhotographGaleryFactory */ \"./src/scripts/factories/PhotographGaleryFactory.js\");\n/* harmony import */ var _models_ContactModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ContactModal */ \"./src/scripts/models/ContactModal.js\");\n//Mettre le code JavaScript lié à la page photographer.html\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function displayHeaderData(){\r\n    const photographHeader = document.querySelector(\".photograph-header\");\r\n    const modalPhotographer = document.getElementById('contact_modal');\r\n    const {medias , photograph} = await (0,_services_api__WEBPACK_IMPORTED_MODULE_0__.getMediasPhotographer)(getUrlIdParameter());\r\n    const newPhotograph = new _factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](photograph, \"photograph\")\r\n    photographHeader.innerHTML += newPhotograph.renderHeader();\r\n    const contactObject = new _models_ContactModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"](photograph);\r\n    modalPhotographer.innerHTML += contactObject.renderModal();\r\n    galeryMediaPhotograph(medias, photograph);\r\n};\r\n\r\nasync function galeryMediaPhotograph(medias, photograph_){\r\n    const baseUrl = `./assets/photographers/${photograph_.name}`\r\n    const galeryContainer = document.querySelector(\".galery-container\");\r\n    medias.forEach((media ) => {\r\n            const galeryElement = new _factories_PhotographGaleryFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({...media, url:baseUrl})\r\n            galeryContainer.innerHTML += galeryElement.renderGalery()\r\n\r\n    });\r\n};\r\n\r\nfunction getUrlIdParameter(){\r\n    const queryString = window.location.search;\r\n    const urlParams = new URLSearchParams(queryString);\r\n    let id = urlParams.get('id');\r\n    return Number.parseInt(id);\r\n};\r\ndisplayHeaderData();\r\n\r\nfunction incrementLikes(){\r\n    const coeur = document.getElementsByClassName('coeur')\r\n    coeur.addEventListener('click', function (){\r\n        if (!coeur.className == 'increment'){\r\n            coeur.classList.toggle('increment')\r\n        } else {\r\n            coeur.classList.toggle('increment')\r\n        }\r\n    })\r\n}\r\n\r\n// const likesNumber = document.getElementsByClassName('likes-galery')\r\n// console.log(likesNumber)\r\n// for (const singleLike of likesNumber){\r\n//     console.log(singleLike)\r\n// }\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/services/api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMediasPhotographer\": () => (/* binding */ getMediasPhotographer),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// ici création requetes api \r\n// fetch\r\n// requete photographes\r\n// requete media \r\n//fonction return un photographe\r\nasync function getData(){\r\n    const data = await fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then(res => {\r\n        return res\r\n    })\r\n    return data\r\n}\r\nasync function getPhotographers() {\r\n   const dataPhotofraphers = await getData()\r\n    return dataPhotofraphers.photographers\r\n  }\r\n\r\nasync function getMediasPhotographer(photographerId){\r\n    const dataPhotofraphersPage = await getData();\r\n    let mediaPhotographers = dataPhotofraphersPage.media;\r\n    let medias = mediaPhotographers.filter( mediaPhotographers => mediaPhotographers.photographerId === photographerId );\r\n    let photographers = dataPhotofraphersPage.photographers;\r\n    let photograph = photographers.find( photographers => photographers.id === photographerId);\r\n    return {medias , photograph};\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/services/api.js?");

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
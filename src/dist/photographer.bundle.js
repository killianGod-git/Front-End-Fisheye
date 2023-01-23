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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographGaleryFactory)\n/* harmony export */ });\n/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/image */ \"./src/scripts/models/image.js\");\n/* harmony import */ var _models_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/media */ \"./src/scripts/models/media.js\");\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/video */ \"./src/scripts/models/video.js\");\n\r\n\r\n\r\nclass PhotographGaleryFactory{\r\n    constructor (data){\r\n        if (data.image){\r\n            return new _models_image__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data)\r\n        }\r\n        else if(data.video){\r\n            return new _models_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data)\r\n        }\r\n        else{\r\n            return new _models_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data)\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/factories/PhotographGaleryFactory.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactModal)\n/* harmony export */ });\nclass ContactModal{\r\n    constructor(data){\r\n        this.name = data.name\r\n    }\r\n    renderModal(){\r\n        const modal = `\r\n        <div class=\"modal\" aria-label=\"Contact me ${this.name}\" >\r\n            <header>\r\n                <h2>Contactez-moi <br> ${this.name}</h2>\r\n                <a href=\"#\" aria-label=\"Close contact form\" onclick=\"closeModal()\"><img src=\"assets/icons/close.svg\"  /></a>\r\n            </header>\r\n            <form id=\"contactPhotograph\" >\r\n\t\t\t    <div>\r\n\t\t\t\t    <label for=\"prenom\" aria-label=\"First name\">Prénom</label>\r\n\t\t\t    \t    <input type=\"text\" id=\"prenom\"  />\r\n                    <label for=\"nom\" aria-label=\"Last name\">Nom</label>\r\n\t\t\t\t\t    <input type=\"text\" id=\"nom\" />\r\n                    <label for=\"email\" aria-label=\"Email\">Email</label>\r\n\t\t\t\t\t    <input type=\"email\" id=\"email\" />\r\n                    <label for=\"message\" aria-label=\"Your message\">Votre message</label>\r\n\t    \t\t\t\t<textarea cols=\"100\" rows=\"10\" id=\"message\"  ></textarea>\r\n\t\t    \t</div>\r\n                <button id=\"btn-submit\" class=\"contact_button\" type=\"submit\" aria-label=\"Send\" />Envoyer</button>\r\n\t\t    </form>\r\n        </div>    \r\n        `\r\n        return modal\r\n    }\r\n}\r\n \n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/ContactModal.js?");

/***/ }),

/***/ "./src/scripts/models/image.js":
/*!*************************************!*\
  !*** ./src/scripts/models/image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./src/scripts/models/media.js\");\n\r\nclass Image extends _media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{ \r\n    constructor(data){\r\n        super(data)\r\n        this.image = data.image\r\n    }\r\n    renderGalery(){\r\n        const singleGaleryElement = document.createElement('article')\r\n        singleGaleryElement.setAttribute('id', \"p\" + this.id + \"\")\r\n        const galeryElementContain = `\r\n        \r\n            <div href=\"#\" class=\"media\">\r\n                <img id=\"${this.id}\" src=\"${this.url}/${this.image}\" alt=\"${this.title}\" tabindex=\"0\">\r\n            </div>\r\n            <div class=\"media-information\">\r\n                <p class=\"title-galery\"> ${this.title}</p>\r\n                <div class=\"likes-section\"> \r\n                    <span class=\"likes-galery\">${this.likes}</span> \r\n                    <i class=\"fa-regular fa-heart\" aria-label=\"nombre de j'aime ${this.likes}\" tabindex=\"0\"></i>\r\n                </div>\r\n            </div>\r\n        \r\n        `\r\n        singleGaleryElement.innerHTML += galeryElementContain\r\n        return singleGaleryElement\r\n    }\r\n}\r\n\r\n// modifier structure avec createElement\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/image.js?");

/***/ }),

/***/ "./src/scripts/models/media.js":
/*!*************************************!*\
  !*** ./src/scripts/models/media.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Media)\n/* harmony export */ });\nclass Media  {\r\n    constructor(data){\r\n        this.id = data.id  \r\n        this.photographerId = data.photographerId\r\n        this.title = data.title\r\n        this.likes = data.likes \r\n        this.date = data.date\r\n        this.price = data.price\r\n        this.url = data.url\r\n    }\r\n    renderGalery(){\r\n        return `<p> Type non valide </p>`\r\n    }\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/media.js?");

/***/ }),

/***/ "./src/scripts/models/photographModel.js":
/*!***********************************************!*\
  !*** ./src/scripts/models/photographModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PhotographModel)\n/* harmony export */ });\nclass PhotographModel{\r\n    constructor(data){\r\n        this.name = data.name\r\n        this.id = data.id  \r\n        this.city = data.city\r\n        this.country = data.country\r\n        this.tagline = data.tagline \r\n        this.price = data.price\r\n        this.portrait = data.portrait\r\n    }\r\n    renderHeader(){\r\n        const headerContent = `\r\n        <div class=\"photograph-information\">\r\n            <h1 class=\"name\"> ${this.name} </h1>\r\n            <h2 class=\"location\"> ${this.city} ${this.country}</h2>\r\n            <p class=\"tagline\"> ${this.tagline} </p>\r\n        </div>\r\n        <div class=\"photograph-modal\">\r\n            <button class=\"contact_button\" onclick=\"displayModal()\" aria-label=\"Bouton qui ouvre la modal de contact\">Contactez-moi</button>\r\n        </div>\r\n        <div class=\"photograph-portrait\">\r\n            <img class=\"portrait\" src=\"./assets/photographers/portrait/${this.portrait}\" alt=\"${this.name}\">\r\n        </div>\r\n        `\r\n\r\n        return headerContent\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/photographModel.js?");

/***/ }),

/***/ "./src/scripts/models/video.js":
/*!*************************************!*\
  !*** ./src/scripts/models/video.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Video)\n/* harmony export */ });\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./src/scripts/models/media.js\");\n\r\nclass Video extends _media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor(data){\r\n        super(data)\r\n        this.video = data.video\r\n    }\r\n    renderGalery(){\r\n        const singleGaleryElement = document.createElement('article')\r\n        singleGaleryElement.setAttribute('id', \"p\" + this.id + \"\")\r\n        \r\n        const galeryElementContain = `\r\n        \r\n            <div href=\"#\" class=\"media\">\r\n                <video id=\"${this.id}\" src=\"${this.url}/${this.video}\" type=\"video/mp4\">\r\n            </div>\r\n            <div class=\"media-information\" >\r\n                <p class=\"title-galery\"> ${this.title}</p>\r\n                <div class=\"likes-section\"> \r\n                    <span class=\"likes-galery\">${this.likes}</span> \r\n                    <i class=\"fa-regular fa-heart\" aria-label=\"nombre de j'aime ${this.likes}\" tabindex=\"0\"></i>\r\n                </div>\r\n            </div>\r\n        \r\n        `\r\n        singleGaleryElement.innerHTML += galeryElementContain\r\n        return singleGaleryElement\r\n    }\r\n} \n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/models/video.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ \"./src/scripts/services/api.js\");\n/* harmony import */ var _factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/photographerPageFactory */ \"./src/scripts/factories/photographerPageFactory.js\");\n/* harmony import */ var _factories_PhotographGaleryFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/PhotographGaleryFactory */ \"./src/scripts/factories/PhotographGaleryFactory.js\");\n/* harmony import */ var _models_ContactModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ContactModal */ \"./src/scripts/models/ContactModal.js\");\n/* harmony import */ var _utils_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/lightbox */ \"./src/scripts/utils/lightbox.js\");\n/* harmony import */ var _utils_sortMedias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/sortMedias */ \"./src/scripts/utils/sortMedias.js\");\n/* harmony import */ var _utils_likesFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/likesFunctions */ \"./src/scripts/utils/likesFunctions.js\");\n//Mettre le code JavaScript lié à la page photographer.html\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet baseUrl = '';\r\nlet currentPhotograph = '';\r\nasync function displayHeaderData(){\r\n    const photographHeader = document.querySelector(\".photograph-header\");\r\n    const modalPhotographer = document.getElementById('contact_modal');\r\n    const {medias , photograph} = await (0,_services_api__WEBPACK_IMPORTED_MODULE_0__.getMediasPhotographer)(getUrlIdParameter());\r\n    const newPhotograph = new _factories_photographerPageFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](photograph, \"photograph\")\r\n    photographHeader.innerHTML += newPhotograph.renderHeader();\r\n    const contactObject = new _models_ContactModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"](photograph);\r\n    modalPhotographer.innerHTML += contactObject.renderModal();\r\n    galeryMediaPhotograph(medias, photograph);\r\n    const coeur = document.querySelector('.galery-container')\r\n    coeur.addEventListener('click', function(e){\r\n        ;(0,_utils_likesFunctions__WEBPACK_IMPORTED_MODULE_6__.incrementLikes)(e)\r\n    })\r\n    coeur.addEventListener('keypress', function(e){\r\n        if (e.key == 'Enter')\r\n        (0,_utils_likesFunctions__WEBPACK_IMPORTED_MODULE_6__.incrementLikes)(e)\r\n    })\r\n    const selectField = document.querySelector('#filter-galery');\r\n    selectField.addEventListener('change' , (event) => {\r\n        const result = (0,_utils_sortMedias__WEBPACK_IMPORTED_MODULE_5__.displaySortMedia)(medias, event.target.value)\r\n        displayMedias(result);\r\n    })\r\n    _utils_lightbox__WEBPACK_IMPORTED_MODULE_4__.Lightbox.init()\r\n    // ecouteur de la ligthbox\r\n    const container=document.querySelector('.galery-container')\r\n\r\n        if(container){\r\n            container.addEventListener('click',(e)=>{\r\n                openLighbox(e, medias)\r\n            })\r\n            container.addEventListener('keypress', function (e) {\r\n                if (e.key === 'Enter') {\r\n                    openLighbox(e, medias)\r\n                }\r\n            });\r\n        }\r\n};\r\nfunction openLighbox(e, medias){\r\n    const mediasUrl = Array.from(document.querySelectorAll('.media'));\r\n    const gallery = mediasUrl.map(mediaUrl => mediaUrl.lastElementChild.currentSrc)\r\n    const Lcontainer=document.querySelector('.lightbox_container')\r\n    const node=e.target.tagName.toLowerCase();\r\n    if(node==='img' || node==='video'){\r\n        const id = e.target.getAttribute('id')\r\n        const data = medias.find(m => m.id == id)\r\n        const dom=document.querySelector('.lightbox')\r\n        dom.classList.add('lightbox_active')\r\n        const initialIndex=gallery.findIndex(media=>media===e.target.src)\r\n\r\n        const l=new _utils_lightbox__WEBPACK_IMPORTED_MODULE_4__.Lightbox(e.target.src, gallery, Lcontainer, initialIndex, node, medias)\r\n    }\r\n    (0,_utils_lightbox__WEBPACK_IMPORTED_MODULE_4__.accessibilityLightbox)()\r\n}\r\n\r\nasync function galeryMediaPhotograph(medias, photograph_){\r\n    baseUrl = `./assets/photographers/${photograph_.name}`\r\n    currentPhotograph = photograph_;\r\n    const t = displayMedias(medias)\r\n    ;(0,_utils_likesFunctions__WEBPACK_IMPORTED_MODULE_6__.displayLikesTotal)(t, currentPhotograph.price)\r\n};\r\n\r\nfunction displayMedias(medias ){\r\n    let totalLikes = 0\r\n    const galeryContainer = document.querySelector(\".galery-container\");\r\n    medias.forEach((media ) => {\r\n        let articlesNode = document.querySelector(\"#p\"+ media.id + \"\" )\r\n        if (!articlesNode){\r\n            const galeryElement = new _factories_PhotographGaleryFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({...media, url:baseUrl})\r\n            galeryContainer.appendChild(galeryElement.renderGalery())\r\n            totalLikes += galeryElement.likes\r\n        } else {\r\n            galeryContainer.appendChild(articlesNode)\r\n        }\r\n            \r\n    });\r\n    return totalLikes\r\n    \r\n}\r\n\r\n\r\nfunction getUrlIdParameter(){\r\n    const queryString = window.location.search;\r\n    const urlParams = new URLSearchParams(queryString);\r\n    let id = urlParams.get('id');\r\n    return Number.parseInt(id);\r\n};\r\ndisplayHeaderData();\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/services/api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMediasPhotographer\": () => (/* binding */ getMediasPhotographer),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers)\n/* harmony export */ });\n// ici création requetes api \r\n// fetch\r\n// requete photographes\r\n// requete media \r\n//fonction return un photographe\r\nasync function getData(){\r\n    const data = await fetch(\"./data/photographers.json\")\r\n    .then(res => res.json())\r\n    .then(res => {\r\n        return res\r\n    })\r\n    return data\r\n}\r\nasync function getPhotographers() {\r\n   const dataPhotofraphers = await getData()\r\n    return dataPhotofraphers.photographers\r\n  }\r\n\r\nasync function getMediasPhotographer(photographerId){\r\n    const dataPhotofraphersPage = await getData();\r\n    let mediaPhotographers = dataPhotofraphersPage.media;\r\n    let medias = mediaPhotographers.filter( mediaPhotographers => mediaPhotographers.photographerId === photographerId );\r\n    let photographers = dataPhotofraphersPage.photographers;\r\n    let photograph = photographers.find( photographers => photographers.id === photographerId);\r\n    return {medias , photograph};\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/services/api.js?");

/***/ }),

/***/ "./src/scripts/utils/lightbox.js":
/*!***************************************!*\
  !*** ./src/scripts/utils/lightbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lightbox\": () => (/* binding */ Lightbox),\n/* harmony export */   \"accessibilityLightbox\": () => (/* binding */ accessibilityLightbox)\n/* harmony export */ });\nclass Lightbox{\r\n    static init(){\r\n        // Initialisation\r\n        const lightBoxZone=`\r\n            <button class=\"lightbox_close\" aria-label=\"close dialog\"></button>\r\n            <a href=\"#\" class=\"lightbox_prev\" aria-label=\"previous image\"></a>\r\n            <br>\r\n            <a href=\"#\" class=\"lightbox_next\" aria-label=\"next image\"></a>\r\n            <div class=\"lightbox_container\">\r\n                <div>Content lightbox</div>\r\n            </div>`\r\n        const dom = document.createElement('div');\r\n        dom.classList.add('lightbox')\r\n        dom.innerHTML = lightBoxZone\r\n        document.body.appendChild(dom)\r\n    }\r\n    constructor(url, gallery, Lcontainer, initialIndex, node, medias){\r\n        this.medias = medias \r\n        this.gallery = gallery\r\n        \r\n        this.container=Lcontainer\r\n        this.onKeyUp = this.onKeyUp.bind(this)\r\n        document.addEventListener('keyup', this.onKeyUp)\r\n        this.index=initialIndex\r\n        this.mediaType=node;\r\n        Lcontainer.innerHTML=this.loadImage(url, node, medias[this.index])\r\n        this.initLightboxEvent()\r\n    }   \r\n    loadImage(url, node, data){\r\n        if(node===\"img\"){\r\n            return `<img src=${url} alt=\"${data.title}\"/>\r\n            <h2> ${data.title}</h2>`\r\n        }else{\r\n            return `<video controls src='${url}'></video>\r\n            <h2> ${data.title}</h2>`\r\n        }\r\n    }\r\n    onKeyUp(e){\r\n        if (e.key === 'Escape'){ \r\n            this.closeLightbox(e)\r\n        } else if (e.key === 'ArrowLeft'){\r\n            this.prevLightbox(e)\r\n        }\r\n        else if (e.key === 'ArrowRight'){\r\n            this.nextLightbox(e)\r\n        }\r\n    }\r\n    closeLightbox( e ){\r\n        e.preventDefault()\r\n        const dom=document.querySelector('.lightbox')\r\n                    dom.classList.remove('lightbox_active')\r\n        document.removeEventListener('keyup', this.onKeyUp)\r\n    }\r\n    nextLightbox( e ){\r\n        e.preventDefault()\r\n        this.index=this.index+1\r\n        if(this.index >= this.gallery.length){\r\n            this.index=0\r\n        }\r\n        const url=this.gallery[this.index]\r\n        const data = this.medias[this.index]\r\n        this.container.innerHTML=this.loadImage(url, this.typeMedia(url), data)\r\n    }\r\n    prevLightbox( e ){\r\n        e.preventDefault()\r\n        this.index=this.index-1\r\n        if(this.index < 0){\r\n            this.index=this.gallery.length-1\r\n        }\r\n        const url=this.gallery[this.index]\r\n        const data = this.medias[this.index]\r\n        console.log(data)\r\n        this.container.innerHTML=this.loadImage(url, this.typeMedia(url), data)\r\n        \r\n    }\r\n\r\n    initLightboxEvent = () => {\r\n        document.querySelector('.lightbox_close').addEventListener('click', this.closeLightbox.bind(this));\r\n        document.querySelector('.lightbox_prev').addEventListener('click', this.prevLightbox.bind(this));\r\n        document.querySelector('.lightbox_next').addEventListener('click', this.nextLightbox.bind(this))\r\n    }\r\n\r\n    typeMedia=(url)=>{\r\n        return (url.endsWith(\".mp4\")?\"video\":\"img\")\r\n    }\r\n}\r\nfunction accessibilityLightbox(){\r\n    const  focusableElements = 'button, [href], [tabindex]:not([tabindex=\"-1\"])';\r\n    const lightbox = document.querySelector('.lightbox'); \r\n    const firstFocusableElement = lightbox.querySelectorAll(focusableElements)[0]; \r\n    const focusableContent = lightbox.querySelectorAll(focusableElements);\r\n    const lastFocusableElement = focusableContent[focusableContent.length - 1]; \r\n    document.addEventListener('keydown', function(e) {\r\n    let isTabPressed = e.key === 'Tab';\r\n  \r\n    if (!isTabPressed) {\r\n      return;\r\n    }\r\n  \r\n    if (e.shiftKey ) { \r\n      if (document.activeElement === firstFocusableElement) {\r\n        lastFocusableElement.focus();\r\n        e.preventDefault();\r\n      }\r\n    } else {\r\n      if (document.activeElement === lastFocusableElement) { \r\n        firstFocusableElement.focus(); \r\n        e.preventDefault();\r\n      }\r\n    }\r\n  })\r\n  firstFocusableElement.focus()\r\n};\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/utils/lightbox.js?");

/***/ }),

/***/ "./src/scripts/utils/likesFunctions.js":
/*!*********************************************!*\
  !*** ./src/scripts/utils/likesFunctions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpdateTotalLikes\": () => (/* binding */ UpdateTotalLikes),\n/* harmony export */   \"displayLikesTotal\": () => (/* binding */ displayLikesTotal),\n/* harmony export */   \"incrementLikes\": () => (/* binding */ incrementLikes)\n/* harmony export */ });\nfunction incrementLikes(e){\r\n    const heart = e.target\r\n    if (heart && heart.classList.contains('fa-heart') ){\r\n        const pHeart = heart.parentElement\r\n\r\n        let n = Number.parseInt(pHeart.querySelector('.likes-galery').innerHTML)\r\n\r\n        if (!pHeart.classList.contains('incremented') ){\r\n            n += 1;\r\n            pHeart.classList.toggle('incremented')\r\n            heart.classList.toggle('fa-solid')\r\n            heart.classList.toggle('fa-regular')\r\n            UpdateTotalLikes(1)\r\n        } else{\r\n            n -= 1;\r\n            pHeart.classList.toggle('incremented')\r\n            heart.classList.toggle('fa-solid')\r\n            heart.classList.toggle('fa-regular')\r\n            UpdateTotalLikes(-1)\r\n        }  \r\n        pHeart.querySelector('.likes-galery').innerHTML = n;   \r\n    }\r\n\r\n\r\n}\r\nconst coeur = document.getElementsByClassName('likes-galery')\r\n\r\nfunction displayLikesTotal( total, price){\r\nconst likeSection = document.getElementById('likes');\r\nconst priceSection = document.getElementById('price');\r\nlikeSection.innerHTML += total + ' <i class=\"fa-solid fa-heart\"></i>'\r\nlikeSection.setAttribute('aria-label' , 'nombre de j\\'aime total ' + total + ' j\\'aime' )\r\npriceSection.innerHTML += price + '€ / jour'\r\npriceSection.setAttribute('aria-label' , 'tarif ' + price + '€/jour' )\r\n\r\n}\r\nfunction UpdateTotalLikes(likes){\r\nconst likesTotal = document.querySelector('#likes').innerHTML;\r\nlet n = Number.parseInt(likesTotal)\r\nn += likes\r\ndocument.querySelector('#likes').innerHTML = n + ' <i class=\"fa-solid fa-heart\"></i>';\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/utils/likesFunctions.js?");

/***/ }),

/***/ "./src/scripts/utils/sortMedias.js":
/*!*****************************************!*\
  !*** ./src/scripts/utils/sortMedias.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displaySortMedia\": () => (/* binding */ displaySortMedia)\n/* harmony export */ });\nfunction displaySortMedia(medias , optionsSort){\r\n    switch(optionsSort){\r\n        case 'Popularité':\r\n            medias.sort((a, b) =>{\r\n                return a.likes - b.likes\r\n            })\r\n            break;\r\n        case 'Date':\r\n            medias.sort((a, b) =>{\r\n                const Da = new Date(a.date)\r\n                const Db = new Date(b.date)\r\n\r\n                return Da - Db\r\n            })\r\n            break;\r\n        case  'Titre':\r\n            medias.sort((a, b)=>{\r\n                return a.title.localeCompare(b.title) \r\n            })\r\n            break;\r\n    }\r\n    return medias\r\n }\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/utils/sortMedias.js?");

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
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/utils/contactForm.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/contactForm.js ***!
  \******************************************/
/***/ (() => {

eval("function displayModal() {\r\n    const modal = document.getElementById(\"contact_modal\");\r\n\tmodal.style.display = \"block\";\r\n    const form = document.getElementById('contactPhotograph');\r\n    const formSubmit = document.getElementById('btn-submit');\r\n    formSubmit.addEventListener('click', function (event){\r\n        event.preventDefault();\r\n        const formInput = Array.from(form.querySelectorAll(\"input\"));\r\n        for (const formData of formInput){\r\n            console.log(formData.id, \"=>\", formData.value)\r\n        }\r\n        const formMessage = form.querySelector('textarea');\r\n        console.log(formMessage.id, '=>', formMessage.value);\r\n    })\r\n}\r\n\r\nfunction closeModal() {\r\n    const modal = document.getElementById(\"contact_modal\");\r\n    modal.style.display = \"none\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/utils/contactForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/utils/contactForm.js"]();
/******/ 	
/******/ })()
;
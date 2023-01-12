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

eval("function displayModal() {\r\n    const modal = document.getElementById(\"contact_modal\");\r\n\tmodal.style.display = \"block\";\r\n    const form = document.getElementById('contactPhotograph');\r\n    form.addEventListener('submit', e =>{\r\n        e.preventDefault();\r\n        validateForm(form)\r\n        \r\n    } )\r\n    accessibilityModal()\r\n    document.addEventListener('keydown', function(e) {\r\n    let isEscapePressed = e.key === 'Escape' ;\r\n    \r\n    if (isEscapePressed) {\r\n       closeModal()\r\n    }\r\n});\r\n}\r\n\r\nfunction closeModal() {\r\n    const modal = document.getElementById(\"contact_modal\");\r\n    modal.style.display = \"none\";\r\n}\r\nfunction accessibilityModal(){\r\n  const  focusableElements = 'button, [href], input,  [tabindex]:not([tabindex=\"-1\"])';\r\n  const modal = document.querySelector('#contact_modal'); \r\n  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; \r\n  const focusableContent = modal.querySelectorAll(focusableElements);\r\n  const lastFocusableElement = focusableContent[focusableContent.length - 1]; \r\n  document.addEventListener('keydown', function(e) {\r\n  let isTabPressed = e.key === 'Tab';\r\n\r\n  if (!isTabPressed) {\r\n    return;\r\n  }\r\n\r\n  if (e.shiftKey ) { \r\n    if (document.activeElement === firstFocusableElement) {\r\n      lastFocusableElement.focus();\r\n      e.preventDefault();\r\n    }\r\n  } else {\r\n    if (document.activeElement === lastFocusableElement) { \r\n      firstFocusableElement.focus(); \r\n      e.preventDefault();\r\n    }\r\n  }\r\n});\r\n\r\nfirstFocusableElement.focus();\r\n}\r\n\r\nfunction validateForm(form){\r\n        const formInput = Array.from(form.querySelectorAll(\"input\"));\r\n        for (const formData of formInput){\r\n            console.log(formData.id, \"=>\", formData.value)\r\n        }\r\n        const formMessage = form.querySelector('textarea');\r\n        console.log(formMessage.id, '=>', formMessage.value);\r\n        closeModal()\r\n}\n\n//# sourceURL=webpack://front-end-fisheye/./src/scripts/utils/contactForm.js?");

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
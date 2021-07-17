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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _src_routes_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/routes/routes.js */ \"./src/routes/routes.js\");\n\n\nconsole.log(\"hola mundo\");\nwindow.addEventListener(\"load\", _src_routes_routes_js__WEBPACK_IMPORTED_MODULE_1__.default);\nwindow.addEventListener(\"hashchange\", _src_routes_routes_js__WEBPACK_IMPORTED_MODULE_1__.default);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/index.js?");

/***/ }),

/***/ "./src/pages/Character.js":
/*!********************************!*\
  !*** ./src/pages/Character.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n/* harmony import */ var _utils_getHash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getHash.js */ \"./src/utils/getHash.js\");\n\n\n\nconst Character = async () => {\n  const id = (0,_utils_getHash_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  const character = await (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)(id);\n  const view = `\n    <section class=\"character-card\">\n      <div class=\"character-card__img\" style=\"background-image: url(${character.image})\">\n      </div>\n\n      <div class=\"character-information\">\n\t<div class=\"character-information__title\">\n\t  <h2>Information</h2>\n\t</div>\n\n\t<div class=\"character-information__detail\">\n\t  <div>\n\t    <h3>Name: ${character.name}</h3>\n\t  </div>\n\t  <div>\n\t    <h3>Location: ${character.location.name}</h3>\n\t  </div>\n\t  <div>\n\t    <h3>Status: ${character.status}</h3>\n\t  </div>\n\t  <div>\n\t    <h3>Origin: ${character.origin.name}</h3>\n\t  </div>\n\t  <div>\n\t    <h3>Specie: ${character.species}</h3>\n\t  </div>\n\t</div>\n      </div>\n    </section>\n  `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/pages/Character.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData.js */ \"./src/utils/getData.js\");\n//Tabnine::sem\n\n\nconst Home = async () => {\n  const characters = await (0,_utils_getData_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  console.log(characters.results);\n  const mainCharacters = characters.results.slice(0, 5);\n  const view = `\n      <section>\n\t<div class=\"container-background\">\n\t  <img class=\"container-background__img\" src=\"./assets/images/background-image.png\" alt=\"background rick and morty img\">\n\t</div>\n      </section>\n\n      <section class=\"main-characters\">\n\t<div class=\"container-title\">\n\t  <h2>Main Characters</h2>\n\t</div>\n\t<div class=\"characters-container\">\n\t  <a href=\"#/${mainCharacters[0].id}/\"> <img class=\"characters\" src=\"${mainCharacters[0].image}\" alt=\"${mainCharacters[0].name}\"></a>\n\t  <a href=\"#/${mainCharacters[1].id}/\"> <img class=\"characters\" src=\"${mainCharacters[1].image}\" alt=\"${mainCharacters[1].name}\"></a>\n\t  <a href=\"#/${mainCharacters[2].id}/\"> <img class=\"characters\" src=\"${mainCharacters[2].image}\" alt=\"${mainCharacters[2].name}\"></a>\n\t  <a href=\"#/${mainCharacters[3].id}/\"> <img class=\"characters\" src=\"${mainCharacters[3].image}\" alt=\"${mainCharacters[3].name}\"></a>\n\t  <a href=\"#/${mainCharacters[4].id}/\"> <img class=\"characters\" src=\"${mainCharacters[4].image}\" alt=\"${mainCharacters[4].name}\"></a>\n\t</div>\n      </section>\n\n      <section class=\"all-characters\">\n\t<div class=\"container-title\">\n\t  <h2>All Characters</h2>\n\t</div>\n\t<div class=\"characters-container\">\n    ${characters.results.map(character => `<a href=\"#/${character.id}/\"><img class=\"characters\" src=\"${character.image}\" alt=\"${character.name}\"></a>`).join(\"\")}\n\t</div>\n      </section>\n  `;\n  console.log(characters.results);\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/pages/Home.js?");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home.js */ \"./src/pages/Home.js\");\n/* harmony import */ var _templates_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/Header.js */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Character_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Character.js */ \"./src/pages/Character.js\");\n/* harmony import */ var _utils_getHash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getHash.js */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/resolveRoutes.js */ \"./src/utils/resolveRoutes.js\");\n\n\n\n\n\nconst routes = {\n  \"/\": _pages_Home_js__WEBPACK_IMPORTED_MODULE_0__.default,\n  \"/:id\": _pages_Character_js__WEBPACK_IMPORTED_MODULE_2__.default\n};\n\nconst router = async () => {\n  const header =  false || document.getElementById(\"header\");\n  const content =  false || document.getElementById(\"content\");\n  header.innerHTML = (0,_templates_Header_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  let hash = (0,_utils_getHash_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n  let route = await (0,_utils_resolveRoutes_js__WEBPACK_IMPORTED_MODULE_4__.default)(hash);\n  let render = routes[route] ? routes[route] : \"Marico, cagaste\";\n  content.innerHTML = await render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/routes/routes.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () => {\n  const view = `\n      <div class=\"container-logo\">\n\t<a href=\"\"><img class=\"container-logo__img\" src=\"./assets/images/logo-image.png\" alt=\"logo rick and morty\">\n\t</a>\n      </div>\n\n      <div class=\"container-title\">\n\t<span class=\"container-title__title\"></span>\n      </div>\n\n      <div class=\"container-API\">\n\t<a href=\"https://rickandmortyapi.com/\" class=\"container-API__API\"><span>API</span></a>\n      </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Tabnine::sem\nconst API = \"https://rickandmortyapi.com/api/character/\";\n\nconst getData = async id => {\n  const apiURL = id ? `${API}${id}` : API;\n\n  try {\n    const response = await fetch(apiURL);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log(\"Fetch Error\", error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getHash = () => location.hash.slice(1).toLocaleLowerCase().split(\"/\")[1] || \"/\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resolveRoutes = route => {\n  if (route.length <= 3) {\n    let validRoute = route === \"/\" ? route : \"/:id\";\n    return validRoute;\n  }\n\n  return `/${route}`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/utils/resolveRoutes.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rick-and-morty-wiki/./src/styles/style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
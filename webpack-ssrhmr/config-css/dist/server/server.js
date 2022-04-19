/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = exports.AppCopmonent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nfunction AppCopmonent() {\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },\r\n        react_1.default.createElement(Layout_1.Layout, null,\r\n            react_1.default.createElement(\"div\", null))));\r\n}\r\nexports.AppCopmonent = AppCopmonent;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppCopmonent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"ul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n* {\\r\\n    padding: 0px;\\r\\n    margin: 0px;\\r\\n    border: 0px;\\r\\n}\\r\\n*,\\r\\n*:before,\\r\\n*:after {\\r\\n    -moz-box-sizing: border-box;\\r\\n    -webkit-box-sizing: border-box;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n:focus,\\r\\n:active {\\r\\n    outline: none;\\r\\n}\\r\\na:focus,\\r\\na:active {\\r\\n    outline: none;\\r\\n}\\r\\naside,\\r\\nnav,\\r\\nfooter,\\r\\nheader,\\r\\nsection {\\r\\n    display: block;\\r\\n}\\r\\nhtml,\\r\\nbody {\\r\\n    height: 100%;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\nbody {\\r\\n    line-height: 1;\\r\\n    font-size: 14px;\\r\\n    -ms-text-size-adjust: 100%;\\r\\n    -moz-text-size-adjust: 100%;\\r\\n    -webkit-text-size-adjust: 100%;\\r\\n}\\r\\ninput::-ms-clear {\\r\\n    display: none;\\r\\n}\\r\\nbutton {\\r\\n    cursor: pointer;\\r\\n}\\r\\nbutton::-moz-focus-inner {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n}\\r\\na,\\r\\na:visited {\\r\\n    text-decoration: none;\\r\\n}\\r\\na:hover {\\r\\n    text-decoration: none;\\r\\n}\\r\\nul li {\\r\\n    list-style: none;\\r\\n}\\r\\nimg {\\r\\n    vertical-align: top;\\r\\n}\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n    font-weight: inherit;\\r\\n    font-size: inherit;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --black: #000;\\r\\n    --white: #fff;\\r\\n    --green: #d4edda;\\r\\n    --border-green: #c3e6cb;\\r\\n    --yellow: #fff3cd;\\r\\n    --border-yellow: #ffeeba;\\r\\n    --red: #f8d7da;\\r\\n    --border-red: #f5c6cb;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n.container {\\r\\n    max-width: 1140px;\\r\\n    margin: 0 auto;\\r\\n    padding: 0 30px;\\r\\n}\\r\\n\\r\\n/*Alert type color*/\\r\\n.warning {\\r\\n    background-color: var(--yellow);\\r\\n    border: 1px solid var(--border-yellow);\\r\\n}\\r\\n.error {\\r\\n    background-color: var(--red);\\r\\n    border: 1px solid var(--border-red);\\r\\n}\\r\\n.success {\\r\\n    background-color: var(--green);\\r\\n    border: 1px solid var(--border-green);\\r\\n}\\r\\n\\r\\n/* Alert anim action*/\\r\\n\\r\\n.alert-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n}\\r\\n.alert-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: translateX(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.alert-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.alert-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0.9);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Delete Modal animation*/\\r\\n.deleteModal-enter {\\r\\n    opacity: 0;\\r\\n}\\r\\n.deleteModal-enter-active {\\r\\n    opacity: 1;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.deleteModal-exit {\\r\\n    opacity: 1;\\r\\n}\\r\\n.deleteModal-exit-active {\\r\\n    opacity: 0;\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Card Animation */\\r\\n.card-enter,\\r\\n.modal-enter {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n}\\r\\n.card-enter-active,\\r\\n.modal-enter-active {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n.card-exit,\\r\\n.modal-exit {\\r\\n    opacity: 1;\\r\\n    transform: scale(1);\\r\\n}\\r\\n.card-exit-active,\\r\\n.modal-exit-active {\\r\\n    opacity: 0;\\r\\n    transform: scale(0);\\r\\n    transition: opacity 500ms, transform 500ms;\\r\\n}\\r\\n\\r\\n/* Modal Form styles */\\r\\n.input {\\r\\n    display: inline-flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-start;\\r\\n    justify-content: space-between;\\r\\n    margin: 0 0 20px 0;\\r\\n    width: calc(50% - 10px);\\r\\n    position: relative;\\r\\n}\\r\\n.input.invalid input,\\r\\n.input.invalid.textarea textarea {\\r\\n    border: 1px solid red;\\r\\n}\\r\\n.input.textarea {\\r\\n    width: 100%;\\r\\n}\\r\\n.input.textarea textarea {\\r\\n    width: 100%;\\r\\n    resize: none;\\r\\n    height: 70px;\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid green;\\r\\n    padding: 5px 10px;\\r\\n}\\r\\n.input[data-size=\\\"small\\\"] {\\r\\n    width: calc(25% - 10px);\\r\\n}\\r\\n\\r\\n.input label {\\r\\n    display: inline-block;\\r\\n    margin: 0 0 5px 0;\\r\\n}\\r\\n.input input {\\r\\n    border-radius: 5px;\\r\\n    border: 1px solid green;\\r\\n    padding: 5px 10px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.input span {\\r\\n    color: red;\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    opacity: 0;\\r\\n    transition: opacity 0.2s ease, transform 0.2s ease;\\r\\n}\\r\\n.input.invalid span {\\r\\n    opacity: 1;\\r\\n    transform: translateY(110%);\\r\\n}\\r\\n\\r\\n@media all and (max-width: 992px) {\\r\\n    .input {\\r\\n        width: 100%;\\r\\n    }\\r\\n    .input[data-size=\\\"small\\\"] {\\r\\n        width: calc(50% - 10px);\\r\\n    }\\r\\n}\\r\\n@media all and (max-width: 768px) {\\r\\n    .input[data-size=\\\"small\\\"] {\\r\\n        width: 100%;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <link\\n    rel=\\\"stylesheet\\\"\\n    href=\\\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\\\"\\n    integrity=\\\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\\\"\\n    crossorigin=\\\"anonymous\\\"\\n  />\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"delete_modal\\\"></div>\\n</body>\\n\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar app = express_1.default();\r\napp.use(compression_1.default());\r\n// app.use(\r\n//     helmet({\r\n//         contentSecurityPolicy: false,\r\n//         crossOriginEmbedderPolicy: false,\r\n//     })\r\n// )\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"*\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_tsx_1.App())));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"server started on port http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.store = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/store/reducers/index.ts\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nexports.store = redux_1.createStore(reducers_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\n// import { cinemaReducer } from \"./cinemaReducer\"\r\n// import { bgReducer } from \"./bgReducer\"\r\n// import { alertReducer } from \"./alertReducer\"\r\n// import { authReducer } from \"./authReducer\"\r\nexports.rootReducer = redux_1.combineReducers({\r\n// cinema: cinemaReducer,\r\n// bg: bgReducer,\r\n// alert: alertReducer,\r\n// auth: authReducer,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });
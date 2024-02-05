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

/***/ "./js/components/FormUser.ts":
/*!***********************************!*\
  !*** ./js/components/FormUser.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FormUserRegister = void 0;\nvar User_1 = __importDefault(__webpack_require__(/*! ../models/User */ \"./js/models/User.ts\"));\nvar FormUserRegister = /** @class */ (function () {\n    function FormUserRegister(element) {\n        this.error = \"\";\n        if (!element) {\n            throw new Error(\"Element is null\");\n        }\n        this.form = document.querySelector(\"#form-user\");\n        this.email = document.querySelector(\"#form-user-email\");\n        this.password = document.querySelector(\"#form-user-password\");\n        this.passwordRepeat = document.querySelector(\"#form-user-password-repeat\");\n        this.initListeners();\n    }\n    FormUserRegister.prototype.initListeners = function () {\n        this.onChangeEmail();\n        this.onChangePassword();\n        this.onSubmit();\n    };\n    FormUserRegister.prototype.onChangeEmail = function () {\n        var _this = this;\n        this.email.addEventListener(\"keyup\", function (event) {\n            event.preventDefault();\n            _this.isValidEmail();\n        });\n    };\n    FormUserRegister.prototype.onChangePassword = function () {\n        var _this = this;\n        this.passwordRepeat.addEventListener(\"keyup\", function (event) {\n            event.preventDefault();\n            _this.isValidPassword();\n        });\n    };\n    FormUserRegister.prototype.onSubmit = function () {\n        var _this = this;\n        this.form.addEventListener(\"submit\", function (event) {\n            event.preventDefault();\n            if (!_this.isValidEmail()) {\n                _this.renderError(\"O formulário não foi enviado, corrija o campo de e-mail.\");\n                return;\n            }\n            if (!_this.isValidPassword()) {\n                _this.renderError(\"O formulário não foi enviado, corrija o campo de senha.\");\n                return;\n            }\n            _this.save(\"user\", new User_1.default(_this.email.value, _this.password.value));\n        });\n    };\n    FormUserRegister.prototype.isValidEmail = function () {\n        if (!this.email.value) {\n            this.renderError(\"O campo e-mail não pode estar vazio.\");\n            return false;\n        }\n        this.renderError(\"\");\n        return true;\n    };\n    FormUserRegister.prototype.isValidPassword = function () {\n        if (!this.password.value) {\n            this.renderError(\"O campo senha não pode estar vazio.\");\n            return false;\n        }\n        if (!this.passwordRepeat.value) {\n            this.renderError(\"O campo repetir senha não pode estar vazio.\");\n            return false;\n        }\n        if (this.password.value !== this.passwordRepeat.value) {\n            this.renderError(\"As senhas digitadas não são iguais.\");\n            return false;\n        }\n        this.renderError(\"\");\n        return true;\n    };\n    FormUserRegister.prototype.renderError = function (error) {\n        this.errorElement = document.querySelector(\"#form-user-error\");\n        this.error = error;\n        this.errorElement.innerHTML = this.error;\n    };\n    FormUserRegister.prototype.save = function (context, newUser) {\n        var user;\n        var hasUser = localStorage.getItem(context);\n        if (hasUser) {\n            user = JSON.parse(hasUser);\n            var userAlreadyRegistered = user.email === newUser.email;\n            if (userAlreadyRegistered) {\n                this.renderError(\"Usuário já cadastrado!\");\n                return;\n            }\n        }\n        localStorage.setItem(context, JSON.stringify(newUser));\n    };\n    return FormUserRegister;\n}());\nexports.FormUserRegister = FormUserRegister;\nexports.default = FormUserRegister;\n\n\n//# sourceURL=webpack://gama-challenge-1/./js/components/FormUser.ts?");

/***/ }),

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar FormUser_1 = __webpack_require__(/*! ./components/FormUser */ \"./js/components/FormUser.ts\");\nvar formElement = document.querySelector('#form-user');\nvar formUserRegister = new FormUser_1.FormUserRegister(formElement);\nconsole.log(formUserRegister);\n\n\n//# sourceURL=webpack://gama-challenge-1/./js/index.ts?");

/***/ }),

/***/ "./js/models/User.ts":
/*!***************************!*\
  !*** ./js/models/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.User = void 0;\nvar User = /** @class */ (function () {\n    function User(email, password) {\n        this.email = email;\n        this.password = password;\n    }\n    return User;\n}());\nexports.User = User;\nexports.default = User;\n\n\n//# sourceURL=webpack://gama-challenge-1/./js/models/User.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.ts");
/******/ 	
/******/ })()
;
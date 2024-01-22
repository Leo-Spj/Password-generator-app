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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var generador_de_contrasenas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generador-de-contrasenas */ \"./node_modules/generador-de-contrasenas/dist-browser/index.js\");\n\r\n\r\n// escucha el valor del input tipe range por id e e innerhtml en etiqueta: \r\nconst range = document.getElementById('range');\r\nconst etiqueta = document.querySelector('.etiqueta_log');\r\nvar fortaleza_rango = 0;\r\nrange.addEventListener('input', function() {\r\n    let long_contra = (parseInt(range.value)+8);\r\n    etiqueta.innerHTML = long_contra;\r\n    range.style.setProperty(\"--value\", (parseInt(range.value)));\r\n    \r\n    \r\n    \r\n// actualizando rango de fortaleza:\r\n    if (long_contra > 13 && fortaleza_check > 0){ \r\n            fortaleza_rango = 1;\r\n            fortaleza();\r\n    } else {\r\n        fortaleza_rango = 0;\r\n        fortaleza();        \r\n    }\r\n});\r\nrange.style.setProperty(\"--value\", (parseInt(range.value)));\r\n\r\n//al clicar en icono_copy, se copia el contenido de contra_generada en el portapapeles:\r\nconst contra_generada = document.getElementById('contra_generada');\r\nconst icono_copy = document.getElementById('icono_copy');\r\n\r\nicono_copy.addEventListener('click', function() {\r\n    contra_generada.select();\r\n    document.execCommand(\"copy\");\r\n\r\n    alert(\"Contraseña copiada al portapapeles\");\r\n});\r\n\r\n//al clicar en boton_generar, se genera una contraseña aleatoria:\r\nconst boton_generar = document.getElementById('boton_generar');\r\n\r\nconst mayusculas = document.getElementById('include-uppercase');\r\nconst minusculas = document.getElementById('include-lowercase');\r\nconst numeros = document.getElementById('include-numbers');\r\nconst symbols = document.getElementById('include-symbols');\r\n\r\nconst c_mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\r\nconst c_munisculas = 'abcdefghijklmnopqrstuvwxyz';\r\nconst c_numeros = '0123456789';\r\nconst c_caracteres = '!@#$%^&*()_+~`|}{[]:;?><,./-=';\r\n\r\nboton_generar.addEventListener('click', function() {\r\n    let long_contra = parseInt(range.value) + 8;\r\n\r\n    // La funcion generarPassword la cree como un paquete npm\r\n    let contra = (0,generador_de_contrasenas__WEBPACK_IMPORTED_MODULE_0__.generarPassword)(\r\n        long_contra,\r\n        mayusculas.checked,\r\n        minusculas.checked,\r\n        numeros.checked,\r\n        symbols.checked\r\n    );\r\n    contra_generada.value = contra;\r\n\r\n    // alerta\r\n    if (contra.length === 0) {\r\n        contra_generada.value = \"🤢🤢🤢\";\r\n    }\r\n});\r\n\r\n\r\n//escuchar los eventos de los checkbox\r\n//  contador = 3 dado que la pagina carga con 3 casillas marcadas.\r\nvar contador = 3;\r\nvar fortaleza_check = 2;\r\nvar checkbox = document.querySelectorAll('input[type=checkbox]');\r\nfor (var i = 0; i < checkbox.length; i++) {\r\n    checkbox[i].addEventListener('change', function () {\r\n        if (this.checked) {\r\n            contador++;\r\n            console.log(\"casillas activas: \" + contador);\r\n            \r\n        } else {\r\n            contador--;\r\n            console.log(\"casillas activas: \" + contador);\r\n        }\r\n\r\n        if (contador == 0) {\r\n            fortaleza_check = 0;\r\n            console.log(\"fortaleza: \" + fortaleza_check);\r\n        }\r\n        if (contador == 1) {\r\n            fortaleza_check = 1;\r\n            console.log(\"fortaleza: \" + fortaleza_check);\r\n        }\r\n        if (contador == 2) {\r\n            fortaleza_check = 1 ;\r\n            console.log(\"Fortaleza checkbx: \" + fortaleza_check);\r\n        }\r\n        if (contador == 3) {\r\n            fortaleza_check = 2;\r\n            console.log(\"Fortaleza checkbx: \" + fortaleza_check);\r\n        }\r\n        if (contador == 4) {\r\n            fortaleza_check = 3;\r\n            console.log(\"Fortaleza checkbx: \" + fortaleza_check);\r\n        } \r\n\r\n        fortaleza()\r\n    });\r\n}\r\n\r\n//segun la cantidad de fortaleza_check  se añade la clase \"activo\" a los div barra_niv:\r\nconst niv_fort_escrita = document.getElementById('niv_fort_escrita');\r\n\r\nconst barra_n_1 = document.getElementById('br_1');\r\nconst barra_n_2 = document.getElementById('br_2');\r\nconst barra_n_3 = document.getElementById('br_3');\r\nconst barra_n_4 = document.getElementById('br_4');\r\n\r\n\r\nfortaleza()\r\nfunction fortaleza() {\r\n    if (fortaleza_check != 0 && fortaleza_check + fortaleza_rango == 1) {\r\n        barra_n_1.classList.add('activado');\r\n        barra_n_2.classList.remove('activado');\r\n        barra_n_3.classList.remove('activado');\r\n        barra_n_4.classList.remove('activado');\r\n\r\n        niv_fort_escrita.innerHTML = \"LOW\";\r\n    } else if (fortaleza_check + fortaleza_rango == 2) {\r\n        barra_n_1.classList.add('activado');\r\n        barra_n_2.classList.add('activado');\r\n        barra_n_3.classList.remove('activado');\r\n        barra_n_4.classList.remove('activado');\r\n\r\n        niv_fort_escrita.innerHTML = \"MEDIUM\";\r\n    } else if (fortaleza_check + fortaleza_rango == 3) {\r\n        barra_n_1.classList.add('activado');\r\n        barra_n_2.classList.add('activado');\r\n        barra_n_3.classList.add('activado');\r\n        barra_n_4.classList.remove('activado');\r\n\r\n        niv_fort_escrita.innerHTML = \"HIGH\";\r\n    } else if (fortaleza_check + fortaleza_rango == 4) {\r\n        barra_n_1.classList.add('activado');\r\n        barra_n_2.classList.add('activado');\r\n        barra_n_3.classList.add('activado');\r\n        barra_n_4.classList.add('activado');\r\n\r\n        niv_fort_escrita.innerHTML = \"STRONG\";\r\n    } else{\r\n        barra_n_1.classList.remove('activado');\r\n        barra_n_2.classList.remove('activado');\r\n        barra_n_3.classList.remove('activado');\r\n        barra_n_4.classList.remove('activado');\r\n\r\n        niv_fort_escrita.innerHTML = \"Niv.\";\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n//se carga la pagina con una contraseña aleatoria de mayusculas, minusculas y numeros.\r\nrerere()\r\nfunction rerere() {\r\n    let alcargar = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\r\n   \r\n    let aleatorio = \"\";\r\n    for (let i = 0; i < 10; i++) {\r\n        aleatorio += alcargar.charAt(Math.floor(Math.random() * alcargar.length));\r\n    }\r\n    contra_generada.value = aleatorio;\r\n    \r\n}   \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://password-generator-app/./index.js?");

/***/ }),

/***/ "./node_modules/generador-de-contrasenas/dist-browser/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/generador-de-contrasenas/dist-browser/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generarPassword: () => (/* binding */ generarPassword)\n/* harmony export */ });\nvar c_mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\nvar c_munisculas = 'abcdefghijklmnopqrstuvwxyz';\nvar c_numeros = '0123456789';\nvar c_caracteres = '!@#$%^&*()_+~`|}{[]:;?><,./-=';\n/**\n * Genera una contraseña aleatoria con las opciones especificadas.\n * @param {number} longitud - La longitud deseada de la contraseña.\n * @param {boolean} mayusculas - Indica si se deben incluir letras mayúsculas en la contraseña.\n * @param {boolean} minusculas - Indica si se deben incluir letras minúsculas en la contraseña.\n * @param {boolean} numeros - Indica si se deben incluir números en la contraseña.\n * @param {boolean} caracteres - Indica si se deben incluir caracteres especiales en la contraseña.\n * @returns {string} La contraseña generada.\n */\nfunction generarPassword(longitud, mayusculas, minusculas, numeros, caracteres) {\n    if (longitud <= 0) {\n        throw new Error('Longitud no válida.');\n    }\n    var caracteresEscogidos = '';\n    var password = '';\n    // Se añaden los caracteres que se van a incluir en la contraseña.\n    if (mayusculas)\n        caracteresEscogidos += c_mayusculas;\n    if (minusculas)\n        caracteresEscogidos += c_munisculas;\n    if (numeros)\n        caracteresEscogidos += c_numeros;\n    if (caracteres)\n        caracteresEscogidos += c_caracteres;\n    var posicion = 0;\n    // Se genera la contraseña.\n    for (var i = 0; i < longitud; i++) {\n        posicion = Math.floor(Math.random() * caracteresEscogidos.length);\n        password += caracteresEscogidos.charAt(posicion);\n    }\n    return password;\n}\n\n\n//# sourceURL=webpack://password-generator-app/./node_modules/generador-de-contrasenas/dist-browser/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
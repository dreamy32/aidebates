"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-numeric-character-reference";
exports.ids = ["vendor-chunks/micromark-util-decode-numeric-character-reference"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNumericCharacterReference: () => (/* binding */ decodeNumericCharacterReference)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/values.js\");\n\n/**\n * Turn the number (in string form as either hexa- or plain decimal) coming from\n * a numeric character reference into a character.\n *\n * Sort of like `String.fromCodePoint(Number.parseInt(value, base))`, but makes\n * non-characters and control characters safe.\n *\n * @param {string} value\n *   Value to decode.\n * @param {number} base\n *   Numeric base.\n * @returns {string}\n *   Character.\n */ function decodeNumericCharacterReference(value, base) {\n    const code = Number.parseInt(value, base);\n    if (// C0 except for HT, LF, FF, CR, space.\n    code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.ht || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.vt || code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.cr && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || // Control character (DEL) of C0, and C1 controls.\n    code > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && code < 160 || // Lone high surrogates and low surrogates.\n    code > 55295 && code < 57344 || // Noncharacters.\n    code > 64975 && code < 65008 || /* eslint-disable no-bitwise */ (code & 65535) === 65535 || (code & 65535) === 65534 || /* eslint-enable no-bitwise */ // Out of range\n    code > 1114111) {\n        return micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.values.replacementCharacter;\n    }\n    return String.fromCodePoint(code);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5EOzs7Ozs7Ozs7Ozs7O0NBYUMsR0FDTSxTQUFTRSxnQ0FBZ0NDLEtBQUssRUFBRUMsSUFBSTtJQUN6RCxNQUFNQyxPQUFPQyxPQUFPQyxRQUFRLENBQUNKLE9BQU9DO0lBRXBDLElBQ0UsdUNBQXVDO0lBQ3ZDQyxPQUFPTCx3REFBS0EsQ0FBQ1EsRUFBRSxJQUNmSCxTQUFTTCx3REFBS0EsQ0FBQ1MsRUFBRSxJQUNoQkosT0FBT0wsd0RBQUtBLENBQUNVLEVBQUUsSUFBSUwsT0FBT0wsd0RBQUtBLENBQUNXLEtBQUssSUFDdEMsa0RBQWtEO0lBQ2pETixPQUFPTCx3REFBS0EsQ0FBQ1ksS0FBSyxJQUFJUCxPQUFPLE9BQzlCLDJDQUEyQztJQUMxQ0EsT0FBTyxTQUFVQSxPQUFPLFNBQ3pCLGlCQUFpQjtJQUNoQkEsT0FBTyxTQUFVQSxPQUFPLFNBRXpCLDZCQUQ2QixHQUM1QkEsQ0FBQUEsT0FBTyxLQUFLLE1BQU8sU0FDcEIsQ0FBQ0EsT0FBTyxLQUFLLE1BQU8sU0FDcEIsNEJBQTRCLEdBQzVCLGVBQWU7SUFDZkEsT0FBTyxTQUNQO1FBQ0EsT0FBT0oseURBQU1BLENBQUNZLG9CQUFvQjtJQUNwQztJQUVBLE9BQU9DLE9BQU9DLGFBQWEsQ0FBQ1Y7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1tb2RlbC1jb21wYXJpc29uLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UvZGV2L2luZGV4LmpzP2Q4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb2RlcywgdmFsdWVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbi8qKlxuICogVHVybiB0aGUgbnVtYmVyIChpbiBzdHJpbmcgZm9ybSBhcyBlaXRoZXIgaGV4YS0gb3IgcGxhaW4gZGVjaW1hbCkgY29taW5nIGZyb21cbiAqIGEgbnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlIGludG8gYSBjaGFyYWN0ZXIuXG4gKlxuICogU29ydCBvZiBsaWtlIGBTdHJpbmcuZnJvbUNvZGVQb2ludChOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpKWAsIGJ1dCBtYWtlc1xuICogbm9uLWNoYXJhY3RlcnMgYW5kIGNvbnRyb2wgY2hhcmFjdGVycyBzYWZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBkZWNvZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYmFzZVxuICogICBOdW1lcmljIGJhc2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBDaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlKHZhbHVlLCBiYXNlKSB7XG4gIGNvbnN0IGNvZGUgPSBOdW1iZXIucGFyc2VJbnQodmFsdWUsIGJhc2UpXG5cbiAgaWYgKFxuICAgIC8vIEMwIGV4Y2VwdCBmb3IgSFQsIExGLCBGRiwgQ1IsIHNwYWNlLlxuICAgIGNvZGUgPCBjb2Rlcy5odCB8fFxuICAgIGNvZGUgPT09IGNvZGVzLnZ0IHx8XG4gICAgKGNvZGUgPiBjb2Rlcy5jciAmJiBjb2RlIDwgY29kZXMuc3BhY2UpIHx8XG4gICAgLy8gQ29udHJvbCBjaGFyYWN0ZXIgKERFTCkgb2YgQzAsIGFuZCBDMSBjb250cm9scy5cbiAgICAoY29kZSA+IGNvZGVzLnRpbGRlICYmIGNvZGUgPCAxNjApIHx8XG4gICAgLy8gTG9uZSBoaWdoIHN1cnJvZ2F0ZXMgYW5kIGxvdyBzdXJyb2dhdGVzLlxuICAgIChjb2RlID4gNTVfMjk1ICYmIGNvZGUgPCA1N18zNDQpIHx8XG4gICAgLy8gTm9uY2hhcmFjdGVycy5cbiAgICAoY29kZSA+IDY0Xzk3NSAmJiBjb2RlIDwgNjVfMDA4KSB8fFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAoY29kZSAmIDY1XzUzNSkgPT09IDY1XzUzNSB8fFxuICAgIChjb2RlICYgNjVfNTM1KSA9PT0gNjVfNTM0IHx8XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG4gICAgLy8gT3V0IG9mIHJhbmdlXG4gICAgY29kZSA+IDFfMTE0XzExMVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVzLnJlcGxhY2VtZW50Q2hhcmFjdGVyXG4gIH1cblxuICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoY29kZSlcbn1cbiJdLCJuYW1lcyI6WyJjb2RlcyIsInZhbHVlcyIsImRlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UiLCJ2YWx1ZSIsImJhc2UiLCJjb2RlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJodCIsInZ0IiwiY3IiLCJzcGFjZSIsInRpbGRlIiwicmVwbGFjZW1lbnRDaGFyYWN0ZXIiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\n");

/***/ })

};
;
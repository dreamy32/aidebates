"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-destination";
exports.ids = ["vendor-chunks/micromark-factory-destination"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-factory-destination/dev/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-factory-destination/dev/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryDestination: () => (/* binding */ factoryDestination)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/**\n * @import {Effects, State, TokenType} from 'micromark-util-types'\n */ \n\n/**\n * Parse destinations.\n *\n * ###### Examples\n *\n * ```markdown\n * <a>\n * <a\\>b>\n * <a b>\n * <a)>\n * a\n * a\\)b\n * a(b)c\n * a(b)\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type for whole (`<a>` or `b`).\n * @param {TokenType} literalType\n *   Type when enclosed (`<a>`).\n * @param {TokenType} literalMarkerType\n *   Type for enclosing (`<` and `>`).\n * @param {TokenType} rawType\n *   Type when not enclosed (`b`).\n * @param {TokenType} stringType\n *   Type for the value (`a` or `b`).\n * @param {number | undefined} [max=Infinity]\n *   Depth of nested parens (inclusive).\n * @returns {State}\n *   Start state.\n */ function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {\n    const limit = max || Number.POSITIVE_INFINITY;\n    let balance = 0;\n    return start;\n    /**\n   * Start of destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *     ^\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan) {\n            effects.enter(type);\n            effects.enter(literalType);\n            effects.enter(literalMarkerType);\n            effects.consume(code);\n            effects.exit(literalMarkerType);\n            return enclosedBefore;\n        }\n        // ASCII control, space, closing paren.\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)) {\n            return nok(code);\n        }\n        effects.enter(type);\n        effects.enter(rawType);\n        effects.enter(stringType);\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString\n        });\n        return raw(code);\n    }\n    /**\n   * After `<`, at an enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosedBefore(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n            effects.enter(literalMarkerType);\n            effects.consume(code);\n            effects.exit(literalMarkerType);\n            effects.exit(literalType);\n            effects.exit(type);\n            return ok;\n        }\n        effects.enter(stringType);\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.constants.contentTypeString\n        });\n        return enclosed(code);\n    }\n    /**\n   * In enclosed destination.\n   *\n   * ```markdown\n   * > | <aa>\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosed(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            effects.exit(stringType);\n            return enclosedBefore(code);\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEnding)(code)) {\n            return nok(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? enclosedEscape : enclosed;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | <a\\*a>\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function enclosedEscape(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lessThan || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.greaterThan || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return enclosed;\n        }\n        return enclosed(code);\n    }\n    /**\n   * In raw destination.\n   *\n   * ```markdown\n   * > | aa\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function raw(code) {\n        if (!balance && (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.markdownLineEndingOrSpace)(code))) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.types.chunkString);\n            effects.exit(stringType);\n            effects.exit(rawType);\n            effects.exit(type);\n            return ok(code);\n        }\n        if (balance < limit && code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis) {\n            effects.consume(code);\n            balance++;\n            return raw;\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis) {\n            effects.consume(code);\n            balance--;\n            return raw;\n        }\n        // ASCII control (but *not* `\\0`) and space and `(`.\n        // Note: in `markdown-rs`, `\\0` exists in codes, in `micromark-js` it\n        // doesn’t.\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_1__.asciiControl)(code)) {\n            return nok(code);\n        }\n        effects.consume(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash ? rawEscape : raw;\n    }\n    /**\n   * After `\\`, at special character.\n   *\n   * ```markdown\n   * > | a\\*a\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */ function rawEscape(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftParenthesis || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightParenthesis || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.backslash) {\n            effects.consume(code);\n            return raw;\n        }\n        return raw(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktZGVzdGluYXRpb24vZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FNZ0M7QUFDNEI7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9DQyxHQUNNLFNBQVNNLG1CQUNkQyxPQUFPLEVBQ1BDLEVBQUUsRUFDRkMsR0FBRyxFQUNIQyxJQUFJLEVBQ0pDLFdBQVcsRUFDWEMsaUJBQWlCLEVBQ2pCQyxPQUFPLEVBQ1BDLFVBQVUsRUFDVkMsR0FBRztJQUVILE1BQU1DLFFBQVFELE9BQU9FLE9BQU9DLGlCQUFpQjtJQUM3QyxJQUFJQyxVQUFVO0lBRWQsT0FBT0M7SUFFUDs7Ozs7Ozs7Ozs7R0FXQyxHQUNELFNBQVNBLE1BQU1DLElBQUk7UUFDakIsSUFBSUEsU0FBU2xCLHdEQUFLQSxDQUFDbUIsUUFBUSxFQUFFO1lBQzNCZixRQUFRZ0IsS0FBSyxDQUFDYjtZQUNkSCxRQUFRZ0IsS0FBSyxDQUFDWjtZQUNkSixRQUFRZ0IsS0FBSyxDQUFDWDtZQUNkTCxRQUFRaUIsT0FBTyxDQUFDSDtZQUNoQmQsUUFBUWtCLElBQUksQ0FBQ2I7WUFDYixPQUFPYztRQUNUO1FBRUEsdUNBQXVDO1FBQ3ZDLElBQ0VMLFNBQVNsQix3REFBS0EsQ0FBQ3dCLEdBQUcsSUFDbEJOLFNBQVNsQix3REFBS0EsQ0FBQ3lCLEtBQUssSUFDcEJQLFNBQVNsQix3REFBS0EsQ0FBQzBCLGdCQUFnQixJQUMvQjdCLHNFQUFZQSxDQUFDcUIsT0FDYjtZQUNBLE9BQU9aLElBQUlZO1FBQ2I7UUFFQWQsUUFBUWdCLEtBQUssQ0FBQ2I7UUFDZEgsUUFBUWdCLEtBQUssQ0FBQ1Y7UUFDZE4sUUFBUWdCLEtBQUssQ0FBQ1Q7UUFDZFAsUUFBUWdCLEtBQUssQ0FBQ2xCLHdEQUFLQSxDQUFDeUIsV0FBVyxFQUFFO1lBQUNDLGFBQWEzQiw0REFBU0EsQ0FBQzRCLGlCQUFpQjtR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QSxTQUFTbEIsd0RBQUtBLENBQUNtQyxlQUFlLElBQzlCakIsU0FBU2xCLHdEQUFLQSxDQUFDMEIsZ0JBQWdCLElBQy9CUixTQUFTbEIsd0RBQUtBLENBQUNpQyxTQUFTLEVBQ3hCO1lBQ0E3QixRQUFRaUIsT0FBTyxDQUFDSDtZQUNoQixPQUFPWTtRQUNUO1FBRUEsT0FBT0EsSUFBSVo7SUFDYjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWktbW9kZWwtY29tcGFyaXNvbi8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1kZXN0aW5hdGlvbi9kZXYvaW5kZXguanM/ZjgxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge0VmZmVjdHMsIFN0YXRlLCBUb2tlblR5cGV9IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbmltcG9ydCB7XG4gIGFzY2lpQ29udHJvbCxcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25MaW5lRW5kaW5nXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIGNvbnN0YW50cywgdHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBQYXJzZSBkZXN0aW5hdGlvbnMuXG4gKlxuICogIyMjIyMjIEV4YW1wbGVzXG4gKlxuICogYGBgbWFya2Rvd25cbiAqIDxhPlxuICogPGFcXD5iPlxuICogPGEgYj5cbiAqIDxhKT5cbiAqIGFcbiAqIGFcXCliXG4gKiBhKGIpY1xuICogYShiKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1N0YXRlfSBub2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiB1bnN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIGZvciB3aG9sZSAoYDxhPmAgb3IgYGJgKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBsaXRlcmFsVHlwZVxuICogICBUeXBlIHdoZW4gZW5jbG9zZWQgKGA8YT5gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBsaXRlcmFsTWFya2VyVHlwZVxuICogICBUeXBlIGZvciBlbmNsb3NpbmcgKGA8YCBhbmQgYD5gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSByYXdUeXBlXG4gKiAgIFR5cGUgd2hlbiBub3QgZW5jbG9zZWQgKGBiYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgdmFsdWUgKGBhYCBvciBgYmApLlxuICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IFttYXg9SW5maW5pdHldXG4gKiAgIERlcHRoIG9mIG5lc3RlZCBwYXJlbnMgKGluY2x1c2l2ZSkuXG4gKiBAcmV0dXJucyB7U3RhdGV9XG4gKiAgIFN0YXJ0IHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeURlc3RpbmF0aW9uKFxuICBlZmZlY3RzLFxuICBvayxcbiAgbm9rLFxuICB0eXBlLFxuICBsaXRlcmFsVHlwZSxcbiAgbGl0ZXJhbE1hcmtlclR5cGUsXG4gIHJhd1R5cGUsXG4gIHN0cmluZ1R5cGUsXG4gIG1heFxuKSB7XG4gIGNvbnN0IGxpbWl0ID0gbWF4IHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICBsZXQgYmFsYW5jZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICBeXG4gICAqID4gfCBhYVxuICAgKiAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5sZXNzVGhhbikge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBlbmNsb3NlZEJlZm9yZVxuICAgIH1cblxuICAgIC8vIEFTQ0lJIGNvbnRyb2wsIHNwYWNlLCBjbG9zaW5nIHBhcmVuLlxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuc3BhY2UgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgfHxcbiAgICAgIGFzY2lpQ29udHJvbChjb2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHJhd1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIodHlwZXMuY2h1bmtTdHJpbmcsIHtjb250ZW50VHlwZTogY29uc3RhbnRzLmNvbnRlbnRUeXBlU3RyaW5nfSlcbiAgICByZXR1cm4gcmF3KGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgYDxgLCBhdCBhbiBlbmNsb3NlZCBkZXN0aW5hdGlvbi5cbiAgICpcbiAgICogYGBgbWFya2Rvd25cbiAgICogPiB8IDxhYT5cbiAgICogICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZEJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLmdyZWF0ZXJUaGFuKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKGxpdGVyYWxNYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQobGl0ZXJhbFR5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoc3RyaW5nVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHR5cGVzLmNodW5rU3RyaW5nLCB7Y29udGVudFR5cGU6IGNvbnN0YW50cy5jb250ZW50VHlwZVN0cmluZ30pXG4gICAgcmV0dXJuIGVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gZW5jbG9zZWQgZGVzdGluYXRpb24uXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YWE+XG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5jbG9zZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBjb2Rlcy5ncmVhdGVyVGhhbikge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gZW5jbG9zZWRCZWZvcmUoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlc3NUaGFuIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gZW5jbG9zZWRFc2NhcGUgOiBlbmNsb3NlZFxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCA8YVxcKmE+XG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBlbmNsb3NlZEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMubGVzc1RoYW4gfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmdyZWF0ZXJUaGFuIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5iYWNrc2xhc2hcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuY2xvc2VkXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICAvKipcbiAgICogSW4gcmF3IGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYWFcbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHJhdyhjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgIWJhbGFuY2UgJiZcbiAgICAgIChjb2RlID09PSBjb2Rlcy5lb2YgfHxcbiAgICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRQYXJlbnRoZXNpcyB8fFxuICAgICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KHR5cGVzLmNodW5rU3RyaW5nKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQocmF3VHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGJhbGFuY2UgPCBsaW1pdCAmJiBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYmFsYW5jZSsrXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYmFsYW5jZS0tXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgLy8gQVNDSUkgY29udHJvbCAoYnV0ICpub3QqIGBcXDBgKSBhbmQgc3BhY2UgYW5kIGAoYC5cbiAgICAvLyBOb3RlOiBpbiBgbWFya2Rvd24tcnNgLCBgXFwwYCBleGlzdHMgaW4gY29kZXMsIGluIGBtaWNyb21hcmstanNgIGl0XG4gICAgLy8gZG9lc27igJl0LlxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuc3BhY2UgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmxlZnRQYXJlbnRoZXNpcyB8fFxuICAgICAgYXNjaWlDb250cm9sKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCA/IHJhd0VzY2FwZSA6IHJhd1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IHNwZWNpYWwgY2hhcmFjdGVyLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgYVxcKmFcbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gcmF3RXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0UGFyZW50aGVzaXMgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0UGFyZW50aGVzaXMgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaFxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gcmF3XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhdyhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiYXNjaWlDb250cm9sIiwibWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSIsIm1hcmtkb3duTGluZUVuZGluZyIsImNvZGVzIiwiY29uc3RhbnRzIiwidHlwZXMiLCJmYWN0b3J5RGVzdGluYXRpb24iLCJlZmZlY3RzIiwib2siLCJub2siLCJ0eXBlIiwibGl0ZXJhbFR5cGUiLCJsaXRlcmFsTWFya2VyVHlwZSIsInJhd1R5cGUiLCJzdHJpbmdUeXBlIiwibWF4IiwibGltaXQiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImJhbGFuY2UiLCJzdGFydCIsImNvZGUiLCJsZXNzVGhhbiIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJlbmNsb3NlZEJlZm9yZSIsImVvZiIsInNwYWNlIiwicmlnaHRQYXJlbnRoZXNpcyIsImNodW5rU3RyaW5nIiwiY29udGVudFR5cGUiLCJjb250ZW50VHlwZVN0cmluZyIsInJhdyIsImdyZWF0ZXJUaGFuIiwiZW5jbG9zZWQiLCJiYWNrc2xhc2giLCJlbmNsb3NlZEVzY2FwZSIsImxlZnRQYXJlbnRoZXNpcyIsInJhd0VzY2FwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-factory-destination/dev/index.js\n");

/***/ })

};
;
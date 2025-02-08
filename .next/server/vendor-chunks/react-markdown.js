"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-markdown";
exports.ids = ["vendor-chunks/react-markdown"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-markdown/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-markdown/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Markdown: () => (/* binding */ Markdown),\n/* harmony export */   defaultUrlTransform: () => (/* binding */ defaultUrlTransform)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hast-util-to-jsx-runtime */ \"(ssr)/./node_modules/hast-util-to-jsx-runtime/lib/index.js\");\n/* harmony import */ var html_url_attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html-url-attributes */ \"(ssr)/./node_modules/html-url-attributes/lib/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-parse */ \"(ssr)/./node_modules/remark-parse/lib/index.js\");\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-rehype */ \"(ssr)/./node_modules/remark-rehype/lib/index.js\");\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ \"(ssr)/./node_modules/unified/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var vfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vfile */ \"(ssr)/./node_modules/vfile/lib/index.js\");\n/**\n * @import {Element, ElementContent, Nodes, Parents, Root} from 'hast'\n * @import {ComponentProps, ElementType, ReactElement} from 'react'\n * @import {Options as RemarkRehypeOptions} from 'remark-rehype'\n * @import {BuildVisitor} from 'unist-util-visit'\n * @import {PluggableList} from 'unified'\n */ /**\n * @callback AllowElement\n *   Filter elements.\n * @param {Readonly<Element>} element\n *   Element to check.\n * @param {number} index\n *   Index of `element` in `parent`.\n * @param {Readonly<Parents> | undefined} parent\n *   Parent of `element`.\n * @returns {boolean | null | undefined}\n *   Whether to allow `element` (default: `false`).\n */ /**\n * @typedef ExtraProps\n *   Extra fields we pass.\n * @property {Element | undefined} [node]\n *   passed when `passNode` is on.\n */ /**\n * @typedef {{\n *   [Key in Extract<ElementType, string>]?: ElementType<ComponentProps<Key> & ExtraProps>\n * }} Components\n *   Map tag names to components.\n */ /**\n * @typedef Deprecation\n *   Deprecation.\n * @property {string} from\n *   Old field.\n * @property {string} id\n *   ID in readme.\n * @property {keyof Options} [to]\n *   New field.\n */ /**\n * @typedef Options\n *   Configuration.\n * @property {AllowElement | null | undefined} [allowElement]\n *   Filter elements (optional);\n *   `allowedElements` / `disallowedElements` is used first.\n * @property {ReadonlyArray<string> | null | undefined} [allowedElements]\n *   Tag names to allow (default: all tag names);\n *   cannot combine w/ `disallowedElements`.\n * @property {string | null | undefined} [children]\n *   Markdown.\n * @property {string | null | undefined} [className]\n *   Wrap in a `div` with this class name.\n * @property {Components | null | undefined} [components]\n *   Map tag names to components.\n * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]\n *   Tag names to disallow (default: `[]`);\n *   cannot combine w/ `allowedElements`.\n * @property {PluggableList | null | undefined} [rehypePlugins]\n *   List of rehype plugins to use.\n * @property {PluggableList | null | undefined} [remarkPlugins]\n *   List of remark plugins to use.\n * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]\n *   Options to pass through to `remark-rehype`.\n * @property {boolean | null | undefined} [skipHtml=false]\n *   Ignore HTML in markdown completely (default: `false`).\n * @property {boolean | null | undefined} [unwrapDisallowed=false]\n *   Extract (unwrap) what’s in disallowed elements (default: `false`);\n *   normally when say `strong` is not allowed, it and it’s children are dropped,\n *   with `unwrapDisallowed` the element itself is replaced by its children.\n * @property {UrlTransform | null | undefined} [urlTransform]\n *   Change URLs (default: `defaultUrlTransform`)\n */ /**\n * @callback UrlTransform\n *   Transform all URLs.\n * @param {string} url\n *   URL.\n * @param {string} key\n *   Property name (example: `'href'`).\n * @param {Readonly<Element>} node\n *   Node.\n * @returns {string | null | undefined}\n *   Transformed URL (optional).\n */ \n\n\n\n\n\n\n\n\nconst changelog = \"https://github.com/remarkjs/react-markdown/blob/main/changelog.md\";\n/** @type {PluggableList} */ const emptyPlugins = [];\n/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {\n    allowDangerousHtml: true\n};\nconst safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;\n// Mutable because we `delete` any time it’s used and a message is sent.\n/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [\n    {\n        from: \"astPlugins\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowDangerousHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"allowNode\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowElement\"\n    },\n    {\n        from: \"allowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"allowedElements\"\n    },\n    {\n        from: \"disallowedTypes\",\n        id: \"replace-allownode-allowedtypes-and-disallowedtypes\",\n        to: \"disallowedElements\"\n    },\n    {\n        from: \"escapeHtml\",\n        id: \"remove-buggy-html-in-markdown-parser\"\n    },\n    {\n        from: \"includeElementIndex\",\n        id: \"#remove-includeelementindex\"\n    },\n    {\n        from: \"includeNodeIndex\",\n        id: \"change-includenodeindex-to-includeelementindex\"\n    },\n    {\n        from: \"linkTarget\",\n        id: \"remove-linktarget\"\n    },\n    {\n        from: \"plugins\",\n        id: \"change-plugins-to-remarkplugins\",\n        to: \"remarkPlugins\"\n    },\n    {\n        from: \"rawSourcePos\",\n        id: \"#remove-rawsourcepos\"\n    },\n    {\n        from: \"renderers\",\n        id: \"change-renderers-to-components\",\n        to: \"components\"\n    },\n    {\n        from: \"source\",\n        id: \"change-source-to-children\",\n        to: \"children\"\n    },\n    {\n        from: \"sourcePos\",\n        id: \"#remove-sourcepos\"\n    },\n    {\n        from: \"transformImageUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    },\n    {\n        from: \"transformLinkUri\",\n        id: \"#add-urltransform\",\n        to: \"urlTransform\"\n    }\n];\n/**\n * Component to render markdown.\n *\n * @param {Readonly<Options>} options\n *   Props.\n * @returns {ReactElement}\n *   React element.\n */ function Markdown(options) {\n    const allowedElements = options.allowedElements;\n    const allowElement = options.allowElement;\n    const children = options.children || \"\";\n    const className = options.className;\n    const components = options.components;\n    const disallowedElements = options.disallowedElements;\n    const rehypePlugins = options.rehypePlugins || emptyPlugins;\n    const remarkPlugins = options.remarkPlugins || emptyPlugins;\n    const remarkRehypeOptions = options.remarkRehypeOptions ? {\n        ...options.remarkRehypeOptions,\n        ...emptyRemarkRehypeOptions\n    } : emptyRemarkRehypeOptions;\n    const skipHtml = options.skipHtml;\n    const unwrapDisallowed = options.unwrapDisallowed;\n    const urlTransform = options.urlTransform || defaultUrlTransform;\n    const processor = (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(remarkPlugins).use(remark_rehype__WEBPACK_IMPORTED_MODULE_3__[\"default\"], remarkRehypeOptions).use(rehypePlugins);\n    const file = new vfile__WEBPACK_IMPORTED_MODULE_4__.VFile();\n    if (typeof children === \"string\") {\n        file.value = children;\n    } else {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected value `\" + children + \"` for `children` prop, expected `string`\");\n    }\n    if (allowedElements && disallowedElements) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other\");\n    }\n    for (const deprecation of deprecations){\n        if (Object.hasOwn(options, deprecation.from)) {\n            (0,devlop__WEBPACK_IMPORTED_MODULE_5__.unreachable)(\"Unexpected `\" + deprecation.from + \"` prop, \" + (deprecation.to ? \"use `\" + deprecation.to + \"` instead\" : \"remove it\") + \" (see <\" + changelog + \"#\" + deprecation.id + \"> for more info)\");\n        }\n    }\n    const mdastTree = processor.parse(file);\n    /** @type {Nodes} */ let hastTree = processor.runSync(mdastTree, file);\n    // Wrap in `div` if there’s a class name.\n    if (className) {\n        hastTree = {\n            type: \"element\",\n            tagName: \"div\",\n            properties: {\n                className\n            },\n            // Assume no doctypes.\n            children: /** @type {Array<ElementContent>} */ hastTree.type === \"root\" ? hastTree.children : [\n                hastTree\n            ]\n        };\n    }\n    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_6__.visit)(hastTree, transform);\n    return (0,hast_util_to_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.toJsxRuntime)(hastTree, {\n        Fragment: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n        // @ts-expect-error\n        // React components are allowed to return numbers,\n        // but not according to the types in hast-util-to-jsx-runtime\n        components,\n        ignoreInvalidStyle: true,\n        jsx: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx,\n        jsxs: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs,\n        passKeys: true,\n        passNode: true\n    });\n    /** @type {BuildVisitor<Root>} */ function transform(node, index, parent) {\n        if (node.type === \"raw\" && parent && typeof index === \"number\") {\n            if (skipHtml) {\n                parent.children.splice(index, 1);\n            } else {\n                parent.children[index] = {\n                    type: \"text\",\n                    value: node.value\n                };\n            }\n            return index;\n        }\n        if (node.type === \"element\") {\n            /** @type {string} */ let key;\n            for(key in html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes){\n                if (Object.hasOwn(html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes, key) && Object.hasOwn(node.properties, key)) {\n                    const value = node.properties[key];\n                    const test = html_url_attributes__WEBPACK_IMPORTED_MODULE_8__.urlAttributes[key];\n                    if (test === null || test.includes(node.tagName)) {\n                        node.properties[key] = urlTransform(String(value || \"\"), key, node);\n                    }\n                }\n            }\n        }\n        if (node.type === \"element\") {\n            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;\n            if (!remove && allowElement && typeof index === \"number\") {\n                remove = !allowElement(node, index, parent);\n            }\n            if (remove && parent && typeof index === \"number\") {\n                if (unwrapDisallowed && node.children) {\n                    parent.children.splice(index, 1, ...node.children);\n                } else {\n                    parent.children.splice(index, 1);\n                }\n                return index;\n            }\n        }\n    }\n}\n/**\n * Make a URL safe.\n *\n * @satisfies {UrlTransform}\n * @param {string} value\n *   URL.\n * @returns {string}\n *   Safe URL.\n */ function defaultUrlTransform(value) {\n    // Same as:\n    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>\n    // But without the `encode` part.\n    const colon = value.indexOf(\":\");\n    const questionMark = value.indexOf(\"?\");\n    const numberSign = value.indexOf(\"#\");\n    const slash = value.indexOf(\"/\");\n    if (// If there is no protocol, it’s relative.\n    colon === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    slash !== -1 && colon > slash || questionMark !== -1 && colon > questionMark || numberSign !== -1 && colon > numberSign || // It is a protocol, it should be allowed.\n    safeProtocol.test(value.slice(0, colon))) {\n        return value;\n    }\n    return \"\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztDQU1DLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FFRDs7Ozs7Q0FLQyxHQUVEOzs7OztDQUtDLEdBRUQ7Ozs7Ozs7OztDQVNDLEdBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0NDLEdBRUQ7Ozs7Ozs7Ozs7O0NBV0MsR0FFaUM7QUFDbUI7QUFDSjtBQUNJO0FBQ2Y7QUFDRTtBQUNUO0FBQ087QUFDWDtBQUUzQixNQUFNVyxZQUNKO0FBRUYsMEJBQTBCLEdBQzFCLE1BQU1DLGVBQWUsRUFBRTtBQUN2QiwwQ0FBMEMsR0FDMUMsTUFBTUMsMkJBQTJCO0lBQUNDLG9CQUFvQjtBQUFJO0FBQzFELE1BQU1DLGVBQWU7QUFFckIsd0VBQXdFO0FBQ3hFLGlEQUFpRCxHQUNqRCxNQUFNQyxlQUFlO0lBQ25CO1FBQUNDLE1BQU07UUFBY0MsSUFBSTtJQUFzQztJQUMvRDtRQUFDRCxNQUFNO1FBQXNCQyxJQUFJO0lBQXNDO0lBQ3ZFO1FBQ0VELE1BQU07UUFDTkMsSUFBSTtRQUNKQyxJQUFJO0lBQ047SUFDQTtRQUNFRixNQUFNO1FBQ05DLElBQUk7UUFDSkMsSUFBSTtJQUNOO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxJQUFJO1FBQ0pDLElBQUk7SUFDTjtJQUNBO1FBQUNGLE1BQU07UUFBY0MsSUFBSTtJQUFzQztJQUMvRDtRQUFDRCxNQUFNO1FBQXVCQyxJQUFJO0lBQTZCO0lBQy9EO1FBQ0VELE1BQU07UUFDTkMsSUFBSTtJQUNOO0lBQ0E7UUFBQ0QsTUFBTTtRQUFjQyxJQUFJO0lBQW1CO0lBQzVDO1FBQUNELE1BQU07UUFBV0MsSUFBSTtRQUFtQ0MsSUFBSTtJQUFlO0lBQzVFO1FBQUNGLE1BQU07UUFBZ0JDLElBQUk7SUFBc0I7SUFDakQ7UUFBQ0QsTUFBTTtRQUFhQyxJQUFJO1FBQWtDQyxJQUFJ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QixLQUFLN0IsUUFBUSxFQUFFO29CQUNyQytCLE9BQU8vQixRQUFRLENBQUNnQyxNQUFNLENBQUNGLE9BQU8sTUFBTUQsS0FBSzdCLFFBQVE7Z0JBQ25ELE9BQU87b0JBQ0wrQixPQUFPL0IsUUFBUSxDQUFDZ0MsTUFBTSxDQUFDRixPQUFPO2dCQUNoQztnQkFFQSxPQUFPQTtZQUNUO1FBQ0Y7SUFDRjtBQUNGO0FBRUE7Ozs7Ozs7O0NBUUMsR0FDTSxTQUFTcEIsb0JBQW9CSSxLQUFLO0lBQ3ZDLFdBQVc7SUFDWCw4R0FBOEc7SUFDOUcsaUNBQWlDO0lBQ2pDLE1BQU13QixRQUFReEIsTUFBTXlCLE9BQU8sQ0FBQztJQUM1QixNQUFNQyxlQUFlMUIsTUFBTXlCLE9BQU8sQ0FBQztJQUNuQyxNQUFNRSxhQUFhM0IsTUFBTXlCLE9BQU8sQ0FBQztJQUNqQyxNQUFNRyxRQUFRNUIsTUFBTXlCLE9BQU8sQ0FBQztJQUU1QixJQUNFLDBDQUEwQztJQUMxQ0QsVUFBVSxDQUFDLEtBQ1gsdUVBQXVFO0lBQ3RFSSxVQUFVLENBQUMsS0FBS0osUUFBUUksU0FDeEJGLGlCQUFpQixDQUFDLEtBQUtGLFFBQVFFLGdCQUMvQkMsZUFBZSxDQUFDLEtBQUtILFFBQVFHLGNBQzlCLDBDQUEwQztJQUMxQ2xELGFBQWEyQyxJQUFJLENBQUNwQixNQUFNNkIsS0FBSyxDQUFDLEdBQUdMLFNBQ2pDO1FBQ0EsT0FBT3hCO0lBQ1Q7SUFFQSxPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1tb2RlbC1jb21wYXJpc29uLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9pbmRleC5qcz8yMjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGltcG9ydCB7RWxlbWVudCwgRWxlbWVudENvbnRlbnQsIE5vZGVzLCBQYXJlbnRzLCBSb290fSBmcm9tICdoYXN0J1xuICogQGltcG9ydCB7Q29tcG9uZW50UHJvcHMsIEVsZW1lbnRUeXBlLCBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0J1xuICogQGltcG9ydCB7T3B0aW9ucyBhcyBSZW1hcmtSZWh5cGVPcHRpb25zfSBmcm9tICdyZW1hcmstcmVoeXBlJ1xuICogQGltcG9ydCB7QnVpbGRWaXNpdG9yfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuICogQGltcG9ydCB7UGx1Z2dhYmxlTGlzdH0gZnJvbSAndW5pZmllZCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBBbGxvd0VsZW1lbnRcbiAqICAgRmlsdGVyIGVsZW1lbnRzLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gZWxlbWVudFxuICogICBFbGVtZW50IHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiAgIEluZGV4IG9mIGBlbGVtZW50YCBpbiBgcGFyZW50YC5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8UGFyZW50cz4gfCB1bmRlZmluZWR9IHBhcmVudFxuICogICBQYXJlbnQgb2YgYGVsZW1lbnRgLlxuICogQHJldHVybnMge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfVxuICogICBXaGV0aGVyIHRvIGFsbG93IGBlbGVtZW50YCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBFeHRyYVByb3BzXG4gKiAgIEV4dHJhIGZpZWxkcyB3ZSBwYXNzLlxuICogQHByb3BlcnR5IHtFbGVtZW50IHwgdW5kZWZpbmVkfSBbbm9kZV1cbiAqICAgcGFzc2VkIHdoZW4gYHBhc3NOb2RlYCBpcyBvbi5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIFtLZXkgaW4gRXh0cmFjdDxFbGVtZW50VHlwZSwgc3RyaW5nPl0/OiBFbGVtZW50VHlwZTxDb21wb25lbnRQcm9wczxLZXk+ICYgRXh0cmFQcm9wcz5cbiAqIH19IENvbXBvbmVudHNcbiAqICAgTWFwIHRhZyBuYW1lcyB0byBjb21wb25lbnRzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgRGVwcmVjYXRpb25cbiAqICAgRGVwcmVjYXRpb24uXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZnJvbVxuICogICBPbGQgZmllbGQuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRcbiAqICAgSUQgaW4gcmVhZG1lLlxuICogQHByb3BlcnR5IHtrZXlvZiBPcHRpb25zfSBbdG9dXG4gKiAgIE5ldyBmaWVsZC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QWxsb3dFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93RWxlbWVudF1cbiAqICAgRmlsdGVyIGVsZW1lbnRzIChvcHRpb25hbCk7XG4gKiAgIGBhbGxvd2VkRWxlbWVudHNgIC8gYGRpc2FsbG93ZWRFbGVtZW50c2AgaXMgdXNlZCBmaXJzdC5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHlBcnJheTxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW2FsbG93ZWRFbGVtZW50c11cbiAqICAgVGFnIG5hbWVzIHRvIGFsbG93IChkZWZhdWx0OiBhbGwgdGFnIG5hbWVzKTtcbiAqICAgY2Fubm90IGNvbWJpbmUgdy8gYGRpc2FsbG93ZWRFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgTWFya2Rvd24uXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFtjbGFzc05hbWVdXG4gKiAgIFdyYXAgaW4gYSBgZGl2YCB3aXRoIHRoaXMgY2xhc3MgbmFtZS5cbiAqIEBwcm9wZXJ0eSB7Q29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBNYXAgdGFnIG5hbWVzIHRvIGNvbXBvbmVudHMuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5QXJyYXk8c3RyaW5nPiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhbGxvd2VkRWxlbWVudHNdXG4gKiAgIFRhZyBuYW1lcyB0byBkaXNhbGxvdyAoZGVmYXVsdDogYFtdYCk7XG4gKiAgIGNhbm5vdCBjb21iaW5lIHcvIGBhbGxvd2VkRWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlaHlwZVBsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVoeXBlIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtQbHVnZ2FibGVMaXN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JlbWFya1BsdWdpbnNdXG4gKiAgIExpc3Qgb2YgcmVtYXJrIHBsdWdpbnMgdG8gdXNlLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZW1hcmtSZWh5cGVPcHRpb25zXVxuICogICBPcHRpb25zIHRvIHBhc3MgdGhyb3VnaCB0byBgcmVtYXJrLXJlaHlwZWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbc2tpcEh0bWw9ZmFsc2VdXG4gKiAgIElnbm9yZSBIVE1MIGluIG1hcmtkb3duIGNvbXBsZXRlbHkgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Vud3JhcERpc2FsbG93ZWQ9ZmFsc2VdXG4gKiAgIEV4dHJhY3QgKHVud3JhcCkgd2hhdOKAmXMgaW4gZGlzYWxsb3dlZCBlbGVtZW50cyAoZGVmYXVsdDogYGZhbHNlYCk7XG4gKiAgIG5vcm1hbGx5IHdoZW4gc2F5IGBzdHJvbmdgIGlzIG5vdCBhbGxvd2VkLCBpdCBhbmQgaXTigJlzIGNoaWxkcmVuIGFyZSBkcm9wcGVkLFxuICogICB3aXRoIGB1bndyYXBEaXNhbGxvd2VkYCB0aGUgZWxlbWVudCBpdHNlbGYgaXMgcmVwbGFjZWQgYnkgaXRzIGNoaWxkcmVuLlxuICogQHByb3BlcnR5IHtVcmxUcmFuc2Zvcm0gfCBudWxsIHwgdW5kZWZpbmVkfSBbdXJsVHJhbnNmb3JtXVxuICogICBDaGFuZ2UgVVJMcyAoZGVmYXVsdDogYGRlZmF1bHRVcmxUcmFuc2Zvcm1gKVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFVybFRyYW5zZm9ybVxuICogICBUcmFuc2Zvcm0gYWxsIFVSTHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiAgIFVSTC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqICAgUHJvcGVydHkgbmFtZSAoZXhhbXBsZTogYCdocmVmJ2ApLlxuICogQHBhcmFtIHtSZWFkb25seTxFbGVtZW50Pn0gbm9kZVxuICogICBOb2RlLlxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9XG4gKiAgIFRyYW5zZm9ybWVkIFVSTCAob3B0aW9uYWwpLlxuICovXG5cbmltcG9ydCB7dW5yZWFjaGFibGV9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7dG9Kc3hSdW50aW1lfSBmcm9tICdoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWUnXG5pbXBvcnQge3VybEF0dHJpYnV0ZXN9IGZyb20gJ2h0bWwtdXJsLWF0dHJpYnV0ZXMnXG5pbXBvcnQge0ZyYWdtZW50LCBqc3gsIGpzeHN9IGZyb20gJ3JlYWN0L2pzeC1ydW50aW1lJ1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSdcbmltcG9ydCByZW1hcmtSZWh5cGUgZnJvbSAncmVtYXJrLXJlaHlwZSdcbmltcG9ydCB7dW5pZmllZH0gZnJvbSAndW5pZmllZCdcbmltcG9ydCB7dmlzaXR9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQnXG5pbXBvcnQge1ZGaWxlfSBmcm9tICd2ZmlsZSdcblxuY29uc3QgY2hhbmdlbG9nID1cbiAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZW1hcmtqcy9yZWFjdC1tYXJrZG93bi9ibG9iL21haW4vY2hhbmdlbG9nLm1kJ1xuXG4vKiogQHR5cGUge1BsdWdnYWJsZUxpc3R9ICovXG5jb25zdCBlbXB0eVBsdWdpbnMgPSBbXVxuLyoqIEB0eXBlIHtSZWFkb25seTxSZW1hcmtSZWh5cGVPcHRpb25zPn0gKi9cbmNvbnN0IGVtcHR5UmVtYXJrUmVoeXBlT3B0aW9ucyA9IHthbGxvd0Rhbmdlcm91c0h0bWw6IHRydWV9XG5jb25zdCBzYWZlUHJvdG9jb2wgPSAvXihodHRwcz98aXJjcz98bWFpbHRvfHhtcHApJC9pXG5cbi8vIE11dGFibGUgYmVjYXVzZSB3ZSBgZGVsZXRlYCBhbnkgdGltZSBpdOKAmXMgdXNlZCBhbmQgYSBtZXNzYWdlIGlzIHNlbnQuXG4vKiogQHR5cGUge1JlYWRvbmx5QXJyYXk8UmVhZG9ubHk8RGVwcmVjYXRpb24+Pn0gKi9cbmNvbnN0IGRlcHJlY2F0aW9ucyA9IFtcbiAge2Zyb206ICdhc3RQbHVnaW5zJywgaWQ6ICdyZW1vdmUtYnVnZ3ktaHRtbC1pbi1tYXJrZG93bi1wYXJzZXInfSxcbiAge2Zyb206ICdhbGxvd0Rhbmdlcm91c0h0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7XG4gICAgZnJvbTogJ2FsbG93Tm9kZScsXG4gICAgaWQ6ICdyZXBsYWNlLWFsbG93bm9kZS1hbGxvd2VkdHlwZXMtYW5kLWRpc2FsbG93ZWR0eXBlcycsXG4gICAgdG86ICdhbGxvd0VsZW1lbnQnXG4gIH0sXG4gIHtcbiAgICBmcm9tOiAnYWxsb3dlZFR5cGVzJyxcbiAgICBpZDogJ3JlcGxhY2UtYWxsb3dub2RlLWFsbG93ZWR0eXBlcy1hbmQtZGlzYWxsb3dlZHR5cGVzJyxcbiAgICB0bzogJ2FsbG93ZWRFbGVtZW50cydcbiAgfSxcbiAge1xuICAgIGZyb206ICdkaXNhbGxvd2VkVHlwZXMnLFxuICAgIGlkOiAncmVwbGFjZS1hbGxvd25vZGUtYWxsb3dlZHR5cGVzLWFuZC1kaXNhbGxvd2VkdHlwZXMnLFxuICAgIHRvOiAnZGlzYWxsb3dlZEVsZW1lbnRzJ1xuICB9LFxuICB7ZnJvbTogJ2VzY2FwZUh0bWwnLCBpZDogJ3JlbW92ZS1idWdneS1odG1sLWluLW1hcmtkb3duLXBhcnNlcid9LFxuICB7ZnJvbTogJ2luY2x1ZGVFbGVtZW50SW5kZXgnLCBpZDogJyNyZW1vdmUtaW5jbHVkZWVsZW1lbnRpbmRleCd9LFxuICB7XG4gICAgZnJvbTogJ2luY2x1ZGVOb2RlSW5kZXgnLFxuICAgIGlkOiAnY2hhbmdlLWluY2x1ZGVub2RlaW5kZXgtdG8taW5jbHVkZWVsZW1lbnRpbmRleCdcbiAgfSxcbiAge2Zyb206ICdsaW5rVGFyZ2V0JywgaWQ6ICdyZW1vdmUtbGlua3RhcmdldCd9LFxuICB7ZnJvbTogJ3BsdWdpbnMnLCBpZDogJ2NoYW5nZS1wbHVnaW5zLXRvLXJlbWFya3BsdWdpbnMnLCB0bzogJ3JlbWFya1BsdWdpbnMnfSxcbiAge2Zyb206ICdyYXdTb3VyY2VQb3MnLCBpZDogJyNyZW1vdmUtcmF3c291cmNlcG9zJ30sXG4gIHtmcm9tOiAncmVuZGVyZXJzJywgaWQ6ICdjaGFuZ2UtcmVuZGVyZXJzLXRvLWNvbXBvbmVudHMnLCB0bzogJ2NvbXBvbmVudHMnfSxcbiAge2Zyb206ICdzb3VyY2UnLCBpZDogJ2NoYW5nZS1zb3VyY2UtdG8tY2hpbGRyZW4nLCB0bzogJ2NoaWxkcmVuJ30sXG4gIHtmcm9tOiAnc291cmNlUG9zJywgaWQ6ICcjcmVtb3ZlLXNvdXJjZXBvcyd9LFxuICB7ZnJvbTogJ3RyYW5zZm9ybUltYWdlVXJpJywgaWQ6ICcjYWRkLXVybHRyYW5zZm9ybScsIHRvOiAndXJsVHJhbnNmb3JtJ30sXG4gIHtmcm9tOiAndHJhbnNmb3JtTGlua1VyaScsIGlkOiAnI2FkZC11cmx0cmFuc2Zvcm0nLCB0bzogJ3VybFRyYW5zZm9ybSd9XG5dXG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHJlbmRlciBtYXJrZG93bi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+fSBvcHRpb25zXG4gKiAgIFByb3BzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgUmVhY3QgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3QgYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgYWxsb3dFbGVtZW50ID0gb3B0aW9ucy5hbGxvd0VsZW1lbnRcbiAgY29uc3QgY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuIHx8ICcnXG4gIGNvbnN0IGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lXG4gIGNvbnN0IGNvbXBvbmVudHMgPSBvcHRpb25zLmNvbXBvbmVudHNcbiAgY29uc3QgZGlzYWxsb3dlZEVsZW1lbnRzID0gb3B0aW9ucy5kaXNhbGxvd2VkRWxlbWVudHNcbiAgY29uc3QgcmVoeXBlUGx1Z2lucyA9IG9wdGlvbnMucmVoeXBlUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUGx1Z2lucyA9IG9wdGlvbnMucmVtYXJrUGx1Z2lucyB8fCBlbXB0eVBsdWdpbnNcbiAgY29uc3QgcmVtYXJrUmVoeXBlT3B0aW9ucyA9IG9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9uc1xuICAgID8gey4uLm9wdGlvbnMucmVtYXJrUmVoeXBlT3B0aW9ucywgLi4uZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zfVxuICAgIDogZW1wdHlSZW1hcmtSZWh5cGVPcHRpb25zXG4gIGNvbnN0IHNraXBIdG1sID0gb3B0aW9ucy5za2lwSHRtbFxuICBjb25zdCB1bndyYXBEaXNhbGxvd2VkID0gb3B0aW9ucy51bndyYXBEaXNhbGxvd2VkXG4gIGNvbnN0IHVybFRyYW5zZm9ybSA9IG9wdGlvbnMudXJsVHJhbnNmb3JtIHx8IGRlZmF1bHRVcmxUcmFuc2Zvcm1cblxuICBjb25zdCBwcm9jZXNzb3IgPSB1bmlmaWVkKClcbiAgICAudXNlKHJlbWFya1BhcnNlKVxuICAgIC51c2UocmVtYXJrUGx1Z2lucylcbiAgICAudXNlKHJlbWFya1JlaHlwZSwgcmVtYXJrUmVoeXBlT3B0aW9ucylcbiAgICAudXNlKHJlaHlwZVBsdWdpbnMpXG5cbiAgY29uc3QgZmlsZSA9IG5ldyBWRmlsZSgpXG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBmaWxlLnZhbHVlID0gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICB1bnJlYWNoYWJsZShcbiAgICAgICdVbmV4cGVjdGVkIHZhbHVlIGAnICtcbiAgICAgICAgY2hpbGRyZW4gK1xuICAgICAgICAnYCBmb3IgYGNoaWxkcmVuYCBwcm9wLCBleHBlY3RlZCBgc3RyaW5nYCdcbiAgICApXG4gIH1cblxuICBpZiAoYWxsb3dlZEVsZW1lbnRzICYmIGRpc2FsbG93ZWRFbGVtZW50cykge1xuICAgIHVucmVhY2hhYmxlKFxuICAgICAgJ1VuZXhwZWN0ZWQgY29tYmluZWQgYGFsbG93ZWRFbGVtZW50c2AgYW5kIGBkaXNhbGxvd2VkRWxlbWVudHNgLCBleHBlY3RlZCBvbmUgb3IgdGhlIG90aGVyJ1xuICAgIClcbiAgfVxuXG4gIGZvciAoY29uc3QgZGVwcmVjYXRpb24gb2YgZGVwcmVjYXRpb25zKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd24ob3B0aW9ucywgZGVwcmVjYXRpb24uZnJvbSkpIHtcbiAgICAgIHVucmVhY2hhYmxlKFxuICAgICAgICAnVW5leHBlY3RlZCBgJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uZnJvbSArXG4gICAgICAgICAgJ2AgcHJvcCwgJyArXG4gICAgICAgICAgKGRlcHJlY2F0aW9uLnRvXG4gICAgICAgICAgICA/ICd1c2UgYCcgKyBkZXByZWNhdGlvbi50byArICdgIGluc3RlYWQnXG4gICAgICAgICAgICA6ICdyZW1vdmUgaXQnKSArXG4gICAgICAgICAgJyAoc2VlIDwnICtcbiAgICAgICAgICBjaGFuZ2Vsb2cgK1xuICAgICAgICAgICcjJyArXG4gICAgICAgICAgZGVwcmVjYXRpb24uaWQgK1xuICAgICAgICAgICc+IGZvciBtb3JlIGluZm8pJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1kYXN0VHJlZSA9IHByb2Nlc3Nvci5wYXJzZShmaWxlKVxuICAvKiogQHR5cGUge05vZGVzfSAqL1xuICBsZXQgaGFzdFRyZWUgPSBwcm9jZXNzb3IucnVuU3luYyhtZGFzdFRyZWUsIGZpbGUpXG5cbiAgLy8gV3JhcCBpbiBgZGl2YCBpZiB0aGVyZeKAmXMgYSBjbGFzcyBuYW1lLlxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgaGFzdFRyZWUgPSB7XG4gICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIHByb3BlcnRpZXM6IHtjbGFzc05hbWV9LFxuICAgICAgLy8gQXNzdW1lIG5vIGRvY3R5cGVzLlxuICAgICAgY2hpbGRyZW46IC8qKiBAdHlwZSB7QXJyYXk8RWxlbWVudENvbnRlbnQ+fSAqLyAoXG4gICAgICAgIGhhc3RUcmVlLnR5cGUgPT09ICdyb290JyA/IGhhc3RUcmVlLmNoaWxkcmVuIDogW2hhc3RUcmVlXVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0KGhhc3RUcmVlLCB0cmFuc2Zvcm0pXG5cbiAgcmV0dXJuIHRvSnN4UnVudGltZShoYXN0VHJlZSwge1xuICAgIEZyYWdtZW50LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAvLyBSZWFjdCBjb21wb25lbnRzIGFyZSBhbGxvd2VkIHRvIHJldHVybiBudW1iZXJzLFxuICAgIC8vIGJ1dCBub3QgYWNjb3JkaW5nIHRvIHRoZSB0eXBlcyBpbiBoYXN0LXV0aWwtdG8tanN4LXJ1bnRpbWVcbiAgICBjb21wb25lbnRzLFxuICAgIGlnbm9yZUludmFsaWRTdHlsZTogdHJ1ZSxcbiAgICBqc3gsXG4gICAganN4cyxcbiAgICBwYXNzS2V5czogdHJ1ZSxcbiAgICBwYXNzTm9kZTogdHJ1ZVxuICB9KVxuXG4gIC8qKiBAdHlwZSB7QnVpbGRWaXNpdG9yPFJvb3Q+fSAqL1xuICBmdW5jdGlvbiB0cmFuc2Zvcm0obm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICdyYXcnICYmIHBhcmVudCAmJiB0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoc2tpcEh0bWwpIHtcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0gPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZX1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICAgIGxldCBrZXlcblxuICAgICAgZm9yIChrZXkgaW4gdXJsQXR0cmlidXRlcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0Lmhhc093bih1cmxBdHRyaWJ1dGVzLCBrZXkpICYmXG4gICAgICAgICAgT2JqZWN0Lmhhc093bihub2RlLnByb3BlcnRpZXMsIGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBub2RlLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgIGNvbnN0IHRlc3QgPSB1cmxBdHRyaWJ1dGVzW2tleV1cbiAgICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCB8fCB0ZXN0LmluY2x1ZGVzKG5vZGUudGFnTmFtZSkpIHtcbiAgICAgICAgICAgIG5vZGUucHJvcGVydGllc1trZXldID0gdXJsVHJhbnNmb3JtKFN0cmluZyh2YWx1ZSB8fCAnJyksIGtleSwgbm9kZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGxldCByZW1vdmUgPSBhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgPyAhYWxsb3dlZEVsZW1lbnRzLmluY2x1ZGVzKG5vZGUudGFnTmFtZSlcbiAgICAgICAgOiBkaXNhbGxvd2VkRWxlbWVudHNcbiAgICAgICAgICA/IGRpc2FsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyhub2RlLnRhZ05hbWUpXG4gICAgICAgICAgOiBmYWxzZVxuXG4gICAgICBpZiAoIXJlbW92ZSAmJiBhbGxvd0VsZW1lbnQgJiYgdHlwZW9mIGluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZW1vdmUgPSAhYWxsb3dFbGVtZW50KG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1vdmUgJiYgcGFyZW50ICYmIHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKHVud3JhcERpc2FsbG93ZWQgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGUuY2hpbGRyZW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBVUkwgc2FmZS5cbiAqXG4gKiBAc2F0aXNmaWVzIHtVcmxUcmFuc2Zvcm19XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVVJMLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2FmZSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0VXJsVHJhbnNmb3JtKHZhbHVlKSB7XG4gIC8vIFNhbWUgYXM6XG4gIC8vIDxodHRwczovL2dpdGh1Yi5jb20vbWljcm9tYXJrL21pY3JvbWFyay9ibG9iLzkyOTI3NWUvcGFja2FnZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyNMMzQ+XG4gIC8vIEJ1dCB3aXRob3V0IHRoZSBgZW5jb2RlYCBwYXJ0LlxuICBjb25zdCBjb2xvbiA9IHZhbHVlLmluZGV4T2YoJzonKVxuICBjb25zdCBxdWVzdGlvbk1hcmsgPSB2YWx1ZS5pbmRleE9mKCc/JylcbiAgY29uc3QgbnVtYmVyU2lnbiA9IHZhbHVlLmluZGV4T2YoJyMnKVxuICBjb25zdCBzbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKVxuXG4gIGlmIChcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBwcm90b2NvbCwgaXTigJlzIHJlbGF0aXZlLlxuICAgIGNvbG9uID09PSAtMSB8fFxuICAgIC8vIElmIHRoZSBmaXJzdCBjb2xvbiBpcyBhZnRlciBhIGA/YCwgYCNgLCBvciBgL2AsIGl04oCZcyBub3QgYSBwcm90b2NvbC5cbiAgICAoc2xhc2ggIT09IC0xICYmIGNvbG9uID4gc2xhc2gpIHx8XG4gICAgKHF1ZXN0aW9uTWFyayAhPT0gLTEgJiYgY29sb24gPiBxdWVzdGlvbk1hcmspIHx8XG4gICAgKG51bWJlclNpZ24gIT09IC0xICYmIGNvbG9uID4gbnVtYmVyU2lnbikgfHxcbiAgICAvLyBJdCBpcyBhIHByb3RvY29sLCBpdCBzaG91bGQgYmUgYWxsb3dlZC5cbiAgICBzYWZlUHJvdG9jb2wudGVzdCh2YWx1ZS5zbGljZSgwLCBjb2xvbikpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG4iXSwibmFtZXMiOlsidW5yZWFjaGFibGUiLCJ0b0pzeFJ1bnRpbWUiLCJ1cmxBdHRyaWJ1dGVzIiwiRnJhZ21lbnQiLCJqc3giLCJqc3hzIiwicmVtYXJrUGFyc2UiLCJyZW1hcmtSZWh5cGUiLCJ1bmlmaWVkIiwidmlzaXQiLCJWRmlsZSIsImNoYW5nZWxvZyIsImVtcHR5UGx1Z2lucyIsImVtcHR5UmVtYXJrUmVoeXBlT3B0aW9ucyIsImFsbG93RGFuZ2Vyb3VzSHRtbCIsInNhZmVQcm90b2NvbCIsImRlcHJlY2F0aW9ucyIsImZyb20iLCJpZCIsInRvIiwiTWFya2Rvd24iLCJvcHRpb25zIiwiYWxsb3dlZEVsZW1lbnRzIiwiYWxsb3dFbGVtZW50IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjb21wb25lbnRzIiwiZGlzYWxsb3dlZEVsZW1lbnRzIiwicmVoeXBlUGx1Z2lucyIsInJlbWFya1BsdWdpbnMiLCJyZW1hcmtSZWh5cGVPcHRpb25zIiwic2tpcEh0bWwiLCJ1bndyYXBEaXNhbGxvd2VkIiwidXJsVHJhbnNmb3JtIiwiZGVmYXVsdFVybFRyYW5zZm9ybSIsInByb2Nlc3NvciIsInVzZSIsImZpbGUiLCJ2YWx1ZSIsImRlcHJlY2F0aW9uIiwiT2JqZWN0IiwiaGFzT3duIiwibWRhc3RUcmVlIiwicGFyc2UiLCJoYXN0VHJlZSIsInJ1blN5bmMiLCJ0eXBlIiwidGFnTmFtZSIsInByb3BlcnRpZXMiLCJ0cmFuc2Zvcm0iLCJpZ25vcmVJbnZhbGlkU3R5bGUiLCJwYXNzS2V5cyIsInBhc3NOb2RlIiwibm9kZSIsImluZGV4IiwicGFyZW50Iiwic3BsaWNlIiwia2V5IiwidGVzdCIsImluY2x1ZGVzIiwiU3RyaW5nIiwicmVtb3ZlIiwiY29sb24iLCJpbmRleE9mIiwicXVlc3Rpb25NYXJrIiwibnVtYmVyU2lnbiIsInNsYXNoIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-markdown/lib/index.js\n");

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav/TopNav/components/Left.tsx":
/*!***************************************************!*\
  !*** ./components/Nav/TopNav/components/Left.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/layout/top-nav/left.module.scss */ \"./styles/layout/top-nav/left.module.scss\");\n/* harmony import */ var _styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Left = (param)=>{\n    let { toggleNav , navWidth  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getPageName = ()=>{\n        const path = router.pathname;\n        const pageName = path.split(\"/\")[1];\n        return pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();\n    };\n    const pageName = getPageName();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leftContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),\n                onClick: ()=>toggleNav(),\n                children: navWidth === \"wide\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAngleLeft, {\n                    className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"arrow-left\"])\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaAngleLeft, {\n                    className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"arrow-right\"])\n                }, void 0, false, {\n                    fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_layout_top_nav_left_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"page-name\"]),\n                children: pageName\n            }, void 0, false, {\n                fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/phil/Programming/HR-App/components/Nav/TopNav/components/Left.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Left, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\nvar _c;\n$RefreshReg$(_c, \"Left\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9Ub3BOYXYvY29tcG9uZW50cy9MZWZ0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2M7QUFDZ0M7QUFDM0I7QUFFN0MsTUFBTUksT0FBTyxTQU1QO1FBTlEsRUFDWkMsVUFBUyxFQUNUQyxTQUFRLEVBSVQ7O0lBQ0MsTUFBTUMsU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGNBQWMsSUFBTTtRQUN4QixNQUFNQyxPQUFPRixPQUFPRyxRQUFRO1FBQzVCLE1BQU1DLFdBQVdGLEtBQUtHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQyxPQUFPRCxRQUFRLENBQUMsRUFBRSxDQUFDRSxXQUFXLEtBQUtGLFNBQVNHLEtBQUssQ0FBQyxHQUFHQyxXQUFXO0lBQ2xFO0lBRUEsTUFBTUosV0FBV0g7SUFFakIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVdmLDhGQUFvQjs7MEJBQ2xDLDhEQUFDYztnQkFBSUMsV0FBV2YscUZBQVc7Z0JBQUVrQixTQUFTLElBQU1mOzBCQUN6Q0MsYUFBYSx1QkFDWiw4REFBQ0gsdURBQVdBO29CQUFDYyxXQUFXZiw4RkFBb0I7Ozs7OzhDQUU1Qyw4REFBQ0MsdURBQVdBO29CQUFDYyxXQUFXZiwrRkFBcUI7Ozs7OzZCQUM5Qzs7Ozs7OzBCQUVILDhEQUFDbUI7Z0JBQUdKLFdBQVdmLDZGQUFtQjswQkFBR1M7Ozs7Ozs7Ozs7OztBQUczQztHQTdCTVA7O1FBT1dILGtEQUFTQTs7O0tBUHBCRztBQStCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9Ub3BOYXYvY29tcG9uZW50cy9MZWZ0LnRzeD9jZDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL2xheW91dC90b3AtbmF2L2xlZnQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEZhQW5nbGVMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IExlZnQgPSAoe1xuICB0b2dnbGVOYXYsXG4gIG5hdldpZHRoLFxufToge1xuICB0b2dnbGVOYXY6IGFueTtcbiAgbmF2V2lkdGg6IHN0cmluZztcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZ2V0UGFnZU5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZTtcbiAgICBjb25zdCBwYWdlTmFtZSA9IHBhdGguc3BsaXQoXCIvXCIpWzFdO1xuICAgIHJldHVybiBwYWdlTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgcGFnZU5hbWUuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBjb25zdCBwYWdlTmFtZSA9IGdldFBhZ2VOYW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoKX0+XG4gICAgICAgIHtuYXZXaWR0aCA9PT0gXCJ3aWRlXCIgPyAoXG4gICAgICAgICAgPEZhQW5nbGVMZWZ0IGNsYXNzTmFtZT17c3R5bGVzW1wiYXJyb3ctbGVmdFwiXX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8RmFBbmdsZUxlZnQgY2xhc3NOYW1lPXtzdHlsZXNbXCJhcnJvdy1yaWdodFwiXX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzW1wicGFnZS1uYW1lXCJdfT57cGFnZU5hbWV9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlZnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJGYUFuZ2xlTGVmdCIsIkxlZnQiLCJ0b2dnbGVOYXYiLCJuYXZXaWR0aCIsInJvdXRlciIsImdldFBhZ2VOYW1lIiwicGF0aCIsInBhdGhuYW1lIiwicGFnZU5hbWUiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsImRpdiIsImNsYXNzTmFtZSIsImxlZnRDb250YWluZXIiLCJsZWZ0Iiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/TopNav/components/Left.tsx\n"));

/***/ })

});
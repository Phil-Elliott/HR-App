/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/topNav.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/topNav.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".topNav_main__z2PeN {\\n  background-color: white;\\n  width: 100%;\\n  position: relative;\\n  padding: 1.25rem 2rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.topNav_left__P7L_Q {\\n  background: #4cb5f5;\\n  border-radius: 100%;\\n  color: white;\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  cursor: pointer;\\n  width: 2rem;\\n  height: 2rem;\\n  margin-left: -2.75rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.topNav_right__eG4NF {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  height: 100%;\\n}\\n\\n.topNav_icon__HiPnK {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1rem;\\n}\\n\\n.topNav_arrow-right__SlW4y {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(180deg);\\n}\\n\\n.topNav_arrow-left__jJf0j {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(0deg);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/layout/top-nav/topNav.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AADF;;AAIA;EACE,mBCTU;EDUV,mBAAA;EACA,YAAA;EACA,yCAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;AADF;;AAIA;EACE,gCAAA;EACA,eAAA;EACA,iBAAA;AADF;;AAIA;EACE,gCAAA;EACA,0BAAA;AADF;;AAIA;EACE,gCAAA;EACA,wBAAA;AADF\",\"sourcesContent\":[\"@use \\\"../../abstracts\\\" as *;\\n\\n.main {\\n  background-color: white;\\n  width: 100%;\\n  position: relative;\\n  padding: 1.25rem 2rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.left {\\n  background: $secondary;\\n  border-radius: 100%;\\n  color: white;\\n  font-size: clamp(1.25rem, 1.25vw, 1.25vw);\\n  cursor: pointer;\\n  width: 2rem;\\n  height: 2rem;\\n  margin-left: -2.75rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.right {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  height: 100%;\\n}\\n\\n.icon {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1rem;\\n}\\n\\n.arrow-right {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(180deg);\\n}\\n\\n.arrow-left {\\n  transition: all 0.5s ease-in-out;\\n  transform: rotateZ(0deg);\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #1c4e80;\\n$secondary: #4cb5f5;\\n$tertiary: #f5f5f5;\\n$quaternary: #f5f5f5;\\n$quinary: #f5f5f5;\\n// $primary: #7db8f4;\\n\\n//==================================================\\n// Width\\n//==================================================\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"topNav_main__z2PeN\",\n\t\"left\": \"topNav_left__P7L_Q\",\n\t\"right\": \"topNav_right__eG4NF\",\n\t\"icon\": \"topNav_icon__HiPnK\",\n\t\"arrow-right\": \"topNav_arrow-right__SlW4y\",\n\t\"arrow-left\": \"topNav_arrow-left__jJf0j\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvdG9wLW5hdi90b3BOYXYubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx5S0FBcUY7QUFDL0g7QUFDQTtBQUNBLCtEQUErRCw0QkFBNEIsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLHdCQUF3QixpQkFBaUIsOENBQThDLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDBCQUEwQixrQkFBa0Isd0JBQXdCLDhCQUE4QixpQkFBaUIsR0FBRyx5QkFBeUIscUNBQXFDLG9CQUFvQixzQkFBc0IsR0FBRyxnQ0FBZ0MscUNBQXFDLCtCQUErQixHQUFHLCtCQUErQixxQ0FBcUMsNkJBQTZCLEdBQUcsT0FBTyxzSkFBc0osV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsdURBQXVELFdBQVcsNEJBQTRCLGdCQUFnQix1QkFBdUIsMEJBQTBCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcsV0FBVywyQkFBMkIsd0JBQXdCLGlCQUFpQiw4Q0FBOEMsb0JBQW9CLGdCQUFnQixpQkFBaUIsMEJBQTBCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLDhCQUE4QixpQkFBaUIsR0FBRyxXQUFXLHFDQUFxQyxvQkFBb0Isc0JBQXNCLEdBQUcsa0JBQWtCLHFDQUFxQywrQkFBK0IsR0FBRyxpQkFBaUIscUNBQXFDLDZCQUE2QixHQUFHLDhJQUE4SSxzQkFBc0IscUJBQXFCLHVCQUF1QixvQkFBb0IsdUJBQXVCLCtSQUErUixvUkFBb1Isa0pBQWtKO0FBQ3p2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbGF5b3V0L3RvcC1uYXYvdG9wTmF2Lm1vZHVsZS5zY3NzPzA1YzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b3BOYXZfbWFpbl9fejJQZU4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wTmF2X2xlZnRfX1A3TF9RIHtcXG4gIGJhY2tncm91bmQ6ICM0Y2I1ZjU7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMi43NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3BOYXZfcmlnaHRfX2VHNE5GIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRvcE5hdl9pY29uX19IaVBuSyB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udG9wTmF2X2Fycm93LXJpZ2h0X19TbFc0eSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xcbn1cXG5cXG4udG9wTmF2X2Fycm93LWxlZnRfX2pKZjBqIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2xheW91dC90b3AtbmF2L3RvcE5hdi5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9hYnN0cmFjdHMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkNUVTtFRFVWLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7RUFDQSwwQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtBQURGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL2Fic3RyYWN0c1xcXCIgYXMgKjtcXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCAxLjI1dncsIDEuMjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMi43NXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pY29uIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMXZ3LCAxdncpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5hcnJvdy1yaWdodCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xcbn1cXG5cXG4uYXJyb3ctbGVmdCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcXG59XFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjMWM0ZTgwO1xcbiRzZWNvbmRhcnk6ICM0Y2I1ZjU7XFxuJHRlcnRpYXJ5OiAjZjVmNWY1O1xcbiRxdWF0ZXJuYXJ5OiAjZjVmNWY1O1xcbiRxdWluYXJ5OiAjZjVmNWY1O1xcbi8vICRwcmltYXJ5OiAjN2RiOGY0O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJveCBTaGFkb3dzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBCb3JkZXIgUmFkaXVzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEZvbnQgU2l6ZXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcInRvcE5hdl9tYWluX196MlBlTlwiLFxuXHRcImxlZnRcIjogXCJ0b3BOYXZfbGVmdF9fUDdMX1FcIixcblx0XCJyaWdodFwiOiBcInRvcE5hdl9yaWdodF9fZUc0TkZcIixcblx0XCJpY29uXCI6IFwidG9wTmF2X2ljb25fX0hpUG5LXCIsXG5cdFwiYXJyb3ctcmlnaHRcIjogXCJ0b3BOYXZfYXJyb3ctcmlnaHRfX1NsVzR5XCIsXG5cdFwiYXJyb3ctbGVmdFwiOiBcInRvcE5hdl9hcnJvdy1sZWZ0X19qSmYwalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/topNav.module.scss\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".right_right__UbLaI {\\n  display: flex;\\n  align-items: center;\\n  height: 100%;\\n}\\n\\n.right_icon__No4uc {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1.5rem;\\n}\\n\\n.right_user__dxZeo {\\n  display: flex;\\n  align-items: center;\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_name-logo__ha139 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: #1c4e80;\\n  color: white;\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  border-radius: 100%;\\n  width: 2rem;\\n  height: 2rem;\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_user-name__EquWj {\\n  margin-left: 1rem;\\n}\\n.right_user__dxZeo .right_icon__No4uc {\\n  margin-left: 1rem;\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .right_user-name__EquWj {\\n    display: none;\\n  }\\n  .right_icon__No4uc {\\n    display: none;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/layout/top-nav/right.module.scss\",\"webpack://styles/abstracts/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,mBAAA;EAEA,YAAA;AAFF;;AAKA;EACE,gCAAA;EACA,eAAA;EACA,mBAAA;AAFF;;AAKA;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAFF;AAIE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBCrBM;EDsBN,YAAA;EACA,gCAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAFJ;AAKE;EACE,iBAAA;AAHJ;AAME;EACE,iBAAA;AAJJ;;AAQA;EACE;IACE,aAAA;EALF;EAQA;IACE,aAAA;EANF;AACF\",\"sourcesContent\":[\"@use \\\"../../abstracts\\\" as *;\\n\\n.right {\\n  display: flex;\\n  align-items: center;\\n  // justify-content: flex-end;\\n  height: 100%;\\n}\\n\\n.icon {\\n  font-size: clamp(1rem, 1vw, 1vw);\\n  cursor: pointer;\\n  margin-left: 1.5rem;\\n}\\n\\n.user {\\n  display: flex;\\n  align-items: center;\\n  margin-left: 1rem;\\n\\n  .name-logo {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: $primary;\\n    color: white;\\n    font-size: clamp(1rem, 1vw, 1vw);\\n    border-radius: 100%;\\n    width: 2rem;\\n    height: 2rem;\\n    margin-left: 1rem;\\n  }\\n\\n  .user-name {\\n    margin-left: 1rem;\\n  }\\n\\n  .icon {\\n    margin-left: 1rem;\\n  }\\n}\\n\\n@media only screen and (max-width: 600px) {\\n  .user-name {\\n    display: none;\\n  }\\n\\n  .icon {\\n    display: none;\\n  }\\n}\\n\",\"//==================================================\\n// Colors\\n//==================================================\\n$primary: #1c4e80;\\n$secondary: #4cb5f5;\\n$tertiary: #f5f5f5;\\n$quaternary: #f5f5f5;\\n$quinary: #f5f5f5;\\n// $primary: #7db8f4;\\n\\n//==================================================\\n// Width\\n//==================================================\\n\\n//==================================================\\n// Transition\\n//==================================================\\n$transistion-ease: all 0.5s ease-in-out;\\n\\n//==================================================\\n// Box Shadows\\n//==================================================\\n$shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n$light-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\\n\\n//==================================================\\n// Border Radius\\n//==================================================\\n$border-radius: 3px;\\n\\n//==================================================\\n// Font Sizes\\n//==================================================\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"right\": \"right_right__UbLaI\",\n\t\"icon\": \"right_icon__No4uc\",\n\t\"user\": \"right_user__dxZeo\",\n\t\"name-logo\": \"right_name-logo__ha139\",\n\t\"user-name\": \"right_user-name__EquWj\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9sYXlvdXQvdG9wLW5hdi9yaWdodC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHlLQUFxRjtBQUMvSDtBQUNBO0FBQ0EsK0RBQStELGtCQUFrQix3QkFBd0IsaUJBQWlCLEdBQUcsd0JBQXdCLHFDQUFxQyxvQkFBb0Isd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQix3QkFBd0Isc0JBQXNCLEdBQUcsOENBQThDLGtCQUFrQix3QkFBd0IsNEJBQTRCLHdCQUF3QixpQkFBaUIscUNBQXFDLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLDhDQUE4QyxzQkFBc0IsR0FBRyx5Q0FBeUMsc0JBQXNCLEdBQUcsK0NBQStDLDZCQUE2QixvQkFBb0IsS0FBSyx3QkFBd0Isb0JBQW9CLEtBQUssR0FBRyxPQUFPLHFKQUFxSixVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyx1REFBdUQsWUFBWSxrQkFBa0Isd0JBQXdCLGlDQUFpQyxpQkFBaUIsR0FBRyxXQUFXLHFDQUFxQyxvQkFBb0Isd0JBQXdCLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLHNCQUFzQixrQkFBa0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsMkJBQTJCLG1CQUFtQix1Q0FBdUMsMEJBQTBCLGtCQUFrQixtQkFBbUIsd0JBQXdCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLGFBQWEsd0JBQXdCLEtBQUssR0FBRywrQ0FBK0MsZ0JBQWdCLG9CQUFvQixLQUFLLGFBQWEsb0JBQW9CLEtBQUssR0FBRyw4SUFBOEksc0JBQXNCLHFCQUFxQix1QkFBdUIsb0JBQW9CLHVCQUF1QiwrUkFBK1IsMEtBQTBLLHVEQUF1RCxzSkFBc0osa0pBQWtKO0FBQ3pyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2xheW91dC90b3AtbmF2L3JpZ2h0Lm1vZHVsZS5zY3NzPzEyNjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yaWdodF9yaWdodF9fVWJMYUkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5yaWdodF9pY29uX19ObzR1YyB7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxufVxcblxcbi5yaWdodF91c2VyX19keFplbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4ucmlnaHRfdXNlcl9fZHhaZW8gLnJpZ2h0X25hbWUtbG9nb19faGExMzkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxYzRlODA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4ucmlnaHRfdXNlcl9fZHhaZW8gLnJpZ2h0X3VzZXItbmFtZV9fRXF1V2oge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5yaWdodF91c2VyX19keFplbyAucmlnaHRfaWNvbl9fTm80dWMge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5yaWdodF91c2VyLW5hbWVfX0VxdVdqIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5yaWdodF9pY29uX19ObzR1YyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbGF5b3V0L3RvcC1uYXYvcmlnaHQubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQ3JCTTtFRHNCTixZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsaUJBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7QUFKSjs7QUFRQTtFQUNFO0lBQ0UsYUFBQTtFQUxGO0VBUUE7SUFDRSxhQUFBO0VBTkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi8uLi9hYnN0cmFjdHNcXFwiIGFzICo7XFxuXFxuLnJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmljb24ge1xcbiAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAxdncsIDF2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbn1cXG5cXG4udXNlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcbiAgLm5hbWUtbG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDF2dywgMXZ3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAudXNlci1uYW1lIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICB9XFxuXFxuICAuaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAudXNlci1uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gQ29sb3JzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRwcmltYXJ5OiAjMWM0ZTgwO1xcbiRzZWNvbmRhcnk6ICM0Y2I1ZjU7XFxuJHRlcnRpYXJ5OiAjZjVmNWY1O1xcbiRxdWF0ZXJuYXJ5OiAjZjVmNWY1O1xcbiRxdWluYXJ5OiAjZjVmNWY1O1xcbi8vICRwcmltYXJ5OiAjN2RiOGY0O1xcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4vLyBXaWR0aFxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gVHJhbnNpdGlvblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4kdHJhbnNpc3Rpb24tZWFzZTogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJveCBTaGFkb3dzXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiRzaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbiRsaWdodC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XFxuXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbi8vIEJvcmRlciBSYWRpdXNcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuJGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuLy8gRm9udCBTaXplc1xcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyaWdodFwiOiBcInJpZ2h0X3JpZ2h0X19VYkxhSVwiLFxuXHRcImljb25cIjogXCJyaWdodF9pY29uX19ObzR1Y1wiLFxuXHRcInVzZXJcIjogXCJyaWdodF91c2VyX19keFplb1wiLFxuXHRcIm5hbWUtbG9nb1wiOiBcInJpZ2h0X25hbWUtbG9nb19faGExMzlcIixcblx0XCJ1c2VyLW5hbWVcIjogXCJyaWdodF91c2VyLW5hbWVfX0VxdVdqXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[3].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[4]!./styles/layout/top-nav/right.module.scss\n"));

/***/ })

});
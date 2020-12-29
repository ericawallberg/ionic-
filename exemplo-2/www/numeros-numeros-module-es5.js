(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["numeros-numeros-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/numeros/numeros.page.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/numeros/numeros.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeNumerosNumerosPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Números</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let i of array\">\n        {{i}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/numeros/numeros-routing.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/home/numeros/numeros-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: NumerosPageRoutingModule */

    /***/
    function srcAppHomeNumerosNumerosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosPageRoutingModule", function () {
        return NumerosPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _numeros_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./numeros.page */
      "./src/app/home/numeros/numeros.page.ts");

      var routes = [{
        path: '',
        component: _numeros_page__WEBPACK_IMPORTED_MODULE_3__["NumerosPage"]
      }];

      var NumerosPageRoutingModule = function NumerosPageRoutingModule() {
        _classCallCheck(this, NumerosPageRoutingModule);
      };

      NumerosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NumerosPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/numeros/numeros.module.ts":
    /*!************************************************!*\
      !*** ./src/app/home/numeros/numeros.module.ts ***!
      \************************************************/

    /*! exports provided: NumerosPageModule */

    /***/
    function srcAppHomeNumerosNumerosModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosPageModule", function () {
        return NumerosPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./numeros-routing.module */
      "./src/app/home/numeros/numeros-routing.module.ts");
      /* harmony import */


      var _numeros_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./numeros.page */
      "./src/app/home/numeros/numeros.page.ts");

      var NumerosPageModule = function NumerosPageModule() {
        _classCallCheck(this, NumerosPageModule);
      };

      NumerosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _numeros_routing_module__WEBPACK_IMPORTED_MODULE_5__["NumerosPageRoutingModule"]],
        declarations: [_numeros_page__WEBPACK_IMPORTED_MODULE_6__["NumerosPage"]]
      })], NumerosPageModule);
      /***/
    },

    /***/
    "./src/app/home/numeros/numeros.page.scss":
    /*!************************************************!*\
      !*** ./src/app/home/numeros/numeros.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeNumerosNumerosPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbnVtZXJvcy9udW1lcm9zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/home/numeros/numeros.page.ts":
    /*!**********************************************!*\
      !*** ./src/app/home/numeros/numeros.page.ts ***!
      \**********************************************/

    /*! exports provided: NumerosPage */

    /***/
    function srcAppHomeNumerosNumerosPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumerosPage", function () {
        return NumerosPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NumerosPage = /*#__PURE__*/function () {
        function NumerosPage() {
          _classCallCheck(this, NumerosPage);

          this.array = [];

          for (var i = 1; i <= 1000; i++) {
            this.array[i] = i;
          }
        }

        _createClass(NumerosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NumerosPage;
      }();

      NumerosPage.ctorParameters = function () {
        return [];
      };

      NumerosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-numeros',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./numeros.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/numeros/numeros.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./numeros.page.scss */
        "./src/app/home/numeros/numeros.page.scss"))["default"]]
      })], NumerosPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=numeros-numeros-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conteudo-conteudo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/conteudo/conteudo.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/conteudo/conteudo.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-button>\n    <ion-title>Conteúdo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let pais of paises\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"pais.img\"></ion-img>\n      </ion-avatar>\n      <ion-label> {{pais.descricao}} </ion-label>\n      <ion-label> {{pais.ordem}} </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/conteudo/conteudo-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/conteudo/conteudo-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ConteudoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteudoPageRoutingModule", function() { return ConteudoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _conteudo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conteudo.page */ "./src/app/home/conteudo/conteudo.page.ts");




const routes = [
    {
        path: '',
        component: _conteudo_page__WEBPACK_IMPORTED_MODULE_3__["ConteudoPage"]
    }
];
let ConteudoPageRoutingModule = class ConteudoPageRoutingModule {
};
ConteudoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConteudoPageRoutingModule);



/***/ }),

/***/ "./src/app/home/conteudo/conteudo.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/conteudo/conteudo.module.ts ***!
  \**************************************************/
/*! exports provided: ConteudoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteudoPageModule", function() { return ConteudoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _conteudo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conteudo-routing.module */ "./src/app/home/conteudo/conteudo-routing.module.ts");
/* harmony import */ var _conteudo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conteudo.page */ "./src/app/home/conteudo/conteudo.page.ts");







let ConteudoPageModule = class ConteudoPageModule {
};
ConteudoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conteudo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConteudoPageRoutingModule"]
        ],
        declarations: [_conteudo_page__WEBPACK_IMPORTED_MODULE_6__["ConteudoPage"]]
    })
], ConteudoPageModule);



/***/ }),

/***/ "./src/app/home/conteudo/conteudo.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/conteudo/conteudo.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29udGV1ZG8vY29udGV1ZG8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/conteudo/conteudo.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/conteudo/conteudo.page.ts ***!
  \************************************************/
/*! exports provided: ConteudoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteudoPage", function() { return ConteudoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ConteudoPage = class ConteudoPage {
    constructor() {
        this.paises = [
            {
                img: 'https://commons.wikimedia.org/wiki/File:Flag_of_Portugal.svg',
                ordem: 1,
                descricao: 'Portugal'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Spain&psig=AOvVaw2GXQr2upARrL__GSNxnuho&ust=1609196496468000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDN1J6i7-0CFQAAAAAdAAAAABAD',
                ordem: 2,
                descricao: 'Espanha'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_France&psig=AOvVaw0Qe6neX6Ay1fSx3HG3d2Cg&ust=1609196510979000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi9zKWi7-0CFQAAAAAdAAAAABAD',
                ordem: 3,
                descricao: 'França'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Germany.svg&psig=AOvVaw3o1EDS2AEku1GUlgbXygR-&ust=1609196542429000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDwz7Si7-0CFQAAAAAdAAAAABAD',
                ordem: 4,
                descricao: 'Alemanha'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FPa%25C3%25ADses_Baixos&psig=AOvVaw1cNQxJ01L4kdQ3djO43F0R&ust=1609196562197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDeg76i7-0CFQAAAAAdAAAAABAD',
                ordem: 5,
                descricao: 'Países Baixos'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Italy&psig=AOvVaw2q3ahh--PChotNGoe2QW95&ust=1609196590540000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCjw8ui7-0CFQAAAAAdAAAAABAD',
                ordem: 6,
                descricao: 'Itália'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Denmark&psig=AOvVaw2swJ66FVZ9HebLCtBk0MEF&ust=1609196614073000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDR4dai7-0CFQAAAAAdAAAAABAD',
                ordem: 7,
                descricao: 'Dinamarca'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Poland.svg&psig=AOvVaw2RbgGfOHNoADGN09usEfR2&ust=1609196638178000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjoo-Ki7-0CFQAAAAAdAAAAABAD',
                ordem: 8,
                descricao: 'Polónia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FFicheiro%3AFlag_of_Norway.svg&psig=AOvVaw2bao69ZxerDZGljSPaLBrB&ust=1609196666125000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKi83u-i7-0CFQAAAAAdAAAAABAD',
                ordem: 9,
                descricao: 'Noruega'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Sweden&psig=AOvVaw3Ffmb_lONffbwuse-jT27p&ust=1609196684475000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj3qvii7-0CFQAAAAAdAAAAABAD',
                ordem: 10,
                descricao: 'Suécia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.countryflags.com%2Fproduct%2Ffinland-flag-package%2F&psig=AOvVaw35cgnjpB0CXp9_DqnTZW_5&ust=1609196700329000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD25v-i7-0CFQAAAAAdAAAAABAD',
                ordem: 11,
                descricao: 'Finlândia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Estonia&psig=AOvVaw3XwZt38_MFy-YnHDtAoZf0&ust=1609196721953000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCgnoqj7-0CFQAAAAAdAAAAABAD',
                ordem: 12,
                descricao: 'Estónia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Iceland&psig=AOvVaw3joKiz65g65fXTPE6k4G92&ust=1609196742515000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJD_hZSj7-0CFQAAAAAdAAAAABAD',
                ordem: 13,
                descricao: 'Islândia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FEslov%25C3%25A1quia&psig=AOvVaw0nsUtgxZ3IKh8aJrSCB1jn&ust=1609196769844000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDPiKGj7-0CFQAAAAAdAAAAABAI',
                ordem: 14,
                descricao: 'Eslováquia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_Greece&psig=AOvVaw0QWzWDWwTixqqYaMsZXqBU&ust=1609196789915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjQzaqj7-0CFQAAAAAdAAAAABAD',
                ordem: 15,
                descricao: 'Grécia'
            },
            {
                img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Luxembourg&psig=AOvVaw1mTWl_9R_LY3wtAH7gNYkT&ust=1609196813961000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNijibaj7-0CFQAAAAAdAAAAABAD',
                ordem: 16,
                descricao: 'Luxemburgo'
            }
        ];
    }
    ngOnInit() {
    }
};
ConteudoPage.ctorParameters = () => [];
ConteudoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conteudo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conteudo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/conteudo/conteudo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./conteudo.page.scss */ "./src/app/home/conteudo/conteudo.page.scss")).default]
    })
], ConteudoPage);



/***/ })

}]);
//# sourceMappingURL=conteudo-conteudo-module-es2015.js.map
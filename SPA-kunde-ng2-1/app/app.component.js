"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'min-app',
        template: "\n<div class=\"container\">\n<div class=\"row\">\n<nav class=\"navbar navbar-inverse faq-nav\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n<a class=\"navbar-brand\">\n                    <img src=\"Images/airline_logo.png\" width=\"110\" alt=\"Airzure logo\" />\n                </a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n                <li><a class=\"faq-link active\" routerLink=\"/faq\" routerLinkActive=\"active\">FAQ</a></li>\n                <li><a class=\"faq-link active\" routerLink=\"/customerservice\" routerLinkActive=\"active\">Kundeservice</a></li>\n    </ul>\n  </div>\n</nav>\n</div>\n</div>\n<router-outlet></router-outlet>\n\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
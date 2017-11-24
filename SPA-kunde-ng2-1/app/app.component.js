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
        template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"nav navbar-inverse  faq-nav\">\n                <div class=\"container-fluid\">\n                    <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar navbar-inverse faq-nav navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    </button>\n                        <a class=\"navbar-brand\">\n                            <img src=\"Images/airline_logo.png\" width=\"110\" alt=\"Airzure logo\" />\n                        </a>\n                    </div>\n                    <div class=\"navbar-collapse collapse pull-right\">\n                    <ul class=\"nav navbar-nav\">\n                        <li><a routerLink=\"/faq\" routerLinkActive=\"active\">FAQ</a></li>\n                        <li><a class=\"active\" routerLink=\"/customerservice\" routerLinkActive=\"active\">Kundeservice</a></li>\n                    </ul>\n                </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n<div class=\"top-30 bottom-5\">\n    <router-outlet></router-outlet>\n</div>\n"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
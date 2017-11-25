"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var faq_component_1 = require("./faq.component");
var customerservice_component_1 = require("./customerservice.component");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var orderby_pipe_1 = require("./orderby.pipe");
var search_pipe_1 = require("./search.pipe");
var register_component_1 = require("./register.component");
var showFaq_component_1 = require("./showFaq.component");
var scroll_service_1 = require("./scroll.service");
var appRoutes = [
    { path: 'faq', component: faq_component_1.FaqComponent },
    { path: 'customerservice', component: customerservice_component_1.CustomerService },
    { path: '', redirectTo: '/faq', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
            platform_browser_1.BrowserModule, forms_2.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule
        ],
        declarations: [faq_component_1.FaqComponent, customerservice_component_1.CustomerService, app_component_1.AppComponent, orderby_pipe_1.OrderByPipe, search_pipe_1.SearchPipe, register_component_1.RegisterComponent, showFaq_component_1.ShowFaqComponent],
        providers: [scroll_service_1.ScrollService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
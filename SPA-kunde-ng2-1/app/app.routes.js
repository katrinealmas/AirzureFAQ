"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var SPA_1 = require("./SPA");
var customerservice_component_1 = require("./customerservice.component");
var appRoutes = [
    { path: 'spa', component: SPA_1.SPA },
    { path: 'customerservice', component: customerservice_component_1.CustomerService },
    { path: '', component: SPA_1.SPA, pathMatch: 'full' } // redirect to home page on load
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
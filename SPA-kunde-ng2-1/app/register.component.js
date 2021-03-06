"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var customer_1 = require("./customer");
var http_2 = require("@angular/http");
var RegisterComponent = (function () {
    function RegisterComponent(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.form = fb.group({
            name: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            question: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-.\\? ]{2,300}")])],
        });
    }
    RegisterComponent.prototype.registerCustomerQuestion = function () {
        var _this = this;
        var customerQuestion = new customer_1.Customer();
        customerQuestion.name = this.form.value.name;
        customerQuestion.email = this.form.value.email;
        customerQuestion.question = this.form.value.question;
        var body = JSON.stringify(customerQuestion);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.post("api/customer", body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
            _this.registered = true;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/customer"); });
        this.form.reset();
    };
    ;
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "<register-question>",
        templateUrl: "./app/register.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
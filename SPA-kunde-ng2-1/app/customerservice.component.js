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
require("rxjs/add/operator/map");
var scroll_service_1 = require("./scroll.service");
var CustomerService = (function () {
    function CustomerService(_http, _scroll) {
        this._http = _http;
        this._scroll = _scroll;
        this.laster = false;
        this.descend = false;
        this.column = 'Name';
    }
    CustomerService.prototype.ngOnInit = function () {
        this.getAllCustomerQuestions();
    };
    CustomerService.prototype.sort = function (property) {
        this.descend = !this.descend;
        this.column = property;
        this.direction = this.descend ? 1 : -1;
    };
    ;
    CustomerService.prototype.getAllCustomerQuestions = function () {
        var _this = this;
        this._http.get("api/customer")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.allQuestions = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var question = JsonData_1[_i];
                    _this.allQuestions.push(question);
                    _this.laster = true;
                    console.log(question);
                }
                console.log(_this.allQuestions);
            }
            else {
                _this.laster = false;
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/customer"); });
    };
    ;
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Component({
        selector: "min-app",
        templateUrl: "./app/customerservice.component.html",
    }),
    __metadata("design:paramtypes", [http_1.Http, scroll_service_1.ScrollService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customerservice.component.js.map
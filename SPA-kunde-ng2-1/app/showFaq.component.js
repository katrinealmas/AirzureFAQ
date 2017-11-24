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
require("rxjs/add/operator/map");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var ShowFaqComponent = (function () {
    function ShowFaqComponent(_http) {
        this._http = _http;
        this.laster = false;
    }
    ShowFaqComponent.prototype.ngOnInit = function () {
        this.Categories();
    };
    ShowFaqComponent.prototype.getCategoryContent = function (category) {
        var _this = this;
        this._http.get("api/faq/" + category)
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.categoryContent = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var question = JsonData_1[_i];
                    _this.categoryContent.push(question);
                    console.log(category);
                }
                console.log(_this.categoryContent);
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/faq/category"); });
    };
    ;
    ShowFaqComponent.prototype.Categories = function () {
        var _this = this;
        this._http.get("api/faq")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.categories = [];
            if (JsonData) {
                for (var _i = 0, JsonData_2 = JsonData; _i < JsonData_2.length; _i++) {
                    var question = JsonData_2[_i];
                    _this.categories.push(question);
                }
                console.log(_this.categories);
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/faq"); });
    };
    ;
    return ShowFaqComponent;
}());
ShowFaqComponent = __decorate([
    core_1.Component({
        selector: ">show-faq>",
        templateUrl: "./app/showFaq.component.html",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ShowFaqComponent);
exports.ShowFaqComponent = ShowFaqComponent;
//# sourceMappingURL=showFaq.component.js.map
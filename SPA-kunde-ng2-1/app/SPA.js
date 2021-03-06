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
var FaqComponent = (function () {
    function FaqComponent(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.search = fb.group({
            content: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-.\\? ]{2,300}")])],
        });
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.getAllFrequentlyAskedQuestions();
    };
    FaqComponent.prototype.scroll = function (el) {
        console.log(el);
        el.scrollIntoView(true);
    };
    FaqComponent.prototype.getAllFrequentlyAskedQuestions = function () {
        var _this = this;
        this._http.get("api/search/")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.allFaq = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var question = JsonData_1[_i];
                    _this.allFaq.push(question);
                }
                console.log(_this.allFaq);
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/search"); });
    };
    ;
    return FaqComponent;
}());
FaqComponent = __decorate([
    core_1.Component({
        selector: "min-app",
        templateUrl: "./app/SPA.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], FaqComponent);
exports.FaqComponent = FaqComponent;
//# sourceMappingURL=SPA.js.map
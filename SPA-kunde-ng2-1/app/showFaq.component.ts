import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Customer } from "./customer";
import { Headers, Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";
import { Question } from "./question";

@Component({
    selector: ">show-faq>",
    templateUrl: "./app/showFaq.component.html",
})

export class ShowFaqComponent {


    categories: Array<string>;
    laster = false;
   
    categoryContent: Array<Question>; // List of all category content 
 

    constructor(private _http: Http) { }

    ngOnInit() {
        this.Categories();
    }

    getCategoryContent(category: string) {
        this._http.get("api/faq/" + category)
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.categoryContent = [];

                if (JsonData) {
                    for (let question of JsonData) {
                        this.categoryContent.push(question);

                        console.log(category)
                    }
                    console.log(this.categoryContent)
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/faq/category")
            );
    };

    Categories() {
        this._http.get("api/faq")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.categories = [];
                if (JsonData) {
                    for (let question of JsonData) {
                        this.categories.push(question);

                    }
                    console.log(this.categories)
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/faq")
            );
    };
}
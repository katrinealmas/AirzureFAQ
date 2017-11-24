import {Component, OnInit} from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Question } from "./question";
import { Customer } from "./customer";
import { Headers } from "@angular/http";


@Component({
    selector: "min-app",
    templateUrl: "./app/faq.html"
})
export class FaqComponent {
    allFaq: Array<Question>; // List of all faq in db
    search: FormGroup;
    loading: boolean;
 
    constructor(private _http: Http, private fb: FormBuilder) {
        this.search = fb.group({
            content: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-.\\? ]{2,300}")])],
        });
    }
   
    ngOnInit() {
        this.loading = false;
        this.getAllFrequentlyAskedQuestions();
    }

    scroll(el: any) {
        console.log(el)
        el.scrollIntoView(true)
    }

    getAllFrequentlyAskedQuestions() {
        this._http.get("api/search/")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.allFaq = [];

                if (JsonData) {
                    for (let question of JsonData) {
                        this.allFaq.push(question);
                    }
                    console.log(this.allFaq)
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/search")
            );
    };  
}
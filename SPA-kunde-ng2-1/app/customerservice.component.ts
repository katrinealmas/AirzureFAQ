import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Customer } from "./customer";
import { Headers } from "@angular/http";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ScrollService } from "./scroll.service";

@Component({
    selector: "min-app",
    templateUrl: "./app/customerservice.component.html",
})

export class CustomerService {

    skjema: FormGroup;
    allQuestions: Array<Customer>;
    laster = false;
    descend: boolean = false;
    column: string = 'Name';
    direction: number;

    constructor(private _http: Http, private _scroll: ScrollService) { }

    ngOnInit() {
        this.getAllCustomerQuestions();
    }

    sort(property: any) {
        this.descend = !this.descend; 
        this.column = property;
        this.direction = this.descend ? 1 : -1;
    };

    getAllCustomerQuestions() {
        this._http.get("api/customer")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.allQuestions = [];

                if (JsonData) {
                    for (let question of JsonData) {
                        this.allQuestions.push(question);
                        this.laster = true;
                        console.log(question)
                    }
                    console.log(this.allQuestions)
                } else { this.laster = false; };
            },
            error => alert(error),
            () => console.log("ferdig get-api/customer")
        );

    };  


}

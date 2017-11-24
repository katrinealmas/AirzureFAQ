import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Customer } from "./customer";
import { Headers } from "@angular/http";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: "min-app",
    templateUrl: "./app/customerservice.component.html",
})

export class CustomerService {

    skjema: FormGroup;
    allQuestions: Array<Customer>;
    laster = false;
    records: Array<Customer>;
    isDesc: boolean = false;
    column: string = 'Name';
    direction: number;

    constructor(private _http: Http) { }

    ngOnInit() {
        this.records = [];
        this.getAllCustomerCuestions()
    }

    sort(property: any) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };

    getAllCustomerCuestions() {
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

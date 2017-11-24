import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import "rxjs/add/operator/map";
import { Customer } from "./customer";
import { Headers } from "@angular/http";

@Component({
    selector: "<register-question>",
    templateUrl: "./app/register.component.html"
})
export class RegisterComponent {
  
    form: FormGroup;
    registered: boolean;


    constructor(private _http: Http, private fb: FormBuilder) {
        this.form = fb.group({
            name: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, <any>Validators.email])],
            question: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-.\\? ]{2,300}")])],
        });
    }

    registerCustomerQuestion() {
        var customerQuestion = new Customer();

        customerQuestion.name = this.form.value.name;
        customerQuestion.email = this.form.value.email;
        customerQuestion.question = this.form.value.question;

        var body: string = JSON.stringify(customerQuestion);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/customer", body, { headers: headers })
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                this.registered = true;
            },
            error => alert(error),
            () => console.log("ferdig post-api/customer")
        );
        this.form.reset()
    };
}
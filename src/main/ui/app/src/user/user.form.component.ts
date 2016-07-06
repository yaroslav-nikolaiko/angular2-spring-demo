import {Component, OnInit,} from '@angular/core';
import {RestUtils} from "../utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicValidators} from "../utils/validators";

@Component({
    selector: 'users',
    templateUrl: "app/templates/user-form.html",
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [RestUtils, HTTP_PROVIDERS]
})
export class UserFormComponent implements OnInit{
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(){
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            address: this.formBuilder.group({
            street: [],
            suite: [],
            zip: [],
            city: []
        })
    });
    }
}
import {Component, OnInit,} from '@angular/core';
import {RestUtils} from "../utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicValidators} from "../utils/validators";
import {Router} from "@angular/router";

@Component({
    selector: 'users',
    templateUrl: "app/templates/user-form.html",
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [RestUtils, HTTP_PROVIDERS]
})
export class UserFormComponent implements OnInit{
    form: FormGroup;
    canDeactivate = false;

    constructor(private formBuilder: FormBuilder, private router:Router) {}

    ngOnInit() {
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

    save(){
        this.canDeactivate = true;
        this.router.navigateByUrl("/");
    }
}
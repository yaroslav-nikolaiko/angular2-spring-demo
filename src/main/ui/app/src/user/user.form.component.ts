import {Component, OnInit,} from '@angular/core';
import {RestUtils} from "../utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BasicValidators} from "../utils/validators";
import {Router, ActivatedRoute} from "@angular/router";
import {UserService} from "./user.service";
import {User, Address} from "./user";

@Component({
    selector: 'users',
    templateUrl: "app/templates/user-form.html",
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [RestUtils, HTTP_PROVIDERS, UserService]
})
export class UserFormComponent implements OnInit{
    form: FormGroup;
    canDeactivate = false;
    user = new User();

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router:Router,
                private userService: UserService) {}

    ngOnInit() {
        this.route.params
            .map(params=>params['href'])
            .map(id => this.decodeURL(id))
            .filter(id=>id != 'new')
            .flatMap(id=>this.userService.get(id))
            .do(user=>user.address = user.address ? user.address : new Address())
            .subscribe(user=>this.user = user);

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
        this.userService.save(this.user).subscribe(
            ()=>{
                this.canDeactivate = true;
                this.router.navigateByUrl("/");
            },
                error=>console.log(error));
    }

    decodeURL(href: string){
        return decodeURIComponent(href);
    }
}
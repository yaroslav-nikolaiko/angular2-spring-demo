import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {RestUtils} from "./utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";
import {UserService} from "./user/user.service";

@Component({
    selector: 'my-navbar',
    templateUrl: 'app/templates/navbar.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService, RestUtils, HTTP_PROVIDERS]
})
export class NavbarComponent {
    constructor(private userService: UserService){

    }

    onClick(){
        //this.restUtils.getEntryPoint().subscribe(resp=>console.log(resp));
        var result;
        //console.log(this.restUtils.getEntryPoint());
/*        this.restUtils.getEntryPoint().subscribe(resp=>{
            this.restUtils.getList('accounts', resp).subscribe(entity=>{
                console.log("Inside onClick");
                console.log(entity)
            })
        });*/

        this.userService.getUsers().subscribe(users=>{
            console.log(users)
        });

/*        this.restUtils.getList('accounts').subscribe(entity=>{
            console.log("Inside onClick");
            console.log(entity)
        });*/
        
        
    }
}

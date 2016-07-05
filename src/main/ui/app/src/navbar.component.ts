import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {RestUtils} from "./utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'my-navbar',
    templateUrl: 'app/templates/navbar.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [RestUtils, HTTP_PROVIDERS]
})
export class NavbarComponent {
    constructor(private restUtils: RestUtils){

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
        

        this.restUtils.getList('accounts').subscribe(entity=>{
            console.log("Inside onClick");
            console.log(entity)
        });
        
        
    }
}

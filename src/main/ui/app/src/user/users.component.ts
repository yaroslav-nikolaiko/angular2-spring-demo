import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {RestUtils} from "../utils/rest.utils";
import {HTTP_PROVIDERS} from "@angular/http";
import {User} from "./user";

@Component({
    selector: 'users',
    templateUrl: "app/templates/users.html",
    providers: [UserService, RestUtils, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {
    users: User[];
    
    constructor(private userService: UserService){
        
    }

    ngOnInit(){
        this.userService.getUsers().subscribe(users=>this.users = users);
    }
}
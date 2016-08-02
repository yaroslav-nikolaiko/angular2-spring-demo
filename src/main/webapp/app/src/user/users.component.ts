import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'users',
    templateUrl: "app/templates/users.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    users: User[];
    
    constructor(
        private userService: UserService){
    }

    ngOnInit(){
        this.userService.getUsers().subscribe(users=>this.users = users);
    }
    
    delete(user: User){
        if(confirm("Are you sure you want to delete "+user.name+"?")){
            var index = this.users.indexOf(user);

            this.userService.delete(user).subscribe(()=>{
                this.users.splice(index, 1);
            },
                e=>console.log(e));
        }

    }
}
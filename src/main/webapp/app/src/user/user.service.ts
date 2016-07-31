import {Injectable} from "@angular/core";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {Response} from "@angular/http";
import {HalClient} from "../hal.client/hal.client";


@Injectable()
export class UserService{

    constructor(private halClient: HalClient){

    }

    getUsers(): Observable<User[]>{
        return this.halClient.getList('accounts');
    }

    get(href: string): Observable<User>{
        return this.halClient.get(href);
    }

    save(user: User){
        if(user['_links'])
            return this.halClient.update(user);
        else
            return this.halClient.save('accounts', user) ;
    }
    
    delete(user: User): Observable<Response>{
        return this.halClient.delete(user);
    }
}
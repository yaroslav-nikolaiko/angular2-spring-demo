import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {User} from "./user";
import {Observable} from "rxjs/Rx";


@Injectable()
export class UserService{

    constructor(private restUtils: RestUtils){

    }

    getUsers(): Observable<User[]>{
        return this.restUtils.getList('accounts');
    }

    get(href: string): Observable<User>{
        return this.restUtils.get(href) as Observable<User>;
    }

    save(user: User){
       return this.restUtils.save('accounts', user) as Observable<User[]>;
    }
}
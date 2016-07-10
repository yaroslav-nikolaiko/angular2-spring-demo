import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {User} from "./user";
import {Observable} from "rxjs/Rx";
import {Response} from "@angular/http";


@Injectable()
export class UserService{

    constructor(private restUtils: RestUtils){

    }

    getUsers(): Observable<User[]>{
        return this.restUtils.getList('accounts');
    }

    get(href: string): Observable<User>{
        return this.restUtils.get(href);
    }

    save(user: User){
        if(user['_links'])
            return this.restUtils.update(user);
        else
            return this.restUtils.save('accounts', user) ;
    }
    
    delete(user: User): Observable<Response>{
        return this.restUtils.delete(user);
    }
}
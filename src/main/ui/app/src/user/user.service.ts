import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {User} from "./user";
import {Observable} from "rxjs/Rx";


@Injectable()
export class UserService{

    constructor(private restUtils: RestUtils){

    }

    getUsers(): Observable<User[]>{
        return this.restUtils.getList('accounts') as Observable<User[]>;
    }
}
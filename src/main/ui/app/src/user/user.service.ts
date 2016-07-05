import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {User} from "./user";


@Injectable()
export class UserService{

    constructor(private restUtils: RestUtils){

    }

    getUsers(){
        console.log(this.restUtils.getList('accounts'));
    }
}
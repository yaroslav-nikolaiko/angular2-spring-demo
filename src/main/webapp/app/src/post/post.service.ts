import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {Observable} from "rxjs/Rx";
import {Post, Comment} from "./post";
import {PagingEntity} from "../utils/paging.entity";
import {User} from "../user/user";

@Injectable()
export class PostService {

    constructor(private restUtils: RestUtils){

    }

    getPosts(): Observable<PagingEntity<Post[]>> {
        return this.restUtils.getList('posts');
    }

    getByUser(user: User){

    }
}
import {Injectable} from "@angular/core";
import {RestUtils} from "../utils/rest.utils";
import {Observable} from "rxjs/Rx";
import {Post} from "./post";

@Injectable()
export class PostService {

    constructor(private restUtils: RestUtils){

    }

    getPosts(): Observable<Post[]> {
        return this.restUtils.getList('posts');
    }
}
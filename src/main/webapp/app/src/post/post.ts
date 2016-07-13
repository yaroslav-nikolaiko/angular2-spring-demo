import {Observable} from "rxjs/Rx";
/**
 * Created by yaroslav on 11.07.16.
 */




export class Comment{
    name: string;
    body: string;
}

export class Post{
    static pages = 3;
    title: string;
    body: string;

    comments: ()=>Observable<Comment[]>;
}
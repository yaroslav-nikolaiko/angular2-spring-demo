import {Observable} from "rxjs/Rx";
/**
 * Created by yaroslav on 11.07.16.
 */


export class Comment{
    name: string;
    body: string;
}

export class Post{
    title: string;
    body: string;

    comments: ()=>Observable<Comment[]>;
    /*_comments: Comment[];

    loadComments: ()=>Observable<Comment[]>;
    comments(){
        if(this._comments){
            console.log("can we be hear");
            return Observable.of(this._comments);
        }
        return this.loadComments().subscribe(comments=>{
            this._comments = comments;
            console.log("can we be hear 2");
        });
    }*/
}
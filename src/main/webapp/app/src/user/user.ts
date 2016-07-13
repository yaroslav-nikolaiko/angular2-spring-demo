import {Observable} from "rxjs/Rx";
import {Post} from "../post/post";
/**
 * Created by yaroslav on 04.07.16.
 */

export class Address {
    street: string;
    suite: string;
    city: string;
    zip: string;
}


export class User{
    id: number;
    name: string;
    email: string;
    address = new Address();

    posts: ()=>Observable<Post[]>;
}

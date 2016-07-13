import {Observable} from "rxjs/Rx";

interface Page{
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export class PagingEntity<T>{
    constructor(public list: T, public page :Page){}

    first: ()=>Observable<PagingEntity<T>>;
    next: ()=>Observable<PagingEntity<T>>;
    last: ()=>Observable<PagingEntity<T>>;
}
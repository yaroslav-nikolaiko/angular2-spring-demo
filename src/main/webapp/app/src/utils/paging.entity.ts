import {Observable} from "rxjs/Rx";

export class PagingEntity<T>{
    entity: T;

    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number;
    };

    first: ()=>Observable<PagingEntity<T>>;
    next: ()=>Observable<PagingEntity<T>>;
    last: ()=>Observable<PagingEntity<T>>;
}
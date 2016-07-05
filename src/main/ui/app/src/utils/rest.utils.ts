import {HalEntity} from "./hal.entity";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class RestUtils{
    headers: Headers;
    constructor(private http: Http){this.headers = new Headers();
        this.headers.append('X-Forwarded-Host', location.host);
    }

    private getEntryPoint(): Observable<HalEntity<any>> {
        return this.http.get('api', {headers: this.headers})
            .map(res=>res.json());
    }

/*    getList<T>(link: string): any {
        return this.getEntryPoint().map(entity=>this.getList(link, entity));
    }*/

    getList<T>(link: string, entity?: HalEntity<T>): Observable<[T]>{
        if(! entity)
            return this.getEntryPoint().flatMap(e=>this.getList(link, e));

       return this.http.get(entity._links[link].href, {headers: this.headers})
            .map(res=>{
                console.log("Inside get List");
                console.log(res.json());
                return res.json()._embedded[link];
            });
    }
}
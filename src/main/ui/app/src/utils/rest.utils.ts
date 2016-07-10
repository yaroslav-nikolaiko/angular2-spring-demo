import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

@Injectable()
export class RestUtils{
    headers: Headers;
    entryPoint;
    constructor(private http: Http){this.headers = new Headers();
        this.headers.append('X-Forwarded-Host', location.host);
    }

    getList(link: string): Observable<any>{
       return this.httpGet(link).map(res=>res.json()._embedded[link]);
    }

    save(link: string, entity: any){
        return this.httpPOST(link, entity).map(res=>res.json());
    }

    get(href: string): Observable<any>{
        return this.http.get(href, {headers: this.headers}).map(res=>res.json());
    }

    private getEntryPoint(): Observable<any> {
        if(this.entryPoint) return Observable.of(this.entryPoint);

        return this.http.get('api', {headers: this.headers})
            .map(res=>this.entryPoint=res.json());
    }

    private httpGet(link: string): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            return this.http.get(entity._links[link].href, {headers: this.headers});
        });
    }

    private httpPOST(link: string, body: any): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            return this.http.post(entity._links[link].href, body, {headers: this.headers});
        });
    }
    
}
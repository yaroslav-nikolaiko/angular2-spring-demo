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
       return this.httpGet(link).map(res=>{
           const list: any[] = res.json()._embedded[link];
           list.forEach(i=>this.resolveLinks(i));
           return list;
       });
    }

    save(link: string, entity: any){
        return this.httpPOST(link, entity).map(res=>res.json());
    }

    update(entity: any){
        return this.http.put(entity._links.self.href, entity, {headers: this.headers}).map(res=>res.json());
    }

    get(href: string, link?: string): Observable<any>{
        return this.http.get(href, {headers: this.headers}).map(res=>{
            let entity = res.json();
            if(entity['_embedded'] && link ){
                if(entity['_embedded'][link])
                    return this.resolveLinks(entity['_embedded'][link]);
                return [];
            }
            return this.resolveLinks(entity);
        });
    }

    delete(entity: any) {
        return this.http.delete(entity._links.self.href, {headers: this.headers});
    }

    private resolveLinks(entity){
        if(entity instanceof Array)
            for(let i=0; i<entity.length; i++)
                entity[i] = this.resolveLinks(entity[i]);

        for(let link in entity._links){
            if(link=="self") continue;
            entity[link] = () => this.get(entity._links[link].href, link);
        }
        return entity;
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
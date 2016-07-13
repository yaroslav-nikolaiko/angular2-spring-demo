import {Http, Headers, URLSearchParams, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {PagingEntity} from "./paging.entity";
import {PageNumber} from "./paging.params.resolver";

export interface EntityOptions{
    link: string;
    href?: string;
    params?: {};
    searchParams?: URLSearchParams;
}

@Injectable()
export class RestUtils{
    headers: Headers;
    entryPoint;

    constructor(private http: Http){this.headers = new Headers();
        this.headers.append('X-Forwarded-Host', location.host);
    }

    getList(link :string, href?: string):Observable<any>{
        var options: EntityOptions= {
            link: link,
            params: PageNumber[link],
            href: href
        };
        return this.httpGet(options).map(res=> {
            var json = res.json();
            if (json.page) {
                var pagingEntity = this.pagingEntity(json, options);
                pagingEntity.list.forEach(i=>this.resolveLinks(i));
                return pagingEntity;
            }else{
                const list: any[] = json._embedded[options.link];
                list.forEach(i=>this.resolveLinks(i));
                return list;
            }
        });
    }

    private pagingEntity(json: any, options:EntityOptions):PagingEntity<any> {
        var pagingEntity = new PagingEntity(json._embedded[options.link], json.page);
        var pagingLink = (pLink:string)=> {
            if (json._links[pLink])
                pagingEntity[pLink] = () => this.getList(
                    options.link,
                    json._links[pLink].href);
        };
        pagingLink('first');
        pagingLink('next');
        pagingLink('last');
        return pagingEntity;
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

    private httpGet(options: EntityOptions): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            let link = options.link;
            options.href = entity._links[link].href;
            this.resolveOptions(options);
            return this.http.get(options.href, {
                headers: this.headers,
                search: options.searchParams});
        });
    }

    private resolveOptions(options: EntityOptions){
        var resolveUriVariables = (uri: string, params:{}):string=>{
            for(let p in params)
                uri = uri.split("{"+p+"}").join(params[p]);
            return uri;
        };

        var resolveUriParameters = ()=>{
            let matcher = options.href.match(/{\?(.*)}/);
            if(! matcher) return;

            options.href = options.href.split(matcher[0])[0];

            if(!options.searchParams)
                options.searchParams = new URLSearchParams();
            for(let p of matcher[1].split(',')){
                if(options.params[p])
                    options.searchParams.append(p, options.params[p]);
            }
        };

        options.href = resolveUriVariables(options.href, options.params);
        resolveUriParameters();
    }

    private httpPOST(link: string, body: any): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            return this.http.post(entity._links[link].href, body, {headers: this.headers});
        });
    }
    
}
import {Http, Headers, URLSearchParams, RequestOptionsArgs} from "@angular/http";
import 'rxjs/add/operator/map';
import {Injectable, ReflectiveInjector} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {PagingEntity} from "./paging.entity";
import {HalOptions} from "./hal.options";

export interface EntityOptions{
    link: string;
    href?: string;
    search?: boolean;
    params?: {};
    searchParams?: URLSearchParams;
}

@Injectable()
export class HalClient{
    headers: Headers;
    entryPoint;
    searchKey = "search";
    entryURL: string = "api";

    constructor(private http: Http){
        this.headers = new Headers();
        this.headers.append('X-Forwarded-Host', location.host);
    }

    getList(resource: string, options?: HalOptions): any{
        return this.httpGet(resource, options).map(res=> {
            var json = res.json();
            if (json.page) {
                var pagingEntity = this.pagingEntity(json,resource, options);
                pagingEntity.list.forEach(i=>this.resolveLinks(i));
                return pagingEntity;
            }else{
                const list: any[] = json._embedded[resource];
                list.forEach(i=>this.resolveLinks(i));
                return list;
            }
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

    private pagingEntity(json: any, resource: string, options:HalOptions):PagingEntity<any> {
        var pagingEntity = new PagingEntity(json._embedded[resource], json.page);

        pagingLink('first');
        pagingLink('next');
        pagingLink('last');
        return pagingEntity;

        function pagingLink (pLink:string){
            if (json._links[pLink])
                pagingEntity[pLink] = () => this.getList(
                    resource,
                    {href: json._links[pLink].href})
        }
    }

    private httpGet(resource: string, options?: HalOptions): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            let urlSearchParams: URLSearchParams = null;
            let href = options ? options.href : null;
            if( ! href){
                href = entity._links[resource].href;
                if(options){
                    options.href = href;
                    urlSearchParams = this.resolveOptions(options);
                    href = options.href;
                }
            }
            return this.http.get(href, {
                headers: this.headers,
                search: urlSearchParams});
        });
    }

    private resolveOptions(options: HalOptions): URLSearchParams {
        let resolveSearchUri = (uri: string):string =>{
            if(options.search){
                let searchKey = this.searchKey;
                if(options.searchKey){
                    searchKey = options.searchKey;
                }
                if(! uri.endsWith("/"))
                    uri += "/";
                uri += searchKey;
            }
            options.search = false;
            return uri;
        };


        options.href = resolveSearchUri(options.href);
        options.href = resolveUriVariables(options.href, options.params);
        return resolveUriParameters();

        function resolveUriVariables(uri: string, params:{}):string{
            for(let p in params)
                uri = uri.split("{"+p+"}").join(params[p]);
            return uri;
        }

        function resolveUriParameters():URLSearchParams{
            let matcher = options.href.match(/{\?(.*)}/);
            if(! matcher) return null;

            options.href = options.href.split(matcher[0])[0];

            let searchParams = new URLSearchParams();
            for(let p of matcher[1].split(',')){
                if(options.params[p])
                    searchParams.append(p, options.params[p]);
            }
            return searchParams;
        }
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

        return this.http.get(this.entryURL, {headers: this.headers})
            .map(res=>this.entryPoint=res.json());
    }

    private httpPOST(link: string, body: any): Observable<any>{
        return this.getEntryPoint().flatMap(entity=>{
            return this.http.post(entity._links[link].href, body, {headers: this.headers});
        });
    }

}

export interface HalEntity<T>{
    _links: {
        [index: string]: {
            href: string;
        };
    };
    _embedded? : {
        [index: string]: [T];
    };
}
import {Artista} from "./artista";

export interface SearchJson {
    artists:{
        href:string,
        items:Artista[],
        limit:number,
        next:string,
        offset:number,
        previous:string,
        total:number
    }
}

import { Images } from "./images";

export interface Album {
    album_type:string,
    artists:{
        external_urls:{
            spotify:string
        },
        href:string,
        id:string,
        name:string,
        type:string,
        uri:string
    }[],
    available_markets:string[],
    external_urls:string,
    href:string,
    id:string,
    images:Images[],
    name:string,
    release_date:string,
    release_date_precision:string,
    total_tracks:number,
    type:string,
    uri:string
}

import { Images } from "./images";

export interface Artista {
    external_urls: {
        spotify: string
    },
    followers: {
        href: string,
        total: number
    },
    genres: string[],
    href: string,
    id: string,
    images:Images[],
    name: string,
    popularity: number,
    type: string,
    uri: string
}

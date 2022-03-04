import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artista } from '../interfaces/artista';

const optionsArtisDetails = {
  headers: new HttpHeaders ({
    Accept: 'application/json', 
    'Content-Type' :'application/json', 
    Authorization: ''
  })
};

const url = 'https://api.spotify.com/v1/artists/';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  constructor(private http: HttpClient) { }

  getArtistDetails(id:string){
    return this.http.get<Artista>(url + id,optionsArtisDetails);
  }
}

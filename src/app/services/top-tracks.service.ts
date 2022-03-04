import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tracks } from '../interfaces/tracks';

const optionsTopTracks = {
  headers: new HttpHeaders ({
    Accept: 'application/json', 
    'Content-Type' :'application/json', 
    Authorization: ''
  })
};

const url = 'https://api.spotify.com/v1/artists/';
const trackUrl = '/top-tracks';
const market = '?market=ES';

@Injectable({
  providedIn: 'root'
})

export class TopTracksService {
  constructor(private http: HttpClient) { }

  getTracks(id:string){
    return this.http.get<Tracks>(url + id + trackUrl + market, optionsTopTracks);
  }
}

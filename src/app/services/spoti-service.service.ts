import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Releases } from '../interfaces/releases';

const optionsNewReleases = {
  headers: new HttpHeaders ({
    Accept: 'application/json', 
    'Content-Type' :'application/json', 
    Authorization: ''
  })
};

const url = 'https://api.spotify.com/v1/browse/new-releases?country=ES&limit=10&offset=5';

@Injectable({
  providedIn: 'root',
})

export class SpotiService {
  constructor(private http: HttpClient) { }

  getNewReleases(){
    return this.http.get<Releases>(url, optionsNewReleases);
  }
}

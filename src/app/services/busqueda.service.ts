import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchJson } from '../interfaces/search-json';

const optionsSearch = {
  headers: new HttpHeaders ({
    Accept: 'application/json', 
    'Content-Type' :'application/json', 
    Authorization: ''
  })
};

const baseUrl = 'https://api.spotify.com/v1/search';
const nombreUrl = '?q='
const type = '&type=artist'
const market = '&market=ES'


@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(private http: HttpClient) { }

  getSearch(nombre:string){
    return this.http.get<SearchJson>(baseUrl + nombreUrl + nombre + type + market,optionsSearch);
  }
}

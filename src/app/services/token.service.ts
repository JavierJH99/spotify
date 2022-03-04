import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Token } from '../interfaces/token';
import { environment } from 'src/environments/environment';

const optionsToken = {
  headers: new HttpHeaders ({
    Authorization: environment.myToken,
    'Content-Type' :'application/x-www-form-urlencoded', 
  }),
  params: 
    new HttpParams().set('grant_type', 'client_credentials')
}

const url = 'https://accounts.spotify.com/api/token';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor(private http: HttpClient) { }

  getNewToken(){
    return this.http.post<Token>(url, '', optionsToken);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  newToken = '';

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    if(request.method == 'GET'){
      return this.tokenService.getNewToken().pipe(
        tap(resp => this.newToken = resp.access_token),
        switchMap((resp) => {
            const authorizationReq = request.clone({
              headers: request.headers.set('Authorization','Bearer ' + resp.access_token)});
          
            return next.handle(authorizationReq);
        })
      );
    }
    else{
      return next.handle(request);
    }
  }
}

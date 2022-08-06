import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _Router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(catchError(err=>{
      console.log(err)
      if ([401,403].indexOf(err.stats) !== -1) {
        this._Router.navigate(['../auth/login'])
      }
      return throwError(err)
    }));
  }
}

import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}
  urlTocken:any=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NTk3ODk3NzUsImV4cCI6MTY1OTc5MzM3NX0.Ebbz60pCST6F7bD8G_VGC1jRnt2_GUKiKuqo_bEzDEE`
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(`http://localhost:8000/`)) {
      
    console.log('interceptor JWT ظهر يا بلد')
      request=request.clone( {
        setHeaders:{
          Authorization:`Bearer ${this.urlTocken}`
        }
      })
    }

    return next.handle(request);
  }
}

export const httpInterceptorProviders =[
  {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor,multi:true}

]
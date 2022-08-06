import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
 
  // register
  register(data:any)
  {
    return this._HttpClient.post(`localhost:8000/auth/register/`,data)
  }
  
}

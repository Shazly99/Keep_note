import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  urlTocken:any=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NTk2MzU5MzksImV4cCI6MTY1OTYzOTUzOX0.7PtCEEgc3bj2-ZY_t1Y8ddm5dLLCBV7q46MC0xm8mpk`
     httpOptions={
    headers:new HttpHeaders({
      'Authorization':`Bearer ${this.urlTocken}`
    })
  }
  constructor(private _HttpClient:HttpClient) { }
  // Get All Items 
  getAll():Observable<any> 
  {
    return this._HttpClient.get(`http://localhost:8000/posts`,this.httpOptions)
  }
  // Delete item by id
  deleteItem(id:number):Observable<any>
  {
   return  this._HttpClient.delete(`http://localhost:8000/posts/${id}`,this.httpOptions)
  }
  // Add new item
  addItem(data:any):Observable<any> 
  {
    return this._HttpClient.post(`http://localhost:8000/posts`,data,this.httpOptions)
  }
  // edit by id 
  update(id:any,data:any):Observable<any> 
  {
    return this._HttpClient.put(`http://localhost:8000/posts/${id}`,data,this.httpOptions)
  }
    // Get All Items 
    get(id:any):Observable<any> 
    {
      return this._HttpClient.get(`http://localhost:8000/posts/${id}`,this.httpOptions)
    }
}

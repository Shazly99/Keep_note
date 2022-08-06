import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _HttpClient: HttpClient) { }
  // get all
  getAll(): Observable<any> {
    return this._HttpClient.get(`http://localhost:8000/notes`)
  }
  // get Data By id
  getNodeById(id: any) {
    return this._HttpClient.get<any>(`http://localhost:8000/notes/${id}`)
  }
  // Delete item by id
  deleteItem(id: number): Observable<any> {
    return this._HttpClient.delete(`http://localhost:8000/notes/${id}`)
  }
  // Add new note
  addNote(data: any) {
    return this._HttpClient.post(`http://localhost:8000/notes`, data)
  }
  // edit by id 
  update(id: any, data: any): Observable<any> {
    return this._HttpClient.put(`http://localhost:8000/notes/${id}`, data)
  }

}

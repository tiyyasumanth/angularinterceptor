import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequesthanService {

  constructor(private http:HttpClient) { }

  fetchdetails(){
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  }
  fetch(){
   return this.http.get("https://jsonplaceholder.typicode.com/todos/2")
  }
}

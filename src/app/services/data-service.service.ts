import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public url = 'http://localhost:3000/v1'; //ajustar com url da API do Alberto

  constructor(private http: HttpClient) { }

  cadastraAutor(data){
    return this.http.post(`${this.url}/autor`, data)
  }
}

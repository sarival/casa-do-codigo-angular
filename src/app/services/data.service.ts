import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autor } from '../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public cadastrarAutor(autor: Autor){

    const options = {
      headers: {
        'Content-type': 'application/json'
       }
    }

    return this.http.post('https://localhost:5001/api/autores', JSON.stringify(autor), options);
  }
}

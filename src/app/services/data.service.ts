import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from '../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected url: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  cadastrarAutor(data){
    return this.http.post(this.url + "Autores", data);
  }
}

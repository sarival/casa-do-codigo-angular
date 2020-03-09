import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public baseUrl = environment.apiUrl;

  private options = {
    headers: {
      'Content-type': 'application/json'
     }
  }

  public cadastrarAutor(autor){
    return this.http.post(`${this.baseUrl}/autores`, JSON.stringify(autor), this.options);
  }


  public cadastrarCategoria(categoria){
    return this.http.post(`${this.baseUrl}/categorias`, JSON.stringify(categoria), this.options);
  }
}

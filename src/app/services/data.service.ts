import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private options = {
    headers: {
      'Content-type': 'application/json'
     }
  }

  public cadastrarAutor(autor){
    return this.http.post('https://localhost:5001/api/autores', JSON.stringify(autor), this.options);
  }


  public cadastrarCategoria(categoria){
    return this.http.post('https://localhost:5001/api/categorias', JSON.stringify(categoria), this.options);
  }
}

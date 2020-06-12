import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  constructor(private http: HttpClient) {}

  private livrosUrl = 'api/livros'

  //Entender melhor - retorna um observable
  //Como ele encontra a in-memory-data.service?
  public getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.livrosUrl);
  }

}
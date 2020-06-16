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

  public getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.livrosUrl);
  }

  public cadastrarLivro(livro){
    //post
  }

}
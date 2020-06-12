import { Component, OnInit } from '@angular/core';
import { LivroService } from './livros/livro/livro.service'
import { Livro } from './livros/livro/livro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'casa-do-codigo-angular';
  private livros: Livro[];
  
  constructor(private livroService: LivroService) {
  }

  //Entender melhor - Precisa do subcrive
  ngOnInit(){
    this.livroService.getLivros().subscribe(livros => this.livros = livros);
  }
}

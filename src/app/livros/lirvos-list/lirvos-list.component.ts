import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro/livro.service';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-lirvos-list',
  templateUrl: './lirvos-list.component.html',
  styleUrls: ['./lirvos-list.component.css']
})
export class LirvosListComponent implements OnInit {
  private title = 'casa-do-codigo-angular';
  private livros: Livro[];
  
  constructor(private livroService: LivroService) {
  }

  ngOnInit(){
    this.livroService.getLivros().subscribe(livros => this.livros = livros);
  }

}

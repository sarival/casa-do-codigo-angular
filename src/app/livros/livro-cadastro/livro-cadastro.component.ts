import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';
import { LirvosListComponent } from '../lirvos-list/lirvos-list.component';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {
  private livro = new Livro();
  private livros: Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.getLivros().subscribe(livros => this.livros = livros);
  }

  onSubmit(): void{
    this.livroService.cadastrarLivro(this.livro).subscribe(livro => {
      this.livros.push(livro);
    });

    console.log(this.livros)
  }

}

import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {
  livro = new Livro();

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.livroService.cadastrarLivro(this.livro);
  }

}

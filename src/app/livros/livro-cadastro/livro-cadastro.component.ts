import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';
import { LirvosListComponent } from '../lirvos-list/lirvos-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {
  private livro = new Livro();

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.livroService.cadastrarLivro(this.livro).subscribe(res => {this.router.navigateByUrl("/")});
  }

}

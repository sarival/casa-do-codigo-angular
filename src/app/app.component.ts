import { Component } from '@angular/core';
import { LivrosService } from './services/livros.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'casa-do-codigo-angular';

  livros = [];
  livrosService: LivrosService;

  constructor() {
    this.livrosService = new LivrosService();
  }

  //obtem dado - boa prática usar ngOnInit
  ngOnInit(){
    this.livros = this.livrosService.getlivros();
  }
}

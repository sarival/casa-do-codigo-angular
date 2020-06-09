import { Component, OnInit } from '@angular/core';
import { LivrosService } from './services/livros.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'casa-do-codigo-angular';
  private livros = [];
  
  // usando injeção de dependencia
  constructor(private livrosService: LivrosService) {
  }

  //obtem dado - boa prática usar ngOnInit
  ngOnInit(){
    this.livros = this.livrosService.getlivros();
  }
}

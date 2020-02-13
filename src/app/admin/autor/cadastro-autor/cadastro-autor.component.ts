import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Autor } from 'src/app/models/autor.model';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html'
})
export class CadastroAutorComponent implements OnInit {
  
  cadastroForm: FormGroup;
  autor: Autor;

  constructor(private fb: FormBuilder) {
  
  }
  
  ngOnInit(){
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      descricao: ['']
    });
  }

  adicionarAutor(){
    this.autor = Object.assign({}, this.autor, this.cadastroForm.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html'
})
export class CadastroAutorComponent implements OnInit {
  
  cadastroForm: FormGroup;

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
    let data = this.cadastroForm.value;
  }
}

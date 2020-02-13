import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autor } from 'src/app/models/autor.model';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html'
})
export class CadastroAutorComponent implements OnInit {
  
  cadastroForm: FormGroup;
  autor: Autor;
  formResult: string = '';

  constructor(private fb: FormBuilder) {
  
  }
  
  ngOnInit(){
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]]
    });
  }

  adicionarAutor(){
    if(this.cadastroForm.valid && this.cadastroForm.dirty){
      this.autor = Object.assign({}, this.autor, this.cadastroForm.value)
      this.formResult = JSON.stringify(this.cadastroForm.value)
    }
  }
}

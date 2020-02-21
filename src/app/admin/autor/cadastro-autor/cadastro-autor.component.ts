import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Autor } from 'src/app/models/autor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html'
})
export class CadastroAutorComponent implements OnInit {
  
  public cadastroForm: FormGroup;
  public autor: Autor;

  constructor(private fb: FormBuilder, private service: DataService, private router: Router) {
    
  }
  
  ngOnInit(){
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]]
    });
  }

  adicionarAutor(){
    if(this.cadastroForm.valid){
      this.autor = Object.assign({}, this.autor, this.cadastroForm.value);
      
      this.service.cadastrarAutor(this.autor).subscribe( res => {this.router.navigateByUrl("/")} );
    }
  }
}

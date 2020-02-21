import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Autor } from 'src/app/models/autor.model';
import { DataService } from 'src/app/services/data.service';
import { ValidationMessages, GenericValidator, DisplayMessage } from '../../generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html'
})
export class CadastroAutorComponent implements OnInit, AfterViewInit {

  //add
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  public cadastroForm: FormGroup;
  public autor: Autor;

  //add variaveis
  public validationMessages: ValidationMessages;
  public genericValidator: GenericValidator;
  public displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, private service: DataService, private router: Router) {
    
    //add nmensagens para serem exibidas
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      descricao: {
        required: 'A Descrição é requerida',
        maxlength: 'O Nome precisa ter no máximo 400 caracteres'
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  
  ngOnInit(){
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      descricao: ['', [Validators.required, Validators.maxLength(400)]]
    });
  }

  //add - apos a tela ser renderizada
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.cadastroForm);
    });
  }

  adicionarAutor(){
    if(this.cadastroForm.valid){
      this.autor = Object.assign({}, this.autor, this.cadastroForm.value);

      alert("valido");
      
      this.service.cadastrarAutor(this.autor).subscribe( res => {this.router.navigateByUrl("/")} );
    }
  }
}

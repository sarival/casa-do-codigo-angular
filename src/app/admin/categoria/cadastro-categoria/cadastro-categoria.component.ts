import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidationMessages, GenericValidator, DisplayMessage } from '../../generic-form-validation';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html'
})
export class CadastroCategoriaComponent implements OnInit, AfterViewInit {

    //add
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
    public cadastroForm: FormGroup;
  
    //add variaveis
    public validationMessages: ValidationMessages;
    public genericValidator: GenericValidator;
    public displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder, private service: DataService, private router: Router) {
        //add nmensagens para serem exibidas
        this.validationMessages = {
          nome: {
            required: 'O Nome é requerido',
          }
        };
    
        this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required]
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

  adicionarCategoria(){
    if(this.cadastroForm.valid){
      this.service.cadastrarCategoria(this.cadastroForm.value).subscribe( res => {this.router.navigateByUrl("/")} );
    }
  }

}

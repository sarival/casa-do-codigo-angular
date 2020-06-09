import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';
import { CadastroCategoriaComponent } from './admin/categoria/cadastro-categoria/cadastro-categoria.component';
import { LivroService } from './livros/livro/livro.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAdminComponent,
    CadastroAutorComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

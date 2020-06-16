import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';
import { CadastroCategoriaComponent } from './admin/categoria/cadastro-categoria/cadastro-categoria.component';
import { LivroService } from './livros/livro/livro.service';
import { LirvosListComponent } from './livros/lirvos-list/lirvos-list.component';
import { LivroCadastroComponent } from './livros/livro-cadastro/livro-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // HomeAdminComponent,
    // CadastroAutorComponent,
    // CadastroCategoriaComponent,
    LirvosListComponent,
    LivroCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

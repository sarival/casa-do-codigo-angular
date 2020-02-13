import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CadastroAutorComponent } from './admin/cadastro-autor/cadastro-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAdminComponent,
    CadastroAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

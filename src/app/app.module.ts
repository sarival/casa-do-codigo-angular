import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navegacao/navbar/navbar.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAdminComponent,
    CadastroAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

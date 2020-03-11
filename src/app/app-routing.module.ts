import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';
import { CadastroCategoriaComponent } from './admin/categoria/cadastro-categoria/cadastro-categoria.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeAdminComponent},
  {path: 'autores', component: CadastroAutorComponent},
  {path: 'categorias', component: CadastroCategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

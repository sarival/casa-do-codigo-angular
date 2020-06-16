import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';
import { CadastroCategoriaComponent } from './admin/categoria/cadastro-categoria/cadastro-categoria.component';
import { LirvosListComponent } from './livros/lirvos-list/lirvos-list.component';
import { LivroCadastroComponent } from './livros/livro-cadastro/livro-cadastro.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LirvosListComponent},
  {path: 'cadastro', component: LivroCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAutorComponent } from './admin/autor/cadastro-autor/cadastro-autor.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeAdminComponent},
  {path: 'autores', component: CadastroAutorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

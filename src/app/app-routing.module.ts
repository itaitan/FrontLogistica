import { EnderecoListComponent } from './components/endereco/endereco-list/endereco-list.component';
import { EnderecoCreateComponent } from './components/endereco/endereco-create/endereco-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [{
  path: '', component: NavComponent, children: [
    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClienteListComponent },
    { path: 'clientes/create', component: ClienteCreateComponent },
    { path: 'clientes/update/:id', component: ClienteUpdateComponent },
    { path: 'clientes/enderecos/create/:id', component: EnderecoCreateComponent },
    { path: 'clientes/enderecos/view/:id', component: EnderecoListComponent },

  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

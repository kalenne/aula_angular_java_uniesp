import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarClienteComponent } from './pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';

const routes: Routes = [
 {path: '', component: HomeComponent, pathMatch: 'full' /*rediciona para pagina inicial uma rota em branco*/ },
 {path: 'extrato', component: ExtratoComponent},
 {path: 'saque', component: SaqueComponent},
 {path: 'deposito', component: DepositoComponent},
 {path: 'cliente', component: ClienteComponent},
 {path: 'cliente/cadastrar', component: CadastrarClienteComponent},
 {path: '**', component: HomeComponent, pathMatch: 'full' /*sempre sendo o ultimo e rediciona para pagina inicial uma rota não existente*/}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

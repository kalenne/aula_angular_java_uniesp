import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';

const routes: Routes = [
 {path: '', component: HomeComponent, pathMatch: 'full' /*rediciona para pagina inicial uma rota em branco*/ },
 {path: 'extrato', component: ExtratoComponent},
 {path: 'saque', component: SaqueComponent},
 {path: 'deposito', component: DepositoComponent},
 {path: '**', component: HomeComponent, pathMatch: 'pull'  /*rediciona para pagina inicial uma rota não existente*/},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

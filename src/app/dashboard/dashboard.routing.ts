import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListarParcelaComponent } from './listar-parcela/listar-parcela.component';
import { ListarPredioComponent } from './listar-predio/listar-predio.component';
import { CrearPredioComponent } from './crear-predio/crear-predio.component';
import { AuthGuard } from '../guards/auth.guard';
import { CrearRegistroComponent } from './crear-registro/crear-registro.component';
import { ListarBitacoraComponent } from './listar-bitacora/listar-bitacora.component';
import { EditarRegistroComponent } from './editar-registro/editar-registro.component';
import { PnlDemostrativaComponent } from './pnl-demostrativa/pnl-demostrativa.component';
import { PnlTestigoComponent } from './pnl-testigo/pnl-testigo.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard],
      children : [
        { path: 'listar-predio', component: ListarPredioComponent },
        { path: 'listar-parcela/:id_predio', component: ListarParcelaComponent },
        { path: 'crear-predio', component: CrearPredioComponent },
        { path: 'crear-registro', component: CrearRegistroComponent},
        { path: 'listar-bitacora', component: ListarBitacoraComponent},
        { path: 'editar-registro/:id', component: EditarRegistroComponent},
        { path: 'pnl-demostrativa/:id', component: PnlDemostrativaComponent},
        { path: 'pnl-testigo/:id', component: PnlTestigoComponent}
      ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

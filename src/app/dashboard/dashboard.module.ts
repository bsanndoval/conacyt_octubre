import { CommonModule, getLocaleDateFormat } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListarPredioComponent } from './listar-predio/listar-predio.component';
import { RouterModule } from '@angular/router';
import { CrearPredioComponent } from './crear-predio/crear-predio.component';
import { ListarParcelaComponent } from './listar-parcela/listar-parcela.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearRegistroComponent } from './crear-registro/crear-registro.component';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatTableModule } from '@angular/material/table';
import { ListarBitacoraComponent } from './listar-bitacora/listar-bitacora.component';
import { EditarRegistroComponent } from './editar-registro/editar-registro.component';
import { PnlDemostrativaComponent } from './pnl-demostrativa/pnl-demostrativa.component';
import { PnlTestigoComponent } from './pnl-testigo/pnl-testigo.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ListarPredioComponent,
    CrearPredioComponent,
    ListarParcelaComponent,
    CrearRegistroComponent,
    ListarBitacoraComponent,
    EditarRegistroComponent,
    PnlDemostrativaComponent,
    PnlTestigoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    MatIconModule
    
  ]

  
})
export class DashboardModule { 

  

}

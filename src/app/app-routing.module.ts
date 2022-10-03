import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './dashboard/dashboard.routing';
import { LoginComponent } from './dashboard/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo :'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

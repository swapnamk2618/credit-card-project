import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { AuthComponent } from './component/auth/auth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PaymentComponent } from './component/payment/payment.component';
import { TransactionComponent } from './component/transaction/transaction.component';

const routes: Routes = [
  
  {path:'dashboard',component:DashboardComponent},
  {path:'auth',component:AuthComponent},
{path:"transaction",component:TransactionComponent},
{path:"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

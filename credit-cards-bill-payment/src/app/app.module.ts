import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    PaymentComponent,
    TransactionComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,MatCardModule,FormsModule,
    HttpClientModule,MatRadioModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

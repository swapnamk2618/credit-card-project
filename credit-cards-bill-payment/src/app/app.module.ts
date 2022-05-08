import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/component/home/home.component';
import { RegisterComponent } from '../app/component/register/register.component';
import { LoginComponent } from '../app/component/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../app/component/dashboard/dashboard.component';
import { NavbarComponent } from '../app/component/navbar/navbar.component';
import { PaymentComponent } from '../app/component/payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { TransactionComponent } from '../app/component/transaction/transaction.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from '../app/component/auth/auth.component';


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

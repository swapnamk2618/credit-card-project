import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginCustomerService } from '../service/login-customer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private loginService:LoginCustomerService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.successMessage="Please wait logging in..."
     console.log(this.loginForm)
  }

  onLogin(){
    this.loginService.login(this.loginForm.value)
    .subscribe((res)=>{
      console.log(res);
    })
  }
}


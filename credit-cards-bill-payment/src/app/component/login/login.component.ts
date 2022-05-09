import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCustomerService } from 'src/app/service/register-customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private router: Router,private registerService:RegisterCustomerService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userEmail:['',[Validators.required, Validators.pattern("[A-Za-z0-9]*@gmail.com")]],
      userPassword:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
  }

  login(){
    this.successMessage="Please wait logging in..."
     console.log(this.loginForm)
    
  }
//   gotoHome(){
//     this.router.navigate(['/dashboard']);  // define your component where you want to go
// }
onLogin(){
  this.registerService.login(this.loginForm.value)
  .subscribe((res)=>{
    console.log(res);
  })
}
  
}


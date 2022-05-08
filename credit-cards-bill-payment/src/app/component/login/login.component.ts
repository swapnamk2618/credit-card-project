import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  successMessage:string ="";
  loginForm!: FormGroup; 
  constructor(private fb: FormBuilder,private router: Router) { }

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
//   gotoHome(){
//     this.router.navigate(['/dashboard']);  // define your component where you want to go
// }
  
}


import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { RegisterCustomerService } from '../service/register-customer.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  successMessage:string =""

  regForm!:FormGroup

  constructor(private fb: FormBuilder,private registerService:RegisterCustomerService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, ]],
      email:['',[Validators.required,Validators.pattern("[A-Za-z0-9]*@gmail.com") ]],
      password: ['',[Validators.required,]]
    })
  }

  register(){
    this.successMessage = "Successfully Registered..."
    // console.log(this.regForm)
  }
  onRegister(){
    this.registerService.register(this.regForm.value)
    .subscribe((res)=>{
      console.log(res);
    })
  }

}

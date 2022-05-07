import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'credit-cards-bill-payment';
  flag:boolean = true
  apply(value:string){
    this.flag = value == "login"?true : false;
}

  constructor() { }

  ngOnInit(): void {
  }

}

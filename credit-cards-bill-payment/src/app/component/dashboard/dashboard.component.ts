import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/categories';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // longText = `Swapna Kochrekar`;
  // longText1 = `Jagdeesh Gali`;
  transform(value:string): string{
    switch(value){
      case 'Reported':{
        return 'red';
      }
      case 'Resolved':{
        return 'green';
      }
      default:
        return '';
    }
  }
  // longText2 = `Sathendra Kumar Pal`;
  
  li=categories;

  constructor() { }

  ngOnInit(): void {
  }

  
}

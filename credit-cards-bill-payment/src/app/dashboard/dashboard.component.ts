import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  longText = `Swapna Kochrekar`;
  longText1 = `Jagdeesh Gali`;
  longText2 = `Sathendra Kumar Pal`;

  constructor() { }

  ngOnInit(): void {
  }

}

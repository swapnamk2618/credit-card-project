import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor() {
    this.getData();
   }
  array:any=[{
    Id:1,
    Date:'21-5-2022',
Amount:1000,
  },
  {
  Id:2,
  Date:'22-4-2019',
Amount:7000,
},
{
  Id:3,
  Date:'26-3-2013',
Amount:50000,
},
{
  Id:4,
  Date:'21-5-2011',
Amount:50000,
},
{
  Id:5,
  Date:'26-7-2013',
Amount:50000,
},
{
  Id:6,
  Date:'26-7-2019',
Amount:150000,
}

]
tabKey:any=[];
tabValue:any=[];
getData(){
 this.array.forEach((element:any) => {
   console.log(element);
   this.tabKey=Object.keys(element);
   this.tabValue.push(Object.values(element));
 }); 
 console.log(this.tabKey);

}
ngOnInit(): void {
}

}

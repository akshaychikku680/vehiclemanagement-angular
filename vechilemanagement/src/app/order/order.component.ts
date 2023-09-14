import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  data:any=[]

  constructor(private ds:DataService,private r:Router){
    this.ds.getSpecificbuser().then(res=>res.json()).then(res=>this.data=res)
  }

}

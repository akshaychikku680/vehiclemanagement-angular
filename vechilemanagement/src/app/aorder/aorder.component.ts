import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aorder',
  templateUrl: './aorder.component.html',
  styleUrls: ['./aorder.component.css']
})
export class AorderComponent {

  data:any=[]

  constructor(private ds:DataService,private r:Router){
    this.ds.getSpecificbuser().then(res=>res.json()).then(res=>this.data=res)
  }

}

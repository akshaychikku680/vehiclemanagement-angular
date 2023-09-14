import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chome',
  templateUrl: './chome.component.html',
  styleUrls: ['./chome.component.css']
})
export class ChomeComponent {

  data:any=[]

  constructor(private ds:DataService,private r:Router){
    this.ds.getVechile().then(res=>res.json()).then(res=>this.data=res)
  }

  bookPage(e:any){
    this.r.navigate(['book',e.target.id])
  }

  logout(){
    localStorage.clear()
    this.r.navigate([''])
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  pid:any;
  v:any=[]


  constructor(private ar:ActivatedRoute,private fb:FormBuilder,private ds:DataService,private r:Router){

    this.ar.params.subscribe(res=>this.pid=res['id'])
    console.log(this.pid)
    this.ds.getSpecificVechile(this.pid).then(res=>res.json()).then(res=>this.v=res)

  }

  proForm=this.fb.group({
    dr:['',[Validators.required]],
  })

  submitted(){
    if(this.proForm.valid){
      let dt:any = this.proForm.controls.dr.value
      this.ds.getBorrow(this.pid,dt).then(res=>res.json()).then(res=>{
        alert('Booked')
        this.r.navigate(['chome'])
      }).catch(res=>res.error)
    }
    else{
      alert('enter date')
    }
  }
  
}



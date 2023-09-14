import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  file:any;

  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  proForm=this.fb.group({
    num:['',[Validators.required]],
    mod:['',[Validators.required]],
    seatc:['',[Validators.required]],
    rentpd:['',[Validators.required]],
  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }

  submitted(){
    console.log(this.proForm.value)

    let n:any=this.proForm.controls.num.value
    let m:any=this.proForm.controls.mod.value
    let sc:any=this.proForm.controls.seatc.value
    let r:any=this.proForm.controls.rentpd.value

    let formd= new FormData()
    formd.append('vechile_number',n)
    formd.append('model',m)
    formd.append('seating_capacity',sc)
    formd.append('rent_per_day',r)
    formd.append('vechile_image',this.file,this.file.name)

    this.ds.addVechile(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert("Vehicle added successfully!")
        this.r.navigate(['home'])
      }
      else{
        alert("Something wrong!")
      }
    })

  }

}

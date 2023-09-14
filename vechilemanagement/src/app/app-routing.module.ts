import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ChomeComponent } from './chome/chome.component';
import { AddComponent } from './add/add.component';
import { BookComponent } from './book/book.component';
import { OrderComponent } from './order/order.component';
import { AorderComponent } from './aorder/aorder.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'chome',component:ChomeComponent},
  {path:'order',component:OrderComponent},
  {path:'aorder',component:AorderComponent},
  {path:'book/:id',component:BookComponent},
  {path:'add',component:AddComponent},
  {path:'reg',component:RegisterComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  signup(email:any,username:any,password:any,first_name:any,last_name:any){

    let data={
      email,
      username,
      password,
      first_name,
      last_name
    }

   return fetch('http://127.0.0.1:8000/vec/user/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
  }

  signin(username:any,password:any){
    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/vec/token', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
})
  }

  getVechile(){
    return fetch('http://127.0.0.1:8000/vec/vechile/',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

  addVechile(data:any){
    return fetch('http://127.0.0.1:8000/vec/vechile/', {
    method: 'POST',
    body:data,
    headers: {
      // 'Content-type': 'application/json; charset=UTF-8',
      'Accept':'*/*',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

  deleteVechile(id:any){
    return fetch(`http://127.0.0.1:8000/vec/vechile/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

  getSpecificVechile(id:any){
    return fetch(`http://127.0.0.1:8000/vec/vechile/${id}/`,{
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

  getBorrow(id:any,date_of_return:any){
    let data={
      date_of_return
    }
    return fetch(`http://127.0.0.1:8000/re/rent/${id}/borrow_this_vehicle/`,{
    method: 'POST',
    body:JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

  getSpecificbuser(){
    return fetch('http://127.0.0.1:8000/re/rent/',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization':`Token ${localStorage.getItem('token')}`
    },
})
  }

}

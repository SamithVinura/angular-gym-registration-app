import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl:string = 'https://angular-gymregistration-b3ada-default-rtdb.firebaseio.com/users.json'

  constructor(private http:HttpClient) { }

  postRegistration(registerObj:User){
    return this.http.post<User>(`${this.baseUrl}`,registerObj)
  }

  getRegisteredUser(){
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  updateRegisterUser(registerObj:User,id:string){
    return this.http.put<User>(`${this.baseUrl}/${id}`,registerObj)
  }

  deleteRegisterUser(id:string){
    return this.http.delete<User>(`${this.baseUrl}/${id}`)
  }

  getRegisterUserId(id:string){
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
}

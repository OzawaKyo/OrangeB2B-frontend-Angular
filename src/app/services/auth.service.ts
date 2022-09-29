import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data : { login : string|null, password : string|null }){
    return this.http.post("http://localhost:8081/OrangeB2B/api/accounts/login",data);
  }


}

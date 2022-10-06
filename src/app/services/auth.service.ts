import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data : { login : string|null, password : string|null }){
    return this.http.post(`${environment.apiUrl}/OrangeB2B/api/accounts/login`,data);
  }


}

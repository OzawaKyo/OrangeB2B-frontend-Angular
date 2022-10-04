import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http:HttpClient) { }

  getAllVoip(){
   return this.http.get(`${environment.apiUrl}/OrangeB2B/api/catalogue/voip/get`)
  }

  createC(catalogue:any){
    return this.http.post(`${environment.apiUrl}/OrangeB2B/api/catalogue/create`,catalogue);
  }
  getVoip(id:any){
    return this.http.get(`${environment.apiUrl}/OrangeB2B/api/catalogue/get/${id}`)
   }
}

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

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../model/catalogue';
import { Offre } from '../model/offre';
import { OffreService } from '../services/offre.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  catalogues:Catalogue[]=[];
  catalogue: any
  id:string=''

  constructor(private offreService:OffreService,private httpClient:HttpClient,private router:Router) {
    this.offreService.getAllSwitch()
    .subscribe(res=>{ this.catalogue = res;
               this.catalogues=this.catalogue;})
   }

  ngOnInit(): void {
  }





  getId(i:any){

    this.router.navigateByUrl(`orangeb2b/consulter/${i}`)
  }

}

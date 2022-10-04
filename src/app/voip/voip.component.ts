import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../model/catalogue';
import { Offre } from '../model/offre';
import { OffreService } from '../services/offre.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export class Catalogues{
  constructor(public catalogue: Array<Catalogue>){

  }
}

@Component({
  selector: 'app-voip',
  templateUrl: './voip.component.html',
  styleUrls: ['./voip.component.css']
})

export class VoipComponent implements OnInit {

  catalogues:Catalogue[]=[];
  catalogue: any
  id:string=''


  constructor(private offreService:OffreService,private httpClient:HttpClient,private router:Router){
    this.offreService.getAllVoip()
     .subscribe(res=>{ this.catalogue = res;
                this.catalogues=this.catalogue;})
   }

  ngOnInit(): void {


  }

  getId(i:any){

    this.router.navigateByUrl(`orangeb2b/consulter/${i}`)
  }






}

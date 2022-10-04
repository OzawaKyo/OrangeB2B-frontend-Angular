import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogue } from '../model/catalogue';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  catalogues ={
    categorie:'',
    offre :[{
      offreName:'',
      service:[{
        typeService:'',
        equipement:[{
          typeEquipement:'',
          caracteristique:[{
            marque: '',
                  nbrPort:'' ,
                  aplSim: '',
                  acces: '',
                  prix: ''

          }]
        }]
      }]
    }]
  }

  constructor(private httpClient:HttpClient,private offreService:OffreService,private router:Router) {



   }



  ngOnInit(): void {
  }

  create(){
    this.offreService.createC(this.catalogues).subscribe(res => console.log("created"))
    this.router.navigateByUrl("/orangeb2b/voip")
  }

}

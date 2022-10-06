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


  catalogues = {
    categorie: '',
    offre: [{
      offreName: '',
      service: [{
        typeService: '',
        equipement: [{
          typeEquipement: '',
          caracteristique: [{
            marque: '',
            nbrPort: '',
            aplSim: '',
            acces: '',
            prix: ''

          }]
        }]
      }]
    }]
  }

  step: any = 1
  constructor(private httpClient: HttpClient, private offreService: OffreService, private router: Router) {
    console.log(this.step);



  }



  ngOnInit(): void {
  }

  create() {
    this.offreService.createC(this.catalogues).subscribe(res => console.log("created"))
    this.router.navigateByUrl(`/orangeb2b/${this.catalogues.categorie.toLowerCase()}`)
  }

  next() {
    if (this.catalogues.categorie != '' && this.catalogues.offre[0].offreName != '' && this.catalogues.offre[0].service[0].typeService != '' && this.catalogues.offre[0].service[0].equipement[0].typeEquipement != '') {
      this.step = this.step + 1
    }
    console.log(this.step);
    console.log(this.catalogues);

  }
  previous() {
    this.step = this.step - 1
    console.log(this.step);
  }
}

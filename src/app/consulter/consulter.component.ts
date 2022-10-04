import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Catalogue } from '../model/catalogue';
import { Offre } from '../model/offre';
import { OffreService } from '../services/offre.service';
import { VoipComponent } from '../voip/voip.component';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {

  constructor(private route: ActivatedRoute,private offreService:OffreService) { }
  offres:Offre | undefined
  offre: any
  ids={
    serviceId:'',
    equipementId:''
  }
  ngOnInit() {

    let id = this.route.snapshot.params['Id'];
    let serviceId
    this.offreService.getVoip(id).subscribe(res=>{ this.offre = res;
                this.offres=this.offre;
      })

  }



}



import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-voip',
  templateUrl: './voip.component.html',
  styleUrls: ['./voip.component.css']
})
export class VoipComponent implements OnInit {

  constructor(private offreService:OffreService){ }

  ngOnInit(): void {

    this.getAllCatalogue();

  }

  getAllCatalogue(){
    this.offreService.getAllVoip().subscribe(res => console.log(res));
  }

}

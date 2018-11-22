import { Component, OnInit } from '@angular/core';
import { ISpecies } from "./species";
import { SpeciesService } from "./species-service";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  public species;
  constructor(private _SpeciesService: SpeciesService) { }

  ngOnInit() {
    this._SpeciesService.getSpecies()
        .subscribe((data: ISpecies) => {this.species = data.results;
          console.log(this.species)});
  }

}

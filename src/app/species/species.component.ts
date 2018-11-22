import { Component, OnInit } from '@angular/core';
import { ISpecies, Result } from "./species";
import { SpeciesService } from "./species-service";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  mySpeciesList: Result[] = [];
  page: number = 1;

  constructor(private _SpeciesService: SpeciesService) { }

  ngOnInit() {
    this.getSpecies();
  }

  getSpecies() {
    console.log(this.page);
    this._SpeciesService.getSpeciesV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.mySpeciesList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getSpecies();
  }

}

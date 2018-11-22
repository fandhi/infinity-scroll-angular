import { Component, OnInit } from '@angular/core';
import { IPlanets, Result } from "./planets";
import { PlanetsService } from "./planets-service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  myPlanetsList: Result[] = [];
  page: number = 1;

  constructor(private _PlanetsService: PlanetsService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets() {
    console.log(this.page);
    this._PlanetsService.getPlanetsV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myPlanetsList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getPlanets();
  }

}

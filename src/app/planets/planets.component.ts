import { Component, OnInit } from '@angular/core';
import { IPlanets } from "./planets";
import { PlanetsService } from "./planets-service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  array = [];
  sum = 5;
  public planets = [];
  constructor(private _PlanetsService: PlanetsService) {
    for (let i = 0; i < this.sum; ++i ) {
      this.planets.push(i);
    }
   }

  ngOnInit() {
      this._PlanetsService.getPlanets()
        .subscribe((data: IPlanets) => {this.planets = data.results;
          // console.log(this.planets)
        });
  }
  onScroll() {
    console.log('scrolled');
  }

}

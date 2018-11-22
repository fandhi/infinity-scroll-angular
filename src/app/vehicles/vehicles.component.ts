import { Component, OnInit } from '@angular/core';
import { IVehicles } from "./vehicles";
import { VehiclesService } from "./vehicles-service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  public vehicles;
  constructor(private _VehiclesService: VehiclesService) { }

  ngOnInit() {
    this._VehiclesService.getVehicles()
        .subscribe((data: IVehicles) => {this.vehicles = data.results;
          console.log(this.vehicles)});
  }

}

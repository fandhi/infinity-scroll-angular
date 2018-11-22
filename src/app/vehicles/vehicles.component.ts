import { Component, OnInit } from '@angular/core';
import { IVehicles, Result } from "./vehicles";
import { VehiclesService } from "./vehicles-service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  myVehiclesList: Result[] = [];
  page: number = 1;

  constructor(private _VehiclesService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    console.log(this.page);
    this._VehiclesService.getVehiclesV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myVehiclesList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getVehicles();
  }

}

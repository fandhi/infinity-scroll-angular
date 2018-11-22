import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVehicles} from "./vehicles";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private _url: string = 'https://swapi.co/api/vehicles/';
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<IVehicles> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IVehicles>(this._url);
  }
}

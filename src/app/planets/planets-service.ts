import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanets} from "./planets";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private _url: string = 'https://swapi.co/api/planets/';
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<IPlanets> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IPlanets>(this._url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStarships} from "./starships";

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private _url: string = 'https://swapi.co/api/starships/';
  constructor(private http: HttpClient) { }

  getStarships(): Observable<IStarships> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IStarships>(this._url);
  }

  getStarshipsV2(page: number): Observable<IStarships> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IStarships>('https://swapi.co/api/starships/?page='+page);
  }
}

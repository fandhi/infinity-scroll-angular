import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPeople } from "./people";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private _url: string = 'https://swapi.co/api/people/';
  constructor(private http: HttpClient) { }

  getPeople(): Observable<IPeople> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IPeople>(this._url);
  }

  getPeopleV2(page: number): Observable<IPeople> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IPeople>('https://swapi.co/api/people/?page-'+page);
  }
}

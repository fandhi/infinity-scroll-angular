import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilms } from "./films";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private _url: string = 'https://swapi.co/api/films/';
  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilms> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IFilms>(this._url);
  }

  getFilmsV2(page: number): Observable<IFilms> {
    const httpOptions = { headers: new HttpHeaders};
    return this.http.get<IFilms>('https://swapi.co/api/films/?page='+page);
  }
}

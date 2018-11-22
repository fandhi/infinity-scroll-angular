import { Component, OnInit } from '@angular/core';
import { IFilms, Result } from "./films";
import { FilmsService } from "./films-service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  myFilmsList: Result[] = [];
  page: number = 1;

  constructor(private _FilmsService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    console.log(this.page);
    this._FilmsService.getFilmsV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myFilmsList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getFilms();
  }

}

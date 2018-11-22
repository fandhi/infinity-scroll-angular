import { Component, OnInit } from '@angular/core';
import { IFilms } from "./films";
import { FilmsService } from "./films-service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  public films;
  constructor(private _FilmsService: FilmsService) { }

  ngOnInit() {
    this._FilmsService.getFilms()
        .subscribe((data: IFilms) => {this.films = data.results;
          // console.log(this.films)
        });
  }

}

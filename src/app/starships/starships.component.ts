import { Component, OnInit } from '@angular/core';
import { IStarships, Result } from "./starships";
import { StarshipsService } from "./starships-service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  myStarshipsList: Result[] = [];
  page: number = 1;

  constructor(private _StarshipsService: StarshipsService) { }

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    console.log(this.page);
    this._StarshipsService.getStarshipsV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myStarshipsList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getStarships();
  }

}

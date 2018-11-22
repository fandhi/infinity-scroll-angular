import { Component, OnInit } from '@angular/core';
import { IStarships } from "./starships";
import { StarshipsService } from "./starships-service";

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  public starships;
  constructor(private _StarshipsService: StarshipsService) { }

  ngOnInit() {
    this._StarshipsService.getStarships()
      .subscribe((data: IStarships) => {this.starships = data.results;
      // console.log(this.starships)
    })
  }

}

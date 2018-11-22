import { Component, OnInit } from '@angular/core';
import { IPeople } from "./people";
import { PeopleService } from "./people-service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  array = [];
  sum = 5;
  public people = [];
  constructor(private _PeopleService: PeopleService) {
    for (let i = 0; i < this.sum; ++i ) {
      this.people.push(i);
    }
   }

  ngOnInit() {
      this._PeopleService.getPeople()
        .subscribe((data: IPeople) => {this.people = data.results;
          console.log(this.people)});
  }
  onScroll() {
    console.log('scrolled');
  }

}

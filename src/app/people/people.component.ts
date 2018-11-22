import { Component, OnInit } from '@angular/core';
import { IPeople, Result } from "./people";
import { PeopleService } from "./people-service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  myPeopleList: Result[] = [];
  page: number = 1;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeoples();
  }

  getPeoples() {
    console.log(this.page);
    this.peopleService.getPeopleV2(this.page).subscribe((res) => this.onSuccess(res.results));
  }
  onSuccess(res) {
    console.log(res);
    if (res != undefined) {
      res.forEach(item => {
        this.myPeopleList.push(item);
      });
    }
  }

  onScroll() {
    console.log('scrolled');
    this.page = this.page + 1;
    this.getPeoples();
  }

}

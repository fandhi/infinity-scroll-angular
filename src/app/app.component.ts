import { Component, OnInit  } from '@angular/core';
import { Http } from "@angular/http";
import { PeopleService } from './people-service';
import { IPeople } from './star-wars-people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infinity-scroll-angular';
  // posts: any[];
  // private url = 'https://swapi.co/api/people/';

  // constructor(private http: Http) {
  //   http.get('https://swapi.co/api/people/')
  //     .subscribe(response => {
  //       this.posts = response.json();
  //       console.log(this.posts);
  //     });
  // }

  public people;
  constructor(private _PeopleService: PeopleService) { }

  ngOnInit() {
      this._PeopleService.getPeople()
        .subscribe((data: IPeople) => {this.people = data.results;});
  }
}

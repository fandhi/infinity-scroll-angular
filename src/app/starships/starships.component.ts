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
  size = 0;
  totalPage: number = 1;
  isLoading: boolean = true;

  constructor(private _StarshipsService: StarshipsService) { }

  ngOnInit() { 
    this.getStarshipsInit();
  }

  getStarshipsInit() {
    console.log(this.page);
    this._StarshipsService.getStarshipsV2(this.page)
    .subscribe((res) => this.onSuccess(res.results))
  }

  getStarships() {
    console.log(this.page);
    this._StarshipsService.getStarshipsV2(this.page)
    .subscribe((res) => {
      this.onSuccess(res.results); 
      this.size = res.count
    })
    
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
    
    this.page = this.page + 1;
    this.totalPage = Math.ceil(this.size/10);

    console.log('scrolled page= ' +this.page+ ', total page= ' + this.totalPage);

    if(this.page - 1 == this.totalPage) {
      this.isLoading = false;
    }
    if(this.page <= this.totalPage || this.totalPage == 0) {
      this.getStarships();
    }
  }

}

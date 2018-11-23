import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, Event, 
  NavigationStart, NavigationCancel, 
  NavigationEnd, NavigationError } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infinity-scroll-angular';
  loading = true;

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event: Event) => {
  //     switch (true) {
  //       case event instanceof NavigationStart: {
  //         this.loading = true;
  //         break;
  //       }

  //       case event instanceof NavigationEnd:
  //       case event instanceof NavigationCancel:
  //       case event instanceof NavigationError: {
  //         this.loading = false;
  //         break;
  //       }
  //       default: {
  //         break;
  //       }
  //     }
  //   });
  // }

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event)
    });
  }

  navigationInterceptor(event: Event): void {
    if(event instanceof NavigationStart) {
      this.loading = true
    }
    if(event instanceof NavigationEnd ||
    event instanceof NavigationCancel ||
    event instanceof NavigationError) {
      this.loading = false
    }
  }

  // constructor(private router: Router) {
  //   this.loading = true;
  // }

  // ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.loading = true;
    //   } else if (
    //     event instanceof NavigationEnd || 
    //     event instanceof NavigationCancel
    //   ) {
    //     this.loading = false;
    //   }
    // });
    
  // }
  // ngOnInit() { }
}

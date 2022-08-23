import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { getCLS, getFID, getLCP } from 'web-vitals';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Client';

  constructor(public router: Router){

    getCLS(console.log);
    getFID(console.log);
    getLCP(console.log);

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){

        console.log(event.urlAfterRedirects);
        gtag('config', 'G-4GCRNRFXJC', {'page_path': event.urlAfterRedirects});
      }
    })
  }
}

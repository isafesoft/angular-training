import { Component } from '@angular/core';

interface Nav {
 link: string;
 exact: boolean;
 name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nav: Nav[] = [{
    link: '/',
    exact: true,
    name: 'Home'
  },
    {
      link: 'oops',
      exact: false,
      name: '404'
    },
    {
      link: 'passengers',
      exact: true,
      name: 'Passengers'
    },
    ]

}

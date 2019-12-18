import { Component } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faq-boa-vista';

  faPlusCircle = faPlusCircle;
}

//<fa-icon [icon]="faCoffee"></fa-icon>

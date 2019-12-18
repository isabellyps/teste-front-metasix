import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faq-boa-vista';
  faTrash = faTrash;


  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
}

//<fa-icon [icon]="faCoffee"></fa-icon>

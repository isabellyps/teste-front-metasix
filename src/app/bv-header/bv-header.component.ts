import { Component, OnInit } from '@angular/core';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bv-header',
  templateUrl: './bv-header.component.html',
  styleUrls: ['./bv-header.component.scss']
})
export class BvHeaderComponent implements OnInit {

  //variáveis icones
  faTh = faTh;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit() {
  }

}

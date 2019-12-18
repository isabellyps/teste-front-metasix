import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bv-faq',
  templateUrl: './bv-faq.component.html',
  styleUrls: ['./bv-faq.component.scss']
})
export class BvFaqComponent implements OnInit {

  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private http : HttpClient) {}

  ngOnInit() {
  }

}

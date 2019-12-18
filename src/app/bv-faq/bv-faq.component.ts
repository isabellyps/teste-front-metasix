import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaqService } from './faq.service';
import { BvFaq } from './faq.model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bv-faq',
  templateUrl: './bv-faq.component.html',
  styleUrls: ['./bv-faq.component.scss']
})
export class BvFaqComponent implements OnInit {

  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;

  bvFaq: BvFaq[];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getFaq().subscribe(
      res => {
        this.bvFaq = res.results.sort(this.ordenar)
      });
  }

  ordenar (a, b) {
    if (a.position > b.position) {
      return 1;
    }
    if (a.position < b.position) {
      return -1;
    } else {
      return 0;
    }
  }
}


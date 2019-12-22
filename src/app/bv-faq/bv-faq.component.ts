import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaqService } from './faq.service';
import { BvFaq } from './faq.model';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bv-faq',
  templateUrl: './bv-faq.component.html',
  styleUrls: ['./bv-faq.component.scss']
})
export class BvFaqComponent implements OnInit {

  //variáveis icones
  faSearch = faSearch;
  faEdit = faEdit;
  faTrash = faTrash;
  faPlusCircle = faPlusCircle;

  //variável armazenar o escrito no input
  modelFiltroFaq: string;

  //declarando array FAQ
  bvFaq: BvFaq[];

  constructor(private faqService: FaqService, private router: Router) { }

  ngOnInit() {
    //retorno api
    this.faqService.getFaq().subscribe(
      res => {
        this.bvFaq = res.results.sort(this.ordenar)
      });
  }

  //função colocar em ordem crescente
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

  //deletar questão
  deletar(faq: BvFaq) {
    const posicao = this.bvFaq.indexOf(faq);
    this.bvFaq.splice(posicao, 1);
  }

  //filtro input buscar
  buscar() {
    if (!this.modelFiltroFaq) {
      return this.bvFaq;
    } 

    return this.bvFaq.filter((faq) => {
      return faq.question.toLowerCase().includes(this.modelFiltroFaq.toLowerCase());
    });
  }

  //passa bvfaq para a rota
  editar(faq: BvFaq) {
    this.router.navigate(['/faq/editar'], { queryParams: faq });
  }

  criar() {
    this.router.navigate(['/faq/criar']);
  }

}


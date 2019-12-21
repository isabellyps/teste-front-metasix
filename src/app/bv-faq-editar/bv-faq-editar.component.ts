import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BvFaq } from '../bv-faq/faq.model';

@Component({
  selector: 'app-bv-faq-editar',
  templateUrl: './bv-faq-editar.component.html',
  styleUrls: ['./bv-faq-editar.component.scss']
})
export class BvFaqEditarComponent implements OnInit {

  //instancia variável com valor null
  faq: BvFaq = {
    answer: null,
    approved: null,
    createdAt: null,
    group: null,
    objectId: null,
    position: null,
    question: null,
    updatedAt: null,
    visible: null
  };

  constructor(private route: ActivatedRoute) {
  }

  //atualiza os valores da variável do faq que será editado
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.faq.objectId = params.get('objectId');
      this.faq.approved = params.get('approved') == 'true';
      this.faq.answer = params.get('answer');
      this.faq.group = params.get('group');
      this.faq.position = Number(params.get('position'));
      this.faq.question = params.get('question');
      this.faq.visible = params.get('visible') == 'true';
    });
  }
}
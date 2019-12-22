import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BvFaq } from '../bv-faq/faq.model';

@Component({
  selector: 'app-bv-faq-gerenciar',
  templateUrl: './bv-faq-gerenciar.component.html',
  styleUrls: ['./bv-faq-gerenciar.component.scss']
})
export class BvFaqGerenciarComponent implements OnInit {

  //instancia variável faq com propriedades nula
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

  constructor(private route: ActivatedRoute, private router: Router) {
    //verificar se rota de editar possui objeto faq
    if(!this.urlCriacao() && !this.router.url.includes('objectId')) {
      this.router.navigate(['/faq']);
      
    }
  }

  ngOnInit() {
    //atualiza os valores da variável do faq que será editado
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

  urlCriacao(){
    return this.router.url.includes('criar');
  }

  cancelar() {
    this.router.navigate(['/faq']);
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';
import { FormCanDeactivate } from '../../guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, FormCanDeactivate {

  id: number;
  inscricao: Subscription;
  aluno: any;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  onInput() {
    console.log('mudou')
    this.formMudou = true;
  }

  podeDesativar() {
    if(this.formMudou) {
      confirm('Tem certeza que deseja sair deta página?');
    }
    return true;
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id) || {};
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

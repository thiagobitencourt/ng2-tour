import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

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

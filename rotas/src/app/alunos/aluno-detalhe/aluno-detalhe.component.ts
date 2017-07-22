import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //     this.id = params['id'];
    //     this.aluno = this.alunosService.getAluno(this.id);
    // });
    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) => this.aluno = info.aluno
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}

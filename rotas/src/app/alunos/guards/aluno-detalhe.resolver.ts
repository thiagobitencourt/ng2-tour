import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunosService: AlunosService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<Aluno> | Aluno {

    let id = route.params['id'];
    let aluno = this.alunosService.getAluno(id);

    return aluno;
  }

}

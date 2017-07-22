import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Alunos 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Alunos 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Alunos 03', email: 'aluno03@email.com' }
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    return this.alunos.find(aluno => aluno.id == id);
  }

}

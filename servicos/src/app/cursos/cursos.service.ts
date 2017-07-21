import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular', 'Java', 'Javascript'];

  constructor() {
    console.log('Criando o service');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

}

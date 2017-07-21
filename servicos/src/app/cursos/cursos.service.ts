import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  cursos: string[] = ['Angular', 'Java', 'Javascript'];

  constructor() {
    console.log('Criando o service');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}

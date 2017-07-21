import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  cursosService: CursosService;
  curso: string;

  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    );
  }

}

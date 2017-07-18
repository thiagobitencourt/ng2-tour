import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://thiagobitencourt.github.io';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit() {
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  getValor() {
    return 1 + 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("botaoClicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }

}

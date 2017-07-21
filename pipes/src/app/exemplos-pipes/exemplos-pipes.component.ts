import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Um livro Com um Titulo Qualquer',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://google.com'
  }

  livros: string[] = ["Angular2", "Javascript"];
  filtro: string;

  constructor() { }

  ngOnInit() {
  }

  addLivro(livro) {
    this.livros.push(livro);
    console.log(this.livros);
  }

}

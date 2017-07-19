import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive-ngswitch',
  templateUrl: './diretive-ngswitch.component.html',
  styleUrls: ['./diretive-ngswitch.component.css']
})
export class DiretiveNgswitchComponent implements OnInit {

  aba: string = "home";

  constructor() { }

  ngOnInit() {
  }

}

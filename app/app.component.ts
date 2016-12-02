import { Component } from '@angular/core';
import { Hero } from './shared/models/hero';
import { HEROES } from './shared/constants/heroes';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  selectedHero: Hero;
  title: string = 'Tour of Heroes';
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

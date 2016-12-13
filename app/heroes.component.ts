import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './shared/models/hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './app/heroes.component.html',
  styleUrls: ['./app/heroes.component.css']
})
export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  title: string = 'Tour of Heroes';
  heroes: Hero[];
  
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService
    .getHeroes()
    .then(heroes => this.heroes = heroes);
  }

  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

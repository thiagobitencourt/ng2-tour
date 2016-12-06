import { Injectable } from '@angular/core';

import { Hero } from './shared/models/hero';
import { HEROES } from './shared/constants/heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
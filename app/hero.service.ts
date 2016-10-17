import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => _.find(heroes, { id }));
  }

}

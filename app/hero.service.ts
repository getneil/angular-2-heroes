import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import * as _ from 'lodash';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
  //
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }
  handleError(error: Error) {
    console.log(error);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => _.find(heroes, { id }));
  }

}

import * as _ from 'lodash';

import { Component, OnInit  } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'heroes',
  templateUrl: `app/heroes.component.html`,
  styleUrls: [`app/heroes.component.css`],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          _.remove(this.heroes, {id: hero.id});
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

}

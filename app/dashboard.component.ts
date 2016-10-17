import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Hero } from './Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: '/app/dashboard.component.html',
  providers: [
    HeroService,
  ]
})

export class DashboardComponent{
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

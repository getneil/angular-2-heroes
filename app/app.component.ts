import { Component } from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <div class="row">
        <div class="col-md-6">
          <a routerLink="/heroes">Heroes</a>
        </div>
        <div class="col-md-6">
          <a routerLink="/dashboard">Dashboard</a>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Tour of Heroes';
}

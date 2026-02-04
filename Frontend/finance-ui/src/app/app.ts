import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container py-4">
      <h1 class="mb-3">My App</h1>

      <a class="btn btn-outline-primary me-2" routerLink="/stocks">Stocks</a>
      <a class="btn btn-outline-secondary" routerLink="/">Home</a>

      <hr class="my-4" />

      <router-outlet></router-outlet>
    </div>
  `
})
export class App {}

import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; 
import Footer from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, NgIf], 
  template: `
    <div class="layout">
      <main class="page-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer *ngIf="!isHomePage"></app-footer>
    </div>
  `
})
export class App {
  constructor(private router: Router) {}

  get isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }
}

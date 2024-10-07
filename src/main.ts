import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './app/components/header.component';
import { FooterComponent } from './app/components/footer.component';
import { HomeComponent } from './app/pages/home.component';
import { ArticleComponent } from './app/pages/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
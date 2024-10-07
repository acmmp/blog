import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav class="container">
        <h1><a routerLink="/">Mi Blog Personal</a></h1>
        <ul>
          <li><a routerLink="/">Inicio</a></li>
          <li><a routerLink="/about">Acerca de</a></li>
          <li><a routerLink="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background: #333;
      color: #fff;
      padding: 1rem 0;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    h1 a {
      color: #fff;
      text-decoration: none;
    }
    ul {
      display: flex;
      list-style: none;
    }
    li {
      margin-left: 1rem;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  `]
})
export class HeaderComponent {}
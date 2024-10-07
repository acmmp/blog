import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <p>&copy; 2024 Mi Blog Personal. Todos los derechos reservados.</p>
        <div class="social-icons">
          <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 1rem 0;
      margin-top: 2rem;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .social-icons a {
      color: #fff;
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  `]
})
export class FooterComponent {}
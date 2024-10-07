import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService, Article } from '../services/blog.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container">
      <h2>Artículos Recientes</h2>
      <div class="articles">
        <article *ngFor="let article of articles" class="card">
          <h3>{{ article.title }}</h3>
          <p>Por {{ article.author }} | {{ article.date | date:'mediumDate' }}</p>
          <p>{{ article.content | slice:0:150 }}...</p>
          <a [routerLink]="['/article', article.id]" class="btn">Leer más</a>
          <div class="article-footer">
            <span><i class="fas fa-heart"></i> {{ article.likes }} likes</span>
            <span><i class="fas fa-comment"></i> {{ article.comments.length }} comentarios</span>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .article-footer {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
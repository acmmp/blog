import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogService, Article, Comment } from '../services/blog.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container" *ngIf="article">
      <article class="card">
        <h2>{{ article.title }}</h2>
        <p>Por {{ article.author }} | {{ article.date | date:'mediumDate' }}</p>
        <div [innerHTML]="article.content"></div>
        <div class="article-actions">
          <button (click)="likeArticle()" class="btn">
            <i class="fas fa-heart"></i> Me gusta ({{ article.likes }})
          </button>
        </div>
      </article>

      <section class="comments card">
        <h3>Comentarios ({{ article.comments.length }})</h3>
        <ul>
          <li *ngFor="let comment of article.comments">
            <strong>{{ comment.author }}</strong>
            <p>{{ comment.content }}</p>
            <small>{{ comment.date | date:'medium' }}</small>
          </li>
        </ul>
        <form (ngSubmit)="addComment()">
          <div>
            <label for="author">Nombre:</label>
            <input type="text" id="author" [(ngModel)]="newComment.author" name="author" required>
          </div>
          <div>
            <label for="content">Comentario:</label>
            <textarea id="content" [(ngModel)]="newComment.content" name="content" required></textarea>
          </div>
          <button type="submit" class="btn">Enviar comentario</button>
        </form>
      </section>
    </div>
  `,
  styles: [`
    .article-actions {
      margin-top: 20px;
    }
    .comments ul {
      list-style-type: none;
      padding: 0;
    }
    .comments li {
      border-bottom: 1px solid #eee;
      padding: 10px 0;
    }
    form div {
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
    }
  `]
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  newComment: Omit<Comment, 'id' | 'date'> = { author: '', content: '' };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.blogService.getArticleById(id);
  }

  likeArticle() {
    if (this.article) {
      this.blogService.likeArticle(this.article.id);
    }
  }

  addComment() {
    if (this.article && this.newComment.author && this.newComment.content) {
      this.blogService.addComment(this.article.id, this.newComment);
      this.newComment = { author: '', content: '' };
    }
  }
}
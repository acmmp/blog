import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  content: string;
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Mi primer artículo',
      content: 'Este es el contenido de mi primer artículo en el blog...',
      author: 'Juan Pérez',
      date: new Date('2023-06-01'),
      likes: 10,
      comments: [
        { id: 1, author: 'María', content: '¡Gran artículo!', date: new Date('2023-06-02') },
        { id: 2, author: 'Carlos', content: 'Muy interesante, gracias por compartir.', date: new Date('2023-06-03') }
      ]
    },
    {
      id: 2,
      title: 'Cómo aprender Angular',
      content: 'Angular es un framework poderoso para construir aplicaciones web...',
      author: 'Ana García',
      date: new Date('2023-06-05'),
      likes: 15,
      comments: [
        { id: 3, author: 'Pedro', content: 'Excelente guía para principiantes.', date: new Date('2023-06-06') }
      ]
    }
  ];

  private articlesSubject = new BehaviorSubject<Article[]>(this.articles);

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable();
  }

  getArticleById(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  addComment(articleId: number, comment: Omit<Comment, 'id' | 'date'>): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      const newComment: Comment = {
        ...comment,
        id: article.comments.length + 1,
        date: new Date()
      };
      article.comments.push(newComment);
      this.articlesSubject.next(this.articles);
    }
  }

  likeArticle(articleId: number): void {
    const article = this.articles.find(a => a.id === articleId);
    if (article) {
      article.likes++;
      this.articlesSubject.next(this.articles);
    }
  }
}
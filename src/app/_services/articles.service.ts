import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }
  getArticles() {
    return this.http.get(environment.API_ARTICLES).
      pipe(map( (res: any) => res.articles));

  }
  addArticle(article) {
    return this.http.post(environment.API_ARTICLES, article);
  }
}

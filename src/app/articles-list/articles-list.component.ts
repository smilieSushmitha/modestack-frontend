import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../_services/articles.service';
import {ArticleModel} from '../_models/article.model';
import {MatDialog} from '@angular/material/dialog';
import {AddArticleComponent} from '../add-article/add-article.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  isLoading: boolean;
  articles: ArticleModel[];
  constructor(private articlesService: ArticlesService,
              private  dialog: MatDialog) {
  }

  ngOnInit(): void {
     this.getArticleList();
  }

  getArticleList(){
    this.isLoading = true;
    this.articlesService.getArticles()
      .subscribe(articles  => {
        console.log(articles);
        this.articles = articles;
        console.log(articles);
      }, err => {
        console.log(err);
      }, () => {
        this.isLoading = false;
      });
  }

  addArticle(){
    const dialogRef = this.dialog.open(AddArticleComponent, {
      height: '75%',
      width: '75%',
    });
    dialogRef.afterClosed().subscribe(res => this.getArticleList());
  }
}

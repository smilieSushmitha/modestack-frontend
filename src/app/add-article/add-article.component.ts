import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticlesService} from '../_services/articles.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  addArticleForm: FormGroup;
  constructor( private articlesService: ArticlesService,
               private dialogRef: MatDialogRef<AddArticleComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    this.addArticleForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
  addArticle(){
    this.articlesService.addArticle(this.addArticleForm.value)
      .subscribe();
    this.dialogRef.close();
  }

}

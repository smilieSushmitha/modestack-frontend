import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'articles', component: ArticlesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

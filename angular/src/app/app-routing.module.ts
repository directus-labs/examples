import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ArticlePage } from './pages/article/article.component';
import { NotFoundPage } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'articles/:id', component: ArticlePage },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

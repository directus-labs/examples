import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directus } from 'src/app/services/directus';
import { formatRelativeTime } from '../../../../../shared/utils/format-relative-time.js';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomePage implements OnInit {
  hero: Record<string, any> | null = null;
  articles: Record<string, any>[] | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const response = await directus.items('articles').readMany({
      fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
      sort: ['-publish_date'],
    });

    if (!response.data) {
      this.router.navigate(['404']);
      return;
    }

    const formattedArticles = response.data.map((article) => {
      return {
        ...article,
        publish_date: formatRelativeTime(new Date(article.publish_date)),
      };
    });

    const [first, ...rest] = formattedArticles;
    this.hero = first;
    this.articles = rest;
  }
}

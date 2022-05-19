import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ID } from '@directus/sdk';
import { directus } from 'src/app/services/directus';
import { formatRelativeTime } from '../../../../../shared/utils/format-relative-time';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticlePage implements OnInit {
  article: Record<string, any> | null = null;
  moreArticles: Record<string, any>[] | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const id = this.route.snapshot.paramMap.get('id');

    let articleResponse;

    try {
      articleResponse = await directus.items('articles').readOne(id as ID, {
        fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
      });

      if (!articleResponse) {
        this.router.navigate(['404']);
        return;
      }

      const formattedArticle = {
        ...articleResponse,
        publish_date: formatRelativeTime(
          new Date(articleResponse.publish_date)
        ),
      };

      const moreArticlesResponse = await directus.items('articles').readByQuery({
        fields: ['*', 'author.avatar', 'author.first_name', 'author.last_name'],
        filter: {
          _and: [
            { id: { _neq: articleResponse.id } },
            { status: { _eq: 'published' } },
          ],
        },
        limit: 2,
      });
      if (!moreArticlesResponse.data) {
        this.router.navigate(['404']);
        return;
      }
      const formattedMoreArticles = moreArticlesResponse.data.map(
        (moreArticle) => {
          return {
            ...moreArticle,
            publish_date: formatRelativeTime(
              new Date(moreArticle.publish_date)
            ),
          };
        }
      );

      this.article = formattedArticle;
      this.moreArticles = formattedMoreArticles;
    } catch (err) {
      this.router.navigate(['404']);
    }
  }
}

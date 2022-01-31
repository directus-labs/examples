import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Record<string, any> | null = null;
  @Input() bordered: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

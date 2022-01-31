import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-articles',
  templateUrl: './more-articles.component.html',
  styleUrls: ['./more-articles.component.css'],
})
export class MoreArticlesComponent implements OnInit {
  @Input() articles: Record<string, any>[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}

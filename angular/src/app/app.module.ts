import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeComponent } from './components/notice/notice.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ArticleComponent } from './components/article/article.component';
import { MoreArticlesComponent } from './components/more-articles/more-articles.component';
import { MonospaceIcon } from './components/icons/monospace/monospace.component';
import { GithubIcon } from './components/icons/github/github.component';
import { YoutubeIcon } from './components/icons/youtube/youtube.component';
import { LinkedinIcon } from './components/icons/linkedin/linkedin.component';
import { TwitterIcon } from './components/icons/twitter/twitter.component';
import { BackIcon } from './components/icons/back/back.component';
import { LinkIcon } from './components/icons/link/link.component';
import { HomePage } from './pages/home/home.component';
import { ArticlePage } from './pages/article/article.component';
import { GetAssetUrlPipe } from './get-asset-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    HeaderComponent,
    InfoComponent,
    FooterComponent,
    HeroComponent,
    ArticleComponent,
    MoreArticlesComponent,
    MonospaceIcon,
    GithubIcon,
    YoutubeIcon,
    LinkedinIcon,
    TwitterIcon,
    BackIcon,
    LinkIcon,
    HomePage,
    ArticlePage,
    GetAssetUrlPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

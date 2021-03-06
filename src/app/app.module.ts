import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CleanNavComponent } from './clean-nav/clean-nav.component';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from './info/info.component';
import { HowComponent } from './how/how.component';
import { DownloadComponent } from './download/download.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CleanNavComponent,
    BannerComponent,
    InfoComponent,
    HowComponent,
    DownloadComponent,
    ReviewsComponent,
    FooterComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

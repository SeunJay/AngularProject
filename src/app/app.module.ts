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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CleanNavComponent,
    BannerComponent,
    InfoComponent,
    HowComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

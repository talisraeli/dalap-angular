import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from './data/data.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';
import { OpinionCarouselComponent } from './opinion-carousel/opinion-carousel.component';
import { OpinionCardComponent } from './opinion-carousel/opinion-card/opinion-card.component';
import { OpinionOptionsComponent } from './opinion-carousel/opinion-card/opinion-options/opinion-options.component';
import { OpinionShareComponent } from './opinion-carousel/opinion-card/opinion-share/opinion-share.component';
import { SwiperCardDirective } from './opinion-carousel/swiper/swiper-card.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    IconButtonComponent,
    OpinionCarouselComponent,
    OpinionCardComponent,
    OpinionOptionsComponent,
    OpinionShareComponent,
    SwiperCardDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

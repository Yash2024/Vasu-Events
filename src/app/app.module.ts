import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ConnectComponent } from './connect/connect.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    GalleryComponent,
    ConnectComponent,
    ServicesComponent,
    PricesComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

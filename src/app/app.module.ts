import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe.pipe';
import { TMDBService } from './services/api/tmdb.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { PopularComponent } from './components/popular/popular.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecondCardComponent } from './components/second-card/second-card.component';
import { StorageService } from './services/storage/storage.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DiscoverTvComponent } from './components/discover-tv/discover-tv.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { SwiperModule } from 'swiper/angular';
import { MoviesComponent } from './components/movies/movies.component';
import { TvsComponent } from './components/tvs/tvs.component';
import { NgOptimizedImage } from '@angular/common';
import { DataService } from './services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    CardComponent,
    PopularComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    SecondCardComponent,
    ReviewsComponent,
    DiscoverTvComponent,
    DiscoverMoviesComponent,
    MoviesComponent,
    TvsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgOptimizedImage,
  ],
  providers: [TMDBService, StorageService,DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

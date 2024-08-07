import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/api/tmdb.service';
import { MovieModel } from '../../models/movie.model';
import { DataService } from 'src/app/services/data.service';
import { data } from 'autoprefixer';
@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
})
export class DiscoverMoviesComponent implements OnInit {
  page: number = 1;
  discoverContainer: MovieModel[] = [];
  max_page=1;
  constructor(private service:DataService) {}

  ngOnInit(): void {
    this.initializeDiscoverMovies('discover_movie',this.page);
  }

  onPageChange() {
    this.discoverContainer = [];
    return this.initializeDiscoverMovies('discover_movie',this.page);
  }

  initializeDiscoverMovies(type:string,page: number) {
    this.service.getMovie(type, page).subscribe((data: any) => {
      this.max_page=data.total_pages;
      this.discoverContainer = data.results.map((item: any) => ({
        overview: item.overview,
        poster_path: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
        release_date: item.release_date,
        vote_average: item.vote_average,
        id: item.id,
        title: item.title,
        original_title: item.original_title,
        backdrop_path: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path,
        original_language: item.original_language,
        popularity: item.popularity
      }));
    });
  }
}

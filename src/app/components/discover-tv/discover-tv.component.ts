import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { TMDBService } from '../../services/api/tmdb.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-discover-tv',
  templateUrl: './discover-tv.component.html',
})
export class DiscoverTvComponent implements OnInit {
  page: number = 1;
  discoverTVContainer: MovieModel[] = [];
  max_page = 1;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.initializeDiscoverTV('discover_tv', this.page);
  }

  onEdit() {
    this.discoverTVContainer = [];
    return this.initializeDiscoverTV('discover_tv', this.page);
  }

  initializeDiscoverTV(type: string, page: number) {
    this.service.getMovie(type, page).subscribe((data) => {
      this.max_page = data.total_pages;
      this.discoverTVContainer = data.results.map((item: any) => ({
        backdrop_path:
          'https://image.tmdb.org/3/t/p/w500/' + item.backdrop_path,
        original_language: item.original_language,
        original_title: item.original_title,
        popularity: item.popularity,
        poster_path:'https://image.tmdb.org/3/t/p/w500/' + item.poster_path,
        release_date: item.release_date,
        vote_average: item.vote_average,
        id: item.id,
        title: item.title,
        overview: item.title,
        name: item.name,
        origin_country: item.origin_country,
        first_air_date: item.first_air_date,
        vote_count: item.vote_count,
      }))
    })
  }
}

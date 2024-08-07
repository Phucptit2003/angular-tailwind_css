import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
})
export class PopularComponent implements OnInit {
  container: MovieModel[] = [];
  page: number = 1;
  max_page=1;

  successAlert: boolean = false;
  errorAlert: boolean = false;

  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.initializePopular('popular', this.page);
  }

  onEdit() {
    this.container = [];
    return this.initializePopular('popular', this.page);
  }

  initializePopular(type: string, page: number) {
    this.service.getMovie(type, page).subscribe((data:any) => {
      this.max_page=data.total_pages;
      data.results.map((popular: MovieModel) => {
        this.container.push({
          overview: popular.overview,
          poster_path:  
            'https://image.tmdb.org/3/t/p/w500/' + popular.poster_path,
          release_date: popular.release_date,
          vote_average: popular.vote_average,
          id: popular.id,
          title: popular.title,
          original_title: popular.original_title,
          backdrop_path:
            'https://image.tmdb.org/3/t/p/w500/' + popular.backdrop_path,
          original_language: popular.original_language,
          popularity: popular.popularity,
        });
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/api/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { CreditsModel } from '../../models/credits.model';
import { VideosModel } from '../../models/videos.model';
import { DetailsModel } from '../../models/details.model';
import { ReviewsModel } from '../../models/reviews.model';
import { RecommendationsModel } from '../../models/recommendations.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  id!: number;
  page: number = 1;

  trailerOpened: boolean = false;

  creditElement!: CreditsModel;
  detailElement!: DetailsModel;
  videoElement!: VideosModel;
  reviewsElement!: ReviewsModel;
  recommendationElement!: RecommendationsModel;

  constructor(
    private route: ActivatedRoute,
    private http: TMDBService,
    private service:DataService,
  ) {}

  async ngOnInit() {
    this.id = +(this.route.snapshot.paramMap.get('id') ?? 0);
    await this.initializeDetails();
    await this.initializeReviews();
    await this.initializeCredits();
    await this.initializeVideos();
    await this.initializeRecommendations();
  }

  onEdit() {
    return this.initializeReviews();
  }

  initializeDetails() {
    this.service
      .getDetail('detail', this.id)
      .subscribe((details: DetailsModel) => {
        this.detailElement = details;
      });
  }

  initializeReviews() {
    this.service
      .getReviews('review', this.id, this.page)
      .subscribe((reviews: ReviewsModel) => {
        this.reviewsElement = reviews;
      });
  }

  initializeCredits() {
    this.service
      .getCredits('credit', this.id)
      .subscribe((credits: CreditsModel) => {
        this.creditElement = credits;
        this.creditElement.cast.splice(14, 100000000000);
        this.creditElement.crew.splice(14, 100000000000);
      });
  }

  initializeVideos() {
    this.service.getVideo('video', this.id).subscribe((videos: VideosModel) => {
      this.videoElement = videos;
    });
  }

  initializeRecommendations() {
    console.log(this.page);
    this.service
      .getRecommendations('recommendation', this.page)
      .subscribe((recommendations: RecommendationsModel) => {
        this.recommendationElement = recommendations;
      });
  }
}

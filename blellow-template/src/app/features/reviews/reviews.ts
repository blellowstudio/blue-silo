import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReviewConfig } from '../../config/review.config';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  review = ReviewConfig;
}

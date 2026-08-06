import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationConfig } from '../../config/accommodation.config';


@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feature-cards.html',
  styleUrl: './feature-cards.scss',
})
export class FeatureCards {
  accommodation = AccommodationConfig;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureConfig } from '../../config/feature.config';


@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './feature-cards.html',
  styleUrl: './feature-cards.scss',
})
export class FeatureCards {
  accommodation = FeatureConfig;
}

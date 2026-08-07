import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FeatureConfig } from '../../config/feature.config';

@Component({
  selector: 'app-feature-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-details.html',
  styleUrl: './feature-details.scss',
})
export class FeatureDetails {
  accommodation = FeatureConfig;
  card = this.accommodation.cards[0];
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/']);
      return;
    }

    const selected = this.accommodation.cards.find((card) => card.id === id);
    if (!selected) {
      this.router.navigate(['/']);
      return;
    }

    this.card = selected;
    this.currentImageIndex = 0;
  }

  prevImage() {
    if (!this.card.images?.length) {
      return;
    }
    this.currentImageIndex = (this.currentImageIndex - 1 + this.card.images.length) % this.card.images.length;
  }

  nextImage() {
    if (!this.card.images?.length) {
      return;
    }
    this.currentImageIndex = (this.currentImageIndex + 1) % this.card.images.length;
  }

  selectImage(index: number) {
    if (!this.card.images?.length) {
      return;
    }
    this.currentImageIndex = index;
  }
}

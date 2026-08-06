import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryConfig } from '../../config/gallery.config';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  gallery = GalleryConfig;
}

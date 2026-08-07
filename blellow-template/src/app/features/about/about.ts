import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutConfig } from '../../config/about.config';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

   about = AboutConfig;
}

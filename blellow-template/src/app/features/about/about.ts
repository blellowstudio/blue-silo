import { Component } from '@angular/core';
import { AboutConfig } from '../../config/about.config';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

   about = AboutConfig;
}

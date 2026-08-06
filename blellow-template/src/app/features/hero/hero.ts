import { Component } from '@angular/core';
import { HeroConfig } from '../../config/hero.config';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  hero = HeroConfig;
}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroConfig } from '../../config/hero.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  hero = HeroConfig;
}



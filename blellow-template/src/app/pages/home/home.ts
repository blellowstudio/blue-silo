import { Component } from '@angular/core';

import { Header } from '../../features/header/header';
import { Hero } from '../../features/hero/hero';
import { About } from '../../features/about/about';
import { FeatureCards } from '../../features/feature-cards/feature-cards';
import { Activities } from '../../features/activities/activities';
import { Gallery }from '../../features/gallery/gallery'
import { Reviews } from '../../features/reviews/reviews';
import { Contact } from '../../features/contact/contact';
import { Booking } from '../../features/booking/booking';
import { Footer } from '../../core/layout/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    Hero,
    About,
    FeatureCards,
    Activities,
    Gallery,
    Reviews,
    Contact,
    Booking,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}

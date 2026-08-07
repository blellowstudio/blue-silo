import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { FeatureDetails } from './pages/feature-details/feature-details';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'accommodation/:id',
    component: FeatureDetails
  }
];

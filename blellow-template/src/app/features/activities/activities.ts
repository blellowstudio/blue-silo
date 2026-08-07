import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesConfig } from '../../config/activities.config';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class Activities {
  activities = ActivitiesConfig;
}

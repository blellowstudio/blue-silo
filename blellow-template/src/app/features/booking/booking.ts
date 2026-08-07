import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingConfig } from '../../config/booking.config';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  booking = BookingConfig;
}

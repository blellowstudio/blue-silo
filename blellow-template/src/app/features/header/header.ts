import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationConfig } from '../../config/navigation.config';
import { HeaderConfig } from '../../config/header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  header = HeaderConfig;

  navigation = NavigationConfig;

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}

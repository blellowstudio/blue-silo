import { Component } from '@angular/core';
import { ContactConfig } from '../../config/contact.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  contact = ContactConfig;
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      ContactConfig.mapUrl
    );
  }
}

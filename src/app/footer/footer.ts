import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();

  constructor(private router: Router, private contactInfoService: ContactInfoService) {}

  get contactInfo() {
    return this.contactInfoService.getContactInfo();
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goReviews() {
    this.router.navigate(['/reviews']);
  }

  goContact() {
    this.router.navigate(['/contact']);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
} 
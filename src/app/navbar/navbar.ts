import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() cartCount: number = 0;
  @Output() cartSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  onCartClick() {
    this.cartSidebar.emit();
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
}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, NgIf, NgFor, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() cartCount: number = 0;
  @Output() cartSidebar = new EventEmitter<void>();
  @Output() addToCartSuccess = new EventEmitter<void>();

  showSearchInput = false;
  searchTerm = '';
  products: any[] = [];
  showLoginPopup = false;
  loginUsername = '';
  loginPassword = '';

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.products;
    console.log('Navbar products loaded:', this.products);
  }

  toggleSearchInput() {
    this.showSearchInput = !this.showSearchInput;
    if (!this.showSearchInput) {
      this.searchTerm = '';
    }
  }

  onSearchChange() {}

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

  get currentRoute(): string {
    return this.router.url;
  }

  isActive(path: string): boolean {
    if (path === '/') {
      return this.currentRoute === '/' || this.currentRoute === '';
    }
    return this.currentRoute.startsWith(path);
  }

  get filteredProducts() {
    console.log('Filtering products:', this.products, 'with searchTerm:', this.searchTerm);
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return [];
    }
    const term = this.searchTerm.trim().toLowerCase();
    return this.products.filter(p => p.name.toLowerCase().includes(term));
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.addToCartSuccess.emit();
  }

  toggleLoginPopup() {
    this.showLoginPopup = !this.showLoginPopup;
  }

  closeLoginPopup() {
    this.showLoginPopup = false;
  }

  onLoginSubmit() {
    // For now, just close the popup and clear fields
    this.showLoginPopup = false;
    this.loginUsername = '';
    this.loginPassword = '';
    // Add actual login logic here if needed
    return false; // Prevent default form submission
  }
}

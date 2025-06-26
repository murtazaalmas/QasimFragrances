import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { CartService } from './cart.service';
import { Invoice } from './invoice/invoice';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, NgIf, NgFor, RouterOutlet, Invoice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Fragrances';
  selectedCategory: string = 'All';
  cartItems: any[] = [];
  notification: string | null = null;
  showCartSidebar: boolean = false;
  showInvoice: boolean = false;

  constructor(private cartService: CartService, public router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  showNotification(message: string) {
    this.notification = message;
    setTimeout(() => {
      this.notification = null;
    }, 1500);
  }

  openCartSidebar() {
    this.showCartSidebar = true;
  }

  closeCartSidebar() {
    this.showCartSidebar = false;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }

  get cartCount() {
    return this.cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
  }

  get cartTotal() {
    return this.cartItems.reduce((sum, item) => {
      const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
      return sum + price * (item.qty || 1);
    }, 0);
  }

  openInvoice() {
    this.showInvoice = true;
  }

  closeInvoice() {
    this.showInvoice = false;
  }
}

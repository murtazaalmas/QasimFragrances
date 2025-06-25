import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, NgIf, NgFor, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Fragrances';
  selectedCategory: string = 'All';
  cartItems: any[] = [];
  notification: string | null = null;
  showCartSidebar: boolean = false;

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.name === product.name);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      this.cartItems.push({ ...product, qty: 1 });
    }
    this.showNotification('Added to cart');
  }

  get cartCount() {
    return this.cartItems.reduce((sum, item) => sum + (item.qty || 1), 0);
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
    this.cartItems = this.cartItems.filter(item => item.name !== product.name);
  }

  get cartTotal() {
    return this.cartItems.reduce((sum, item) => {
      const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
      return sum + price * (item.qty || 1);
    }, 0);
  }
}

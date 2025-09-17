import { Component, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { NgIf, NgFor } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { CartService } from './cart.service';
import { Invoice } from './invoice/invoice';
import { Footer } from './footer/footer';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, NgIf, NgFor, RouterOutlet, Invoice, Footer, HttpClientModule, DecimalPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected title = 'Itrah.pk';
  selectedCategory: number = 1;
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

  setCategory(category: number) {
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
      // const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
      return sum + item.price * (item.qty || 1);
    }, 0);
  }

  openInvoice() {
    this.router.navigate(['/checkout']);
    this.closeCartSidebar();
  }

  closeInvoice() {
    this.showInvoice = false;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  get cartItems() {
    return this.cartItemsSubject.value;
  }

  addToCart(product: any, qty: number = 1) {
    const items = [...this.cartItems];
    const existing = items.find(item => item.name === product.name);
    if (existing) {
      existing.qty = (existing.qty || 1) + qty;
    } else {
      items.push({ ...product, qty: qty });
    }
    this.cartItemsSubject.next(items);
  }

  removeFromCart(product: any) {
    const items = this.cartItems.filter(item => item.name !== product.name);
    this.cartItemsSubject.next(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
} 
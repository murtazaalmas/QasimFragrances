import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  private readonly CART_STORAGE_KEY = 'cartItems';

  constructor() {
    this.loadCartFromStorage();
  }

  get cartItems() {
    return this.cartItemsSubject.value;
  }

  private saveCartToStorage(items: any[]) {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(items));
  }

  private loadCartFromStorage() {
    const stored = localStorage.getItem(this.CART_STORAGE_KEY);
    if (stored) {
      try {
        const items = JSON.parse(stored);
        this.cartItemsSubject.next(items);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
      }
    }
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
    this.saveCartToStorage(items);
  }

  removeFromCart(product: any) {
    const items = this.cartItems.filter(item => item.name !== product.name);
    this.cartItemsSubject.next(items);
    this.saveCartToStorage(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
    this.saveCartToStorage([]);
  }
} 
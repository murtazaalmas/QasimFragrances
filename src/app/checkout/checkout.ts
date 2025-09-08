import { Component, OnInit } from '@angular/core';
import { NgFor, DecimalPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, DecimalPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  cartItems: any[] = [];
  shippingMethods = [
    { id: 'local', carrier: 'Local Shipment', shippingCast: 500, time: '5-7 days', detial: 'Local Shipment' },
    { id: 'urgent', carrier: 'Urgent Shipment', shippingCast: 1000, time: '1 day', detial: 'Urgent Shipment' },
    { id: 'free', carrier: 'Free Shipment', shippingCast: 0, time: '7-10 days', detial: 'minimum order value Rs. 10,000' },
  ];
  selectedShipping = 'local';
  notification: string | null = null;

  // Form data
  email = '';
  firstName = '';
  lastName = '';
  streetAddress = '';
  country = 'Pakistan';
  state = '';
  city = '';
  zip = '';
  phone = '';

  private readonly CHECKOUT_STORAGE_KEY = 'checkoutFormData';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    this.loadFormData();
  }

  public saveFormData() {
    const formData = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      streetAddress: this.streetAddress,
      country: this.country,
      state: this.state,
      city: this.city,
      zip: this.zip,
      phone: this.phone,
      selectedShipping: this.selectedShipping
    };
    localStorage.setItem(this.CHECKOUT_STORAGE_KEY, JSON.stringify(formData));
  }

  private loadFormData() {
    const stored = localStorage.getItem(this.CHECKOUT_STORAGE_KEY);
    if (stored) {
      try {
        const formData = JSON.parse(stored);
        this.email = formData.email || '';
        this.firstName = formData.firstName || '';
        this.lastName = formData.lastName || '';
        this.streetAddress = formData.streetAddress || '';
        this.country = formData.country || 'Pakistan';
        this.state = formData.state || '';
        this.city = formData.city || '';
        this.zip = formData.zip || '';
        this.phone = formData.phone || '';
        this.selectedShipping = formData.selectedShipping || 'local';
      } catch (error) {
        console.error('Error loading form data:', error);
      }
    }
  }

  getOrderItems() {
    return this.cartItems;
  }

  getSubtotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  get cartTotal() {
    return this.cartItems.reduce((sum, item) => {
      // const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
      return sum + item.price * (item.qty || 1);
    }, 0);
  }

  getTax() {
    // Assume 0 for now, can be calculated based on location
    return 0;
  }

  getItemCount() {
    return this.cartItems.length;
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }

  animateOrderButton() {
    const orderButton = document.querySelector('.order');
    if (orderButton && !orderButton.classList.contains('animate')) {
      orderButton.classList.add('animate');
      setTimeout(() => {
        orderButton.classList.remove('animate');
      }, 10000000);
    }
  }

  isFreeShippingEligible(): boolean {
    return this.getSubtotal() >= 10000;
  }

  onShippingChange() {
    if (this.selectedShipping === 'free' && !this.isFreeShippingEligible()) {
      this.selectedShipping = 'local';
      this.notification = 'Minimum order of Rs. 10,000 required for free shipping';
      setTimeout(() => {
        this.notification = null;
      }, 1500);
    }
    this.saveFormData();
  }
}

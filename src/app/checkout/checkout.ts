import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  cartItems: any[] = [];
  shippingMethods = [
    { id: 'local', title: 'Fixed', carrier: 'Local Shipment', price: 149.00 }
  ];
  selectedShipping = 'local';

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
  }

  getOrderItems() {
    return this.cartItems;
  }

  getSubtotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  getShippingCost() {
    const method = this.shippingMethods.find(m => m.id === this.selectedShipping);
    return method ? method.price : 0;
  }

  getTax() {
    // Assume 0 for now, can be calculated based on location
    return 0;
  }

  getTotal() {
    return this.getSubtotal() + this.getShippingCost() + this.getTax();
  }

  getItemCount() {
    return this.cartItems.length;
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
  }
}

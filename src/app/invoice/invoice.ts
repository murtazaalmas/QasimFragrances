import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { EmailService } from '../email.service';
import { ContactInfoService } from '../contact-info.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css'
})
export class Invoice {
  @Input() cartItems: any[] = [];
  @Input() cartTotal: number = 0;
  @Output() close = new EventEmitter<void>();
  orderId = '';

  showCodPopup = false;
  codName = '';
  codPhone = '';
  codAddress = '';
  codError = '';
  codSuccess = false;

  showCheckoutPopup = false;
  checkoutTillId = '';
  checkoutName = '';
  checkoutAddress = '';
  checkoutError = '';
  checkoutSuccess = false;

  readonly deliveryCharge = 300;

  constructor(
    private cartService: CartService,
    private emailService: EmailService,
    private contactInfoService: ContactInfoService
  ) { }

  get totalWithDelivery() {
    return this.cartTotal + this.deliveryCharge;
  }

  generateOrderId(): string {
    const generatedIdsKey = 'generatedOrderIds';
    const generatedIds: number[] = JSON.parse(localStorage.getItem(generatedIdsKey) || '[]');

    let newId: number;
    let attempts = 0;
    const maxAttempts = 100; // Safeguard against an infinite loop

    do {
      newId = Math.floor(100000 + Math.random() * 900000);
      attempts++;
      if (attempts > maxAttempts) {
        console.error('Could not generate a unique 6-digit order ID. Falling back to a timestamp-based ID.');
        return `fallback_${new Date().getTime()}`;
      }
    } while (generatedIds.includes(newId));

    generatedIds.push(newId);

    // To prevent localStorage from growing indefinitely, we can cap the stored IDs.
    if (generatedIds.length > 5000) {
      generatedIds.splice(0, generatedIds.length - 5000);
    }

    localStorage.setItem(generatedIdsKey, JSON.stringify(generatedIds));

    return newId.toString();
  }

  get contactInfo() {
    return this.contactInfoService.getContactInfo();
  }

  getSubtotal(item: any): number {
    const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
    return price * (item.qty || 1);
  }

  openCodPopup() {
    this.showCodPopup = true;
    this.codError = '';
    this.codSuccess = false;
  }

  closeCodPopup() {
    this.showCodPopup = false;
    this.codError = '';
    this.codSuccess = false;
  }

  async submitCodForm() {
    if (!this.codName.trim() || !this.codPhone.trim() || !this.codAddress.trim()) {
      this.codError = 'Please fill in all fields.';
      return;
    }
    this.orderId = this.generateOrderId();
    this.codSuccess = true;
    await this.emailService.sendOrderEmail(
      'New COD Order',
      this.codName,
      this.codAddress,
      `Phone: ${this.codPhone}`,
      this.totalWithDelivery,
      this.orderId
    );
  }

  okCod() {
    this.cartService.clearCart();
    this.closeCodPopup();
    this.close.emit();
    this.codName = '';
    this.codPhone = '';
    this.codAddress = '';
  }

  openCheckoutPopup() {
    this.showCheckoutPopup = true;
    this.checkoutError = '';
    this.checkoutSuccess = false;
  }

  closeCheckoutPopup() {
    this.showCheckoutPopup = false;
    this.checkoutError = '';
    this.checkoutSuccess = false;
  }

  async submitCheckoutForm() {
    if (!this.checkoutName.trim() || !this.checkoutAddress.trim() || !this.checkoutTillId.trim()) {
      this.checkoutError = 'Please fill in all fields.';
      return;
    }
    this.orderId = this.generateOrderId();
    this.checkoutSuccess = true;
    await this.emailService.sendOrderEmail(
      'New Checkout Order',
      this.checkoutName,
      this.checkoutAddress,
      this.checkoutTillId,
      this.cartTotal,
      this.orderId
    );
  }

  okCheckout() {
    this.cartService.clearCart();
    this.closeCheckoutPopup();
    this.close.emit();
    this.checkoutName = '';
    this.checkoutAddress = '';
    this.checkoutTillId = '';
  }

  animateOrderButton() {
    const orderButton = document.querySelector('.order');
    if (orderButton && !orderButton.classList.contains('animate')) {
      orderButton.classList.add('animate');
      setTimeout(() => {
        orderButton.classList.remove('animate');
      }, 10000);
    }
  }
} 
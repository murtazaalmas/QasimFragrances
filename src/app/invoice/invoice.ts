import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { EmailService } from '../email.service';

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

  showCodPopup = false;
  codName = '';
  codPhone = '';
  codAddress = '';
  codError = '';
  codSuccess = false;

  showJazzCashPopup = false;
  jazzcashTillId = '';
  jazzcashName = '';
  jazzcashAddress = '';
  jazzcashError = '';
  jazzcashSuccess = false;

  readonly deliveryCharge = 300;

  constructor(private cartService: CartService, private emailService: EmailService) {}

  get totalWithDelivery() {
    return this.cartTotal + this.deliveryCharge;
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
    this.codSuccess = true;
    await this.emailService.sendOrderEmail(
      'New COD Order',
      `<b>Name:</b> ${this.codName}<br><b>Phone:</b> ${this.codPhone}<br><b>Address:</b> ${this.codAddress}<br><b>Order Total:</b> ${this.totalWithDelivery}`
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

  openJazzCashPopup() {
    this.showJazzCashPopup = true;
    this.jazzcashError = '';
    this.jazzcashSuccess = false;
  }

  closeJazzCashPopup() {
    this.showJazzCashPopup = false;
    this.jazzcashError = '';
    this.jazzcashSuccess = false;
  }

  async submitJazzCashForm() {
    if (!this.jazzcashName.trim() || !this.jazzcashAddress.trim() || !this.jazzcashTillId.trim()) {
      this.jazzcashError = 'Please fill in all fields.';
      return;
    }
    this.jazzcashSuccess = true;
    await this.emailService.sendOrderEmail(
      'New JazzCash Order',
      `<b>Name:</b> ${this.jazzcashName}<br><b>Address:</b> ${this.jazzcashAddress}<br><b>Till ID:</b> ${this.jazzcashTillId}<br><b>Order Total:</b> ${this.cartTotal}`
    );
  }

  okJazzCash() {
    this.cartService.clearCart();
    this.closeJazzCashPopup();
    this.close.emit();
    this.jazzcashName = '';
    this.jazzcashAddress = '';
    this.jazzcashTillId = '';
  }
} 
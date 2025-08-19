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

  showCodPopup = false;
  codName = '';
  codPhone = '';
  codAddress = '';
  codError = '';
  codSuccess = false;

  showJazzCashPopup = false;
  jazzCashTillId = '';
  jazzCashName = '';
  jazzCashAddress = '';
  jazzCashError = '';
  jazzCashSuccess = false;

  readonly deliveryCharge = 300;

  constructor(
    private cartService: CartService,
    private emailService: EmailService,
    private contactInfoService: ContactInfoService
  ) { }

  get totalWithDelivery() {
    return this.cartTotal + this.deliveryCharge;
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
    this.codSuccess = true;
    await this.emailService.sendOrderEmail(
      'New COD Order',
      this.codName,
      this.codAddress,
      `Phone: ${this.codPhone}`,
      this.totalWithDelivery
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
    this.jazzCashError = '';
    this.jazzCashSuccess = false;
  }

  closeJazzCashPopup() {
    this.showJazzCashPopup = false;
    this.jazzCashError = '';
    this.jazzCashSuccess = false;
  }

  async submitJazzCashForm() {
    if (!this.jazzCashName.trim() || !this.jazzCashAddress.trim() || !this.jazzCashTillId.trim()) {
      this.jazzCashError = 'Please fill in all fields.';
      return;
    }
    this.jazzCashSuccess = true;
    await this.emailService.sendOrderEmail(
      'New jazzCash Order',
      this.jazzCashName,
      this.jazzCashAddress,
      this.jazzCashTillId,
      this.cartTotal
    );
  }

  okJazzCash() {
    this.cartService.clearCart();
    this.closeJazzCashPopup();
    this.close.emit();
    this.jazzCashName = '';
    this.jazzCashAddress = '';
    this.jazzCashTillId = '';
  }
} 
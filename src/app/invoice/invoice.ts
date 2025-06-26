import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgFor],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css'
})
export class Invoice {
  @Input() cartItems: any[] = [];
  @Input() cartTotal: number = 0;
  @Output() close = new EventEmitter<void>();

  getSubtotal(item: any): number {
    const price = parseInt((item.price || '0').replace(/[^\d]/g, ''));
    return price * (item.qty || 1);
  }
} 
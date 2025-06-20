import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  products = [
    {
      img: '/images/1.jpeg',
      name: 'Signature Scent 1',
      price: 'PKR 3,992',
      old: 'PKR 4,990',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk'
    },
    {
      img: '/images/2.jpeg',
      name: 'Signature Scent 2',
      price: 'PKR 3,490',
      rating: 4.0,
      notes: 'Top notes: Bergamot, Heart: Rose, Base: Amber'
    },
    {
      img: '/images/3.jpeg',
      name: 'Signature Scent 3',
      price: 'PKR 5,121',
      old: 'PKR 5,690',
      rating: 4.8,
      notes: 'Top notes: Lavender, Heart: Sandalwood, Base: Vanilla'
    },
    {
      img: '/images/images.jpeg',
      name: 'Signature Scent 4',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood'
    }
  ];

  selectedProduct: any = null;

  openModal(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  getFloor(val: number): number {
    return Math.floor(val);
  }
}

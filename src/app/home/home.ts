import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Input() selectedCategory: string = 'All';
  @Output() addToCart = new EventEmitter<any>();
  products = [
    {
      images: ['/images/1.webp', '/images/2.webp', '/images/3.webp'],
      name: 'HAIDER',
      price: 'PKR 3,992',
      old: 'PKR 4,990',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'New'
    },
    {
      images: ['/images/4.webp', '/images/5.webp', '/images/6.webp'],
      name: 'JALAL',
      price: 'PKR 3,490',
      rating: 4.0,
      notes: 'Top notes: Bergamot, Heart: Rose, Base: Amber',
      category: 'Women'
    },
    {
      images: ['/images/7.webp', '/images/8.webp', '/images/19.webp'],
      name: 'MIR',
      price: 'PKR 5,121',
      old: 'PKR 5,690',
      rating: 4.8,
      notes: 'Top notes: Lavender, Heart: Sandalwood, Base: Vanilla',
      category: 'Kids'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Men'
    },
    {
      images: ['/images/13.webp', '/images/14.webp', '/images/15.webp'],
      name: 'Ishq',
      price: 'PKR 4,490',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
  ];

  selectedProduct: any = null;
  selectedImageIndex: number = 0;

  openModal(product: any) {
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  getFloor(val: number): number {
    return Math.floor(val);
  }

  nextImage() {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.selectedProduct.images.length;
    }
  }

  prevImage() {
    if (this.selectedProduct && this.selectedProduct.images) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.selectedProduct.images.length) % this.selectedProduct.images.length;
    }
  }

  get filteredProducts() {
    if (!this.selectedCategory || this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  get showHero() {
    return !this.selectedCategory || this.selectedCategory === 'All' ;
  }
}

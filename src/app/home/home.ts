import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Input() selectedCategory: string = 'All';
  @Output() addToCartSuccess = new EventEmitter<void>();
  products: any[] = [];

  public searchTerm: string = '';
  selectedProduct: any = null;
  selectedImageIndex: number = 0;

  heroSlides = [
    {
      image: '/images/home1-slide1-img.png',
      title: 'Perfume Paradise',
      description: 'Discover scents that define you. Our perfumes are crafted to awaken your senses and leave a lasting impression. Find your signature fragrance today.',
      button: 'EXPLORE PERFUMES'
    },
    {
      image: '/images/home1-slide5-img1-2.png',
      title: 'Signature Scents',
      description: 'Find your signature scent from our curated collection of timeless and modern perfumes for every personality.',
      button: 'FIND YOUR SCENT'
    },
    {
      image: '/images/3.webp',
      title: 'Luxury in a Bottle',
      description: 'Indulge in luxurious perfumes crafted with the finest ingredients for a long-lasting impression.',
      button: 'SHOP LUXURY'
    },
    {
      image: '/images/4.webp',
      title: 'Gifts of Fragrance',
      description: 'Share the joy of scent. Discover perfect perfume gifts for loved ones and special occasions.',
      button: 'GIFT PERFUMES'
    }
  ];
  heroSliderIndex = 0;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.products;
  }

  get isSearching() {
    return this.searchTerm && this.searchTerm.trim() !== '';
  }

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
    let filtered = this.products;
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.trim().toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
    }
    return filtered;
  }

  get showHero() {
    return (!this.selectedCategory || this.selectedCategory === 'All') && !this.isSearching;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product, product.qty || 1);
    this.addToCartSuccess.emit();
    if (this.selectedProduct) {
      this.selectedProduct.qty = null;
    }
    console.log('Cart Items:', this.cartService.cartItems);
  }
}

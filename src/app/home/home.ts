import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
export class Home implements OnInit {
  @Input() selectedCategory: string = 'Men';
  @Output() addToCartSuccess = new EventEmitter<void>();
  products: any[] = [];

  public searchTerm: string = '';
  selectedProduct: any = null;
  selectedImageIndex: number = 0;
  quantity: number = 1;
  heroSliderIndex = 0;

  heroSlides = [
    {
      image: '/images/home1-slide1-img.png',
      title: 'Perfume Paradise',
    },
    {
      image: '/images/home1-slide5-img1-2.png',
      title: 'Signature Scents',
    },
    {
      image: '/images/3.webp',
      title: 'Luxury in a Bottle',
    },
  ];
  notificationService: any;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.products = this.productService.products;
  }

  ngOnInit(): void {
    this.selectedCategory = 'Men';
  }

  get isSearching() {
    return this.searchTerm && this.searchTerm.trim() !== '';
  }

  openModal(product: any): void {
    this.selectedProduct = product;
    this.selectedImageIndex = 0;
    this.quantity = 1;
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
    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      const term = this.searchTerm.trim().toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(term));
    }
    return filtered;
  }

  get showHero() {
    return !this.isSearching;
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
    this.closeModal();
  }
}

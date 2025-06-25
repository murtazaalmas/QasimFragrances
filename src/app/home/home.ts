import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { ProductService } from '../product.service';

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
  products: any[] = [];

  public searchTerm: string = '';
  selectedProduct: any = null;
  selectedImageIndex: number = 0;

  constructor(private productService: ProductService) {
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
}

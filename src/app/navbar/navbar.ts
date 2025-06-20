import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() selectedCategory: string = 'All';
  @Input() cartCount: number = 0;
  @Output() categorySelected = new EventEmitter<string>();
  @Output() cartSidebar = new EventEmitter<void>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

  onCartClick() {
    this.cartSidebar.emit();
  }
}

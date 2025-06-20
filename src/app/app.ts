import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Fragrances';
  selectedCategory: string = 'All';

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}

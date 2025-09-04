import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading';

@Component({
  selector: 'app-fragrances-collection',
  imports: [LoadingComponent],
  templateUrl: './fragrances-collection.html',
  styleUrl: './fragrances-collection.css'
})
export class FragrancesCollection implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

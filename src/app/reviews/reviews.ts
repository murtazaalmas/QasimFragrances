import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css'
})
export class Reviews {
  reviews = [
    {
      name: 'Ayesha K.',
      rating: 5,
      date: '2024-06-01',
      comment: 'Absolutely love the scent! Long lasting and elegant packaging.'
    },
    {
      name: 'Ali R.',
      rating: 4,
      date: '2024-05-28',
      comment: 'Great fragrance for daily use. Fast delivery too.'
    },
    {
      name: 'Sara M.',
      rating: 5,
      date: '2024-05-20',
      comment: 'Perfect gift for my husband. He loved it!'
    },
    {
      name: 'Bilal S.',
      rating: 3,
      date: '2024-05-15',
      comment: 'Nice scent but wish it lasted longer.'
    }
  ];
} 
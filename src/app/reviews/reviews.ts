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
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      date: '2024-06-01',
      comment: 'Absolutely love the scent! Long lasting and elegant packaging.'
    },
    {
      name: 'Ali R.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 4,
      date: '2024-05-28',
      comment: 'Great fragrance for daily use. Fast delivery too.'
    },
    {
      name: 'Sara M.',
      img: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      date: '2024-05-20',
      comment: 'Perfect gift for my husband. He loved it!'
    },
    {
      name: 'Bilal S.',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 3,
      date: '2024-05-15',
      comment: 'Nice scent but wish it lasted longer.'
    }
  ];

  get overallRating(): number {
    if (!this.reviews.length) return 0;
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  get overallRatingRounded(): number {
    return Math.round(this.overallRating);
  }

  getBarPercent(rating: number): number {
    const count = this.reviews.filter(r => r.rating === rating).length;
    return this.reviews.length ? (count / this.reviews.length) * 100 : 0;
  }
} 
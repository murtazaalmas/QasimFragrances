import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products = [
    {
      images: ['/images/product1.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Lust ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product2.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Aura ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product4.webp', '/images/02.webp', '/images/02.webp'],
      name: '007',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product5.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Perfando ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },

    
      {
      images: ['/images/product2.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Arba Pora ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product3.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Tusken Lether ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product4.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Office for Men ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product1.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Signature ',
      price: 'Rs 2,500',
      old: 'Rs 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
   
    {
      images: ['/images/13.webp', '/images/13.webp', '/images/13.webp'],
      name: 'DURVESH',
      price: 'Rs 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Don’t miss your chance to own this beloved fragrance at a special rate.'
    },
   
  ];
} 
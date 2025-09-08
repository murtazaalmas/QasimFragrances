import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products = [
    {
      images: ['/images/product1.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Lust ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product2.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Aura ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product4.webp', '/images/02.webp', '/images/02.webp'],
      name: '007',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product5.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Perfando ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },


    {
      images: ['/images/product2.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Arba Pora ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product3.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Tusken Lether ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product4.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Office for Men ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/product1.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Signature ',
      price: 2000,
      old: 3000,
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Women',
      description: '100ml',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },

   

  ];
} 
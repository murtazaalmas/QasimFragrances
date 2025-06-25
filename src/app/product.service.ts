import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products = [
    {
      images: ['/images/1.webp', '/images/2.webp', '/images/3.webp'],
      name: 'HAIDER',
      price: 'PKR 3,992',
      old: 'PKR 4,990',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'New'
    },
    {
      images: ['/images/4.webp', '/images/5.webp', '/images/6.webp'],
      name: 'JALAL',
      price: 'PKR 3,490',
      rating: 4.0,
      notes: 'Top notes: Bergamot, Heart: Rose, Base: Amber',
      category: 'New'
    },
    {
      images: ['/images/7.webp', '/images/8.webp', '/images/19.webp'],
      name: 'MIR',
      price: 'PKR 5,121',
      old: 'PKR 5,690',
      rating: 4.8,
      notes: 'Top notes: Lavender, Heart: Sandalwood, Base: Vanilla',
      category: 'New'
    },
    {
      images: ['/images/10.webp', '/images/11.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Men'
    },
    {
      images: ['/images/13.webp', '/images/14.webp', '/images/15.webp'],
      name: 'Ishq',
      price: 'PKR 4,490',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Men'
    },
    {
      images: ['/images/16.webp', '/images/16.webp', '/images/16.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Men'
    },
    {
      images: ['/images/17.webp', '/images/17.webp', '/images/17.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women'
    },
    {
      images: ['/images/18.webp', '/images/18.webp', '/images/18.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women'
    },
    {
      images: ['/images/19.webp', '/images/19.webp', '/images/19.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Kids'
    },
    {
      images: ['/images/20.webp', '/images/20.webp', '/images/20.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Kids'
    },
    {
      images: ['/images/21.webp', '/images/22.webp', '/images/23.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
    {
      images: ['/images/24.webp', '/images/25.webp', '/images/26.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale'
    },
  ];
} 
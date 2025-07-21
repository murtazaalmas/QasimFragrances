import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products = [
    {
      images: ['/images/01.webp', '/images/02.webp', '/images/02.webp'],
      name: 'Kajal Limart ',
      price: 'PKR 2,500',
      old: 'PKR 3,000',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Perfect for daily wear or special occasions, this perfume offers a unique blend of freshness and warmth.'
    },
    {
      images: ['/images/14.webp', '/images/14.webp', '/images/14.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Stock up on this popular scent while the sale lasts!'
    },
    {
      images: ['/images/03.webp', '/images/04.webp', '/images/04.webp'],
      name: 'Aromatic Club Attraction For Men Perfume 100ml',
      price: 'PKR 3,992',
      old: 'PKR 4,990',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'This fragrance is designed to leave a memorable trail, ideal for both work and evening events.'
    },
    {
      images: ['/images/1.webp', '/images/1.webp', '/images/1.webp'],
      name: 'Aromatic Club Attraction For Men Perfume 100ml',
      price: 'PKR 3,992',
      old: 'PKR 4,990',
      rating: 4.5,
      notes: 'Top notes: Citrus, Heart: Jasmine, Base: Musk',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Combining vibrant citrus with a musky base, this scent is both invigorating and long-lasting.'
    },
    {
      images: ['/images/2.webp', '/images/2.webp', '/images/2.webp'],
      name: 'Afnan Supremacy Oud Perfume 100ml',
      price: 'PKR 3,490',
      rating: 4.0,
      notes: 'Top notes: Bergamot, Heart: Rose, Base: Amber',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Ideal for those who appreciate deep, rich scents that linger throughout the day.'
    },
    {
      images: ['/images/3.webp', '/images/3.webp', '/images/3.webp'],
      name: 'MIR',
      price: 'PKR 5,121',
      old: 'PKR 5,690',
      rating: 4.8,
      notes: 'Top notes: Lavender, Heart: Sandalwood, Base: Vanilla',
      category: 'Men',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'This perfume is perfect for those who seek elegance and sophistication in every spray.'
    },
    {
      images: ['/images/4.webp', '/images/4.webp', '/images/4.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'A versatile scent that transitions seamlessly from day to night.'
    },
    {
      images: ['/images/5.webp', '/images/5.webp', '/images/5.webp'],
      name: 'Ishq',
      price: 'PKR 4,490',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Ideal for special occasions or whenever you want to make a lasting impression.'
    },
    {
      images: ['/images/6.webp', '/images/6.webp', '/images/6.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Perfect for daily wear, offering freshness and depth in every spray.'
    },
    {
      images: ['/images/7.webp', '/images/7.webp', '/images/7.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'A go-to perfume for women who love to express their individuality.'
    },
    {
      images: ['/images/8.webp', '/images/8.webp', '/images/8.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Women',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'This perfume brings together freshness and sophistication in a single bottle.'
    },
    {
      images: ['/images/9.webp', '/images/9.webp', '/images/9.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Safe and light, this scent is perfect for young ones who want to feel special.'
    },
    {
      images: ['/images/10.webp', '/images/10.webp', '/images/10.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Designed to be gentle on young skin and uplifting for every day.'
    },
    {
      images: ['/images/11.webp', '/images/11.webp', '/images/11.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Enjoy the same great scent with an exclusive discount for a limited time.'
    },
    {
      images: ['/images/12.webp', '/images/12.webp', '/images/12.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Take advantage of this offer to add a classic fragrance to your collection.'
    },
    {
      images: ['/images/13.webp', '/images/13.webp', '/images/13.webp'],
      name: 'DURVESH',
      price: 'PKR 6,200',
      rating: 4.2,
      notes: 'Top notes: Apple, Heart: Peony, Base: Cedarwood',
      category: 'Sale',
      description: 'Attraction For Men Perfume 100ml.',
      detail: 'Don’t miss your chance to own this beloved fragrance at a special rate.'
    },
   
  ];
} 
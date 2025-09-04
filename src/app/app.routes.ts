import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'reviews', loadComponent: () => import('./reviews/reviews').then(m => m.Reviews) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'collections', loadComponent: () => import('./fragrances-collection/fragrances-collection').then(m => m.FragrancesCollection) },
];

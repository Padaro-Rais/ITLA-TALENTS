import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'sectors',
    loadComponent: () => import('./pages/sectors/sectors.component').then(m => m.SectorsComponent)
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process.component').then(m => m.ProcessComponent)
  },
  {
    path: 'partners',
    loadComponent: () => import('./pages/partners/partners.component').then(m => m.PartnersComponent)
  },
  {
    path: 'why-us',
    loadComponent: () => import('./pages/why-us/why-us.component').then(m => m.WhyUsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent : ()=> import('./pages/home/home.page').then(
      (p)=>p.HomePage
    )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

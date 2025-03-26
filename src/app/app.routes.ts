import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./portfolio/pages/kn-portfolio/kn-portfolio.component')
    },
    {
        path:'**',
        redirectTo: ''
    }
];

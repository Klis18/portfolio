import { Routes } from '@angular/router';
import { LayoutComponent } from './portfolio/pages/layout/layout.component';
import KnPortfolioComponent from './portfolio/pages/kn-portfolio/kn-portfolio.component';

export const routes: Routes = [
    {
        // path:'',
        // component: KnPortfolioComponent
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadComponent: () => import('./portfolio/pages/kn-portfolio/kn-portfolio.component')
            },
            // {
            //     path:'about',
            //     loadComponent: () => import('./portfolio/pages/about/about.component')
            // },
            // {
            //     path:'portfolio/:id',
            //     loadComponent: () => import('./portfolio/pages/projects-portfolio/projects-portfolio.component')
            // },
            // {
            //     path:'portfolio-project/:id',
            //     loadComponent: () => import('./portfolio/pages/project-detail/project-detail.component')
            // },
            // {
            //     path:'contact',
            //     loadComponent: () => import('./portfolio/pages/contact/contact.component')
            // },
            {
                path:'**',
                redirectTo:''
            }
        ]
    },
    {
        path:'**',
        redirectTo: ''
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./landing-page/landing-page-module').then(m => m.LandingPageModule)
    },
    {
        path: 'accounts/login',
        loadComponent: () =>
            import('./features/account/components/login/login').then(c => c.Login)
    },
    {
        path: 'accounts/register',
        loadComponent: () =>
            import('./features/account/components/register/register').then(c => c.Register)
    },
    {
        path: 'patient',
        loadChildren: () =>
            import('./features/patient/patient-module').then(c => c.PatientModule)
    },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback for unknown routes
];

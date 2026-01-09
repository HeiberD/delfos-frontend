import { Routes } from '@angular/router';
import { Login } from './features/pages/login/login';
import { Register } from './features/pages/register/register';
import { PageNotFound } from './features/pages/page-not-found/page-not-found';
import { Home } from './features/pages/home/home';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: '404', component: PageNotFound },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '404', pathMatch: 'full'}    
];

import { Routes } from '@angular/router';
import { Login } from './features/pages/login/login';
import { Register } from './features/pages/register/register';
import { PageNotFound } from './features/pages/page-not-found/page-not-found';
import { Home } from './features/pages/home/home';
import { UserList } from './features/pages/users/user-list/user-list';
import { UserNewForm } from './features/pages/users/user-new-form/user-new-form';
import { UserEditForm } from './features/pages/users/user-edit-form/user-edit-form';

export const routes: Routes = [

    // Root routes
    { path: 'home', component: Home},
    { path: '404', component: PageNotFound },
    
    // Auth routes
    { path: 'login', component: Login},
    { path: 'register', component: Register},

    // User routes
    { path: 'dashboard/users', component: UserList},
    { path: 'dashboard/user/new', component: UserNewForm},
    { path: 'dashboard/user/edit', component: UserEditForm},
    
    // Default routes
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '404', pathMatch: 'full'}    
];

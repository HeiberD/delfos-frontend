import { Routes } from '@angular/router';
import { Login } from './features/pages/login/login';
import { Register } from './features/pages/register/register';
import { PageNotFound } from './features/pages/page-not-found/page-not-found';
import { Home } from './features/pages/home/home';
import { UsersList } from './features/pages/users/users-list/users-list';
import { AdministrativeUserNewForm } from './features/pages/users/administrative-user-new-form/administrative-user-new-form';
import { UserEditForm } from './features/pages/users/user-edit-form/user-edit-form';

export const routes: Routes = [
    { path: 'home', component: Home},
    { path: 'login', component: Login},
    { path: 'register', component: Register},
    { path: 'dashboard/users', component: UsersList},
    { path: 'dashboard/administrative-user/new', component: AdministrativeUserNewForm},
    { path: 'dashboard/user/edit/:id', component: UserEditForm},
    { path: '404', component: PageNotFound },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: '404', pathMatch: 'full'}    
];
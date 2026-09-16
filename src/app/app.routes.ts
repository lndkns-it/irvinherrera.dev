import { Routes } from '@angular/router';
import { News } from './pages/news/news';

export const routes: Routes = [
    { path: '', component: News },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'about', redirectTo: '', pathMatch: 'full' },
    { path: 'projects', redirectTo: '', pathMatch: 'full' },
    { path: 'experience', redirectTo: '', pathMatch: 'full' },
    { path: 'contact', redirectTo: '', pathMatch: 'full' },
    { path: 'news', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

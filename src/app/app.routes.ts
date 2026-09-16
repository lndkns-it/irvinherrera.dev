import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Experience } from './pages/experience/experience';
import { Contact } from './pages/contact/contact';
import { News } from './pages/news/news';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'experience', component: Experience },
    { path: 'contact', component: Contact },
    { path: 'news', component: News }
];

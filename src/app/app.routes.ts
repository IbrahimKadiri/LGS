import { Routes } from '@angular/router';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CareerComponent } from './career/career.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path: 'postuler', component: CareerComponent },
    { path: 'services/:id', component: ServiceDetailComponent },
    { path: '**', component: NotFoundComponent } // ← cette ligne attrape toutes les URLs inconnues
];

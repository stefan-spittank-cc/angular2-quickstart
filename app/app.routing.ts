import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsComponent }      from './locations.component';
import { DashboardComponent } from "./dashboard.component";
import { LocationDetailComponent } from './location-detail.component';

const appRoutes: Routes = [
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: LocationDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
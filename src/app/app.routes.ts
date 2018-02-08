import { RaceComponent } from './components/race/race.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router'

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'race/:raceId',
    component: RaceComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }
]
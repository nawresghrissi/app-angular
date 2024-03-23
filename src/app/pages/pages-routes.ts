import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegistreComponent } from '../auth/registre/registre.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

export default [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'stagiaire',
        component: StagiaireComponent,
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistreComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
] satisfies Routes;

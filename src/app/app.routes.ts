import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignUpComponent } from '../sign-up/sing-up.component';
import { LogInComponent } from '../log-in/log-in.component';

export const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'log-in', component: LogInComponent},
];


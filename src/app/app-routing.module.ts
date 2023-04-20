import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './core/components/about-page/about-page.component';
import { CateringFacilitiesComponent } from './core/components/catering-facilities/catering-facilities.component';
import { CateringResolver } from './core/components/catering-facilities/state/catering.resolver';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { NotFoundedComponent } from './core/components/not-founded/not-founded.component';
import { LoginComponent } from './core/components/admin-dashboard/login/login.component';
import { AdminDashboardComponent } from './core/components/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { title: 'Welcome screen' },
  },
  {
    path: 'all-facilites',
    component: CateringFacilitiesComponent,
    resolve: {
      catering: CateringResolver,
    },
  },
  {
    path: 'log123*in',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: NotFoundedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

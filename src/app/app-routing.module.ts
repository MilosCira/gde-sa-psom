import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './core/components/about-page/about-page.component';
import { CateringFacilitiesComponent } from './core/components/catering-facilities/catering-facilities.component';
import { CateringResolver } from './core/components/catering-facilities/state/catering.resolver';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { NotFoundedComponent } from './core/components/not-founded/not-founded.component';

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

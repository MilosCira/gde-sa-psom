import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { NotFoundedComponent } from './core/components/not-founded/not-founded.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { titile: 'Welcome screen' },
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
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';
import { AboutPageComponent } from './core/components/about-page/about-page.component';
import { CateringFacilitiesComponent } from './core/components/catering-facilities/catering-facilities.component';
import { NotFoundedComponent } from './core/components/not-founded/not-founded.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    CateringFacilitiesComponent,
    NotFoundedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

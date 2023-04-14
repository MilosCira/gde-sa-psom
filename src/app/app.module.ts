import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './core/components/about-page/about-page.component';
import { CateringFacilitiesComponent } from './core/components/catering-facilities/catering-facilities.component';
import { LandingPageModule } from './core/components/landing-page/landing-page.module';
import { NotFoundedComponent } from './core/components/not-founded/not-founded.component';
import { TranslocoRootModule } from './core/transloco/transloco.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiPrefixInterceptor } from './core/interceptor/api.interceptor';
import { SharedModule } from './core/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    CateringFacilitiesComponent,
    NotFoundedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    TranslocoRootModule,
    HttpClientModule,
    NgbModule,
    LandingPageModule,
    SharedModule
  ],
  exports: [SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

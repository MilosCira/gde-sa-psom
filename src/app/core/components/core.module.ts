import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PipeModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';
import { TranslocoRootModule } from '../transloco/transloco.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AdminModule } from './admin-dashboard/admin-dashboard.module';
import { CateringFacilitiesComponent } from './catering-facilities/catering-facilities.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { NotFoundedComponent } from './not-founded/not-founded.component';

@NgModule({
    declarations: [
        AboutPageComponent,
        CateringFacilitiesComponent,
        NotFoundedComponent,
    ],
    imports: [
        BrowserModule,
        LandingPageModule,
        AdminModule,
        LandingPageModule,
        TranslocoRootModule,
        HttpClientModule,
        NgbModule,
        LandingPageModule,
        SharedModule,
        PipeModule,
        NgMultiSelectDropDownModule.forRoot(),
    ],
    exports: [LandingPageModule, SharedModule, PipeModule],
})
export class CoreModule { }
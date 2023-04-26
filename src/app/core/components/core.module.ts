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
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactPageService } from './contact-page/contact-page.service';
import { ParksComponent } from './parks/parks.component';
import { ParkService } from './parks/parks.service';

@NgModule({
    declarations: [
        AboutPageComponent,
        CateringFacilitiesComponent,
        NotFoundedComponent,
        ContactPageComponent,
        ParksComponent,
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
    providers: [ContactPageService, ParkService],
    exports: [LandingPageModule, SharedModule, PipeModule, ContactPageComponent],
})
export class CoreModule { }

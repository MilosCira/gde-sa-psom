import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FriendsOfSiteComponent } from './friends-of-site/friends-of-site.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoRootModule } from '../../transloco/transloco.module';
import { NgbDropdownModule, } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SuggestedCateringFacilitiesComponent } from './suggested-catering-facilities/suggested-catering-facilities.component';
import { CateringService } from '../catering-facilities/caterign-facilities.service';

@NgModule({
    declarations: [

        LandingPageComponent,
        NavbarComponent,
        FooterComponent,
        FriendsOfSiteComponent,
        HeroSectionComponent,
        SuggestedCateringFacilitiesComponent

    ],
    imports: [
        BrowserModule,
        TranslocoRootModule,
        NgbDropdownModule,
        SharedModule,
        RouterModule,

    ],
    exports: [NgbDropdownModule, NavbarComponent, RouterModule],
    providers: [CateringService],
})
export class LandingPageModule { }

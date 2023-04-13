import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FriendsOfSiteComponent } from './friends-of-site/friends-of-site.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoRootModule } from '../../transloco/transloco.module';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [

        LandingPageComponent,
        NavbarComponent,
        FooterComponent,
        FriendsOfSiteComponent,

    ],
    imports: [
        BrowserModule,
        TranslocoRootModule,
        NgbDropdownModule
    ],
    exports: [NgbDropdownModule],
    providers: [],
})
export class LandingPageModule { }

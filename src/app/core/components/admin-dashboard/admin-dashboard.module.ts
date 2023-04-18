import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    NgbNavModule,
    NgbModule,
    NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditCateringFacilitiesComponent } from './edit-catering-facilities/edit-catering-facilities.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SuggestedCateringFacilitiesComponent } from './suggested-catering-facilities/suggested-catering-facilities.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AdminDashboardComponent,
        EditCateringFacilitiesComponent,
        LoginComponent,
        SuggestedCateringFacilitiesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbNavModule,
        NgbModule,
        NgbPaginationModule,
    ],
    providers: [LoginService],
})
export class AdminModule { }

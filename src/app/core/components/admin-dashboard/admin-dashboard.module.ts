import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditCateringFacilitiesComponent } from './edit-catering-facilities/edit-catering-facilities.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AdminDashboardComponent,
        EditCateringFacilitiesComponent,
        LoginComponent,
    ],
    imports: [],
    exports: [],
})
export class AdminModule { }

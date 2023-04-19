import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCaffeModalComponent } from './modals/add-caffe-modal/add-caffe-modal.component';
import { AddCaffeModalDirective } from './modals/add-caffe-modal/add-caffe.directive';
import { AddCaffeModalService } from './modals/add-caffe-modal/add-caffe.service';
import { AddCaffeModalState } from './modals/add-caffe-modal/add-caffe.state';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { TranslocoRootModule } from '../transloco/transloco.module';
import { LoaderComponent } from './components/loader/loader.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SuccessModalComponent } from './modals/success/success-modal.component';
import { SuccessModalDirective } from './modals/success/success-modal.directive';
import { SuccessModalService } from './modals/success/success-modal.service';
import { SuccessModalState } from './modals/success/success-modal.state';
const components = [
    AddCaffeModalComponent,
    AddCaffeModalDirective,
    CustomCardComponent,
    LoaderComponent,
    SuccessModalComponent,
    SuccessModalDirective,
];
const modules = [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CommonModule,
    TranslocoRootModule,
];
@NgModule({
    declarations: [...components],
    imports: [...modules, NgSelectModule],

    providers: [
        AddCaffeModalService,
        AddCaffeModalState,
        SuccessModalService,
        SuccessModalState,
    ],
    exports: [...components, ...modules],
})
export class SharedModule { }

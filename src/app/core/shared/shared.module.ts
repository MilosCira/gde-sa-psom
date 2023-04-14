import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
    NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddCaffeModalComponent } from './modals/add-caffe-modal/add-caffe-modal.component';
import { AddCaffeModalDirective } from './modals/add-caffe-modal/add-caffe.directive';
import { AddCaffeModalService } from './modals/add-caffe-modal/add-caffe.service';
import { AddCaffeModalState } from './modals/add-caffe-modal/add-caffe.state';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { TranslocoRootModule } from '../transloco/transloco.module';
const components = [AddCaffeModalComponent, AddCaffeModalDirective, CustomCardComponent];
const modules = [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    CommonModule,
    TranslocoRootModule
];
@NgModule({
    declarations: [...components,],
    imports: [...modules],

    providers: [AddCaffeModalService, AddCaffeModalState,],
    exports: [...components, ...modules],
})
export class SharedModule { }

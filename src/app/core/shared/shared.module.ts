import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
    NgbModal,
    NgbModalModule,
    NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddCaffeModalComponent } from './modals/add-caffe-modal/add-caffe-modal.component';
import { AddCaffeModalDirective } from './modals/add-caffe-modal/add-caffe.directive';
import { AddCaffeModalService } from './modals/add-caffe-modal/add-caffe.service';
import { AddCaffeModalState } from './modals/add-caffe-modal/add-caffe.state';
const components = [AddCaffeModalComponent, AddCaffeModalDirective];
const modules = [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
    CommonModule
];
@NgModule({
    declarations: [...components],
    imports: [...modules],

    providers: [AddCaffeModalService, AddCaffeModalState,],
    exports: [...components, ...modules],
})
export class SharedModule { }

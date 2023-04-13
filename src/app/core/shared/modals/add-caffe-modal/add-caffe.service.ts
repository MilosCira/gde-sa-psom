import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddCaffeModalState } from "./add-caffe.state";
import { AddCaffeModalComponent } from './add-caffe-modal.component';

@Injectable()
export class AddCaffeModalService {

    constructor(
        private modalService: NgbModal,
        private state: AddCaffeModalState
    ) { }

    open(options?: any): Promise<any> {


        this.state.options = options;


        this.state.modal = this.modalService.open(this.state.template, {
            windowClass: 'twog-modal',
            backdropClass: 'light-blue-backdrop',
            centered: true,
        });

        return this.state?.modal?.result;
    }

    close(): void {
        this.state?.modal?.close();
    }
}
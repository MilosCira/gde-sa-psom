import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddCaffeModalState } from "./add-caffe.state";
import { AddCaffeModalComponent } from './add-caffe-modal.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ISuggestedCaffe } from "./ISuggestedCatering";

@Injectable()
export class AddCaffeModalService {

    constructor(
        private modalService: NgbModal,
        private state: AddCaffeModalState,
        private http: HttpClient
    ) { }

    open(options?: any): Promise<any> {


        this.state.options = options;


        this.state.modal = this.modalService.open(this.state.template, {
            windowClass: 'twog-modal',
            centered: true,
        });

        return this.state?.modal?.result;
    }

    close(): void {
        this.state?.modal?.close();
    }

    suggestCatering(data: ISuggestedCaffe): Observable<any> {
        console.log(data);

        const uri = 'kafe/predloziKafic';
        return this.http.post(uri, data)
    }

}
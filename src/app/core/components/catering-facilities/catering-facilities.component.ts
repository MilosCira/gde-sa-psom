import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { ImageBase64Service } from '../../interceptor/utils/base64.converter';
import { CateringService } from './caterign-facilities.service';
import { CateringQuery } from './state/catering-query';
import { CateringStore } from './state/catering.store';

@Component({
  selector: 'app-catering-facilities',
  templateUrl: './catering-facilities.component.html',
  styleUrls: ['./catering-facilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CateringFacilitiesComponent implements OnInit {
  constructor(
    private cs: CateringService,
    private translocoService: TranslocoService,
    private cStore: CateringStore
  ) { }
  allCateringFacilties: any;
  countNumber: number | undefined;
  searchWord: string = '';
  showLoader: boolean = true;
  places: any
  sizeOfDogs: any;
  towns: any;
  selectedPlaces: any;
  selectedSize: any;
  selectedTowns: any;
  dropdownSettings: any = {};
  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'ime',
      allowSearchFilter: true,
    };
    this.getCateringFacilities();
  }

  onItemDeselect(item: any, type: string) {
    switch (type) {
      case 'place': {
        this.selectedPlaces = null;
        break;
      }
      case 'towns': {
        this.selectedTowns = null;
        break;
      }
      case 'size': {
        this.selectedSize = null;
        break;
      }
    }
    if (this.selectedPlaces == null || this.selectedSize == null || this.selectedTowns == null) {
      this.getCateringFacilities()
    }
  }
  onItemSelect(item: any, type: string) {
    switch (type) {
      case 'place': {
        this.selectedPlaces = item.id;

        break;
      }
      case 'towns': {
        this.selectedTowns = item.id;
        break;
      }
      case 'size': {
        this.selectedSize = item.id;
        break;
      }

    }
  }
  filteredCateringFacilities() {
    this.cs
      .getFilteredCateringFacilties(this.selectedTowns, this.selectedPlaces, this.selectedSize)
      .subscribe((res) => {
        this.countNumber = res?.count[0]?.broj;
        this.allCateringFacilties = res?.objekti;
      });
  }
  getCateringFacilities() {
    this.cs.getLimitCatering().subscribe((res) => {
      if (res) {
        console.log(res);

        this.showLoader = false;
        this.cs.getAllPlaces().subscribe((res) => {
          this.places = this.translocoService.translate(res?.ugo);
        })

        this.cs.getAllTown().subscribe((res) => {
          this.towns = res?.opstina;
        })

        this.cs.getAllSizeOfDogs().subscribe((res) => {

          this.sizeOfDogs = this.translocoService.translate(res?.starost)
        })
      }
      this.countNumber = res?.count?.broj;
      this.allCateringFacilties = res?.objekat2;
    });
  }

  /**Function retrun id */
  public identity(index: number, item: any): number {
    return index;
  }
}

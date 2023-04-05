import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringFacilitiesComponent } from './catering-facilities.component';

describe('CateringFacilitiesComponent', () => {
  let component: CateringFacilitiesComponent;
  let fixture: ComponentFixture<CateringFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateringFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCateringFacilitiesComponent } from './edit-catering-facilities.component';

describe('EditCateringFacilitiesComponent', () => {
  let component: EditCateringFacilitiesComponent;
  let fixture: ComponentFixture<EditCateringFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCateringFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCateringFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedCateringFacilitiesComponent } from './suggested-catering-facilities.component';

describe('SuggestedCateringFacilitiesComponent', () => {
  let component: SuggestedCateringFacilitiesComponent;
  let fixture: ComponentFixture<SuggestedCateringFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedCateringFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedCateringFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaffeModalComponent } from './add-caffe-modal.component';

describe('AddCaffeModalComponent', () => {
  let component: AddCaffeModalComponent;
  let fixture: ComponentFixture<AddCaffeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCaffeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaffeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsOfSiteComponent } from './friends-of-site.component';

describe('FriendsOfSiteComponent', () => {
  let component: FriendsOfSiteComponent;
  let fixture: ComponentFixture<FriendsOfSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsOfSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsOfSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

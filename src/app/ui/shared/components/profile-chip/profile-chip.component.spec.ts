import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChipComponent } from './profile-chip.component';

describe('ProfileChipComponent', () => {
  let component: ProfileChipComponent;
  let fixture: ComponentFixture<ProfileChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackIcon } from './back.component';

describe('BackIcon', () => {
  let component: BackIcon;
  let fixture: ComponentFixture<BackIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

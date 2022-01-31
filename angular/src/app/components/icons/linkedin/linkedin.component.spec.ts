import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinIcon } from './linkedin.component';

describe('LinkedinIcon', () => {
  let component: LinkedinIcon;
  let fixture: ComponentFixture<LinkedinIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

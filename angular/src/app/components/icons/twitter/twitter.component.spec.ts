import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterIcon } from './twitter.component';

describe('TwitterIcon', () => {
  let component: TwitterIcon;
  let fixture: ComponentFixture<TwitterIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

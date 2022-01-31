import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeIcon } from './youtube.component';

describe('YoutubeIcon', () => {
  let component: YoutubeIcon;
  let fixture: ComponentFixture<YoutubeIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIcon } from './link.component';

describe('LinkIcon', () => {
  let component: LinkIcon;
  let fixture: ComponentFixture<LinkIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

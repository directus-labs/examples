import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonospaceIcon } from './monospace.component';

describe('MonospaceIcon', () => {
  let component: MonospaceIcon;
  let fixture: ComponentFixture<MonospaceIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonospaceIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonospaceIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIcon } from './github.component';

describe('GithubIcon', () => {
  let component: GithubIcon;
  let fixture: ComponentFixture<GithubIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubIcon ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

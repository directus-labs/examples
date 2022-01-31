import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreArticlesComponent } from './more-articles.component';

describe('MoreArticlesComponent', () => {
  let component: MoreArticlesComponent;
  let fixture: ComponentFixture<MoreArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

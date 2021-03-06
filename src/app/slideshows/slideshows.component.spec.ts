import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowsComponent } from './slideshows.component';

describe('SlideshowsComponent', () => {
  let component: SlideshowsComponent;
  let fixture: ComponentFixture<SlideshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

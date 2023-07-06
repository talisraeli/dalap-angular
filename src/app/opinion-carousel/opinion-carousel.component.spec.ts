import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionCarouselComponent } from './opinion-carousel.component';

describe('OpinionCarouselComponent', () => {
  let component: OpinionCarouselComponent;
  let fixture: ComponentFixture<OpinionCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionCarouselComponent],
    });
    fixture = TestBed.createComponent(OpinionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

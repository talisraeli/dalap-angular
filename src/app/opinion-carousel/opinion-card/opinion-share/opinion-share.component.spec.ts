import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionShareComponent } from './opinion-share.component';

describe('OpinionShareComponent', () => {
  let component: OpinionShareComponent;
  let fixture: ComponentFixture<OpinionShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionShareComponent],
    });
    fixture = TestBed.createComponent(OpinionShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

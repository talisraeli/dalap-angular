import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionOptionsComponent } from './opinion-options.component';

describe('OpinionOptionsComponent', () => {
  let component: OpinionOptionsComponent;
  let fixture: ComponentFixture<OpinionOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpinionOptionsComponent],
    });
    fixture = TestBed.createComponent(OpinionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

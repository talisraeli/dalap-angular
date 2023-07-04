import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconButtonComponent } from './menu-icon-button.component';

describe('MenuIconButtonComponent', () => {
  let component: MenuIconButtonComponent;
  let fixture: ComponentFixture<MenuIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuIconButtonComponent]
    });
    fixture = TestBed.createComponent(MenuIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

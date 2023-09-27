import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent {
  isMenuOpen = false;

  openMenu = () => {
    this.isMenuOpen = true;
  };

  closeMenu = () => {
    this.isMenuOpen = false;
  };
}

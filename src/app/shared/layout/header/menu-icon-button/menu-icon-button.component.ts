import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-menu-icon-button',
  templateUrl: './menu-icon-button.component.html',
  styleUrls: ['./menu-icon-button.component.sass']
})
export class MenuIconButtonComponent {
  @Input() icon!: IconDefinition;
}

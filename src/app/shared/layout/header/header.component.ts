import { Component } from '@angular/core';
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  menuIcon = faBars;
  filterIcon = faFilter;
}

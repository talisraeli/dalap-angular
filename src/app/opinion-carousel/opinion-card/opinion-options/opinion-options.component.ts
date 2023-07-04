import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OpinionResults } from 'src/app/data/opinions/models/OpinionResults';
import { OptionOptionType } from './OpinionOptionType';

@Component({
  selector: 'app-opinion-options',
  templateUrl: './opinion-options.component.html',
  styleUrls: ['./opinion-options.component.sass'],
})
export class OpinionOptionsComponent {
  @Input() results?: OpinionResults;
  @Output() onOptionClick = new EventEmitter<OptionOptionType>();

  onButtonClick(type: OptionOptionType) {
    if (!this.results) {
      this.onOptionClick.emit(type);
    }
  }
}

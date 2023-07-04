import { Component, Input } from '@angular/core';
import { Opinion } from 'src/app/data/opinions/models/Opinion';
import { OptionOptionType } from './opinion-options/OpinionOptionType';
import { OpinionResults } from 'src/app/data/opinions/models/OpinionResults';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.sass'],
})
export class OpinionCardComponent {
  @Input() opinion!: Opinion;

  results?: OpinionResults;

  onOptionClick(type: OptionOptionType) {
    // @TODO: Get a real results
    this.results = {
      agree: 66,
      disagree: 34,
    };
  }
}

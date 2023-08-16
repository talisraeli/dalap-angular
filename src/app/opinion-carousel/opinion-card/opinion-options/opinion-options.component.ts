import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { OptionOptionType } from './OpinionOptionType';
import { OpinionVotes } from 'src/app/data/opinions/models/Opinion';

@Component({
  selector: 'app-opinion-options',
  templateUrl: './opinion-options.component.html',
  styleUrls: ['./opinion-options.component.sass'],
})
export class OpinionOptionsComponent {
  @Input() votes?: OpinionVotes;
  @Output() onOptionClick = new EventEmitter<OptionOptionType>();

  percentages?: {
    agree: number;
    disagree: number;
  };

  ngOnChanges(changes: SimpleChanges) {
    if (this.votes) {
      const total = this.votes.agree + this.votes.disagree;
      this.percentages = {
        agree: Math.round((this.votes.agree * 100) / total),
        disagree: Math.round((this.votes.disagree * 100) / total),
      };
    }
  }

  onButtonClick(type: OptionOptionType) {
    if (!this.votes) {
      this.onOptionClick.emit(type);
    }
  }
}

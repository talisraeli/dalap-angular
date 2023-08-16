import { Component, Input } from '@angular/core';
import { Opinion } from 'src/app/data/opinions/models/Opinion';
import { OptionOptionType } from './opinion-options/OpinionOptionType';
import { OpinionService } from 'src/app/data/opinions/services/opinion.service';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.sass'],
})
export class OpinionCardComponent {
  @Input() opinion!: Opinion;

  constructor(private opinionService: OpinionService) {}

  onOptionClick(type: OptionOptionType) {
    this.opinionService.voteOpinion(this.opinion, type === 'agree');
  }
}

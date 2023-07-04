import { Component } from '@angular/core';
import { Opinion } from '../data/opinions/models/Opinion';
import { Subscription } from 'rxjs';
import { OpinionService } from '../data/opinions/services/opinion.service';

@Component({
  selector: 'app-opinion-carousel',
  templateUrl: './opinion-carousel.component.html',
  styleUrls: ['./opinion-carousel.component.sass'],
})
export class OpinionCarouselComponent {
  opinions: Opinion[] = [];
  private subscription: Subscription;

  constructor(private opinionService: OpinionService) {
    this.subscription = opinionService
      .onOpinionUpdate()
      .subscribe((opinions) => {
        this.opinions = opinions;
      });
  }

  ngOnInit() {
    this.opinionService.getOpinions();
  }
}

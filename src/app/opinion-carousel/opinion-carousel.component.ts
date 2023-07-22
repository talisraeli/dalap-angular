import { Component, ElementRef, ViewChild } from '@angular/core';
import { Opinion } from '../data/opinions/models/Opinion';
import { Subscription } from 'rxjs';
import { OpinionService } from '../data/opinions/services/opinion.service';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-opinion-carousel',
  templateUrl: './opinion-carousel.component.html',
  styleUrls: ['./opinion-carousel.component.sass'],
})
export class OpinionCarouselComponent {
  @ViewChild('swiper') swiperEl?: ElementRef<HTMLDivElement>;

  opinions: Opinion[] = [];

  private subscription: Subscription;
  private swiper?: Swiper;

  constructor(private opinionService: OpinionService) {
    this.subscription = opinionService
      .onOpinionUpdate()
      .subscribe((opinions) => {
        this.opinions = opinions;
      });
  }

  ngAfterViewInit() {
    const config: SwiperOptions = {
      loop: true,
      allowSlidePrev: false,
    };

    if (this.swiperEl) {
      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl.nativeElement, config);

      //@ts-ignore
      this.swiperEl.nativeElement.initialize();
      //@ts-ignore
      this.swiper = this.swiperEl.nativeElement.swiper;

      this.swiperEl.nativeElement.addEventListener(
        'slidechange',
        (event) => {}
      );
    }
  }

  ngOnInit() {
    this.opinionService.getOpinions();
  }
}

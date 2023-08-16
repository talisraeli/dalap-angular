import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { OpinionService } from 'src/app/data/opinions/services/opinion.service';

@Directive({
  selector: '[appSwiperCard]',
})
export class SwiperCardDirective {
  private startPoint?: number;
  private offset?: number;
  private isDismissing = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private opinionService: OpinionService
  ) {}

  @HostListener('touchstart', ['$event'])
  private onTouchStart(e: TouchEvent) {
    const touch = e.changedTouches[0];
    if (!touch) return;
    const { clientX } = touch;
    this.startPoint = clientX;
    this.el.nativeElement.style.transition = 'transform 0s';
  }

  @HostListener('touchmove', ['$event'])
  private onTouchMove(e: TouchEvent) {
    e.preventDefault();
    if (!this.startPoint) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const { clientX } = touch;
    this.onMove(clientX);
  }

  @HostListener('touchend')
  @HostListener('cancel')
  private onTouchEnd() {
    this.startPoint = undefined;
    this.el.nativeElement.style.transform = '';
    // this.el.nativeElement.style.transition = '';
  }

  @HostListener('mousedown', ['$event'])
  private onMouseDown(e: MouseEvent) {
    const { clientX } = e;
    this.startPoint = clientX;
    this.el.nativeElement.style.transition = 'transform 0s';
  }

  @HostListener('mousemove', ['$event'])
  private onMouseMove(e: MouseEvent) {
    e.preventDefault();
    if (!this.startPoint) return;
    const { clientX } = e;
    this.onMove(clientX);
  }

  @HostListener('mouseup')
  private onMoveUp() {
    this.startPoint = undefined;
    this.el.nativeElement.style.transform = '';
    // this.el.nativeElement.style.transition = '';
  }

  @HostListener('dragstart', ['$event'])
  private onDragStart(e: DragEvent) {
    e.preventDefault();
  }

  private onMove(x: number) {
    if (this.startPoint) {
      this.offset = x - this.startPoint;
      this.el.nativeElement.style.transform = `translateX(${this.offset}px)`;
      // dismiss card
      if (
        !this.isDismissing &&
        Math.abs(this.offset) > this.el.nativeElement.clientWidth * 0.5
      ) {
        this.dismiss(this.offset > 0 ? 1 : -1);
      }
    }
  }

  private dismiss(direction: number) {
    this.isDismissing = true;
    this.startPoint = undefined;
    this.el.nativeElement.style.transition = 'transform 1s';
    this.el.nativeElement.style.transform = `translateX(${
      direction * window.innerWidth
    }px)`;
    this.el.nativeElement.classList.add('dismissing');
    setTimeout(() => {
      this.el.nativeElement.remove();
    }, 1000);
    this.opinionService.getOpinion();
  }
}

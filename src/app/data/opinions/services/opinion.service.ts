import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { Opinion } from '../models/Opinion';

@Injectable({
  providedIn: 'root',
})
export class OpinionService {
  opinions: Opinion[] = [];
  private subject = new Subject<Opinion[]>();

  constructor(private api: ApiService) {}

  getOpinions() {
    this.api.get<Opinion[]>('/opinions').subscribe((opinions) => {
      this.opinions = opinions;
      this.subject.next(this.opinions);
    });
  }

  createOpinion(opinion: Opinion) {
    this.api.post<Opinion>('/opinions', opinion).subscribe((opinion) => {
      this.opinions.push(opinion);
      this.subject.next(this.opinions);
    });
  }

  onOpinionUpdate() {
    return this.subject.asObservable();
  }
}

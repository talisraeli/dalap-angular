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
  private didUserCreated = localStorage.getItem('didUserCreated') !== null;

  constructor(private api: ApiService) { }

  initOpinions() {
    this.authorizeUser(() => {
      for (let i = 0; i < 2; i++) {
        this.api.get<Opinion>('/opinions/get').subscribe((opinion) => {
          this.opinions.push(opinion);
          this.subject.next(this.opinions);
        });
      }
    });
  }

  getOpinion(): void {
    this.authorizeUser(() => {
      this.api.get<Opinion>('/opinions/get').subscribe((opinion) => {
        this.opinions.push(opinion);
        this.opinions.shift();
        this.subject.next(this.opinions);
      });
    });
  }

  voteOpinion(opinion: Opinion, isAgree: boolean) {
    this.authorizeUser(() => {
      this.api
        .post<Opinion>(`/opinions/vote/${opinion.id}`, { isAgree })
        .subscribe((modifiedOpinion) => {
          opinion.votes = modifiedOpinion.votes;
          this.subject.next(this.opinions);
        });
    });
  }

  createOpinion(content: string) {
    this.authorizeUser(() => {
      this.api.post<Opinion>('/opinions/create', { content }).subscribe();
    });
  }

  onOpinionUpdate() {
    return this.subject.asObservable();
  }

  private authorizeUser(next: () => void) {
    if (!this.didUserCreated) {
      this.api.post('/users/create', null).subscribe(() => {
        localStorage.setItem('didUserCreated', 'true');
        this.didUserCreated = true;
        next();
      });
      return;
    }
    next();
  }
}

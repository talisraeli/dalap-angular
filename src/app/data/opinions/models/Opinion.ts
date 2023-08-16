export interface Opinion {
  id: string;
  createdAt: Date;
  content: string;
  colorHue: number;
  votes?: OpinionVotes;
}

export interface OpinionVotes {
  agree: number;
  disagree: number;
}

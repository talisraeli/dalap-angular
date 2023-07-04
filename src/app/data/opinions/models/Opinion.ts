import { OpinionResults } from './OpinionResults';

export interface Opinion {
  id: string;
  content: string;
  colorHue: number;
  results?: OpinionResults;
}

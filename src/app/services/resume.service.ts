import { Injectable } from '@angular/core';
import { RESUME_DATA } from '../data/resume.data';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  readonly data = RESUME_DATA;
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  readonly experiences = inject(ResumeService).data.experiences;
}

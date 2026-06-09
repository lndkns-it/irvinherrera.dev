import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly experiences = inject(ResumeService).data.experiences;
}

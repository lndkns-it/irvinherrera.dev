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
  private readonly resume = inject(ResumeService).data;
  readonly experiences = this.resume.experiences;
  readonly personalProjects = this.resume.personalProjects;
}

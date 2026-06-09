import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillMeter } from '../../components/skill-meter/skill-meter';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-about',
  imports: [SkillMeter],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly resume = inject(ResumeService).data;
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeService } from '../../services/resume.service';
import { Stat } from '../../models/resume.models';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly resume = inject(ResumeService).data;

  readonly stats: Stat[] = [
    { value: '10+', label: 'Years of Experience' },
    { value: '4', label: 'Industry Sectors' },
    { value: '~40%', label: 'Faster Delivery with AI' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  readonly techStack = [
    'Angular', 'React', 'Flutter', 'TypeScript',
    'Node.js', 'Java', 'Claude API', 'Tailwind CSS', 'WCAG 2.2',
  ];

  readonly heroSummary = this.resume.summary.split('. ').slice(0, 2).join('. ') + '.';
}

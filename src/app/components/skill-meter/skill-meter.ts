import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  SimpleChanges,
  afterNextRender,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-skill-meter',
  templateUrl: './skill-meter.html',
  styleUrl: './skill-meter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillMeter implements OnChanges {
  skill = input<string>('Skill');
  percentage = input<number>(0);
  animationDelay = input<number>(0);
  animationDuration = input<number>(1200);

  readonly circumference = Math.PI * 52;

  displayPercentage = signal(0);
  strokeDashoffset = signal(Math.PI * 52);

  get level(): string {
    const pct = this.percentage();
    if (pct >= 70) return 'Advanced';
    if (pct >= 40) return 'Intermediate';
    return 'Beginner';
  }

  get levelClass(): string {
    const pct = this.percentage();
    if (pct >= 70) return 'advanced';
    if (pct >= 40) return 'intermediate';
    return 'beginner';
  }

  constructor() {
    afterNextRender(() => {
      setTimeout(() => this.animate(), this.animationDelay());
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percentage'] && !changes['percentage'].firstChange) {
      this.animate();
    }
  }

  private animate(): void {
    const target = Math.min(Math.max(this.percentage(), 0), 100);
    const fillLength = (target / 100) * this.circumference;
    this.strokeDashoffset.set(this.circumference - fillLength);

    const duration = this.animationDuration();
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayPercentage.set(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}

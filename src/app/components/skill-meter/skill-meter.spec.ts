import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMeter } from './skill-meter';

describe('SkillMeter', () => {
  let component: SkillMeter;
  let fixture: ComponentFixture<SkillMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillMeter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

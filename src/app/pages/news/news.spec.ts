import { ComponentFixture, TestBed } from '@angular/core/testing';
import { News } from './news';

describe('News', () => {
  let component: News;
  let fixture: ComponentFixture<News>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [News],
    }).compileComponents();

    fixture = TestBed.createComponent(News);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts on front page, edition A', () => {
    expect(component.section()).toBe('front');
    expect(component.edition()).toBe('A');
  });

  it('setSection changes the active section', () => {
    component.setSection('about');
    expect(component.section()).toBe('about');
  });

  it('setEdition changes the active edition', () => {
    component.setEdition('B');
    expect(component.edition()).toBe('B');
  });

  it('sendForm sets sent to true', () => {
    component.sendForm();
    expect(component.sent()).toBe(true);
  });

  it('resetForm clears sent and resets form', () => {
    component.sendForm();
    component.resetForm();
    expect(component.sent()).toBe(false);
  });
});

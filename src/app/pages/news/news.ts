import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

export type Section = 'front' | 'about' | 'projects' | 'experience' | 'contact';
export type Edition = 'A' | 'B' | 'C' | 'D';

interface NavItem { id: Section; label: string; }
interface EditionItem { id: Edition; label: string; }
interface Stat { n: string; l: string; bg: string; fg: string; }
interface Skill { n: string; lvl: string; }
interface ExpertiseGroup { t: string; items: string; }
interface Language { n: string; v: string; }
interface Role { role: string; company: string; dates: string; place: string; current: boolean; tags: string; bullets: string[]; }
interface BriefRole { role: string; meta: string; }
interface ProjectLink { label: string; href: string; }
interface Project { name: string; status: string; stampClass: string; tagline: string; shot: string; body: string; bullets: string[]; stack: string; links: ProjectLink[]; }
interface Contact { k: string; v: string; href: string; }
interface IndexItem { l: string; p: string; }

@Component({
  selector: 'app-news',
  templateUrl: './news.html',
  styleUrl: './news.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class News {
  readonly section = signal<Section>('front');
  readonly edition = signal<Edition>('A');
  readonly sent = signal(false);

  readonly contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  readonly navItems: NavItem[] = [
    { id: 'front', label: 'Front Page' },
    { id: 'about', label: 'The Profile' },
    { id: 'projects', label: 'Projects Desk' },
    { id: 'experience', label: 'Career Ledger' },
    { id: 'contact', label: 'Classifieds' },
  ];

  readonly editionItems: EditionItem[] = [
    { id: 'A', label: 'A · Broadsheet' },
    { id: 'B', label: 'B · Black Slab' },
    { id: 'C', label: 'C · Picture' },
    { id: 'D', label: 'D · All Type' },
  ];

  readonly stats: Stat[] = [
    { n: '10+', l: 'Years of experience', bg: '#141210', fg: '#f6f1e4' },
    { n: '4', l: 'Industry sectors', bg: '#f6f1e4', fg: '#141210' },
    { n: '~40%', l: 'Faster delivery with AI', bg: '#f6f1e4', fg: '#141210' },
    { n: '98%', l: 'Client satisfaction', bg: '#f6f1e4', fg: '#141210' },
  ];

  readonly tech: string[] = ['Angular', 'React', 'Flutter', 'TypeScript', 'Node.js', 'Java', 'Claude API', 'Tailwind CSS', 'WCAG 2.2'];

  readonly skills: Skill[] = [
    { n: 'Angular', lvl: 'Advanced' },
    { n: 'TypeScript', lvl: 'Advanced' },
    { n: 'HTML5 / CSS3', lvl: 'Advanced' },
    { n: 'JavaScript', lvl: 'Advanced' },
    { n: 'React', lvl: 'Advanced' },
    { n: 'Tailwind CSS', lvl: 'Advanced' },
    { n: 'Flutter', lvl: 'Advanced' },
    { n: 'Node.js', lvl: 'Advanced' },
  ];

  readonly expertise: ExpertiseGroup[] = [
    { t: 'Front-End', items: 'Angular · React · Flutter · Vue · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS' },
    { t: 'Back-End', items: 'Java (8–17) · Node.js · Python · Kotlin · SQL · RESTful APIs · SOAP · GraphQL' },
    { t: 'AI / LLM', items: 'Claude API · Gemini · Prompt Engineering · AI Orchestration · LLM-assisted Workflows' },
    { t: 'Design Systems', items: 'Material 3 · Atomic Design · WCAG 2.2 · Figma' },
    { t: 'Testing', items: 'Jasmine · Karma · JUnit · Vitest · Unit & Integration Testing' },
    { t: 'DevOps / Tools', items: 'Docker · Jenkins · Git · GitHub Actions · CI/CD · Agile / Scrum' },
  ];

  readonly langs: Language[] = [
    { n: 'Spanish', v: 'Native' },
    { n: 'English', v: 'Professional' },
    { n: 'French', v: 'Basic' },
  ];

  readonly rolesBrief: BriefRole[] = [
    { role: 'Globant — Senior Web UI Developer', meta: 'Sep 2023 – Present · Remote · Mexico' },
    { role: 'CASPEX — Senior Software Developer', meta: 'Jul 2023 – Sep 2023 · Remote · Mexico' },
    { role: 'Nearshore Technology — Principal Software Developer', meta: 'Aug 2022 – Mar 2023 · Remote' },
    { role: 'Unosquare — Senior Software Developer', meta: 'Feb 2021 – Feb 2022 · Remote' },
  ];

  readonly roles: Role[] = [
    {
      role: 'Senior Web UI Developer', company: 'Globant', dates: 'Sep 2023 – Present',
      place: 'Remote · Mexico', current: true,
      tags: 'Design Systems · Flutter · React · AI/LLM Tooling · WCAG 2.2 · Java',
      bullets: [
        "Architected and led delivery of a production-ready Design System in Flutter for Employbridge's mobile app, translating Figma designs into Atomic-architecture components complying with Material 3 and WCAG 2.2 — completing 2 months ahead of schedule.",
        'Designed and operated an AI orchestration pipeline using Claude and Gemini to automate component scaffolding, accessibility audits, and code reviews — reducing per-component delivery time by ~40%.',
        'Directed AI-assisted development workflows (prompt engineering, context management, output validation) enabling a small team to sustain the velocity of a team twice its size.',
        'Engineered a React-based PoC achieving a 30% performance uplift through optimized color schemes, responsive layouts, and component reusability.',
        'Contributed to a Java 8 → 17 backend migration, improving platform performance by 25% and delivering digital document signing for a loan platform serving 5K+ customers.',
      ],
    },
    {
      role: 'Senior Software Developer', company: 'CASPEX', dates: 'Jul 2023 – Sep 2023',
      place: 'Remote · Mexico', current: false,
      tags: 'Angular · WCAG 2.2 · UI/UX Redesign',
      bullets: [
        'Led a full redesign of the Cordiance platform UI, delivering a modern, WCAG 2.2-compliant experience that increased user engagement by 20%.',
        'Introduced a new design system covering accessible color contrast, typography, and navigation patterns, standardizing the visual language across all application modules.',
      ],
    },
    {
      role: 'Principal Software Developer', company: 'Nearshore Technology', dates: 'Aug 2022 – Mar 2023',
      place: 'Remote', current: false,
      tags: 'React · Node.js · RESTful APIs · Performance Optimization',
      bullets: [
        'Designed and implemented scalable solutions for complex technical requirements, significantly reducing average bug-resolution time through proactive debugging and code optimization.',
        'Streamlined internal workflows by building RESTful web services and intuitive front-end interfaces, improving cross-team process efficiency by 25%.',
      ],
    },
    {
      role: 'Senior Software Developer', company: 'Persistent Systems', dates: 'Feb 2022 – Aug 2022',
      place: 'Remote', current: false,
      tags: 'Angular · Java · Node.js · EdTech',
      bullets: [
        'Built innovative tools and interactive features for an education platform, improving user experience scores by 10% and streamlining educator workflows across multiple departments.',
        'Expanded scope to full-stack development (Java + Node.js), improving project delivery speed and strengthening cross-team collaboration.',
        'Gathered and translated client feedback into actionable product features, achieving 65% client satisfaction on delivered solutions.',
      ],
    },
    {
      role: 'Senior Software Developer (Tech Lead & Team Manager)', company: 'Unosquare', dates: 'Feb 2021 – Feb 2022',
      place: 'Remote', current: false,
      tags: 'JavaScript · Team Leadership · Virtual Events · Client Management',
      bullets: [
        'Directed a team of 4 engineers — managing career growth, sprint prioritization, and performance reviews — while maintaining a high-delivery culture.',
        'Developed interactive virtual event platforms on Hubb.me using vanilla JavaScript, increasing user engagement by 25% and supporting thousands of concurrent participants.',
        'Maintained 98% client satisfaction through proactive communication, issue resolution, and reliable cross-team coordination.',
      ],
    },
    {
      role: 'Software Engineer E2', company: 'General Electric', dates: 'Oct 2017 – Feb 2021',
      place: 'Querétaro, Mexico', current: false,
      tags: 'Angular · Java · CI/CD · WCAG 2.2 · Enterprise Systems',
      bullets: [
        'Delivered full-stack development across multiple enterprise projects, improving platform reliability by 25% through seamless front-end/back-end integration.',
        'Led UX, API development, and unit testing for GE Renewables System Data Management, improving data accessibility and reducing delivery time by 30%.',
        'Architected the Orion system end-to-end: database design, CI/CD pipelines, WCAG 2.2 accessibility compliance, and Agile ceremonies.',
      ],
    },
    {
      role: 'Mid Software Developer', company: 'Stefanini', dates: 'Sep 2015 – Sep 2017',
      place: 'Querétaro, Mexico', current: false,
      tags: 'Angular · Java · SOAP · IBM WebSphere',
      bullets: [
        'Developed and deployed Angular front-end interfaces and API services for Santander Bank, enhancing system usability across 5+ internal departments.',
        'Built back-end web services for Walmart Vitamedica, integrating a comprehensive medical network and supporting thousands of daily transactions.',
        'Implemented SOAP services with JUnit test coverage >90%, reducing post-release defects by 15%.',
      ],
    },
    {
      role: 'Junior Software Developer', company: 'SOLSER SISTEMS', dates: 'Jan 2014 – Aug 2015',
      place: 'Querétaro, Mexico', current: false,
      tags: 'Java · WebSphere · JBoss · jQuery',
      bullets: [
        'Designed and delivered web services and data models for Libertad Financial Services, achieving 100% compliance with internal security and privacy standards.',
        'Optimized WebSphere and JBoss configurations for Santander Bank projects, enhancing system performance and deployment stability by 25%.',
        'Reduced front-end maintenance time by 20% through modular jQuery templates; introduced process improvements that raised development productivity by 15%.',
      ],
    },
  ];

  readonly projects: Project[] = [
    {
      name: 'LexIA', status: 'Live', stampClass: 'stamp--live',
      tagline: 'AI-powered legal document evaluator',
      shot: 'screenshot — LexIA verdict view',
      body: 'Full-stack system that evaluates PDF and DOCX legal documents against database-driven rubrics tailored to Mexican law using Claude AI. Documents receive a structured verdict with per-criterion scores, severity-flagged errors, and actionable improvement suggestions.',
      bullets: [
        'Async evaluation pipeline: HTTP server enqueues BullMQ jobs; worker processes up to 3 documents concurrently with exponential-backoff retries.',
        'AI rubric engine loads active scoring criteria from PostgreSQL at evaluation time and calls Claude with prompt caching — returning APROBADO / OBSERVACIONES / RECHAZADO verdicts with 0–10 scores.',
        'JWT auth with plan-based monthly quotas (free / pro / despacho) that auto-reset each calendar month.',
        'Cross-platform Flutter frontend deployed on Vercel (web) with Android support; polls evaluation status every 3 seconds.',
      ],
      stack: 'Flutter · Node.js · Express · PostgreSQL · Redis · BullMQ · Claude AI · Docker · Vercel · Railway',
      links: [
        { label: 'Live demo', href: 'https://lexia-ten-rho.vercel.app/' },
        { label: 'GitHub', href: 'https://github.com/lndkns-it/lexia' },
      ],
    },
    {
      name: 'irv-b-studio', status: 'In Progress', stampClass: 'stamp--progress',
      tagline: 'Music studio management platform',
      shot: 'screenshot — booking calendar',
      body: 'Fullstack monorepo for a music studio booking and management system. Features a Next.js web frontend with a Tailwind-based component library and a Node.js background worker, all sharing a Prisma + PostgreSQL database package via npm workspaces.',
      bullets: [
        'npm workspaces monorepo with a shared @irv-b/database package (Prisma ORM) consumed by both the web app and the worker.',
        'Next.js 15 frontend bootstrapped with create-next-app, currently building a component design system with Tailwind CSS.',
        'Background worker app handles async studio operations; concurrently script runs both apps in development with a single command.',
      ],
      stack: 'Next.js · React · TypeScript · Tailwind CSS · Node.js · Prisma · PostgreSQL · npm Workspaces',
      links: [
        { label: 'GitHub', href: 'https://github.com/lndkns-it/irv-b-studio' },
      ],
    },
  ];

  readonly contacts: Contact[] = [
    { k: 'Email', v: 'ing.imherrera@gmail.com', href: 'mailto:ing.imherrera@gmail.com' },
    { k: 'LinkedIn', v: 'linkedin.com/in/imherrera', href: 'https://linkedin.com/in/imherrera' },
    { k: 'GitHub', v: 'github.com/lndkns-it', href: 'https://github.com/lndkns-it' },
  ];

  readonly pageIndex: IndexItem[] = [
    { l: 'The Profile', p: 'A2' },
    { l: 'Projects Desk', p: 'A4' },
    { l: 'Career Ledger', p: 'B1' },
    { l: 'Classifieds', p: 'B6' },
  ];

  setSection(s: Section): void { this.section.set(s); }
  setEdition(e: Edition): void { this.edition.set(e); }
  goToProjects(): void { this.section.set('projects'); }
  goToExp(): void { this.section.set('experience'); }
  sendForm(): void { this.sent.set(true); }
  resetForm(): void { this.contactForm.reset(); this.sent.set(false); }
}

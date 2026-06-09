export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  technologies: string[];
  highlights: string[];
  isCurrent: boolean;
}

export interface SkillMeterItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: number;
  gpa: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  experiences: Experience[];
  skillMeters: SkillMeterItem[];
  skillGroups: SkillGroup[];
  education: Education[];
  languages: Language[];
}

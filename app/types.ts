import { LucideIcon } from 'lucide-react';

interface BaseItem {
  title: string;
  description?: string;
  tech?: string[];
}

interface EducationItem extends BaseItem {
  place: string;
  year: string;
}

interface ExperienceItem extends BaseItem {
  company: string;
  year: string;
  location: string;
}

interface ProjectItem extends BaseItem {
  link: string;
  tech: string[];
}

interface SpeakingItem extends BaseItem {
  image: string;
  location: string;
  tech: string[];
}

interface AchievementItem extends BaseItem {
  tech?: string[];
}

export type SectionItem = EducationItem | ExperienceItem | ProjectItem | SpeakingItem | AchievementItem;

export interface Section {
  title: string;
  icon: LucideIcon;
  items: SectionItem[];
} 
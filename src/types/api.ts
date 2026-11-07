export interface BaseApiResponse<T> {
  success: boolean;
  count?: number;
  filter?: string | null;
  data: T;
}

export interface TrackItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  what_you_do: string;
  explore_link: string;
  open: boolean;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface FormatItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  cta: string;
}

export interface JourneyItem {
  step: number;
  id: string;
  title: string;
  description: string;
}

export interface RoleItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
}

export interface InquiryCategoryItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  guidance: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SocialLinks {
  instagram: string;
  linkedin: string;
  github: string;
}

export interface Stats {
  community_members: number;
  workshops_held: number;
  projects_shipped: number;
  active_tracks: number;
  university: string;
  city: string;
  country: string;
  founded_year: number;
  social: SocialLinks;
  tagline: string;
}

export interface NavItem {
  label: string;
  href: string;
}
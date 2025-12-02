import { ReactNode } from "react";

export interface NavLink {
  label: string;
  path: string;
  subItems?: NavLink[];
}

export interface ServiceCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface FeatureSectionProps {
  reversed?: boolean;
  category: string;
  title: string;
  description: string;
  points: string[];
  buttonText?: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  title: string;
}
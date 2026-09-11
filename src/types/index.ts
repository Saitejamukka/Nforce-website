export interface Solution {
  key: string;
  title: string;
  desc: string;
  icon: string;
  href: string;
  deliverables: string[];
  img: string;
}

export interface ServiceCategory {
  group: string;
  icon: string;
  items: string[];
}

export interface Industry {
  label: string;
  icon: string;
  img: string;
}

export interface Capability {
  title: string;
  icon: string;
  desc: string;
}

export interface WhatWeDoItem {
  key: string;
  n: number;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface JobPosition {
  title: string;
  location: string;
  overview: string;
  reqs: string[];
}

export interface CareerValue {
  icon: string;
  title: string;
  desc: string;
}

export interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
  ts: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Milestone {
  year: string;
  client: string;
  tag: string;
  desc: string;
}

export interface CulturalValue {
  letter: string;
  title: string;
  desc: string;
  icon: string;
}

export interface StrategicPillar {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  desc: string;
  offerings: string[];
  technologies: string[];
  outcomes: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: 'AI & Automation' | 'Enterprise & HR' | 'Operations & Data' | 'Customer & Media';
  status: 'Public' | 'Approval Pending' | 'Client Restricted';
  badge: string;
  icon: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  businessValue: string;
}

export interface TelecomDomainArea {
  id: string;
  title: string;
  badge: string;
  icon: string;
  story: string;
  capabilities: string[];
  metrics: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  badge: string;
  challenge: string;
  solution: string;
  technologies: string[];
  deliveryModel: string;
  outcomes: { label: string; value: string }[];
  impactSummary: string;
}

export interface EngagementModelItem {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  deliveryFocus: string;
  bestFor: string;
  keyBenefits: string[];
}

export interface EmployeeVoiceItem {
  id: string;
  name: string;
  role: string;
  team: string;
  location: string;
  quote: string;
  initials: string;
  yearsWithTeam: string;
}

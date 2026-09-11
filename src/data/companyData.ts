import { FaqItem, Milestone, CulturalValue } from '../types';

export const PARTNERS = [
  'AWS Partner',
  'Google Cloud',
  'Microsoft Certified Partner',
  'Salesforce Partner',
  'Lenovo',
  'Hewlett Packard Enterprise',
  'Acronis',
];

export const HOW_IT_WORKS = [
  { n: 1, text: 'We schedule a discovery call at your convenience.' },
  { n: 2, text: 'We assess your goals, tech landscape, and business workflows.' },
  { n: 3, text: 'We deliver a tailored solution proposal and execution roadmap.' },
];

export const CAPABILITY_LIST = [
  'Custom Software Development',
  'API & Microservices Architecture',
  'UI/UX Design Systems',
  'DevOps & Infrastructure Automation',
  'Scalable QA & Test Automation',
  'Cloud & API Integrations',
  'Analytics & AI Enablement',
  'Ongoing Maintenance & Support',
];

export const MENU_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Telecom Domain', href: '#telecom' },
  { label: 'Products & Platforms', href: '#products' },
  { label: 'Real Outcomes', href: '#outcomes' },
  { label: 'Engagement Models', href: '#engagement' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const FAQS: FaqItem[] = [
  {
    q: 'What makes NForce different from other IT service providers?',
    a: 'We combine domain expertise with startup-style agility, offering full-spectrum services across AI, DevOps, QA, Pega, and cloud. Every engagement is personalized for your business goals, not a generic playbook.',
  },
  {
    q: 'Can I start small and scale services as my business grows?',
    a: 'Absolutely. Whether you need a small QA team or a full cross-functional squad, we scale up (or down) based on your evolving requirements.',
  },
  {
    q: 'Do you support one-time projects as well as long-term engagements?',
    a: 'Yes! We offer flexible contracts, ranging from one-off deliverables to multi-year partnerships.',
  },
  {
    q: 'How do you ensure the security and quality of your solutions?',
    a: 'From secure development practices to rigorous QA, everything we deliver meets enterprise-grade standards. We’re transparent, process-driven, and ISO-level meticulous.',
  },
  {
    q: 'Can I choose the tools, tech stack, or cloud provider we use?',
    a: 'Of course. We’re tech-agnostic and will align with your preferences, whether it’s AWS, Azure, React, Pega, or custom legacy systems.',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '2024',
    client: 'Atomic',
    tag: 'AI-Driven Outreach',
    desc: 'Atomic supercharged their outreach efforts with our cutting-edge AI-driven system, now handling all outbound communications and connecting with more potential clients.',
  },
  {
    year: '2024',
    client: 'Intripid',
    tag: 'AI Travel Planner',
    desc: 'Architected and developed next-generation AI recommendation models and custom booking workflows for an intuitive, automated travel experience.',
  },
  {
    year: '2025',
    client: 'Consolidated Communication',
    tag: 'End-to-End Enterprise QA',
    desc: 'Delivered consolidated communication and streamlined quality assurance across all stages of the software lifecycle—managing dozens of parallel projects with precision and enterprise-grade accountability.',
  },
];

export const CULTURAL_VALUES: CulturalValue[] = [
  {
    letter: 'G',
    title: 'Growth',
    desc: 'We embrace continuous learning and development—personally and professionally. By fostering an environment where people thrive, we help every team member unlock their full potential.',
    icon: 'TrendingUp',
  },
  {
    letter: 'R',
    title: 'Responsibility',
    desc: 'We take ownership of our actions and their impact on clients, colleagues, and communities. We are committed to delivering solutions that are both reliable and ethical.',
    icon: 'ShieldCheck',
  },
  {
    letter: 'O',
    title: 'Optimism',
    desc: 'We tackle every challenge with a positive mindset, always believing there’s a better way forward. Optimism fuels our innovation, resilience, and drive for meaningful outcomes.',
    icon: 'Sparkles',
  },
  {
    letter: 'W',
    title: 'Wisdom',
    desc: 'We leverage the collective wisdom gained from experience and the diverse insights of our team. This guides informed decisions that benefit stakeholders and build long-term success.',
    icon: 'Compass',
  },
];


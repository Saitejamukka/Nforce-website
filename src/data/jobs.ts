import { CareerValue, JobPosition } from '../types';

export const CAREER_VALUES: CareerValue[] = [
  {
    icon: 'HeartHandshake',
    title: 'People First',
    desc: 'We place a high value on our team’s happiness, work/life balance, and professional development — everybody wins, clients included.',
  },
  {
    icon: 'TrendingUp',
    title: 'Real Growth',
    desc: 'Hands-on work across QA, DevOps, Pega, and AI — mentorship and certifications that move your career forward.',
  },
  {
    icon: 'Globe',
    title: 'Global Team',
    desc: 'Collaborate across our Hyderabad and Dallas offices on projects for enterprise and government clients.',
  },
];

export const JOBS: JobPosition[] = [
  {
    title: 'Senior Automation Tester',
    location: 'Hyderabad',
    overview:
      'Lead automation testing efforts to ensure software quality and efficiency. Develop automated test scripts and collaborate with the development team to streamline testing processes.',
    reqs: ['Selenium', 'TestNG', 'Scripting'],
  },
  {
    title: 'Performance Tester',
    location: 'Hyderabad',
    overview:
      'Design and execute performance testing strategies to ensure application stability under high traffic and load conditions.',
    reqs: ['JMeter', 'LoadRunner', 'Bottleneck analysis'],
  },
  {
    title: 'Associate Engineer Intern',
    location: 'Hyderabad',
    overview: 'Assist in executing test cases, identifying bugs, and ensuring software quality.',
    reqs: ['Testing fundamentals', 'Selenium (plus)', 'Analytical mindset'],
  },
  {
    title: 'PEGA Developer',
    location: 'Hyderabad',
    overview:
      'Design, develop, and support Pega-based applications while collaborating with stakeholders to deliver high-quality solutions.',
    reqs: ['Pega 7.x/8.x/Infinity', 'REST/SOAP/JMS', 'CSA/CSSA preferred'],
  },
  {
    title: 'QA Manager',
    location: 'Hyderabad',
    overview:
      'Lead multiple QA teams across diverse projects, drive quality initiatives, optimize processes, and mentor teams.',
    reqs: ['8+ yrs QA', '3+ yrs leadership', 'Agile/DevOps'],
  },
];

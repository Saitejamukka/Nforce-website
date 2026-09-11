import { ServiceCategory } from '../types';

export const SERVICE_CATALOG: ServiceCategory[] = [
  {
    group: 'Full Cycle Services',
    icon: 'Repeat',
    items: ['Manual Testing', 'Automation Testing', 'Consulting Testing', 'Outsourcing Testing', 'AI Testing'],
  },
  {
    group: 'Services by Type',
    icon: 'Shapes',
    items: ['UX Testing', 'Performance Testing', 'Functional Testing', 'Regression Testing', 'Integration Testing', 'Compatibility Testing'],
  },
  {
    group: 'Services by Platform',
    icon: 'Server',
    items: ['POS Testing', 'Payment Testing', 'IoT Testing', 'Mobile App Testing', 'Mobile & Device Testing', 'Web App Testing', 'Cloud Testing'],
  },
  {
    group: 'More Services',
    icon: 'Sparkles',
    items: [
      'Software Development',
      'Artificial Intelligence',
      'Pega Development',
      'Pega Testing',
      'DevOps',
      'Database Management',
      'Data Analytics',
      'Big Data',
      'Digital App Development',
      'Intelligent RPA',
      'Management Services',
    ],
  },
];

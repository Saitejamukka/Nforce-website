import { TelecomDomainArea } from '../types';

export const TELECOM_AREAS: TelecomDomainArea[] = [
  {
    id: 'oss-bss',
    title: 'OSS/BSS Transformation',
    badge: 'Core Telecom Stack',
    icon: 'Layers',
    story: 'Modernizing legacy order management, billing systems, charging engines, service provisioning, and CRM interfaces to enable rapid rollout of 5G, fiber, and enterprise IoT services.',
    capabilities: [
      'Order-to-Cash & Provisioning Workflow Modernization',
      'Convergent Billing, Rating & Revenue Assurance',
      'Customer Care & CRM Portal Decoupling',
      'Inventory, Service Fulfillment & Activation Pipelines',
    ],
    metrics: '99.4% Billing Accuracy across 10M+ Subscriber Cycles',
  },
  {
    id: 'telecom-qe',
    title: 'Telecom Quality Engineering & SIT',
    badge: 'Mission-Critical Assurance',
    icon: 'ShieldCheck',
    story: 'Comprehensive end-to-end telecom verification spanning multi-vendor System Integration Testing (SIT), continuous regression pipelines, network protocol compliance, and peak-hour load simulation.',
    capabilities: [
      'End-to-End Multi-Vendor System Integration Testing',
      'Automated Billing & Tariff Plan Validation Suites',
      'Peak-Traffic Load, Stress & Resilience Simulation',
      'Regulatory E911, CALEA & Compliance Verification',
    ],
    metrics: '70% Faster Regression Runs with Zero Defect Leakage',
  },
  {
    id: 'ai-cx-voice',
    title: 'AI, Voice AI & IVR Validation',
    badge: 'Next-Gen Experience',
    icon: 'Radio',
    story: 'Transforming telecom customer service through autonomous virtual agents, conversational speech AI, and automated audio-frequency IVR testing that validates customer call flows at massive scale.',
    capabilities: [
      'Autonomous Telecom Customer Service Virtual Agents',
      'Automated IVR Call-Tree Audio Traversal & Testing',
      'Speech-to-Text Accuracy & Dialect Comprehension Audits',
      'Agentic Call Summary & CRM Auto-Resolution Workflows',
    ],
    metrics: '45% Reduction in Tier-1 Call Support Escalations',
  },
  {
    id: 'network-field-ops',
    title: 'Network & Field Operations Automation',
    badge: 'Infrastructure & Field',
    icon: 'Cpu',
    story: 'Empowering telecom field technicians and Network Operations Centers (NOC) with automated dispatch, mobile diagnostic tools, automated provisioning checks, and real-time site telemetry.',
    capabilities: [
      'Field Technician Mobile Workflow & Diagnostic Apps',
      'Automated Fiber & Cell-Tower Provisioning Verification',
      'NOC Incident Correlation & Automated Alert Triage',
      'Preventative Equipment Maintenance Intelligence',
    ],
    metrics: '35% Faster Dispatch & First-Time Fix Resolution',
  },
  {
    id: 'telecom-data',
    title: 'Telecom Data & Predictive Analytics',
    badge: 'Big Data & Intelligence',
    icon: 'Activity',
    story: 'Orchestrating petabyte-scale Call Detail Record (CDR) streams, subscriber churn prediction models, dynamic capacity forecasting, and automated network anomaly alerts.',
    capabilities: [
      'Real-Time CDR & Network Event Streaming (Kafka / Flink)',
      'Machine-Learning Subscriber Churn Risk Scoring',
      'Cell-Tower Congestion & Dynamic Bandwidth Prediction',
      'Automated Fraud Detection & Anomaly Alarming',
    ],
    metrics: 'Sub-50ms CDR Ingestion across 50M+ Daily Call Events',
  },
];

export const TELECOM_HERO_STATS = [
  { value: '99.4%', label: 'Billing Validation Accuracy', detail: 'Tier-1 US Telecom Provider' },
  { value: '4x', label: 'Faster System Integration', detail: 'Automated E2E Test Pipelines' },
  { value: '50M+', label: 'Daily Call Records Analyzed', detail: 'Zero-Latency CDR Pipelines' },
  { value: '24/7', label: 'SIT & NOC Engineering Support', detail: 'Follow-the-Sun US & India Squads' },
];

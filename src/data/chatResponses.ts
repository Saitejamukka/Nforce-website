export const CHAT_SUGGESTIONS = [
  'What are your 4 core capabilities?',
  'Tell me about QForce AI & your products',
  'What is your Telecom OSS/BSS expertise?',
  'How does your US + India delivery work?',
  'Request a Product Demo or QA Assessment',
];

export const CHAT_GREETING =
  "Hello! I am Navi, your NForce One digital concierge. I can guide you through our AI & Agentic Solutions, Quality Engineering, Telecom domain, proprietary platforms, and flexible delivery models. How can I assist you today?";

export const QUICK_LINKS = [
  { label: 'Capabilities', icon: 'Layers', href: '#capabilities' },
  { label: 'Telecom', icon: 'Radio', href: '#telecom' },
  { label: 'Products', icon: 'Sparkles', href: '#products' },
  { label: 'Outcomes', icon: 'CheckCircle', href: '#outcomes' },
  { label: 'Engagement', icon: 'Globe', href: '#engagement' },
  { label: 'Talk to Expert', icon: 'Mail', href: '#contact' },
];

export function chatBotReply(raw: string): string {
  const t = raw.toLowerCase();

  // 1. Products Intent
  if (t.includes('product') || t.includes('qforce') || t.includes('aiktra') || t.includes('platform') || t.includes('pulse') || t.includes('sync') || t.includes('onehr') || t.includes('auraface') || t.includes('tracktion')) {
    return 'NForce One builds enterprise technology products & accelerators including:\n• QForce AI: Autonomous test generation & self-healing test automation\n• AIKTRA: Multi-channel QA accelerator & test data generator\n• OneHR: Enterprise workforce orchestration & compliance\n• Pulse: Real-time SRE telemetry & anomaly detection\n• Sync: Multi-cloud Kafka event streaming pipeline\n• AuraFace: Edge computer vision & facial biometrics\n• Plus Tracktion, FlightOps, Modozo, CricketHub, and RetailOps.\nWould you like me to schedule a 1-on-1 Product Demo?';
  }

  // 2. Capabilities & 4 Pillars
  if (t.includes('capabilit') || t.includes('pillar') || t.includes('what do you do') || t.includes('service')) {
    return 'NForce One is structured around 4 Strategic Capability Pillars:\n1. AI & Agentic Solutions (Autonomous Agents, RAG, GenAI, Voice AI)\n2. Quality Engineering & AI Assurance (Zero-defect automation, LLM evaluation, prompt regression, IVR validation)\n3. Digital Engineering (Cloud-native apps, microservices, mobile, product engineering)\n4. Data, Cloud & Enterprise Platforms (AWS/Azure/GCP, Snowflake, DevOps, Pega & SAP)\nWhich area would you like to explore?';
  }

  // 3. Telecom Domain
  if (t.includes('telecom') || t.includes('oss') || t.includes('bss') || t.includes('ivr') || t.includes('billing') || t.includes('5g')) {
    return 'Telecom is a deep core differentiator for NForce One. We deliver specialized solutions across:\n• OSS/BSS Transformation (Order management, billing, provisioning, CRM)\n• Telecom Quality Engineering & SIT (System Integration Testing, protocol verification)\n• AI & Voice AI CX (Automated IVR call-flow traversal, virtual agents)\n• Network & Field Operations Automation (Field tech diagnostic apps, NOC triage)\n• Telecom Data (Sub-50ms CDR streaming for 50M+ daily events)\nCheck our Telecom section or request a specialized Telecom QA Assessment!';
  }

  // 4. Quality Engineering & AI Assurance
  if (t.includes('qa') || t.includes('test') || t.includes('assurance') || t.includes('defect') || t.includes('llm eval') || t.includes('hallucin')) {
    return 'Our Quality Engineering & AI Assurance heritage covers functional automation (Playwright, Cypress, Selenium), high-scale performance testing (k6, JMeter), and our next-gen AI Assurance suite — detecting LLM hallucinations, prompt drift, token costs, and voice IVR defects before production release.';
  }

  // 5. Engagement Models / US + India
  if (t.includes('deliver') || t.includes('india') || t.includes('onshore') || t.includes('offshore') || t.includes('hybrid') || t.includes('model') || t.includes('sow') || t.includes('staff')) {
    return 'We provide 6 flexible engagement models to fit your operational goals:\n• Onshore: US-based architects and client-facing leadership\n• Offshore: Scalable 24/7 delivery centers in India\n• Hybrid: Follow-the-sun continuous 24-hour engineering lifecycle\n• Managed Delivery: Guaranteed SLAs & defect-rate ownership\n• Project / SOW: Fixed milestones and deliverables\n• T&M / Staff Augmentation: Pre-vetted senior specialists on demand.';
  }

  // 6. Lead Generation & Contact / Demo Booking
  if (
    t.includes('demo') ||
    t.includes('consult') ||
    t.includes('schedule') ||
    t.includes('call') ||
    t.includes('contact') ||
    t.includes('talk') ||
    t.includes('expert') ||
    t.includes('price') ||
    t.includes('hire')
  ) {
    return 'We would be delighted to arrange a capability discussion or product demo! Please scroll down to our Contact section, or drop your email and company name right here and our solutions team will follow up within 24 hours.';
  }

  // 7. Case Studies / Outcomes
  if (t.includes('case') || t.includes('outcome') || t.includes('client') || t.includes('result') || t.includes('proof')) {
    return 'Our proven client outcomes include:\n• Tier-1 US Telecom: 99.94% billing accuracy and 3x faster release velocity\n• Global FinTech: 45,000+ peak TPS with 38% cloud infrastructure savings\n• Healthcare Network: $2.4M annual labor savings via automated HIPAA AI pipelines\n• Fortune 500 Retail: Zero downtime during Black Friday across 850+ stores.\nCheck the Real Outcomes section on the homepage for full details!';
  }

  // Human Fallback
  return 'Thank you for your question! For detailed architecture discussions, NDA reviews, or specific technical questions, our solution architects are on standby. You can reach out directly via contact@nforceone.com or submit an inquiry in the form below.';
}

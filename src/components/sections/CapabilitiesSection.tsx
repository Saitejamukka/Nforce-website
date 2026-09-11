import React, { useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { BrainCircuit, ShieldCheck, Code2, Cloud, ArrowRight } from 'lucide-react';

interface CapabilityArea {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metricValue: string;
  metricLabel: string;
  icon: 'brain' | 'shield' | 'code' | 'cloud';
}

const CAPABILITIES_DATA: CapabilityArea[] = [
  {
    id: 'ai-agentic',
    num: '01',
    title: 'AI & Agentic Solutions',
    tagline: 'Autonomous Swarms & Cognitive Systems',
    description:
      'Empowering enterprises with autonomous multi-agent systems, multi-model RAG architectures, and production-grade generative AI integrated directly into core workflows.',
    deliverables: [
      'Multi-Agent Workflows & Orchestration',
      'Enterprise LLM Fine-Tuning & RAG Pipelines',
      'Conversational AI & Speech Concierges',
    ],
    metricValue: '70%',
    metricLabel: 'Workflow Cycle Compression',
    icon: 'brain',
  },
  {
    id: 'quality-engineering',
    num: '02',
    title: 'Quality Engineering & AI Assurance',
    tagline: 'Zero-Defect Release Velocity',
    description:
      'Continuous end-to-end test automation, performance chaos engineering, and rigorous AI model assurance — preventing hallucinations, drift, and defect leakage before production.',
    deliverables: [
      'Continuous E2E Test Automation Suites',
      'AI & LLM Model Assurance & Safety Audits',
      'Telecom Voice AI & IVR Flow Validation',
    ],
    metricValue: '99.98%',
    metricLabel: 'Deployment Accuracy SLA',
    icon: 'shield',
  },
  {
    id: 'digital-engineering',
    num: '03',
    title: 'Digital Engineering',
    tagline: 'Cloud-Native Architecture & Modern Apps',
    description:
      'Engineering resilient, scalable web, mobile, and microservices software. We translate complex business requirements into high-velocity digital products with follow-the-sun squads.',
    deliverables: [
      'Cloud-Native Microservices & APIs',
      'Modern Web & Mobile App Delivery',
      'DevOps & Kubernetes SRE Automation',
    ],
    metricValue: '4×',
    metricLabel: 'Faster Release Cycles',
    icon: 'code',
  },
  {
    id: 'data-cloud-platforms',
    num: '04',
    title: 'Data, Cloud & Platforms',
    tagline: 'Multi-Cloud Lakehouse & Pega Workflows',
    description:
      'Turning distributed enterprise data into real-time operational intelligence. Seamless cloud migrations across AWS, Azure, GCP, and unified Pega case management platforms.',
    deliverables: [
      'Real-Time Lakehouse & ETL Pipelines',
      'Multi-Cloud Migration & FinOps',
      'Pega Infinity & Enterprise Workflow Modernization',
    ],
    metricValue: '2.4 GB/s',
    metricLabel: 'Real-Time Streaming Telemetry',
    icon: 'cloud',
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (type: 'brain' | 'shield' | 'code' | 'cloud', isHovered: boolean) => {
    const size = 24;
    const color = isHovered ? 'var(--nf-red)' : '#0F172A';
    switch (type) {
      case 'brain':
        return <BrainCircuit size={size} color={color} strokeWidth={1.8} />;
      case 'shield':
        return <ShieldCheck size={size} color={color} strokeWidth={1.8} />;
      case 'code':
        return <Code2 size={size} color={color} strokeWidth={1.8} />;
      case 'cloud':
        return <Cloud size={size} color={color} strokeWidth={1.8} />;
    }
  };

  return (
    <section
      id="capabilities"
      style={{
        padding: '120px 32px 110px',
        background: '#FFFFFF',
        color: '#0F172A',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #EDEDED',
        borderBottom: '1px solid #EDEDED',
      }}
    >
      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 56px' }}>
          <div style={{ animation: 'nfFadeUp 600ms var(--ease-out) both' }}>
            <Eyebrow>01 / What We Do</Eyebrow>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 4.8vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              margin: '18px 0 16px',
              lineHeight: 1.12,
              color: '#0F172A',
              animation: 'nfFadeUp 600ms var(--ease-out) 120ms both',
            }}
          >
            Engineering the Autonomous Enterprise.{' '}
            <span style={{ color: 'var(--nf-red)' }}>Four Core Capabilities.</span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#475569',
              lineHeight: 1.65,
              margin: '0 auto',
              maxWidth: '680px',
              animation: 'nfFadeUp 600ms var(--ease-out) 200ms both',
            }}
          >
            From autonomous AI agents and continuous test assurance to cloud-native platforms,
            we build intelligent systems designed to scale at speed with zero defect leakage.
          </p>

          {/* Thin Red Accent Line */}
          <div
            style={{
              width: '100px',
              height: '2.5px',
              background: 'var(--nf-red)',
              margin: '32px auto 0',
              borderRadius: '9999px',
              animation: 'nfFadeUp 600ms var(--ease-out) 260ms both',
            }}
          />
        </div>

        {/* 4 Spacious Editorial Capability Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px',
            alignItems: 'stretch',
          }}
        >
          {CAPABILITIES_DATA.map((cap, idx) => {
            const isHovered = hoveredId === cap.id;
            const isAnyHovered = hoveredId !== null;
            const opacity = isAnyHovered && !isHovered ? 0.65 : 1;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredId(cap.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  background: '#FFFFFF',
                  border: isHovered ? '1.5px solid var(--nf-red)' : '1px solid #E5E7EB',
                  borderRadius: '20px',
                  padding: '40px 32px 34px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition:
                    'opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, border-color 300ms ease',
                  transform: isHovered ? 'translateY(-6px)' : 'none',
                  boxShadow: isHovered
                    ? '0 20px 40px -12px rgba(0, 0, 0, 0.08), 0 4px 14px rgba(224, 31, 38, 0.08)'
                    : '0 1px 3px rgba(0, 0, 0, 0.02)',
                  opacity,
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `nfFadeUp 600ms var(--ease-out) ${300 + idx * 100}ms both`,
                }}
              >
                {/* Top red accent line on hover */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'var(--nf-red)',
                    }}
                  />
                )}

                <div>
                  {/* Top: Mono Number + Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: isHovered ? 'var(--nf-red)' : '#94A3B8',
                        transition: 'color 250ms ease',
                      }}
                    >
                      {cap.num}
                    </span>

                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: isHovered ? 'rgba(224, 31, 38, 0.08)' : '#F8FAFC',
                        border: isHovered
                          ? '1px solid rgba(224, 31, 38, 0.25)'
                          : '1px solid #E2E8F0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 250ms ease',
                      }}
                    >
                      {getIcon(cap.icon, isHovered)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(22px, 1.8vw, 26px)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: '#0F172A',
                      margin: '0 0 8px',
                      lineHeight: 1.2,
                    }}
                  >
                    {cap.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: isHovered ? 'var(--nf-red)' : '#64748B',
                      margin: '0 0 16px',
                      transition: 'color 250ms ease',
                    }}
                  >
                    {cap.tagline}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#475569',
                      lineHeight: 1.6,
                      margin: '0 0 24px',
                    }}
                  >
                    {cap.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div
                    style={{
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '18px',
                      marginBottom: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    {cap.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '13px',
                          fontWeight: 500,
                          color: '#334155',
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: 'var(--nf-red)',
                            display: 'inline-block',
                            flexShrink: 0,
                          }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Metric + Action */}
                <div
                  style={{
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '18px',
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '22px',
                        fontWeight: 800,
                        color: 'var(--nf-red)',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {cap.metricValue}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#64748B',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {cap.metricLabel}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: isHovered ? 'var(--nf-red)' : '#0F172A',
                      textDecoration: 'none',
                      transition: 'color 200ms ease, transform 200ms ease',
                      transform: isHovered ? 'translateX(4px)' : 'none',
                    }}
                  >
                    Inquire <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

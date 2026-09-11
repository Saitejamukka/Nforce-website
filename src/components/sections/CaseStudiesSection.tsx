import React, { useState, useEffect } from 'react';
import { OutcomeMedia } from '../outcomes/OutcomeMedia';
import { OutcomeStory } from '../outcomes/OutcomeStory';
import { OutcomeProgress, ProgressItem } from '../outcomes/OutcomeProgress';
import { OutcomeNavigation } from '../outcomes/OutcomeNavigation';
import { X, ArrowRight } from 'lucide-react';

interface EditorialCaseStudy {
  id: string;
  num: string;
  industry: string;
  shortIndustry: string;
  client: string;
  title: string;
  description: string;
  imageUrl: string;
  floatingMetricValue: string;
  floatingMetricLabel: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  technologies: string[];
}

// 4 Case Studies using existing data with authentic landscape photography
const EDITORIAL_CASES: EditorialCaseStudy[] = [
  {
    id: 'us-telecom-oss-bss',
    num: '01',
    industry: 'Telecommunications',
    shortIndustry: 'Telecommunications',
    client: 'Tier-1 US Telecommunications Carrier',
    title: 'Billing Accuracy & 5G Provisioning Acceleration',
    description:
      'Modernized legacy convergent billing and subscriber provisioning systems with automated SIT pipelines and QForce AI, validating complex tariff configurations and real-time CDR streams with zero downtime.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    floatingMetricValue: '3× FASTER',
    floatingMetricLabel: 'Release Velocity',
    metrics: [
      { value: '3x Faster', label: 'Release Velocity' },
      { value: '99.94%', label: 'Billing Accuracy' },
      { value: '21d → 36h', label: 'Regression Cycle' },
    ],
    challenge:
      'Legacy convergent billing and subscriber provisioning systems were causing delayed 5G plan rollouts, high customer care escalations, and regression test cycles exceeding 3 weeks per release.',
    solution:
      'NForce One deployed a dedicated hybrid US-India QA squad armed with automated SIT pipelines and QForce AI, validating complex multi-play tariff configurations, IVR customer voice journeys, and real-time CDR streams.',
    technologies: ['OSS/BSS', 'QForce AI', 'Playwright', 'Apache Kafka', 'Oracle BRM', 'Pega CRM'],
  },
  {
    id: 'global-fintech-banking',
    num: '02',
    industry: 'Banking & Financial Services',
    shortIndustry: 'FinTech',
    client: 'Multinational FinTech & Core Banking Provider',
    title: 'Cloud-Native Core Banking Modernization',
    description:
      'Engineered an event-driven microservices architecture on AWS and Kubernetes, modernizing 18 legacy monolithic services to sustain 45,000 transactions per second at sub-20ms latency.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
    floatingMetricValue: '45,000+ TPS',
    floatingMetricLabel: 'Sub-20ms Latency',
    metrics: [
      { value: '45,000+', label: 'Peak TPS Capacity' },
      { value: '38%', label: 'Cloud Infra Savings' },
      { value: 'Daily', label: 'Automated Releases' },
    ],
    challenge:
      'A monolithic core transaction platform suffered from scalability bottlenecks during high-volume market hours, coupled with strict PCI-DSS audit overhead and slow microservices migration.',
    solution:
      'Engineered a resilient event-driven microservices architecture on AWS and Kubernetes with automated resilience testing, continuous security vulnerability scanning, and automated contract testing.',
    technologies: ['AWS', 'Kubernetes', 'Go', 'React', 'Terraform', 'k6', 'Kafka', 'Docker'],
  },
  {
    id: 'healthcare-data-ai',
    num: '03',
    industry: 'Healthcare & Life Sciences',
    shortIndustry: 'Healthcare',
    client: 'Leading US Healthcare & Diagnostics Network',
    title: 'Clinical AI Extraction & HIPAA Data Pipeline',
    description:
      'Implemented an intelligent optical extraction and clinical RAG retrieval pipeline backed by strict HIPAA-compliant AI assurance guardrails, processing 1.2M annual pathology reports with zero hallucination.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    floatingMetricValue: '99.8%',
    floatingMetricLabel: 'Clinical Accuracy',
    metrics: [
      { value: '99.8%', label: 'Extraction Accuracy' },
      { value: '75% Faster', label: 'Report Turnaround' },
      { value: '$2.4M', label: 'Annual Cost Savings' },
    ],
    challenge:
      'Processing clinical pathology records across 200+ clinical laboratories required manual transcription validation, creating diagnostic reporting delays and compliance risks.',
    solution:
      'Implemented an intelligent optical extraction and clinical RAG retrieval pipeline backed by strict HIPAA-compliant AI assurance guardrails and continuous automated prompt regression validation.',
    technologies: ['Python', 'FastAPI', 'Azure Cloud', 'DeepEval', 'Snowflake', 'Vector Search'],
  },
  {
    id: 'retail-omnichannel-automation',
    num: '04',
    industry: 'Retail & eCommerce',
    shortIndustry: 'Retail',
    client: 'Global Fortune 500 Retail Conglomerate',
    title: 'Real-Time Omnichannel Inventory Sync',
    description:
      'Architected real-time inventory synchronization using Sync and automated cross-channel regression testing across web, mobile apps, and 850+ brick-and-mortar stores with zero catalog downtime during peak holidays.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    floatingMetricValue: '100% UPTIME',
    floatingMetricLabel: 'Zero Downtime',
    metrics: [
      { value: '< 80ms', label: 'Sync Latency' },
      { value: '100%', label: 'Black Friday Uptime' },
      { value: '-91%', label: 'Fulfillment Errors' },
    ],
    challenge:
      'Discrepancies between physical POS systems and online inventory databases caused frequent fulfillment cancellations and stockouts during Black Friday peak shopping seasons.',
    solution:
      'Architected real-time inventory synchronization using Sync and automated regression testing across web, mobile, and point-of-sale kiosks, accompanied by predictive stockout forecasting algorithms.',
    technologies: ['React Native', 'Node.js', 'Sync Platform', 'Redis', 'GCP', 'PostgreSQL'],
  },
];

export const CaseStudiesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const activeCase = EDITORIAL_CASES[activeIndex];

  const progressItems: ProgressItem[] = EDITORIAL_CASES.map((c) => ({
    num: c.num,
    industry: c.shortIndustry,
  }));

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % EDITORIAL_CASES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + EDITORIAL_CASES.length) % EDITORIAL_CASES.length);
  };

  // Auto-play timer (pauses on user interaction)
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EDITORIAL_CASES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, isModalOpen]);

  return (
    <section
      id="outcomes"
      style={{
        padding: '84px 32px 72px',
        background: '#FFFFFF',
        color: 'var(--nf-ink-950)',
        position: 'relative',
        borderTop: '1px solid #edf0f2',
        borderBottom: '1px solid #edf0f2',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        {/* Editorial Section Introduction */}
        <div style={{ maxWidth: '780px', marginBottom: '38px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--nf-red)',
              marginBottom: '16px',
            }}
          >
            VALIDATED CLIENT IMPACT
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.12,
              color: 'var(--nf-ink-950)',
              margin: '0 0 18px',
            }}
          >
            Real Outcomes. <br />
            <span style={{ color: 'var(--nf-red)' }}>Measured in Velocity &amp; Accuracy.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.6,
              color: '#555d6e',
              margin: 0,
              maxWidth: '640px',
            }}
          >
            From complex enterprise operations to mission-critical platforms, our technology creates
            measurable improvements where they matter most.
          </p>
        </div>

        {/* Main Sticky/Editorial Storytelling Presentation Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr',
            gap: '54px',
            alignItems: 'center',
            marginBottom: '54px',
          }}
          className="nf-cap-grid"
        >
          {/* Left: Large Editorial Landscape Image */}
          <div>
            <OutcomeMedia
              key={activeCase.id}
              imageUrl={activeCase.imageUrl}
              altText={`${activeCase.client} - ${activeCase.title}`}
              floatingMetricValue={activeCase.floatingMetricValue}
              floatingMetricLabel={activeCase.floatingMetricLabel}
            />
          </div>

          {/* Right: Narrative & Editorial Metrics */}
          <div>
            <OutcomeStory
              key={activeCase.id}
              currentIndex={activeIndex}
              totalCount={EDITORIAL_CASES.length}
              industry={activeCase.industry}
              client={activeCase.client}
              title={activeCase.title}
              description={activeCase.description}
              metrics={activeCase.metrics}
              onReadCaseStudy={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* Bottom Stepper & Progress Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '32px',
            paddingTop: '24px',
            borderTop: '1px solid #edf0f2',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flexGrow: 1, maxWidth: '900px' }}>
            <OutcomeProgress
              items={progressItems}
              activeIndex={activeIndex}
              onSelectIndex={(idx) => {
                setActiveIndex(idx);
                setIsPaused(true);
              }}
            />
          </div>

          <OutcomeNavigation
            onPrev={handlePrev}
            onNext={handleNext}
            canPrev={true}
            canNext={true}
          />
        </div>
      </div>

      {/* Case Study Full Story Modal Dialog */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-dialog-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10, 10, 12, 0.65)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Card */}
          <div
            style={{
              position: 'relative',
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid #E5E5E5',
              padding: '40px 36px',
              zIndex: 1,
              animation: 'nfFadeUp 280ms cubic-bezier(0.16, 1, 0.3, 1) both',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                marginBottom: '24px',
                paddingBottom: '20px',
                borderBottom: '1px solid #EDF0F3',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--nf-red)',
                    marginBottom: '8px',
                    display: 'inline-block',
                  }}
                >
                  {activeCase.industry} · {activeCase.client}
                </span>
                <h2
                  id="case-study-dialog-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                    fontWeight: 800,
                    color: 'var(--nf-ink-950)',
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {activeCase.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: '#F5F6F8',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#555d6e',
                  flexShrink: 0,
                }}
                aria-label="Close case study dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Story Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--nf-red)',
                    marginBottom: '8px',
                  }}
                >
                  THE CHALLENGE
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#414754', margin: 0 }}>
                  {activeCase.challenge}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--nf-red)',
                    marginBottom: '8px',
                  }}
                >
                  THE NFORCE SOLUTION
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#414754', margin: 0 }}>
                  {activeCase.solution}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#8c95a6',
                    marginBottom: '10px',
                  }}
                >
                  KEY TECHNOLOGIES &amp; PROTOCOLS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeCase.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: '#F5F6F8',
                        color: 'var(--nf-ink-950)',
                        border: '1px solid #E5E5E5',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics */}
              <div
                style={{
                  background: '#FAFAFC',
                  border: '1px solid #EDF0F3',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                }}
              >
                {activeCase.metrics.map((m, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '24px',
                        fontWeight: 800,
                        color: 'var(--nf-red)',
                        lineHeight: 1.1,
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: '12px', color: '#555d6e', marginTop: '3px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="nf-btn-primary"
                  style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                  }}
                >
                  Discuss Similar Transformation <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

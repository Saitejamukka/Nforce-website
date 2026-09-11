import React, { useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { EngagementPathLine, PathId } from '../engagement/EngagementPathLine';
import { EngagementPanel, ModelDetail } from '../engagement/EngagementPanel';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface PathConfig {
  id: PathId;
  num: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  models: ModelDetail[];
}

export const EngagementModelsSection: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<PathId>('own-outcome');
  const [hoveredPath, setHoveredPath] = useState<PathId | null>(null);

  // 1. Abstract Visual: OWN THE OUTCOME (one continuous path)
  const renderOwnVisual = (active: boolean) => (
    <svg width="100%" height="42" viewBox="0 0 320 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 12 21 C 90 21, 130 11, 200 11 C 260 11, 275 21, 305 21"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <circle cx="12" cy="21" r="3.5" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="200" cy="11" r="2.5" fill={active ? 'var(--nf-red)' : '#CBD5E1'} />
      <circle cx="305" cy="21" r="5.5" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="305" cy="21" r="2" fill="#FFFFFF" />
    </svg>
  );

  // 2. Abstract Visual: EXTEND YOUR TEAM (multiple nodes joining together)
  const renderExtendVisual = (active: boolean) => (
    <svg width="100%" height="42" viewBox="0 0 320 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 12 9 C 100 9, 180 21, 300 21"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <path
        d="M 12 21 C 100 21, 180 21, 300 21"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <path
        d="M 12 33 C 100 33, 180 21, 300 21"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <circle cx="12" cy="9" r="3" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="12" cy="21" r="3" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="12" cy="33" r="3" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="300" cy="21" r="6" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="300" cy="21" r="2.5" fill="#FFFFFF" />
    </svg>
  );

  // 3. Abstract Visual: SCALE DELIVERY (paths expanding globally)
  const renderScaleVisual = (active: boolean) => (
    <svg width="100%" height="42" viewBox="0 0 320 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 16 21 C 110 21, 170 9, 302 9"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <path
        d="M 16 21 C 110 21, 170 21, 308 21"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <path
        d="M 16 21 C 110 21, 170 33, 302 33"
        stroke={active ? 'var(--nf-red)' : '#CBD5E1'}
        strokeWidth="1.75"
        strokeLinecap="round"
        style={{ transition: 'stroke 300ms ease' }}
      />
      <circle cx="16" cy="21" r="5" fill={active ? 'var(--nf-red)' : '#94A3B8'} />
      <circle cx="16" cy="21" r="2" fill="#FFFFFF" />
      <circle cx="302" cy="9" r="3" fill={active ? 'var(--nf-red)' : '#CBD5E1'} />
      <circle cx="308" cy="21" r="3.5" fill={active ? 'var(--nf-red)' : '#CBD5E1'} />
      <circle cx="302" cy="33" r="3" fill={active ? 'var(--nf-red)' : '#CBD5E1'} />
    </svg>
  );

  const paths: PathConfig[] = [
    {
      id: 'own-outcome',
      num: '01',
      title: 'OWN THE OUTCOME',
      description:
        'End-to-end delivery with NForce owning the result. Guaranteed service levels, milestone accountability, and autonomous execution.',
      visual: renderOwnVisual(selectedPath === 'own-outcome' || hoveredPath === 'own-outcome'),
      models: [
        {
          name: 'Managed Delivery',
          focus:
            'NForce assumes complete end-to-end ownership of delivery, meeting guaranteed service levels, defect leak-rate commitments, and roadmap milestones.',
          note: 'Guaranteed SLAs · Autonomous Squad Ownership · Zero Operational Overhead',
        },
        {
          name: 'Project / SOW',
          focus:
            'Structured milestone-driven engagements with precise deliverables, acceptance criteria, timeline guarantees, and transparent budgeting.',
          note: 'Fixed Scope · Bounded Deliverables · Predictable Expenditure',
        },
      ],
    },
    {
      id: 'extend-team',
      num: '02',
      title: 'EXTEND YOUR TEAM',
      description:
        'Add specialized engineering capability where you need it. Pre-vetted senior AI, QA, cloud, and Pega specialists embedded directly into your agile squads.',
      visual: renderExtendVisual(selectedPath === 'extend-team' || hoveredPath === 'extend-team'),
      models: [
        {
          name: 'T&M / Staff Augmentation',
          focus:
            'Embedding specialized senior talent — AI engineers, QA leads, Pega architects, and cloud specialists — directly into your agile squads with day-one productivity.',
          note: '48–72h Ramp-Up · Pre-Vetted Senior Engineers · Flexible Month-to-Month Terms',
        },
      ],
    },
    {
      id: 'scale-delivery',
      num: '03',
      title: 'SCALE DELIVERY',
      description:
        'Expand capacity across locations, teams and time zones. US technical leadership paired with global delivery hubs for continuous 24/7 engineering velocity.',
      visual: renderScaleVisual(selectedPath === 'scale-delivery' || hoveredPath === 'scale-delivery'),
      models: [
        {
          name: 'Onshore Delivery',
          focus:
            'Local architects, engineering leads, and QA strategists operating in your timezone for real-time collaboration and onsite governance.',
          note: 'Dallas, TX · Same-Timezone Sprints · Executive Oversight',
        },
        {
          name: 'Offshore Scale',
          focus:
            'Dedicated offshore engineering squads delivering massive execution velocity, overnight test runs, and cost-efficient scalability.',
          note: 'Hyderabad Hub · 24/7 Continuous Velocity · Scalable Squads',
        },
        {
          name: 'Hybrid Delivery (Follow-the-Sun)',
          focus:
            'Our premier model combining US technical program management with scalable offshore engineering squads for true 24-hour continuous delivery.',
          note: '24-Hour Continuous Engineering Cycle · Optimized Blended ROI',
        },
      ],
    },
  ];

  return (
    <section
      id="engagement"
      style={{
        background: '#FFFFFF',
        color: '#0F172A',
        borderTop: '1px solid #EDEDED',
        borderBottom: '1px solid #EDEDED',
        padding: '120px 32px 110px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 28px' }}>
          <div style={{ animation: 'nfFadeUp 600ms var(--ease-out) both' }}>
            <Eyebrow>Flexible Commercial & Delivery Architecture</Eyebrow>
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
            How We Engage. <br />
            <span style={{ color: 'var(--nf-red)' }}>Built Around Your Needs.</span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: '680px',
              animation: 'nfFadeUp 600ms var(--ease-out) 200ms both',
            }}
          >
            Choose how you partner with NForce One. From full-ownership managed delivery
            to dedicated specialists and follow-the-sun scale.
          </p>

          {/* Thin Red Line Drawing Across */}
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

        {/* Minimal Animated Path/Line System: OWN / EXTEND / SCALE -> OUTCOME */}
        <EngagementPathLine activePath={selectedPath} hoveredPath={hoveredPath} />

        {/* Three Large Vertical/Rectangular Editorial Panels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {paths.map((p, idx) => (
            <EngagementPanel
              key={p.id}
              id={p.id}
              num={p.num}
              title={p.title}
              description={p.description}
              visual={p.visual}
              models={p.models}
              isSelected={selectedPath === p.id}
              isHovered={hoveredPath === p.id}
              isAnyHovered={hoveredPath !== null}
              onToggle={() => setSelectedPath(p.id)}
              onHover={(hovered) => setHoveredPath(hovered ? p.id : null)}
              staggerDelay={350 + idx * 120}
            />
          ))}
        </div>

        {/* Bottom Editorial Consultation Note */}
        <div
          style={{
            marginTop: '56px',
            padding: '24px 32px',
            background: '#FAFAFA',
            border: '1px solid #EDEDED',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HelpCircle size={18} color="var(--nf-red)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#0F172A',
                }}
              >
                Need a tailored commercial architecture?
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                Our leadership team will structure a bespoke engagement model tailored to your governance, compliance, and velocity goals.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="nf-btn-primary"
            style={{
              padding: '11px 22px',
              fontSize: '13.5px',
              whiteSpace: 'nowrap',
            }}
          >
            Talk to an Expert <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

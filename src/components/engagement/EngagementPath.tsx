import React from 'react';
import { ArrowRight, ShieldCheck, Users, Globe, Target, Sparkles, Zap } from 'lucide-react';
import { ClientNeedId } from './EngagementProgress';

interface EngagementPathProps {
  activeNeed: ClientNeedId;
}

interface PathDetails {
  needLabel: string;
  needDesc: string;
  modelLabel: string;
  modelDesc: string;
  outcomeLabel: string;
  outcomeDesc: string;
  summaryNote: string;
}

const PATH_MAP: Record<ClientNeedId, PathDetails> = {
  'own-outcome': {
    needLabel: 'Client Requirement',
    needDesc: 'Defined business goals, guaranteed SLAs & fixed accountability',
    modelLabel: 'NForce Architecture',
    modelDesc: 'Managed Delivery or Milestone-Driven Project / SOW',
    outcomeLabel: 'Business Result',
    outcomeDesc: 'Zero operational leakage, milestone certainty & contractual SLAs',
    summaryNote: 'Best when your leadership team wants NForce to own delivery end-to-end with strict defect and milestone guarantees.',
  },
  'extend-team': {
    needLabel: 'Client Requirement',
    needDesc: 'Urgent skill gaps, agile team scaling & deadline acceleration',
    modelLabel: 'NForce Architecture',
    modelDesc: 'T&M Staff Augmentation embedded in your agile sprints',
    outcomeLabel: 'Business Result',
    outcomeDesc: 'Day-one productive senior engineers with zero hiring overhead',
    summaryNote: 'Best when you have existing sprint governance and need pre-vetted senior engineers to accelerate execution immediately.',
  },
  'scale-delivery': {
    needLabel: 'Client Requirement',
    needDesc: 'Multi-timezone capacity, follow-the-sun cycles & cost optimization',
    modelLabel: 'NForce Architecture',
    modelDesc: 'US Onshore Leadership + India Offshore Engineering / Hybrid',
    outcomeLabel: 'Business Result',
    outcomeDesc: '24-hour continuous engineering lifecycle with optimized blended ROI',
    summaryNote: 'Best when you want US-based architectural governance paired with massive offshore delivery velocity around the clock.',
  },
};

export const EngagementPath: React.FC<EngagementPathProps> = ({ activeNeed }) => {
  const path = PATH_MAP[activeNeed];

  const getNeedIcon = () => {
    switch (activeNeed) {
      case 'own-outcome':
        return <ShieldCheck size={18} color="var(--nf-red)" />;
      case 'extend-team':
        return <Users size={18} color="var(--nf-red)" />;
      case 'scale-delivery':
        return <Globe size={18} color="var(--nf-red)" />;
    }
  };

  return (
    <div
      style={{
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '24px 28px',
        marginBottom: '40px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'rgba(224, 31, 38, 0.08)',
              border: '1px solid rgba(224, 31, 38, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {getNeedIcon()}
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--nf-red)',
            }}
          >
            Engagement Alignment Pipeline
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)',
            }}
          />
          <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
            Active Path: {path.modelLabel.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* 3 Steps Pipeline */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          position: 'relative',
        }}
      >
        {/* Step 1: Need */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px 18px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
            <Target size={14} color="#64748B" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              1. {path.needLabel}
            </span>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: '#1E293B',
              lineHeight: 1.45,
              margin: 0,
              fontWeight: 600,
            }}
          >
            {path.needDesc}
          </p>
        </div>

        {/* Step 2: Model */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid rgba(224, 31, 38, 0.35)',
            borderRadius: '12px',
            padding: '16px 18px',
            boxShadow: '0 2px 8px rgba(224, 31, 38, 0.06)',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
            <Zap size={14} color="var(--nf-red)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              2. {path.modelLabel}
            </span>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: '#0F172A',
              lineHeight: 1.45,
              margin: 0,
              fontWeight: 700,
            }}
          >
            {path.modelDesc}
          </p>
        </div>

        {/* Step 3: Outcome */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px 18px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '6px',
            }}
          >
            <Sparkles size={14} color="#10B981" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: '#059669',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              3. {path.outcomeLabel}
            </span>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: '#1E293B',
              lineHeight: 1.45,
              margin: 0,
              fontWeight: 600,
            }}
          >
            {path.outcomeDesc}
          </p>
        </div>
      </div>

      {/* Summary note */}
      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12.5px',
          color: '#64748B',
          lineHeight: 1.5,
        }}
      >
        <ArrowRight size={13} color="var(--nf-red)" style={{ flexShrink: 0 }} />
        <span>{path.summaryNote}</span>
      </div>
    </div>
  );
};

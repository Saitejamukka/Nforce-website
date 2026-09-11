import React, { useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import { EngagementProgress, ClientNeedId } from '../engagement/EngagementProgress';
import { EngagementSelector } from '../engagement/EngagementSelector';
import { EngagementPath } from '../engagement/EngagementPath';
import { DeliveryModel } from '../engagement/DeliveryModel';
import { HelpCircle, ArrowRight } from 'lucide-react';

export const EngagementModelsSection: React.FC = () => {
  const [activeNeed, setActiveNeed] = useState<ClientNeedId>('own-outcome');

  return (
    <section
      id="engagement"
      style={{
        background: '#FFFFFF',
        color: '#0F172A',
        borderTop: '1px solid #EDF0F3',
        borderBottom: '1px solid #EDF0F3',
        padding: '110px 32px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px' }}>
          <Eyebrow>Flexible Commercial & Delivery Architecture</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: '16px 0 18px',
              lineHeight: 1.15,
              color: '#0F172A',
            }}
          >
            How We Engage.{' '}
            <span style={{ color: 'var(--nf-red)' }}>Built Around Your Needs.</span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            First-time visitors and enterprise buyers don’t need complex delivery jargon.
            Select what your initiative requires, and discover how NForce One structures
            ownership, velocity, and commercial accountability.
          </p>
        </div>

        {/* Step / Breadcrumb Progress */}
        <EngagementProgress activeNeed={activeNeed} onSelectNeed={setActiveNeed} />

        {/* 3 Primary Client Needs Selector */}
        <EngagementSelector activeNeed={activeNeed} onSelectNeed={setActiveNeed} />

        {/* Strategic Alignment Pipeline Visual */}
        <EngagementPath activeNeed={activeNeed} />

        {/* Dynamic Revealed Models Container */}
        <DeliveryModel activeNeed={activeNeed} />

        {/* Reassuring Advisory Bottom Strip */}
        <div
          style={{
            marginTop: '56px',
            padding: '24px 30px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
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
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HelpCircle size={20} color="var(--nf-red)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  color: '#0F172A',
                }}
              >
                Unsure which model fits your roadmap?
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', marginTop: '2px' }}>
                Our enterprise delivery architects will review your requirements, timelines, and compliance needs to design a custom hybrid engagement.
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
            Speak with a Delivery Architect <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

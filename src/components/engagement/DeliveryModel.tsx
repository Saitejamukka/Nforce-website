import React from 'react';
import { ENGAGEMENT_MODELS } from '../../data/engagementModels';
import { EngagementOption } from './EngagementOption';
import { ClientNeedId } from './EngagementProgress';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles,
  Zap,
  Clock,
  ShieldAlert,
  Layers,
} from 'lucide-react';

interface DeliveryModelProps {
  activeNeed: ClientNeedId;
}

export const DeliveryModel: React.FC<DeliveryModelProps> = ({ activeNeed }) => {
  // Helper to retrieve model by id
  const getModel = (id: string) => ENGAGEMENT_MODELS.find((m) => m.id === id);

  if (activeNeed === 'own-outcome') {
    const managedModel = getModel('managed-delivery');
    const sowModel = getModel('project-sow');

    return (
      <div
        style={{
          animation: 'nfFadeUp 350ms var(--ease-out) both',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px',
          }}
        >
          {managedModel && (
            <EngagementOption
              model={managedModel}
              badgeText="SLA Guaranteed"
              isFeatured={true}
              ctaText="Inquire About Managed Delivery"
            />
          )}

          {sowModel && (
            <EngagementOption
              model={sowModel}
              badgeText="Milestone SOW"
              ctaText="Scope a Project / SOW"
            />
          )}
        </div>
      </div>
    );
  }

  if (activeNeed === 'extend-team') {
    const staffAug = getModel('staff-augmentation');

    return (
      <div
        style={{
          animation: 'nfFadeUp 350ms var(--ease-out) both',
        }}
      >
        <div
          style={{
            background: '#FFFFFF',
            border: '1.5px solid rgba(224, 31, 38, 0.35)',
            borderRadius: '20px',
            padding: '36px 32px',
            boxShadow: '0 12px 36px -8px rgba(224, 31, 38, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '1px solid #F1F5F9',
              paddingBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(224, 31, 38, 0.08)',
                  border: '1px solid rgba(224, 31, 38, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Users size={26} color="var(--nf-red)" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '24px',
                      fontWeight: 800,
                      color: '#0F172A',
                      margin: 0,
                    }}
                  >
                    T&M / Staff Augmentation
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--nf-red)',
                      background: 'rgba(224, 31, 38, 0.08)',
                      padding: '3px 9px',
                      borderRadius: '9999px',
                      border: '1px solid rgba(224, 31, 38, 0.2)',
                    }}
                  >
                    FLEXIBLE SQUAD ACCELERATION
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--nf-red)',
                    fontWeight: 600,
                    margin: '4px 0 0',
                  }}
                >
                  On-Demand Senior Specialists to Amplify Your Internal Squads
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="nf-btn-primary"
              style={{
                padding: '12px 24px',
                fontSize: '13.5px',
              }}
            >
              Request Specialized Talent <ArrowRight size={14} />
            </a>
          </div>

          {/* Value Statement */}
          <p
            style={{
              fontSize: '15px',
              color: '#334155',
              lineHeight: 1.65,
              margin: '0 0 28px',
              maxWidth: '920px',
            }}
          >
            Embed pre-vetted senior specialists — AI & LLM engineers, QA automation leads,
            Pega certified architects, and cloud infrastructure specialists — directly into your
            agile sprint cycles. Zero recruitment lag, zero overhead, and full flexibility.
          </p>

          {/* 4 Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '18px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <Clock size={16} color="var(--nf-red)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                  }}
                >
                  48–72h Ramp-Up
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                Rapid mobilization of pre-screened talent ready to write code from day one.
              </p>
            </div>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '18px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <Sparkles size={16} color="var(--nf-red)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                  }}
                >
                  Top 3% Senior Talent
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                Strict technical assessment across modern stacks, cloud architectures, and AI.
              </p>
            </div>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '18px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <Layers size={16} color="var(--nf-red)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                  }}
                >
                  Seamless Toolchain
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                Direct integration into your Jira, GitHub, Slack, and agile ceremonies.
              </p>
            </div>

            <div
              style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '18px 16px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <ShieldAlert size={16} color="var(--nf-red)" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0F172A',
                  }}
                >
                  Zero Lock-In
                </span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                Flexible month-to-month terms without recruitment commissions or contract buyout fees.
              </p>
            </div>
          </div>

          {/* Skill Domains Matrix */}
          <div
            style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '20px 22px',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: '#64748B',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '12px',
              }}
            >
              Available Engineering Roles Ready For Deployment
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'GenAI & Agentic Engineers',
                'SDET & Automation Architects',
                'Pega Certified Lead System Architects (CLSA)',
                'Cloud DevOps & SRE (AWS / Azure / GCP)',
                'Full-Stack React & Node Specialists',
                'Data & Pipeline Engineers (PySpark / dbt)',
                'Security & Compliance QA Leads',
              ].map((role, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#0F172A',
                    background: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Key Benefits Checklist */}
          {staffAug && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px',
              }}
            >
              {staffAug.keyBenefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <CheckCircle2 size={16} color="var(--nf-red)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // activeNeed === 'scale-delivery'
  const onshore = getModel('onshore');
  const offshore = getModel('offshore');
  const hybrid = getModel('hybrid');

  return (
    <div
      style={{
        animation: 'nfFadeUp 350ms var(--ease-out) both',
      }}
    >
      {/* Horizontal Flow Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '9999px',
            padding: '6px 16px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--nf-red)',
            }}
          >
            LOCAL PRESENCE
          </span>
          <ArrowRight size={13} color="#94A3B8" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              color: '#0F172A',
            }}
          >
            GLOBAL VELOCITY
          </span>
          <ArrowRight size={13} color="#94A3B8" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--nf-red)',
            }}
          >
            24/7 CONTINUOUS DELIVERY
          </span>
        </div>
      </div>

      {/* 3 Connected Models Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '24px',
        }}
      >
        {onshore && (
          <EngagementOption
            model={onshore}
            badgeText="Stage 1 · Local"
            ctaText="Explore Onshore Delivery"
          />
        )}

        {offshore && (
          <EngagementOption
            model={offshore}
            badgeText="Stage 2 · Global"
            ctaText="Explore Offshore Scale"
          />
        )}

        {hybrid && (
          <EngagementOption
            model={hybrid}
            badgeText="Stage 3 · Premier"
            isFeatured={true}
            ctaText="Explore Hybrid Model"
          />
        )}
      </div>

      {/* Follow the Sun Explanation Banner */}
      <div
        style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '14px',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(224, 31, 38, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Zap size={18} color="var(--nf-red)" />
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 700,
                color: '#0F172A',
                display: 'block',
              }}
            >
              How Follow-the-Sun Continuous Delivery Works
            </span>
            <span style={{ fontSize: '12.5px', color: '#64748B' }}>
              US leads conduct sprint reviews and architecture planning during business hours; India squads execute builds, regression tests, and code implementation overnight.
            </span>
          </div>
        </div>

        <a
          href="#contact"
          style={{
            fontSize: '13px',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'var(--nf-red)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            whiteSpace: 'nowrap',
          }}
        >
          Consult an Engagement Architect <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

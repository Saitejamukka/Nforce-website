import React from 'react';
import { EngagementModelItem } from '../../types';
import {
  MapPin,
  Globe,
  Sun,
  ShieldCheck,
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface EngagementOptionProps {
  model: EngagementModelItem;
  badgeText?: string;
  isFeatured?: boolean;
  ctaText?: string;
}

export const EngagementOption: React.FC<EngagementOptionProps> = ({
  model,
  badgeText,
  isFeatured = false,
  ctaText,
}) => {
  const getIcon = (iconName: string) => {
    const size = 22;
    const color = 'var(--nf-red)';
    switch (iconName) {
      case 'MapPin':
        return <MapPin size={size} color={color} />;
      case 'Globe':
        return <Globe size={size} color={color} />;
      case 'Sun':
        return <Sun size={size} color={color} />;
      case 'ShieldCheck':
        return <ShieldCheck size={size} color={color} />;
      case 'FileText':
        return <FileText size={size} color={color} />;
      case 'Users':
      default:
        return <Users size={size} color={color} />;
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: isFeatured
          ? '1.5px solid rgba(224, 31, 38, 0.35)'
          : '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '30px 26px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: isFeatured
          ? '0 10px 30px -8px rgba(224, 31, 38, 0.10), 0 2px 8px rgba(0, 0, 0, 0.03)'
          : '0 2px 8px rgba(0, 0, 0, 0.03)',
        transition: 'all 240ms ease',
        position: 'relative',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(224, 31, 38, 0.45)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow =
          '0 14px 34px -8px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(224, 31, 38, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isFeatured
          ? 'rgba(224, 31, 38, 0.35)'
          : '#E2E8F0';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = isFeatured
          ? '0 10px 30px -8px rgba(224, 31, 38, 0.10), 0 2px 8px rgba(0, 0, 0, 0.03)'
          : '0 2px 8px rgba(0, 0, 0, 0.03)';
      }}
    >
      <div>
        {/* Top Header: Icon + Badge + Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(224, 31, 38, 0.08)',
                border: '1px solid rgba(224, 31, 38, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {getIcon(model.icon)}
            </div>

            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#0F172A',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {model.name}
              </h4>
              <div
                style={{
                  fontSize: '12.5px',
                  color: 'var(--nf-red)',
                  fontWeight: 600,
                  marginTop: '3px',
                }}
              >
                {model.tagline}
              </div>
            </div>
          </div>

          {badgeText && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                background: 'rgba(224, 31, 38, 0.07)',
                border: '1px solid rgba(224, 31, 38, 0.2)',
                padding: '3px 9px',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                flexShrink: 0,
              }}
            >
              {badgeText}
            </span>
          )}
        </div>

        {/* Delivery Focus description */}
        <p
          style={{
            fontSize: '13.5px',
            color: '#475569',
            lineHeight: 1.6,
            margin: '0 0 16px',
          }}
        >
          {model.deliveryFocus}
        </p>

        {/* Best For Tag */}
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '10px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            marginBottom: '20px',
            fontSize: '12.5px',
            color: '#334155',
            lineHeight: 1.45,
          }}
        >
          <strong style={{ color: '#0F172A', fontWeight: 700 }}>Best for: </strong>
          {model.bestFor}
        </div>

        {/* Key Benefits Checklist */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '26px',
          }}
        >
          {model.keyBenefits.map((benefit, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <CheckCircle2
                size={16}
                color="var(--nf-red)"
                style={{ flexShrink: 0, marginTop: '2px' }}
              />
              <span
                style={{
                  fontSize: '12.5px',
                  color: '#475569',
                  lineHeight: 1.45,
                  fontWeight: 500,
                }}
              >
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Primary CTA */}
      <a
        href="#contact"
        className="nf-btn-primary"
        style={{
          width: '100%',
          padding: '12px 20px',
          fontSize: '13.5px',
        }}
      >
        {ctaText || `Inquire About ${model.name}`} <ArrowRight size={14} />
      </a>
    </div>
  );
};

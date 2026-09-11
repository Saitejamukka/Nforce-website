import React, { useState } from 'react';
import {
  BrainCircuit,
  BarChart3,
  Box,
  Users,
  Rocket,
  Gauge,
  Plane,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react';

export interface ProductCategoryData {
  id: string;
  name: string;
  sentence: string;
  iconName: 'BrainCircuit' | 'BarChart3' | 'Box' | 'Users' | 'Rocket' | 'Gauge' | 'Plane' | 'LayoutGrid';
  productCount: number;
}

interface Props {
  category: ProductCategoryData;
  onClick: () => void;
}

export const ProductCategoryCard: React.FC<Props> = ({ category, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = (name: string) => {
    const s = 24;
    const color = isHovered ? 'var(--nf-red)' : 'var(--nf-ink-950)';
    switch (name) {
      case 'BrainCircuit': return <BrainCircuit size={s} color={color} strokeWidth={1.8} />;
      case 'BarChart3': return <BarChart3 size={s} color={color} strokeWidth={1.8} />;
      case 'Box': return <Box size={s} color={color} strokeWidth={1.8} />;
      case 'Users': return <Users size={s} color={color} strokeWidth={1.8} />;
      case 'Rocket': return <Rocket size={s} color={color} strokeWidth={1.8} />;
      case 'Gauge': return <Gauge size={s} color={color} strokeWidth={1.8} />;
      case 'Plane': return <Plane size={s} color={color} strokeWidth={1.8} />;
      case 'LayoutGrid': return <LayoutGrid size={s} color={color} strokeWidth={1.8} />;
      default: return <Box size={s} color={color} strokeWidth={1.8} />;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? 'rgba(224, 31, 38, 0.02)' : '#FFFFFF',
        border: isHovered ? '1px solid var(--nf-red)' : '1px solid #E5E5E5',
        borderRadius: '18px',
        padding: '30px 26px',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '220px',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered
          ? '0 16px 36px -10px rgba(224, 31, 38, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)'
          : '0 2px 8px rgba(0, 0, 0, 0.02)',
        transition: 'all 260ms cubic-bezier(0.2, 0.8, 0.2, 1)',
        position: 'relative',
        width: '100%',
      }}
      aria-label={`Explore ${category.name}`}
    >
      <div>
        {/* Icon Container */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: isHovered ? 'rgba(224, 31, 38, 0.08)' : '#F5F6F8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            transition: 'background 240ms ease, transform 240ms ease',
            transform: isHovered ? 'scale(1.06)' : 'scale(1)',
          }}
        >
          {renderIcon(category.iconName)}
        </div>

        {/* Category Name */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '19px',
            fontWeight: 700,
            color: 'var(--nf-ink-950)',
            margin: '0 0 8px',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
          }}
        >
          {category.name}
        </h3>

        {/* Short Benefit Sentence */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            lineHeight: 1.5,
            color: '#555d6e',
            margin: 0,
          }}
        >
          {category.sentence}
        </p>
      </div>

      {/* Explore Link */}
      <div
        style={{
          marginTop: '22px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: isHovered ? '9px' : '6px',
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--nf-red)',
          transition: 'gap 200ms ease',
        }}
      >
        <span>Explore</span>
        <ArrowRight size={15} style={{ transition: 'transform 200ms ease' }} />
      </div>
    </button>
  );
};

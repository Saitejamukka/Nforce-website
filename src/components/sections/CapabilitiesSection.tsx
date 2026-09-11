import React, { useState, useEffect, useRef } from 'react';
import {
  BrainCircuit,
  ShieldCheck,
  Code2,
  Cloud,
  ChevronRight,
  ArrowRight,
  Target,
  TrendingUp,
  GitFork,
} from 'lucide-react';

interface CapabilityStage {
  id: string;
  num: string;
  title: string;
  description: string;
  keyServices: string[];
  icon: 'brain' | 'shield' | 'code' | 'cloud';
}

const CAPABILITY_STAGES: CapabilityStage[] = [
  {
    id: 'ai-agentic',
    num: '01',
    title: 'AI & Agentic Solutions',
    description:
      'Autonomous AI systems that help enterprises automate decisions, accelerate workflows and unlock new possibilities.',
    keyServices: [
      'AI Agents & Copilots',
      'Generative AI Solutions',
      'Intelligent Automation',
    ],
    icon: 'brain',
  },
  {
    id: 'quality-engineering',
    num: '02',
    title: 'Quality Engineering & AI Assurance',
    description:
      'Ensure higher quality, faster releases and greater reliability with AI-powered testing and assurance.',
    keyServices: [
      'Automated Testing',
      'QA & Test Automation',
      'Performance & Security Testing',
    ],
    icon: 'shield',
  },
  {
    id: 'digital-engineering',
    num: '03',
    title: 'Digital Engineering',
    description:
      'Modernize your applications and accelerate innovation with cloud-native, scalable and flexible engineering.',
    keyServices: [
      'Cloud-Native Development',
      'Modern Applications',
      'DevOps & Platform Engineering',
    ],
    icon: 'code',
  },
  {
    id: 'data-cloud-platforms',
    num: '04',
    title: 'Data, Cloud & Enterprise Platforms',
    description:
      'Turn data into intelligence with secure, scalable and future-ready cloud and data platforms.',
    keyServices: [
      'Data & Analytics',
      'Cloud Migration & Modernization',
      'Enterprise Platforms',
    ],
    icon: 'cloud',
  },
];

const VALUE_PILLARS = [
  {
    icon: Target,
    title: 'Autonomous Systems',
    desc: 'Self-learning. Self-improving. Always on.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Grade Security',
    desc: 'Built for trust. Designed for scale.',
  },
  {
    icon: TrendingUp,
    title: 'Faster Time to Value',
    desc: 'From idea to impact. Sooner.',
  },
  {
    icon: GitFork,
    title: 'Scalable for What’s Next',
    desc: 'Flexible. Future-ready. Built to grow.',
  },
];

export const CapabilitiesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [signalProgress, setSignalProgress] = useState<number>(0); // 0..1
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const animFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Subtle red signal animation flowing through the 4 stages
  useEffect(() => {
    let startTime = performance.now();
    const cycleDuration = 10000; // 10s per full cycle across 4 stages

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = (elapsed % cycleDuration) / cycleDuration; // 0..1
      setSignalProgress(progress);

      // Auto-advance active card based on signal position if not paused
      if (!isPaused) {
        const stageIdx = Math.min(Math.floor(progress * 4), 3);
        setActiveIdx(stageIdx);
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused]);

  const handleSelectStage = (idx: number) => {
    setActiveIdx(idx);
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  };

  const renderIcon = (type: 'brain' | 'shield' | 'code' | 'cloud') => {
    const s = 22;
    switch (type) {
      case 'brain':
        return <BrainCircuit size={s} color="var(--nf-red)" strokeWidth={1.8} />;
      case 'shield':
        return <ShieldCheck size={s} color="var(--nf-red)" strokeWidth={1.8} />;
      case 'code':
        return <Code2 size={s} color="var(--nf-red)" strokeWidth={1.8} />;
      case 'cloud':
        return <Cloud size={s} color="var(--nf-red)" strokeWidth={1.8} />;
    }
  };

  return (
    <section
      id="capabilities"
      style={{
        padding: '130px 32px 110px',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #edf0f2',
        borderBottom: '1px solid #edf0f2',
      }}
    >
      {/* Background Subtle Red Undulating Flow Waves */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '420px',
          pointerEvents: 'none',
          opacity: 0.85,
          zIndex: 0,
        }}
        viewBox="0 0 1440 420"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 280 C 220 220, 480 360, 720 310 C 960 260, 1200 370, 1480 300"
          stroke="rgba(224, 31, 38, 0.12)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-40 310 C 260 240, 520 380, 760 330 C 1000 280, 1240 390, 1480 320"
          stroke="rgba(224, 31, 38, 0.08)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-40 340 C 240 270, 500 400, 740 350 C 980 300, 1220 410, 1480 340"
          stroke="rgba(224, 31, 38, 0.05)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-40 250 C 200 190, 460 330, 700 280 C 940 230, 1180 340, 1480 270"
          stroke="rgba(224, 31, 38, 0.06)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div style={{ maxWidth: '1380px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '40px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          {/* Left Column: Eyebrow + Main Title */}
          <div style={{ maxWidth: '780px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(224, 31, 38, 0.22)',
                background: 'rgba(224, 31, 38, 0.04)',
                marginBottom: '18px',
              }}
            >
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
                / STRATEGIC CAPABILITY PILLARS
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 3.8vw, 54px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.12,
                color: 'var(--nf-ink-950)',
                margin: 0,
              }}
            >
              The Autonomous Engineering Engine:{' '}
              <span style={{ color: 'var(--nf-red)' }}>Systems, Scale &amp; Verified Telemetry.</span>
            </h2>
          </div>

          {/* Right Column: Executive Summary & Direct CTA */}
          <div style={{ maxWidth: '440px', paddingTop: '10px' }}>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.65,
                color: '#555d6e',
                margin: '0 0 16px',
              }}
            >
              We combine AI, engineering and deep domain expertise to build intelligent systems that
              learn, adapt and deliver real business outcomes — with full transparency, scalability and trust.
            </p>

            <a
              href="#solutions"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                textDecoration: 'none',
                transition: 'gap 200ms ease, opacity 200ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
            >
              Explore our capabilities <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* 4 Connected Capability Cards with Traveling Red Data Signal */}
        <div style={{ position: 'relative', marginBottom: '48px' }}>
          {/* Continuous Red Flow Line Connecting the Cards */}
          <div
            style={{
              position: 'absolute',
              top: '56px',
              left: '12%',
              right: '12%',
              height: '2px',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            {/* Base Subtle Connecting Line */}
            <div
              style={{
                width: '100%',
                height: '1.5px',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(224, 31, 38, 0.25) 10%, rgba(224, 31, 38, 0.45) 50%, rgba(224, 31, 38, 0.25) 90%, transparent 100%)',
              }}
            />

            {/* Traveling Red Data Signal Packet */}
            <div
              style={{
                position: 'absolute',
                top: '-4px',
                left: `${signalProgress * 100}%`,
                transform: 'translateX(-50%)',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--nf-red)',
                boxShadow: '0 0 12px 2px rgba(224, 31, 38, 0.75)',
                transition: 'left 60ms linear',
              }}
            />
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {CAPABILITY_STAGES.map((stage, idx) => {
              const isSelected = idx === activeIdx;

              return (
                <div
                  key={stage.id}
                  onClick={() => handleSelectStage(idx)}
                  onMouseEnter={() => handleSelectStage(idx)}
                  style={{
                    background: isSelected
                      ? 'linear-gradient(180deg, #ffffff 0%, #fffbfb 100%)'
                      : '#ffffff',
                    border: isSelected
                      ? '1.5px solid rgba(224, 31, 38, 0.45)'
                      : '1px solid #edf0f3',
                    borderRadius: '18px',
                    padding: '30px 26px 26px',
                    boxShadow: isSelected
                      ? '0 20px 42px -12px rgba(224, 31, 38, 0.14), 0 0 0 1px rgba(224, 31, 38, 0.12)'
                      : '0 4px 16px -4px rgba(0, 0, 0, 0.03)',
                    transform: isSelected ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 320ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '380px',
                    position: 'relative',
                  }}
                >
                  {/* Top Row: Number & Circular Emblem Icon */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '22px',
                      }}
                    >
                      {/* Step Number */}
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '18px',
                          fontWeight: 800,
                          color: isSelected ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <span>{stage.num}</span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '16px',
                            height: '2px',
                            background: isSelected ? 'var(--nf-red)' : '#d4d8e0',
                            borderRadius: '2px',
                            transition: 'background 240ms ease',
                          }}
                        />
                      </div>

                      {/* Circular Emblem Icon with Orbital Ring */}
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          background: isSelected
                            ? 'rgba(224, 31, 38, 0.08)'
                            : 'rgba(224, 31, 38, 0.03)',
                          border: isSelected
                            ? '1px solid rgba(224, 31, 38, 0.35)'
                            : '1px solid rgba(224, 31, 38, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          transition: 'all 240ms ease',
                        }}
                      >
                        {/* Subtle Outer Orbital Dashed Ring */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: '-4px',
                            borderRadius: '50%',
                            border: isSelected
                              ? '1px dashed rgba(224, 31, 38, 0.35)'
                              : '1px dashed rgba(224, 31, 38, 0.12)',
                            pointerEvents: 'none',
                          }}
                        />
                        {renderIcon(stage.icon)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 800,
                        lineHeight: 1.28,
                        color: 'var(--nf-ink-950)',
                        margin: '0 0 12px',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {stage.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '13.5px',
                        lineHeight: 1.6,
                        color: '#555d6e',
                        margin: '0 0 24px',
                      }}
                    >
                      {stage.description}
                    </p>

                    {/* Key Services Label */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#8c95a6',
                        marginBottom: '12px',
                      }}
                    >
                      KEY SERVICES
                    </div>

                    {/* Services Checklist */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {stage.keyServices.map((service, sIdx) => (
                        <div
                          key={sIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: isSelected ? 'var(--nf-ink-950)' : '#414754',
                            lineHeight: 1.4,
                          }}
                        >
                          <ChevronRight
                            size={14}
                            color="var(--nf-red)"
                            style={{ flexShrink: 0, transform: 'translateX(-2px)' }}
                          />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action: "Explore this capability →" Button for active, subtle link for inactive */}
                  <div style={{ marginTop: '28px', paddingTop: '16px' }}>
                    {isSelected ? (
                      <a
                        href="#contact"
                        className="nf-btn-primary"
                        style={{
                          width: '100%',
                          padding: '12px 18px',
                          fontSize: '13px',
                          letterSpacing: '0.01em',
                        }}
                      >
                        Explore this capability <ArrowRight size={14} />
                      </a>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--nf-red)',
                          opacity: 0.85,
                        }}
                      >
                        <span>View details</span>
                        <ArrowRight size={12} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Feature Strip: 4 Enterprise Trust Pillars */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #edf0f3',
            borderRadius: '16px',
            padding: '24px 32px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(224, 31, 38, 0.05)',
                    border: '1px solid rgba(224, 31, 38, 0.14)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="var(--nf-red)" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      color: 'var(--nf-ink-950)',
                      lineHeight: 1.2,
                    }}
                  >
                    {pillar.title}
                  </div>
                  <div
                    style={{
                      fontSize: '11.5px',
                      color: '#6e7787',
                      lineHeight: 1.35,
                      marginTop: '2px',
                    }}
                  >
                    {pillar.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

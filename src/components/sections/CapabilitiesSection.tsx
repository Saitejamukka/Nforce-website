import React, { useState } from 'react';
import { STRATEGIC_PILLARS } from '../../data/capabilities';
import { Eyebrow } from '../ui/Eyebrow';
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Boxes,
  Cloud,
  Play,
  CheckCircle2,
  Activity,
  Cpu,
  Layers,
  Sliders,
  Globe,
  RefreshCw,
  Zap,
  Lock,
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(STRATEGIC_PILLARS[0].id);

  // Simulation state for Pillar 1: AI & Agentic
  const [aiPreset, setAiPreset] = useState<'customer-care' | 'code-synth' | 'telecom-ai'>('customer-care');
  const [isAiSimulating, setIsAiSimulating] = useState<boolean>(false);
  const [aiStep, setAiStep] = useState<number>(3); // 0..3
  const [aiTokens, setAiTokens] = useState<number>(438);

  // Simulation state for Pillar 2: Quality Engineering
  const [isQeRunning, setIsQeRunning] = useState<boolean>(false);
  const [qeProgress, setQeProgress] = useState<number>(100);
  const [qeTestsCount, setQeTestsCount] = useState<number>(1840);

  // Simulation state for Pillar 3: Digital Engineering
  const [trafficRps, setTrafficRps] = useState<number>(45000);

  // Simulation state for Pillar 4: Data & Cloud
  const [activeCloudNode, setActiveCloudNode] = useState<'aws' | 'gcp' | 'azure' | 'pega'>('aws');

  // Pillar 1 Simulation handler
  const handleRunAiSimulation = () => {
    if (isAiSimulating) return;
    setIsAiSimulating(true);
    setAiStep(0);
    setAiTokens(0);

    const stepTimer = setInterval(() => {
      setAiStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepTimer);
          setIsAiSimulating(false);
          return 3;
        }
        return prev + 1;
      });
      setAiTokens((t) => t + Math.floor(Math.random() * 120 + 80));
    }, 650);
  };

  // Pillar 2 Simulation handler
  const handleRunQeRegression = () => {
    if (isQeRunning) return;
    setIsQeRunning(true);
    setQeProgress(15);
    setQeTestsCount(1840);

    const qeTimer = setInterval(() => {
      setQeProgress((p) => {
        if (p >= 100) {
          clearInterval(qeTimer);
          setIsQeRunning(false);
          setQeTestsCount(2180);
          return 100;
        }
        return p + 25;
      });
      setQeTestsCount((c) => c + 85);
    }, 450);
  };

  const activePillar =
    STRATEGIC_PILLARS.find((p) => p.id === activePillarId) || STRATEGIC_PILLARS[0];

  const getPillarIcon = (id: string, color: string = 'currentColor') => {
    switch (id) {
      case 'ai-agentic':
        return <BrainCircuit size={20} color={color} />;
      case 'quality-engineering':
        return <ShieldCheck size={20} color={color} />;
      case 'digital-engineering':
        return <Boxes size={20} color={color} />;
      case 'data-cloud-platforms':
      default:
        return <Cloud size={20} color={color} />;
    }
  };

  // Derived metrics for Pillar 3
  const activePods = Math.max(4, Math.round(trafficRps / 8000));
  const p99Latency = (10.8 + (trafficRps / 100000) * 1.8).toFixed(1);

  return (
    <section
      id="capabilities"
      style={{
        background: '#ffffff',
        color: 'var(--nf-ink-950)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '120px 32px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '44px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 11px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(224, 31, 38, 0.08)',
                  border: '1px solid rgba(224, 31, 38, 0.25)',
                  color: 'var(--nf-red)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                <Activity size={12} /> Live Engineering Matrix
              </span>
              <Eyebrow>Strategic Capability Pillars</Eyebrow>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 3.6vw, 50px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                margin: '10px 0 0',
                color: 'var(--nf-ink-950)',
                lineHeight: 1.15,
              }}
            >
              The Autonomous Engineering Engine: <br />
              <span style={{ color: 'var(--nf-red)' }}>Systems, Scale & Verified Telemetry.</span>
            </h2>
          </div>
          <div style={{ maxWidth: '440px' }}>
            <p
              style={{
                fontSize: '14.5px',
                color: 'var(--nf-gray-500)',
                lineHeight: 1.6,
                margin: '0 0 16px',
              }}
            >
              Explore our four core disciplines through real-time systems telemetry. Select any pillar to
              inspect simulated agent swarms, automated test harnesses, microservice meshes, and multi-cloud lakes.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--nf-red)',
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '13.5px',
              }}
            >
              Schedule an Architectural Deep-Dive <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Master Workbench Grid: Left Control Deck (4 Pillars) vs Right Simulation Canvas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(340px, 420px) 1fr',
            gap: '24px',
            alignItems: 'stretch',
          }}
          className="nf-workbench-grid"
        >
          {/* LEFT: 4 Tactile Master Control Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {STRATEGIC_PILLARS.map((pillar, idx) => {
              const isSelected = pillar.id === activePillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(224, 31, 38, 0.04) 0%, #ffffff 100%)'
                      : '#ffffff',
                    border: isSelected ? '1.5px solid var(--nf-red)' : '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '22px 24px',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 240ms cubic-bezier(.16,1,.3,1)',
                    boxShadow: isSelected
                      ? '0 12px 30px -8px rgba(224, 31, 38, 0.18), 0 4px 12px rgba(0, 0, 0, 0.04)'
                      : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {/* Active Scarlet Edge Rail */}
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '16px',
                        bottom: '16px',
                        width: '4px',
                        borderRadius: '0 4px 4px 0',
                        background: 'var(--nf-red)',
                      }}
                    />
                  )}

                  {/* Top Meta Line: Number + Icon + Status Beacon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: isSelected ? 'var(--nf-red)' : 'var(--nf-gray-400)',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(224, 31, 38, 0.10)' : 'var(--nf-gray-100)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isSelected ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                        }}
                      >
                        {getPillarIcon(pillar.id, isSelected ? 'var(--nf-red)' : 'var(--nf-ink-950)')}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: isSelected ? '#10B981' : '#CBD5E1',
                        }}
                      />
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: isSelected ? '#059669' : 'var(--nf-gray-400)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          fontWeight: 700,
                        }}
                      >
                        {isSelected ? 'TELEMETRY LIVE' : 'STANDBY'}
                      </span>
                    </div>
                  </div>

                  {/* Title & One-Line Positioning */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '18.5px',
                        fontWeight: 800,
                        margin: '0 0 4px',
                        color: 'var(--nf-ink-950)',
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--nf-gray-500)',
                        lineHeight: 1.45,
                      }}
                    >
                      {pillar.subtitle}
                    </div>
                  </div>

                  {/* Benchmark Highlight Metric */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '10px',
                      borderTop: '1px solid var(--border-light)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: isSelected ? 'var(--nf-red)' : 'var(--nf-gray-500)',
                        fontWeight: 600,
                      }}
                    >
                      {pillar.id === 'ai-agentic' && '⚡ 148 tok/s · Autonomous Loop'}
                      {pillar.id === 'quality-engineering' && '🛡️ 0.00% Leakage · 1,840 Suites'}
                      {pillar.id === 'digital-engineering' && '🌐 99.999% SLA · sub-12ms Mesh'}
                      {pillar.id === 'data-cloud-platforms' && '☁️ 2.4 GB/s Lakehouse · 3 Regions'}
                    </span>

                    <span
                      style={{
                        fontSize: '12px',
                        color: isSelected ? 'var(--nf-ink-950)' : 'var(--nf-gray-400)',
                        fontWeight: 700,
                      }}
                    >
                      {isSelected ? 'Active ❯' : 'Inspect'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Live Interactive Simulation Canvas */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-light)',
              borderRadius: '18px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              boxShadow: '0 16px 40px -10px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02)',
              minHeight: '560px',
            }}
          >
            {/* Simulation Canvas Top Window Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border-light)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--nf-gray-400)',
                    marginLeft: '8px',
                  }}
                >
                  nforce://engine/{activePillar.id}.sys
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: 'rgba(224, 31, 38, 0.08)',
                    color: 'var(--nf-red)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {activePillar.badge}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: '#059669',
                    background: 'rgba(16, 185, 129, 0.10)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontWeight: 700,
                  }}
                >
                  ONLINE
                </span>
              </div>
            </div>

            {/* DYNAMIC CANVAS CONTENT PER PILLAR */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* ========================================================================= */}
              {/* PILLAR 1: AI & AGENTIC SOLUTIONS CANVAS */}
              {/* ========================================================================= */}
              {activePillar.id === 'ai-agentic' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--nf-red)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        MULTI-AGENT SWARM TOPOLOGY
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-display)' }}>
                        Autonomous Task Decomposition & Execution
                      </div>
                    </div>

                    {/* Agent Preset Selector */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {[
                        { id: 'customer-care', label: 'Customer Care Swarm' },
                        { id: 'code-synth', label: 'Code Synthesis Agent' },
                        { id: 'telecom-ai', label: 'Telecom Voice AI' },
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          onClick={() => setAiPreset(preset.id as any)}
                          style={{
                            background: aiPreset === preset.id ? 'var(--nf-red)' : 'var(--nf-gray-100)',
                            border: '1px solid var(--border-light)',
                            color: aiPreset === preset.id ? '#ffffff' : 'var(--nf-ink-950)',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '11px',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 180ms ease',
                          }}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3 Interconnected Agent Nodes */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '14px',
                      position: 'relative',
                      marginTop: '8px',
                    }}
                  >
                    {/* Node 1: Planner Agent */}
                    <div
                      style={{
                        background: aiStep >= 1 ? 'rgba(224, 31, 38, 0.04)' : '#F8F9FA',
                        border: aiStep >= 1 ? '1.5px solid var(--nf-red)' : '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                        transition: 'all 300ms ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <Cpu size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          AGENT 01
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--nf-ink-950)', marginBottom: '4px' }}>
                        Planner & Decomposer
                      </div>
                      <div style={{ fontSize: '11.5px', color: 'var(--nf-gray-500)', lineHeight: 1.4 }}>
                        {aiStep >= 1 ? '✓ Analyzed goal into 4 deterministic execution steps' : 'Parsing prompt parameters...'}
                      </div>
                      <div style={{ marginTop: '10px', fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: 700 }}>
                        LATENCY: 0.18s
                      </div>
                    </div>

                    {/* Node 2: Vector Retriever */}
                    <div
                      style={{
                        background: aiStep >= 2 ? 'rgba(224, 31, 38, 0.04)' : '#F8F9FA',
                        border: aiStep >= 2 ? '1.5px solid var(--nf-red)' : '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                        transition: 'all 300ms ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <Layers size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          AGENT 02
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--nf-ink-950)', marginBottom: '4px' }}>
                        RAG Knowledge Engine
                      </div>
                      <div style={{ fontSize: '11.5px', color: 'var(--nf-gray-500)', lineHeight: 1.4 }}>
                        {aiStep >= 2 ? '✓ 6 vectors retrieved from Pinecone index (0.94 sim)' : 'Vector search pending...'}
                      </div>
                      <div style={{ marginTop: '10px', fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: 700 }}>
                        SIMILARITY: 98.2%
                      </div>
                    </div>

                    {/* Node 3: Synthesizer & Guardrail */}
                    <div
                      style={{
                        background: aiStep >= 3 ? 'rgba(224, 31, 38, 0.04)' : '#F8F9FA',
                        border: aiStep >= 3 ? '1.5px solid var(--nf-red)' : '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                        transition: 'all 300ms ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <ShieldCheck size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          AGENT 03
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--nf-ink-950)', marginBottom: '4px' }}>
                        Synthesizer & Guardrail
                      </div>
                      <div style={{ fontSize: '11.5px', color: 'var(--nf-gray-500)', lineHeight: 1.4 }}>
                        {aiStep >= 3 ? '✓ Hallucination check passed (0% drift). Output validated' : 'Awaiting synthesis...'}
                      </div>
                      <div style={{ marginTop: '10px', fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: 700 }}>
                        SAFETY: 100% PASS
                      </div>
                    </div>
                  </div>

                  {/* Clean Light-Mode Terminal Execution Log */}
                  <div
                    style={{
                      background: '#F1F5F9',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      border: '1px solid #E2E8F0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: '#1E293B',
                      lineHeight: 1.6,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div style={{ color: 'var(--nf-red)', fontWeight: 700 }}>
                      $ nforce-agentic run --swarm={aiPreset} --eval=strict
                    </div>
                    <div>
                      [0.12s] Swarm initialized. Model: Claude 3.5 Sonnet / DeepSeek R1 Hybrid.
                    </div>
                    <div>
                      [0.45s] RAG retriever synchronized with enterprise documentation.
                    </div>
                    <div style={{ color: '#059669', fontWeight: 600 }}>
                      [0.82s] Agent consensus reached. Guardrail audit: 0 policy violations. Tokens generated: {aiTokens}.
                    </div>
                  </div>

                  {/* Trigger Simulation Button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                    <button
                      type="button"
                      onClick={handleRunAiSimulation}
                      disabled={isAiSimulating}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: isAiSimulating ? '#CBD5E1' : 'var(--nf-red)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        padding: '10px 20px',
                        fontSize: '13px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        cursor: isAiSimulating ? 'default' : 'pointer',
                        boxShadow: '0 4px 14px rgba(224, 31, 38, 0.28)',
                        transition: 'all 200ms ease',
                      }}
                    >
                      {isAiSimulating ? <RefreshCw size={14} className="nf-spin" /> : <Play size={14} />}
                      {isAiSimulating ? 'Simulating Swarm...' : 'Simulate Agent Dispatch'}
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* PILLAR 2: QUALITY ENGINEERING & AI ASSURANCE CANVAS */}
              {/* ========================================================================= */}
              {activePillar.id === 'quality-engineering' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--nf-red)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        AUTONOMOUS QE & REGRESSION MATRIX
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-display)' }}>
                        Continuous E2E SIT & LLM Trust Benchmarking
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleRunQeRegression}
                      disabled={isQeRunning}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: isQeRunning ? '#CBD5E1' : 'var(--nf-red)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        padding: '9px 18px',
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        cursor: isQeRunning ? 'default' : 'pointer',
                        boxShadow: '0 4px 14px rgba(224, 31, 38, 0.28)',
                      }}
                    >
                      {isQeRunning ? <RefreshCw size={14} className="nf-spin" /> : <Play size={14} />}
                      {isQeRunning ? 'Executing Regression...' : 'Trigger Parallel Regression'}
                    </button>
                  </div>

                  {/* 4 Parallel Test Suite Bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                    {[
                      { name: '1. E2E SIT & Telecom Order-to-Cash Flows', total: 640, duration: '2.1s', tag: 'Telecom SIT' },
                      { name: '2. Microservices Contract & Schema Regression', total: 720, duration: '1.4s', tag: 'API Core' },
                      { name: '3. Non-Functional Concurrency (50,000 VUs)', total: 380, duration: '4.8s', tag: 'Resilience' },
                      { name: '4. LLM Hallucination & Prompt Jailbreak Tests', total: 440, duration: '3.2s', tag: 'AI Trust' },
                    ].map((suite, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#F8F9FA',
                          border: '1px solid var(--border-light)',
                          borderRadius: '10px',
                          padding: '14px 18px',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckCircle2 size={16} color="#10B981" />
                            <span style={{ fontWeight: 700, fontSize: '13.5px', color: 'var(--nf-ink-950)' }}>
                              {suite.name}
                            </span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                            <span style={{ color: 'var(--nf-red)' }}>[{suite.tag}]</span>
                            <span style={{ color: '#059669', fontWeight: 700 }}>{suite.total} PASSED</span>
                            <span style={{ color: 'var(--nf-gray-400)' }}>{suite.duration}</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div
                          style={{
                            width: '100%',
                            height: '6px',
                            background: '#E2E8F0',
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${isQeRunning ? qeProgress : 100}%`,
                              height: '100%',
                              background: 'linear-gradient(90deg, #10B981 0%, var(--nf-red) 100%)',
                              transition: 'width 300ms ease',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary Metric Strip */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px',
                      background: '#F8F9FA',
                      padding: '14px 18px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--nf-gray-500)', fontFamily: 'var(--font-mono)' }}>TOTAL SUITES RUN</div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-mono)' }}>{qeTestsCount}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--nf-gray-500)', fontFamily: 'var(--font-mono)' }}>DEFECT LEAKAGE</div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-mono)' }}>0.00%</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--nf-gray-500)', fontFamily: 'var(--font-mono)' }}>RELEASE CONFIDENCE</div>
                      <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--nf-red)', fontFamily: 'var(--font-mono)' }}>99.98%</div>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* PILLAR 3: DIGITAL ENGINEERING CANVAS */}
              {/* ========================================================================= */}
              {activePillar.id === 'digital-engineering' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--nf-red)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        DISTRIBUTED CLOUD-NATIVE TOPOLOGY
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-display)' }}>
                        Microservices Mesh, Event Bus & Edge Acceleration
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: 'var(--font-mono)',
                          padding: '4px 10px',
                          background: 'rgba(16, 185, 129, 0.10)',
                          border: '1px solid rgba(16, 185, 129, 0.25)',
                          borderRadius: '6px',
                          color: '#059669',
                          fontWeight: 700,
                        }}
                      >
                        Canary v2.4.1 Active · 0 Errors
                      </span>
                    </div>
                  </div>

                  {/* Interactive Traffic Scale Slider */}
                  <div
                    style={{
                      background: '#F8F9FA',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      padding: '16px 20px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sliders size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--nf-ink-950)' }}>
                          Interactive Traffic Load Simulator
                        </span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--nf-red)' }}>
                        {trafficRps.toLocaleString()} req / sec
                      </span>
                    </div>

                    <input
                      type="range"
                      min="10000"
                      max="250000"
                      step="5000"
                      value={trafficRps}
                      onChange={(e) => setTrafficRps(Number(e.target.value))}
                      style={{
                        width: '100%',
                        accentColor: 'var(--nf-red)',
                        cursor: 'pointer',
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: 'var(--nf-gray-500)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>
                      <span>10k RPS (Baseline)</span>
                      <span>125k RPS (High-Scale Peak)</span>
                      <span>250k RPS (Telecom Black Friday)</span>
                    </div>
                  </div>

                  {/* Topology Diagram Nodes */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {[
                      { layer: 'INGRESS', title: 'Global Edge CDN', sub: 'Cloudflare / AWS CloudFront', stat: '< 4ms Edge' },
                      { layer: 'GATEWAY', title: 'Envoy API Gateway', sub: 'Rate-limiting & JWT Auth', stat: '0.00% Rejection' },
                      { layer: 'SERVICES', title: `Core Mesh (${activePods} Pods)`, sub: 'Go / Node / Spring Clusters', stat: `Auto-scaled x${activePods}` },
                      { layer: 'STORAGE', title: 'Sharded Data Core', sub: 'CockroachDB & Redis Mesh', stat: 'Zero-Lag Replica' },
                    ].map((node, i) => (
                      <div
                        key={i}
                        style={{
                          background: '#ffffff',
                          border: '1px solid var(--border-light)',
                          borderRadius: '10px',
                          padding: '14px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                        }}
                      >
                        <div style={{ fontSize: '9.5px', fontFamily: 'var(--font-mono)', color: 'var(--nf-red)', marginBottom: '4px', fontWeight: 700 }}>
                          {node.layer}
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--nf-ink-950)', marginBottom: '2px' }}>
                          {node.title}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--nf-gray-500)', marginBottom: '8px', lineHeight: 1.3 }}>
                          {node.sub}
                        </div>
                        <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: '#059669', fontWeight: 700 }}>
                          {node.stat}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Performance Readout */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(224, 31, 38, 0.05)',
                      border: '1px solid rgba(224, 31, 38, 0.20)',
                      borderRadius: '10px',
                      padding: '12px 18px',
                      fontSize: '12.5px',
                    }}
                  >
                    <span style={{ color: 'var(--nf-ink-950)', fontWeight: 600 }}>
                      p99 Distributed Latency Under {trafficRps.toLocaleString()} RPS:
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 800, color: 'var(--nf-red)' }}>
                      {p99Latency} ms
                    </span>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* PILLAR 4: DATA, CLOUD & ENTERPRISE PLATFORMS CANVAS */}
              {/* ========================================================================= */}
              {activePillar.id === 'data-cloud-platforms' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--nf-red)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        HYBRID MULTI-CLOUD DATA LAKEHOUSE
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-display)' }}>
                        Streaming Ingestion, SRE Reliability & Pega/SAP Core
                      </div>
                    </div>

                    {/* Cloud Node Switcher */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {[
                        { id: 'aws', label: 'AWS us-east-1' },
                        { id: 'gcp', label: 'GCP Lakehouse' },
                        { id: 'azure', label: 'Azure Core' },
                        { id: 'pega', label: 'Pega Infinity' },
                      ].map((node) => (
                        <button
                          key={node.id}
                          onClick={() => setActiveCloudNode(node.id as any)}
                          style={{
                            background: activeCloudNode === node.id ? 'var(--nf-red)' : 'var(--nf-gray-100)',
                            border: '1px solid var(--border-light)',
                            color: activeCloudNode === node.id ? '#ffffff' : 'var(--nf-ink-950)',
                            borderRadius: '6px',
                            padding: '4px 10px',
                            fontSize: '11px',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 180ms ease',
                          }}
                        >
                          {node.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Telemetry Dashboard Panels */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                    <div
                      style={{
                        background: '#F8F9FA',
                        border: '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Activity size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          STREAM THROUGHPUT
                        </span>
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                        2.4 GB/s
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#059669', fontWeight: 600 }}>
                        ✓ Kafka topic zero-lag partition
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#F8F9FA',
                        border: '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Globe size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          MULTI-REGION SYNC
                        </span>
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                        Dallas · HYD
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#059669', fontWeight: 600 }}>
                        ✓ Active-active sub-15ms delta
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#F8F9FA',
                        border: '1px solid var(--border-light)',
                        borderRadius: '12px',
                        padding: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Lock size={16} color="var(--nf-red)" />
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--nf-gray-500)' }}>
                          GOVERNANCE & AUDIT
                        </span>
                      </div>
                      <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--nf-ink-950)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                        SOC2 + HIPAA
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#059669', fontWeight: 600 }}>
                        ✓ Zero unencrypted data transit
                      </div>
                    </div>
                  </div>

                  {/* Active Cloud Node Clean Log */}
                  <div
                    style={{
                      background: '#F1F5F9',
                      borderRadius: '10px',
                      padding: '14px 18px',
                      border: '1px solid #E2E8F0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      color: '#1E293B',
                      lineHeight: 1.6,
                    }}
                  >
                    <div style={{ color: 'var(--nf-red)', fontWeight: 700 }}>
                      [node:{activeCloudNode}] health-check --topology=hybrid --cluster=production
                    </div>
                    <div>
                      Node status: ONLINE. Terraform drift: 0 changes detected.
                    </div>
                    <div>
                      Pega BPM / SAP connector status: Synchronized with enterprise message queue.
                    </div>
                    <div style={{ color: '#059669', fontWeight: 600 }}>
                      Estimated annual cloud OPEX optimization achieved: 34.8% savings.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Deliverables & Tech Stack Strip Inside Canvas */}
            <div
              style={{
                paddingTop: '20px',
                marginTop: '24px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--nf-gray-500)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginRight: '4px',
                    fontWeight: 600,
                  }}
                >
                  Certified Stack:
                </span>
                {activePillar.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11.5px',
                      padding: '4px 9px',
                      borderRadius: '6px',
                      background: 'var(--nf-gray-100)',
                      border: '1px solid var(--border-light)',
                      color: 'var(--nf-ink-950)',
                      fontWeight: 600,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--nf-red)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 18px',
                  fontSize: '12.5px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(224, 31, 38, 0.25)',
                  transition: 'background 180ms ease',
                }}
              >
                Engage {activePillar.title.split(' ')[0]} Squad <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Technical Offerings Strip */}
        <div
          style={{
            marginTop: '36px',
            background: '#F8F9FA',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {activePillar.offerings.slice(0, 4).map((offering, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(224, 31, 38, 0.10)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                }}
              >
                <Zap size={12} color="var(--nf-red)" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--nf-ink-950)', lineHeight: 1.4 }}>
                  {offering}
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
                  Enterprise SLA delivery with dedicated onshore-offshore squad governance.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

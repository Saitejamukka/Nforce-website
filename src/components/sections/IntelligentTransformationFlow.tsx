import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Radio,
  Layers,
  Activity,
  ShieldCheck,
  Cpu,
  Cloud,
  Zap,
  Boxes,
  RefreshCw,
  Globe,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export interface TransformationPhase {
  id: string;
  name: 'TELECOM' | 'CLOUD' | 'AI' | 'AUTOMATION' | 'DIGITAL';
  num: string;
  title: string;
  telecomAreaId: string;
}

export const TRANSFORMATION_PHASES: TransformationPhase[] = [
  { id: 'telecom', name: 'TELECOM', num: '01', title: 'Carrier Network & OSS/BSS Core', telecomAreaId: 'oss-bss' },
  { id: 'cloud', name: 'CLOUD', num: '02', title: 'Distributed Cloud-Native Microservices Mesh', telecomAreaId: 'telecom-qe' },
  { id: 'ai', name: 'AI', num: '03', title: 'Cognitive Agentic Inference & Speech AI', telecomAreaId: 'ai-cx-voice' },
  { id: 'automation', name: 'AUTOMATION', num: '04', title: 'Autonomous CI/CD & Operations Feedback Loop', telecomAreaId: 'network-field-ops' },
  { id: 'digital', name: 'DIGITAL', num: '05', title: 'Unified Omnichannel Lakehouse & Analytics', telecomAreaId: 'telecom-data' },
];

interface NodeTopology {
  id: string;
  label: string;
  sub: string;
  icon: string;
  x: number; // 0 to 100 percentage
  y: number; // 0 to 100 percentage
  telemetry: string;
}

// 5 persistent nodes across the 5 technology states
const TOPOLOGY_MAP: Record<string, { nodes: NodeTopology[]; connections: [string, string][]; signalRoute: string[] }> = {
  TELECOM: {
    nodes: [
      { id: 'core', label: 'OSS/BSS Core', sub: 'Order-to-Cash Bus', icon: 'Layers', x: 38, y: 50, telemetry: '99.4% SLA' },
      { id: 'ingress', label: '5G RAN / Radio Access', sub: 'gNodeB Protocol', icon: 'Radio', x: 14, y: 24, telemetry: '120 Gbps' },
      { id: 'compute', label: 'CDR Billing Engine', sub: 'Real-Time Rating Bus', icon: 'Activity', x: 16, y: 76, telemetry: '50M+ Recs' },
      { id: 'storage', label: 'SIT Protocol Node', sub: 'E2E Signaling Test', icon: 'ShieldCheck', x: 65, y: 32, telemetry: 'Zero Leak' },
      { id: 'egress', label: 'Service Provisioning', sub: 'Fiber & IoT Gate', icon: 'Cpu', x: 86, y: 68, telemetry: '<10ms Disp' },
    ],
    connections: [
      ['ingress', 'core'],
      ['compute', 'core'],
      ['core', 'storage'],
      ['storage', 'egress'],
      ['compute', 'egress'],
    ],
    signalRoute: ['ingress', 'core', 'storage', 'egress', 'compute', 'core'],
  },
  CLOUD: {
    nodes: [
      { id: 'core', label: 'Multi-Cloud Mesh', sub: 'Istio / Envoy Ingress', icon: 'Cloud', x: 50, y: 50, telemetry: '99.999% SLA' },
      { id: 'ingress', label: 'Cloud API Gateway', sub: 'Global Edge Ingress', icon: 'Zap', x: 50, y: 18, telemetry: '12ms p99' },
      { id: 'compute', label: 'Distributed K8s', sub: 'Auto-Scaling Pods', icon: 'Boxes', x: 18, y: 50, telemetry: '32x Pods' },
      { id: 'storage', label: 'Kafka Event Bus', sub: 'Zero-Lag Stream', icon: 'RefreshCw', x: 82, y: 50, telemetry: '2.4 GB/s' },
      { id: 'egress', label: 'Multi-Region Sync', sub: 'AWS · Azure · GCP', icon: 'Globe', x: 50, y: 82, telemetry: 'Zero Drift' },
    ],
    connections: [
      ['ingress', 'core'],
      ['compute', 'core'],
      ['core', 'storage'],
      ['core', 'egress'],
      ['compute', 'ingress'],
      ['storage', 'egress'],
    ],
    signalRoute: ['ingress', 'core', 'compute', 'egress', 'storage', 'core'],
  },
  AI: {
    nodes: [
      { id: 'core', label: 'LLM Reasoning Core', sub: 'Agentic Router', icon: 'BrainCircuit', x: 48, y: 50, telemetry: '148 tok/s' },
      { id: 'ingress', label: 'Voice AI Traversal', sub: 'Speech & Dialects', icon: 'Radio', x: 20, y: 26, telemetry: '98.9% Acc' },
      { id: 'compute', label: 'Vector Store (RAG)', sub: 'Enterprise KB', icon: 'Layers', x: 18, y: 74, telemetry: '5M+ Vectors' },
      { id: 'storage', label: 'Synthesizer Agent', sub: 'Auto-Resolution', icon: 'Cpu', x: 80, y: 26, telemetry: '45% Deflect' },
      { id: 'egress', label: 'Guardrail Gate', sub: 'Zero Hallucination', icon: 'ShieldCheck', x: 78, y: 74, telemetry: '0.00% Breach' },
    ],
    connections: [
      ['ingress', 'core'],
      ['compute', 'core'],
      ['core', 'storage'],
      ['core', 'egress'],
      ['storage', 'egress'],
    ],
    signalRoute: ['ingress', 'core', 'compute', 'core', 'storage', 'egress'],
  },
  AUTOMATION: {
    nodes: [
      { id: 'ingress', label: 'Trigger Harness', sub: 'GitOps & Webhooks', icon: 'Zap', x: 12, y: 50, telemetry: '<2s Trigger' },
      { id: 'compute', label: 'Self-Healing QE', sub: 'Parallel Suites', icon: 'ShieldCheck', x: 32, y: 28, telemetry: '1,840 Suites' },
      { id: 'core', label: 'Auto-Dispatch', sub: 'Field & NOC Triage', icon: 'Cpu', x: 52, y: 50, telemetry: '35% Faster' },
      { id: 'storage', label: 'Alert Correlator', sub: 'Anomaly Isolation', icon: 'Activity', x: 72, y: 28, telemetry: '99% Cut' },
      { id: 'egress', label: 'Quality Gate', sub: 'Zero-Defect Release', icon: 'CheckCircle2', x: 88, y: 50, telemetry: 'SLA Verif' },
    ],
    connections: [
      ['ingress', 'compute'],
      ['compute', 'core'],
      ['core', 'storage'],
      ['storage', 'egress'],
      ['ingress', 'core'],
      ['core', 'egress'],
    ],
    signalRoute: ['ingress', 'compute', 'core', 'storage', 'egress'],
  },
  DIGITAL: {
    nodes: [
      { id: 'core', label: 'Data Lakehouse', sub: 'Sub-50ms Streaming', icon: 'Activity', x: 50, y: 50, telemetry: '50M+ Evt/d' },
      { id: 'ingress', label: 'Omnichannel Edge', sub: 'Mobile & Web Mesh', icon: 'Globe', x: 22, y: 26, telemetry: '12M+ Subs' },
      { id: 'compute', label: 'Predictive Churn', sub: 'Propensity Model', icon: 'BrainCircuit', x: 78, y: 26, telemetry: '92% Early' },
      { id: 'storage', label: 'CDR Real-Time', sub: 'Zero-Latency Feed', icon: 'Layers', x: 20, y: 74, telemetry: '0.00% Loss' },
      { id: 'egress', label: 'Executive Radar', sub: 'Unified Health KPI', icon: 'CheckCircle2', x: 80, y: 74, telemetry: 'Live Ops' },
    ],
    connections: [
      ['ingress', 'core'],
      ['compute', 'core'],
      ['storage', 'core'],
      ['egress', 'core'],
      ['ingress', 'compute'],
      ['storage', 'egress'],
    ],
    signalRoute: ['storage', 'core', 'ingress', 'compute', 'core', 'egress'],
  },
};

interface Props {
  activeAreaId: string;
  onSelectArea: (areaId: string) => void;
}

export const IntelligentTransformationFlow: React.FC<Props> = ({ activeAreaId, onSelectArea }) => {
  const initialPhaseIdx = useMemo(() => {
    const idx = TRANSFORMATION_PHASES.findIndex((p) => p.telecomAreaId === activeAreaId);
    return idx >= 0 ? idx : 0;
  }, [activeAreaId]);

  const [phaseIndex, setPhaseIndex] = useState<number>(initialPhaseIdx);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [signalPos, setSignalPos] = useState<{ x: number; y: number }>({ x: 38, y: 50 });
  const [activeSignalNode, setActiveSignalNode] = useState<string>('core');

  const animFrameRef = useRef<number | null>(null);
  const interactionTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentPhase = TRANSFORMATION_PHASES[phaseIndex];
  const topology = TOPOLOGY_MAP[currentPhase.name] || TOPOLOGY_MAP.TELECOM;

  // Sync when parent area changes
  useEffect(() => {
    const idx = TRANSFORMATION_PHASES.findIndex((p) => p.telecomAreaId === activeAreaId);
    if (idx >= 0 && idx !== phaseIndex) {
      setPhaseIndex(idx);
    }
  }, [activeAreaId]);

  // Click phase change
  const handlePhaseClick = (newIdx: number) => {
    setPhaseIndex(newIdx);
    onSelectArea(TRANSFORMATION_PHASES[newIdx].telecomAreaId);
    setIsUserInteracting(true);
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 7000);
  };

  const nodeMap = useMemo(() => {
    const map = new Map<string, NodeTopology>();
    topology.nodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [topology]);

  // Red Data Signal animation loop & continuous morphing
  useEffect(() => {
    const route = topology.signalRoute;
    if (!route || route.length < 2) return;

    let localStartTime = performance.now();
    const cycleDuration = 5200; // 5.2s per phase

    const animateSignal = (now: number) => {
      const elapsed = now - localStartTime;
      const t = (elapsed % cycleDuration) / cycleDuration; // 0..1

      const numSegments = route.length - 1;
      const segmentProgress = t * numSegments;
      const segIndex = Math.min(Math.floor(segmentProgress), numSegments - 1);
      const segT = segmentProgress - segIndex;

      const fromNode = nodeMap.get(route[segIndex]);
      const toNode = nodeMap.get(route[segIndex + 1]);

      if (fromNode && toNode) {
        const curX = fromNode.x + (toNode.x - fromNode.x) * segT;
        const curY = fromNode.y + (toNode.y - fromNode.y) * segT;
        setSignalPos({ x: curX, y: curY });

        if (segT > 0.5) {
          setActiveSignalNode(toNode.id);
        } else {
          setActiveSignalNode(fromNode.id);
        }
      }

      // Smooth advance to next phase if auto-running
      if (elapsed >= cycleDuration && !isUserInteracting) {
        localStartTime = now;
        setPhaseIndex((prev) => {
          const next = (prev + 1) % TRANSFORMATION_PHASES.length;
          onSelectArea(TRANSFORMATION_PHASES[next].telecomAreaId);
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(animateSignal);
    };

    animFrameRef.current = requestAnimationFrame(animateSignal);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [topology, nodeMap, isUserInteracting, onSelectArea]);

  const renderIcon = (iconName: string, color: string = '#ffffff') => {
    const s = 13;
    switch (iconName) {
      case 'Radio': return <Radio size={s} color={color} />;
      case 'Layers': return <Layers size={s} color={color} />;
      case 'Activity': return <Activity size={s} color={color} />;
      case 'ShieldCheck': return <ShieldCheck size={s} color={color} />;
      case 'Cpu': return <Cpu size={s} color={color} />;
      case 'Cloud': return <Cloud size={s} color={color} />;
      case 'Zap': return <Zap size={s} color={color} />;
      case 'Boxes': return <Boxes size={s} color={color} />;
      case 'RefreshCw': return <RefreshCw size={s} color={color} />;
      case 'Globe': return <Globe size={s} color={color} />;
      case 'BrainCircuit': return <BrainCircuit size={s} color={color} />;
      case 'CheckCircle2': return <CheckCircle2 size={s} color={color} />;
      default: return <Activity size={s} color={color} />;
    }
  };

  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, 0.40)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        padding: '16px 20px',
        marginBottom: '26px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top Header: System State & 5-Phase Transformation Stepper */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '14px',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: 'var(--nf-red)',
              boxShadow: '0 0 8px var(--nf-red)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--nf-red-bright)',
              fontWeight: 700,
            }}
          >
            INTELLIGENT TRANSFORMATION FLOW
          </span>
          <span
            style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: 'rgba(255, 255, 255, 0.40)',
              padding: '2px 6px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '4px',
            }}
          >
            CONTINUOUS RECONFIG · {currentPhase.num}/05
          </span>
        </div>

        {/* 5-Phase Transformation Stepper: TELECOM → CLOUD → AI → AUTOMATION → DIGITAL */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '3px 6px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {TRANSFORMATION_PHASES.map((p, idx) => {
            const isActive = idx === phaseIndex;
            return (
              <React.Fragment key={p.id}>
                <button
                  type="button"
                  onClick={() => handlePhaseClick(idx)}
                  style={{
                    border: 'none',
                    background: isActive ? 'rgba(224, 31, 38, 0.25)' : 'transparent',
                    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 200ms ease',
                    boxShadow: isActive ? 'inset 0 0 0 1px rgba(224, 31, 38, 0.7)' : 'none',
                  }}
                  title={p.title}
                >
                  <span style={{ color: isActive ? 'var(--nf-red)' : 'rgba(255, 255, 255, 0.3)' }}>{p.num}</span>
                  {p.name}
                </button>
                {idx < TRANSFORMATION_PHASES.length - 1 && (
                  <ChevronRight size={10} color="rgba(255, 255, 255, 0.2)" style={{ margin: '0 -2px' }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Interactive Transformation Canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          background: 'rgba(0, 0, 0, 0.35)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            opacity: 0.5,
          }}
        />

        {/* Dynamic Connecting Lines SVG Canvas */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <defs>
            <filter id="nfRedPulse" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Interconnecting Topological Lines */}
          {topology.connections.map(([fromId, toId], i) => {
            const n1 = nodeMap.get(fromId);
            const n2 = nodeMap.get(toId);
            if (!n1 || !n2) return null;
            const isLineActive =
              (activeSignalNode === fromId && activeNodeId === toId) ||
              (activeSignalNode === toId && activeNodeId === fromId);

            return (
              <line
                key={`${fromId}-${toId}-${i}`}
                x1={`${n1.x}%`}
                y1={`${n1.y}%`}
                x2={`${n2.x}%`}
                y2={`${n2.y}%`}
                stroke={isLineActive ? 'rgba(224, 31, 38, 0.6)' : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={isLineActive ? '1.8' : '1.2'}
                strokeDasharray={isLineActive ? '4 3' : '2 2'}
                style={{
                  transition: 'all 1100ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            );
          })}

          {/* Subtle Red Data Signal Traveling Through System */}
          <circle
            cx={`${signalPos.x}%`}
            cy={`${signalPos.y}%`}
            r="3.5"
            fill="#E01F26"
            filter="url(#nfRedPulse)"
            style={{
              transition: 'cx 50ms linear, cy 50ms linear',
            }}
          />
          <circle
            cx={`${signalPos.x}%`}
            cy={`${signalPos.y}%`}
            r="7"
            fill="none"
            stroke="rgba(224, 31, 38, 0.45)"
            strokeWidth="1.2"
            style={{
              transition: 'cx 50ms linear, cy 50ms linear',
            }}
          />
        </svg>

        {/* Morphing Technology Nodes */}
        {topology.nodes.map((node) => {
          const isSignalActive = activeSignalNode === node.id;
          const isHovered = activeNodeId === node.id;

          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNodeId(node.id)}
              onMouseLeave={() => setActiveNodeId(null)}
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                padding: '5px 10px 5px 7px',
                borderRadius: '7px',
                background: isSignalActive || isHovered ? 'rgba(24, 24, 30, 0.96)' : 'rgba(16, 16, 20, 0.88)',
                border: isSignalActive || isHovered ? '1px solid var(--nf-red)' : '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(6px)',
                boxShadow: isSignalActive
                  ? '0 0 14px rgba(224, 31, 38, 0.4), 0 4px 10px rgba(0, 0, 0, 0.45)'
                  : '0 2px 6px rgba(0, 0, 0, 0.35)',
                cursor: 'pointer',
                transition: 'all 1100ms cubic-bezier(0.25, 1, 0.5, 1), border-color 200ms ease, box-shadow 200ms ease',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '5px',
                  background: isSignalActive ? 'rgba(224, 31, 38, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 200ms ease',
                }}
              >
                {renderIcon(node.icon, isSignalActive ? 'var(--nf-red-bright)' : '#ffffff')}
              </div>

              {/* Node Title & Sub */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: isSignalActive ? '#ffffff' : 'rgba(255, 255, 255, 0.90)',
                    lineHeight: 1.2,
                  }}
                >
                  {node.label}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: isSignalActive ? 'var(--nf-red-bright)' : 'rgba(255, 255, 255, 0.45)',
                    lineHeight: 1.1,
                    marginTop: '1px',
                  }}
                >
                  {node.sub}
                </div>
              </div>

              {/* Micro Status Beacon */}
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: isSignalActive ? 'var(--nf-red)' : '#10B981',
                  boxShadow: isSignalActive ? '0 0 8px var(--nf-red)' : 'none',
                  marginLeft: '2px',
                  flexShrink: 0,
                  transition: 'all 200ms ease',
                }}
              />
            </div>
          );
        })}

        {/* Bottom Status Readout */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'rgba(255, 255, 255, 0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            zIndex: 3,
            background: 'rgba(0, 0, 0, 0.55)',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--nf-red)' }} />
          TELEMETRY SIGNAL: {activeSignalNode.toUpperCase()} · SYNCHRONIZED
        </div>
      </div>
    </div>
  );
};

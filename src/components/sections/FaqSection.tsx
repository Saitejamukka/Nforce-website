import React, { useState } from 'react';
import { FAQS } from '../../data/companyData';
import { Eyebrow } from '../ui/Eyebrow';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        padding: '120px 32px',
        background: 'var(--nf-white)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Eyebrow>Got Questions?</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              margin: '16px 0 0',
              color: 'var(--nf-ink-950)',
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: 'var(--nf-gray-500)',
              fontSize: '15px',
              maxWidth: '560px',
              margin: '14px auto 0',
              lineHeight: 1.6,
            }}
          >
            Everything you need to know about our enterprise QA, DevOps, cloud engineering, and
            flexible engagement models.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ borderTop: '1px solid var(--border-light)' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid var(--border-light)',
                  transition: 'background 200ms',
                  background: isOpen ? 'rgba(224, 31, 38, 0.02)' : 'transparent',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '24px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        color: isOpen ? 'var(--nf-red)' : 'var(--nf-gray-400)',
                        fontWeight: 700,
                        flex: '0 0 auto',
                        transition: 'color 200ms',
                      }}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(16px, 1.8vw, 19px)',
                        fontWeight: 700,
                        color: isOpen ? 'var(--nf-red)' : 'var(--nf-ink-950)',
                        lineHeight: 1.4,
                        transition: 'color 200ms',
                      }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--nf-red)' : 'var(--nf-gray-100)',
                      color: isOpen ? '#fff' : 'var(--nf-ink-950)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: '0 0 auto',
                      transition: 'all 200ms var(--ease-out)',
                    }}
                  >
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 300ms var(--ease-out)',
                      }}
                    />
                  </div>
                </button>

                <div
                  style={{
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 340ms var(--ease-out)',
                  }}
                >
                  <div style={{ minHeight: 0, overflow: 'hidden' }}>
                    <div
                      style={{
                        padding: '0 8px 24px 44px',
                        color: 'var(--nf-gray-500)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                        maxWidth: '840px',
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help prompt */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px',
            background: 'var(--nf-gray-100)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px' }}>
              Have a question not listed here?
            </div>
            <div style={{ fontSize: '13px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
              Our enterprise solutions specialists are ready to discuss your custom project.
            </div>
          </div>
          <a
            href="#contact"
            style={{
              color: 'var(--nf-red)',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Connect with Our Solutions Team →
          </a>
        </div>
      </div>
    </section>
  );
};

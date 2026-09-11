import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Eyebrow } from '../ui/Eyebrow';

export const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = TESTIMONIALS[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      style={{
        padding: '140px 32px',
        background: 'var(--nf-white)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div
        style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Eyebrow>What Our Customers Say</Eyebrow>

        {/* 5-Star Enterprise Rating Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(224, 31, 38, 0.06)',
            border: '1px solid rgba(224, 31, 38, 0.18)',
            borderRadius: 'var(--radius-pill)',
            padding: '6px 16px',
            marginTop: '16px',
          }}
        >
          <span style={{ color: 'var(--nf-red)', fontSize: '13px', letterSpacing: '1px' }}>★★★★★</span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--nf-ink-950)' }}>
            5.0 Verified Client Satisfaction
          </span>
        </div>

        <div
          style={{
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '28px',
          }}
        >
          <p
            key={index}
            style={{
              animation: 'nfFadeUp 500ms var(--ease-out)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3.2vw, 36px)',
              fontWeight: 600,
              lineHeight: 1.4,
              color: 'var(--nf-ink-950)',
              margin: 0,
            }}
          >
            "{current.quote}"
          </p>
        </div>

        <div style={{ marginTop: '28px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800 }}>
            {current.name}
          </div>
          <div style={{ fontSize: '13px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
            {current.role}
          </div>
        </div>

        {/* Progress Navigation Bars */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: index === i ? '36px' : '8px',
                height: '5px',
                borderRadius: '3px',
                background: index === i ? 'var(--nf-red)' : 'var(--nf-gray-300)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 300ms var(--ease-out)',
                padding: 0,
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '28px' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              background: 'none',
              border: '1px solid var(--nf-gray-300)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: 'var(--nf-ink-950)',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              background: 'none',
              border: '1px solid var(--nf-gray-300)',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              color: 'var(--nf-ink-950)',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            →
          </button>
        </div>

        <a
          href="https://www.google.com/maps/place/Red+Key+Solutions/@41.0212565,-73.7318621,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="nf-reviews-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '44px',
            textDecoration: 'none',
            color: 'var(--nf-ink-950)',
            padding: '10px 18px',
            border: '1px solid var(--nf-gray-300)',
            borderRadius: 'var(--radius-pill)',
            transition: 'border-color 200ms',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '15px' }}>
            4.9
          </span>
          <span style={{ color: 'var(--nf-red)', fontSize: '14px', letterSpacing: '1px' }}>
            ★★★★★
          </span>
          <span style={{ fontSize: '13px', color: 'var(--nf-gray-500)' }}>Google Reviews</span>
        </a>
      </div>
    </section>
  );
};

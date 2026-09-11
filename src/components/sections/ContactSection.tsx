import React, { useState } from 'react';
import { CAPABILITY_LIST, HOW_IT_WORKS } from '../../data/companyData';
import { Eyebrow } from '../ui/Eyebrow';
import { Highlight } from '../ui/Highlight';
import { CTA } from '../ui/CTA';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'QA & Test Automation',
  ]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.firstName.trim()) newErrors.firstName = true;
    if (!form.lastName.trim()) newErrors.lastName = true;
    if (!form.company.trim()) newErrors.company = true;
    if (!EMAIL_RE.test(form.email.trim())) newErrors.email = true;
    if (!form.agree) newErrors.agree = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setSelectedNeeds(['QA & Test Automation']);
    setForm({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      agree: false,
    });
  };

  const getInputStyle = (hasError?: boolean): React.CSSProperties => ({
    width: '100%',
    background: 'var(--nf-white)',
    border: `1px solid ${hasError ? 'var(--nf-red-bright)' : 'var(--nf-gray-300)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '13px 14px',
    color: 'var(--nf-ink-950)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 160ms, box-shadow 160ms',
  });

  return (
    <section
      id="contact"
      style={{
        padding: '140px 32px',
        background: 'var(--nf-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,31,38,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="nf-contact-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
        }}
      >
        {/* Left Column */}
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 800,
              margin: '16px 0 20px',
              lineHeight: 1.1,
            }}
          >
            Partner with us to build and{' '}
            <Highlight tone="red">scale with confidence</Highlight>.
          </h2>
          <p
            style={{
              color: 'var(--nf-gray-500)',
              fontSize: '16px',
              lineHeight: 1.6,
              margin: '0 0 40px',
              maxWidth: '460px',
            }}
          >
            We help businesses turn ideas into scalable, secure, production-ready software — from
            strategy and design through development, QA, and DevOps.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
            {CAPABILITY_LIST.map((cap) => (
              <div
                key={cap}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--nf-ink-700)',
                  background: 'var(--nf-gray-100)',
                  border: '1px solid var(--nf-gray-200)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 16px',
                }}
              >
                {cap}
              </div>
            ))}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              letterSpacing: 'var(--ls-eyebrow)',
              color: 'var(--nf-gray-500)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            How It Works
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {HOW_IT_WORKS.map((step) => (
              <div key={step.n} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--nf-red)',
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '0 0 auto',
                  }}
                >
                  {step.n}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    color: 'var(--nf-ink-700)',
                    lineHeight: 1.55,
                    paddingTop: '5px',
                  }}
                >
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form Card */}
        <div
          style={{
            background: 'var(--nf-white)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            padding: '44px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'var(--grad-red)',
            }}
          />

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '56px 12px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--nf-red)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '26px',
                }}
              >
                ✓
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '20px',
                  fontWeight: 800,
                  marginBottom: '10px',
                }}
              >
                Thanks — we'll be in touch!
              </div>
              <div style={{ color: 'var(--nf-gray-500)', fontSize: '14px', lineHeight: 1.5 }}>
                A member of our team will reach out within one business day to schedule your free
                consultation.
              </div>
              <button
                onClick={handleReset}
                style={{
                  marginTop: '24px',
                  background: 'none',
                  border: '1px solid var(--nf-gray-300)',
                  color: 'var(--nf-ink-950)',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-pill)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: 700,
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  letterSpacing: 'var(--ls-eyebrow)',
                  color: 'var(--nf-gray-500)',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Schedule a Free Consultation
              </div>

              {/* Project Scope / Need Selector */}
              <div style={{ marginBottom: '22px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--nf-ink-700)',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}
                >
                  I am looking for support with:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    'Quality Engineering & AI Assurance',
                    'Telecom OSS/BSS & SIT',
                    'AI & Agentic Systems',
                    'Product Demo (QForce / AIKTRA)',
                    'Cloud / DevOps Transformation',
                    'Dedicated Engineering Squad',
                  ].map((need) => {
                    const isSelected = selectedNeeds.includes(need);
                    return (
                      <button
                        type="button"
                        key={need}
                        onClick={() => toggleNeed(need)}
                        style={{
                          background: isSelected ? 'var(--nf-red)' : 'var(--nf-gray-100)',
                          color: isSelected ? '#ffffff' : 'var(--nf-ink-700)',
                          border: `1px solid ${isSelected ? 'var(--nf-red)' : 'var(--nf-gray-300)'}`,
                          borderRadius: 'var(--radius-pill)',
                          padding: '6px 13px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 160ms var(--ease-out)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                className="nf-form-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <input
                    placeholder="First name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="nf-form-input"
                    style={getInputStyle(errors.firstName)}
                  />
                  {errors.firstName && (
                    <div style={{ color: 'var(--nf-red-bright)', fontSize: '12px', marginTop: '4px' }}>
                      Required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Last name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="nf-form-input"
                    style={getInputStyle(errors.lastName)}
                  />
                  {errors.lastName && (
                    <div style={{ color: 'var(--nf-red-bright)', fontSize: '12px', marginTop: '4px' }}>
                      Required
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <input
                  placeholder="Company / Organization"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="nf-form-input"
                  style={getInputStyle(errors.company)}
                />
                {errors.company && (
                  <div style={{ color: 'var(--nf-red-bright)', fontSize: '12px', marginTop: '4px' }}>
                    Required
                  </div>
                )}
              </div>

              <div
                className="nf-form-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                  marginBottom: '14px',
                }}
              >
                <div>
                  <input
                    placeholder="Company email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="nf-form-input"
                    style={getInputStyle(errors.email)}
                  />
                  {errors.email && (
                    <div style={{ color: 'var(--nf-red-bright)', fontSize: '12px', marginTop: '4px' }}>
                      Enter a valid email
                    </div>
                  )}
                </div>
                <div>
                  <input
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="nf-form-input"
                    style={getInputStyle(false)}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="nf-form-input"
                  style={{
                    ...getInputStyle(false),
                    resize: 'vertical',
                  }}
                />
              </div>

              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '22px',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                  style={{ marginTop: '2px', accentColor: 'var(--nf-red)' }}
                />
                <span style={{ fontSize: '12px', color: 'var(--nf-gray-500)', lineHeight: 1.5 }}>
                  I agree to the Privacy Policy and consent to processing of my personal data.
                </span>
              </label>
              {errors.agree && (
                <div style={{ color: 'var(--nf-red-bright)', fontSize: '12px', margin: '-12px 0 16px' }}>
                  Please accept the Privacy Policy to continue
                </div>
              )}

              <CTA
                type="submit"
                size="lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Schedule a Capability Discussion
              </CTA>
            </form>
          )}
        </div>
      </div>

      {/* Physical Office Hubs & Global Contact Information */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '72px auto 0',
          paddingTop: '56px',
          borderTop: '1px solid var(--border-light)',
        }}
      >
        <div style={{ marginBottom: '28px' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '12px',
              letterSpacing: 'var(--ls-eyebrow)',
              color: 'var(--nf-gray-500)',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            Global Delivery Hubs
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.5vw, 28px)',
              fontWeight: 800,
              margin: 0,
            }}
          >
            Visit our offices or connect directly
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Dallas Office Card */}
          <div
            style={{
              background: 'var(--nf-gray-100)',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--nf-gray-200)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(224, 31, 38, 0.1)',
                    color: 'var(--nf-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', margin: 0 }}>
                    Dallas, USA
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)' }}>United States Headquarters</div>
                </div>
              </div>
              <p style={{ color: 'var(--nf-ink-700)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                5700 Tennyson Parkway, Suite 300<br />
                Plano, Texas, 75024
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <a
                  href="tel:+19724996667"
                  style={{
                    color: 'var(--nf-ink-950)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={14} color="var(--nf-red)" />
                  +1 (972) 499-6667
                </a>
                <a
                  href="tel:18003568933"
                  style={{
                    color: 'var(--nf-red)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={14} />
                  1-800-356-8933 (Toll-Free Support)
                </a>
                <a
                  href="mailto:contact@nforceone.com"
                  style={{
                    color: 'var(--nf-ink-700)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={14} color="var(--nf-gray-500)" />
                  contact@nforceone.com
                </a>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=5700+Tennyson+Parkway+Suite+300+Plano+Texas+75024"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                textDecoration: 'none',
              }}
            >
              Get Directions <ExternalLink size={14} />
            </a>
          </div>

          {/* Hyderabad Office Card */}
          <div
            style={{
              background: 'var(--nf-gray-100)',
              borderRadius: 'var(--radius-md)',
              padding: '28px',
              border: '1px solid var(--nf-gray-200)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(224, 31, 38, 0.1)',
                    color: 'var(--nf-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', margin: 0 }}>
                    Hyderabad, India
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)' }}>Engineering & Delivery Center</div>
                </div>
              </div>
              <p style={{ color: 'var(--nf-ink-700)', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px' }}>
                4th Floor, Sanali Spazio, Inorbit Mall Rd<br />
                Madhapur, Hyderabad, Telangana, 500081
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <a
                  href="tel:+919346934833"
                  style={{
                    color: 'var(--nf-ink-950)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Phone size={14} color="var(--nf-red)" />
                  +91 9346934833
                </a>
                <a
                  href="mailto:admin@nforceone.com"
                  style={{
                    color: 'var(--nf-ink-700)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={14} color="var(--nf-gray-500)" />
                  admin@nforceone.com
                </a>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Sanali+Spazio+Inorbit+Mall+Rd+Madhapur+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--nf-red)',
                textDecoration: 'none',
              }}
            >
              Get Directions <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

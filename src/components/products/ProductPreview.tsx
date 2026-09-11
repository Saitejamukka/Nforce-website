import React, { useEffect } from 'react';
import { ProductItem } from '../../types';
import { X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface Props {
  categoryName: string;
  categorySentence: string;
  products: ProductItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const ProductPreview: React.FC<Props> = ({
  categoryName,
  categorySentence,
  products,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-preview-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 10, 12, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      />

      {/* Modal Dialog Content */}
      <div
        style={{
          position: 'relative',
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #E5E5E5',
          padding: '40px 36px',
          zIndex: 1,
          animation: 'nfFadeUp 280ms cubic-bezier(0.16, 1, 0.3, 1) both',
        }}
      >
        {/* Header Row with Close Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '28px',
            paddingBottom: '20px',
            borderBottom: '1px solid #EDF0F3',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--nf-red)',
                marginBottom: '8px',
              }}
            >
              <Sparkles size={13} color="var(--nf-red)" />
              CATEGORY PRODUCT SUITE
            </div>
            <h2
              id="product-preview-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 2.5vw, 32px)',
                fontWeight: 800,
                color: 'var(--nf-ink-950)',
                margin: '0 0 6px',
                letterSpacing: '-0.02em',
              }}
            >
              {categoryName}
            </h2>
            <p style={{ fontSize: '15px', color: '#555d6e', margin: 0 }}>
              {categorySentence}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: '#F5F6F8',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#555d6e',
              transition: 'background 200ms ease, color 200ms ease',
              flexShrink: 0,
            }}
            aria-label="Close product preview"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#EAECEF';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F5F6F8';
              e.currentTarget.style.color = '#555d6e';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Product Cards Inside Category */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #E5E5E5',
                borderRadius: '16px',
                padding: '24px 26px',
                background: '#FAFAFC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 200ms ease',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 800,
                      color: 'var(--nf-ink-950)',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {product.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--nf-red)',
                      background: 'rgba(224, 31, 38, 0.08)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {product.badge}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.55,
                    color: '#414754',
                    margin: '0 0 16px',
                  }}
                >
                  {product.solution}
                </p>

                {/* Subtle Proof Point */}
                {product.businessValue && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#059669',
                      background: '#ECFDF5',
                      border: '1px solid #D1FAE5',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      marginBottom: '18px',
                    }}
                  >
                    <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0 }} />
                    <span>{product.businessValue}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="nf-btn-primary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '13.5px',
                  }}
                >
                  Request Platform Demo <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

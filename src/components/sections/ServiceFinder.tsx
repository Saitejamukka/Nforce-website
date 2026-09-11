import React, { useState } from 'react';
import { SERVICE_CATALOG } from '../../data/serviceCatalog';
import { Eyebrow } from '../ui/Eyebrow';
import { DynamicIcon } from '../ui/DynamicIcon';
import { Search } from 'lucide-react';

export const ServiceFinder: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'All' },
    ...SERVICE_CATALOG.map((g) => ({ key: g.group, label: g.group })),
  ];

  const q = query.trim().toLowerCase();

  const groupedCatalog = SERVICE_CATALOG.filter(
    (g) => activeFilter === 'all' || activeFilter === g.group
  )
    .map((g, cardIdx) => {
      const items = g.items
        .filter((name) => !q || name.toLowerCase().includes(q))
        .map((name, i) => ({ name, delay: Math.min(i, 10) * 35 }));
      return {
        group: g.group,
        icon: g.icon,
        total: g.items.length,
        items,
        delay: cardIdx * 90,
      };
    })
    .filter((g) => g.items.length > 0);

  const noResults = q !== '' && groupedCatalog.length === 0;

  return (
    <section
      style={{
        padding: '140px 32px',
        background: 'var(--nf-ink-950)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-6%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224,31,38,0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: '48px',
            opacity: 0,
            animation: 'nfFadeUp 600ms var(--ease-out) both',
          }}
        >
          <Eyebrow>Every Service, One Search</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              margin: '16px 0 0',
              color: 'var(--nf-white)',
            }}
          >
            Find Your Service
          </h2>
          <p
            style={{
              color: 'var(--nf-gray-400)',
              fontSize: '15px',
              maxWidth: '520px',
              margin: '16px auto 0',
              lineHeight: 1.6,
            }}
          >
            29 services across QA, platforms, and delivery — type to search or filter by category.
          </p>
        </div>

        {/* Search input */}
        <div
          style={{
            maxWidth: '520px',
            margin: '0 auto 24px',
            position: 'relative',
            opacity: 0,
            animation: 'nfFadeUp 600ms var(--ease-out) 100ms both',
          }}
        >
          <Search
            size={17}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--nf-gray-400)',
              pointerEvents: 'none',
            }}
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search e.g. 'mobile', 'RPA', 'regression'…"
            className="nf-search-input"
            style={{
              width: '100%',
              padding: '16px 22px 16px 48px',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--nf-ink-700)',
              background: 'var(--nf-ink-900)',
              color: 'var(--nf-white)',
              fontSize: '15px',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
          />
        </div>

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '56px',
            opacity: 0,
            animation: 'nfFadeUp 600ms var(--ease-out) 160ms both',
          }}
        >
          {filterOptions.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="nf-catalog-filter-btn"
                style={{
                  padding: '9px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: `1.5px solid ${isActive ? 'var(--nf-red)' : 'var(--nf-ink-700)'}`,
                  background: isActive ? 'var(--nf-red)' : 'transparent',
                  color: isActive ? 'var(--nf-white)' : 'var(--nf-gray-400)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 200ms var(--ease-out)',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Catalog Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '22px',
          }}
        >
          {groupedCatalog.map((grp) => (
            <div
              key={grp.group}
              className="nf-catalog-card"
              style={{
                opacity: 0,
                animation: `nfFadeUp 560ms var(--ease-out) ${grp.delay}ms both`,
                background: 'linear-gradient(165deg, var(--nf-ink-900), var(--nf-ink-950))',
                border: '1px solid var(--nf-ink-700)',
                borderRadius: '14px',
                padding: '28px 26px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 260ms, transform 260ms var(--ease-out), box-shadow 260ms',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--nf-red), transparent)',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '22px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(224,31,38,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '0 0 auto',
                    color: 'var(--nf-red)',
                  }}
                >
                  <DynamicIcon name={grp.icon} size={19} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '15px',
                      fontWeight: 800,
                      color: 'var(--nf-white)',
                    }}
                  >
                    {grp.group}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--nf-gray-500)', marginTop: '2px' }}>
                    {grp.total} services
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {grp.items.map((it) => (
                  <a
                    key={it.name}
                    href="#contact"
                    className="nf-catalog-item"
                    style={{
                      opacity: 0,
                      animation: `nfFadeUp 340ms var(--ease-out) ${it.delay}ms both`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '11px',
                      padding: '10px 8px',
                      margin: '0 -8px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: 'var(--nf-gray-300)',
                      fontSize: '14px',
                      fontFamily: 'var(--font-body)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      transition: 'background 200ms, color 200ms, padding-left 200ms',
                    }}
                  >
                    <span
                      className="nf-item-dot"
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--nf-gray-500)',
                        flex: '0 0 auto',
                        transition: 'background 200ms, box-shadow 200ms',
                      }}
                    />
                    {it.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {noResults && (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--nf-gray-500)',
              fontSize: '14px',
              padding: '24px 0 0',
            }}
          >
            No services match "{query}" —{' '}
            <a href="#contact" style={{ color: 'var(--nf-red)' }}>
              tell us what you need →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

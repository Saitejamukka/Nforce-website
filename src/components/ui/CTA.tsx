import React from 'react';

interface CTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'ghost' | 'url';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const CTA: React.FC<CTAProps> = ({
  children,
  variant = 'solid',
  size = 'md',
  href,
  style,
  className = '',
  type = 'button',
  ...rest
}) => {
  const pad = size === 'lg' ? '16px 30px' : size === 'sm' ? '8px 16px' : '12px 22px';
  const fs = size === 'lg' ? 20 : size === 'sm' ? 14 : 16;

  const variants = {
    solid: {
      background: 'var(--nf-red)',
      color: 'var(--nf-white)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-red)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--nf-white)',
      border: '1px solid var(--nf-white)',
      borderRadius: 'var(--radius-pill)',
    },
    url: {
      background: 'transparent',
      color: 'var(--nf-white)',
      border: '1px solid var(--nf-red)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
    },
  };

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: pad,
    fontSize: fs,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    ...variants[variant],
    ...style,
  };

  if (href) {
    return (
      <a href={href} style={base} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={base}
      className={className}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

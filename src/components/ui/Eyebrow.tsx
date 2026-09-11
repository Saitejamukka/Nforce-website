import React from 'react';

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  banner?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  color = 'var(--nf-red)',
  banner = false,
  style,
  ...rest
}) => {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--fs-eyebrow)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color,
    display: 'inline-block',
    lineHeight: 1.2,
  };

  const bannerStyle: React.CSSProperties = banner
    ? {
        color: 'var(--nf-white)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }
    : {};

  return (
    <span
      style={{
        ...base,
        ...bannerStyle,
        ...style,
      }}
      {...rest}
    >
      {banner && (
        <span
          style={{
            width: 3,
            height: 20,
            background: 'var(--nf-red)',
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </span>
  );
};

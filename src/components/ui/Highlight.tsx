import React from 'react';

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'red' | 'salmon' | 'yellow' | 'white';
  strike?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  tone = 'red',
  strike = false,
  style,
  ...rest
}) => {
  const colors: Record<string, string> = {
    red: 'var(--nf-red)',
    salmon: 'var(--nf-salmon)',
    yellow: 'var(--nf-meme-yellow)',
    white: 'var(--nf-white)',
  };

  const base: React.CSSProperties = {
    color: colors[tone] || colors.red,
    fontWeight: 'inherit',
  };

  if (strike) {
    return (
      <span
        style={{
          position: 'relative',
          color: 'var(--nf-gray-500)',
          ...style,
        }}
        {...rest}
      >
        <span
          style={{
            textDecoration: 'line-through',
            textDecorationColor: 'var(--nf-red)',
            textDecorationThickness: 3,
          }}
        >
          {children}
        </span>
      </span>
    );
  }

  return (
    <span
      style={{
        ...base,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
};

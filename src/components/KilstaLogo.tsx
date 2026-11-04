import React from 'react';

interface KilstaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showWhiteBackdrop?: boolean;
}

export const KilstaLogo: React.FC<KilstaLogoProps> = ({
  className = '',
  size = 'md',
  showWhiteBackdrop = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    hero: 'w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24',
  };

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 select-none ${sizeMap[size]} ${
        showWhiteBackdrop
          ? 'rounded-full bg-white p-2.5 shadow-lg shadow-blue-950/60 ring-2 ring-white/80'
          : ''
      } ${className}`}
    >
      <img
        src="/kilsta-logo.png"
        alt="KILSTA Business & ICT Consultants"
        className="w-full h-full object-contain drop-shadow-md"
        loading="eager"
        decoding="async"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/kilsta-original-logo.png';
        }}
      />
    </div>
  );
};

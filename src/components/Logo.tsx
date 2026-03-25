import React from 'react';
import logoUrl from '../assets/logo.svg';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="TeraSi Logo" 
        className="w-full h-auto"
        referrerPolicy="no-referrer"
      />
      <span className="mt-1 text-xl font-bold tracking-widest uppercase font-sans">
        TeraSi
      </span>
    </div>
  );
};

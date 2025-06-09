import React, { ReactNode } from 'react';

function ContainerLayout({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-screen-xl mx-auto px-3 lg:px-5 w-full ${className}`}>
      {children}
    </div>
  );
}

export default ContainerLayout;
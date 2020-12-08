import React from 'react';

import HTMLContainer from './layout-public.styles';

export interface ILayoutPublic {
  className?: string;
  children?: React.ReactNode;
}

export const LayoutPublic: React.FC<ILayoutPublic> = ({ className, children }) => {
  return <HTMLContainer className={className}>{children}</HTMLContainer>;
};

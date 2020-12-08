import React from 'react';

import { HTMLHeader, HTMLMenuButton, HTMLMenu } from './layout.header.styles';

export const LayoutHeader: React.FC<{}> = () => {
  return (
    <HTMLHeader>
      <HTMLMenuButton type="link" icon={<HTMLMenu />} />
    </HTMLHeader>
  );
};

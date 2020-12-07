import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

import { HTMLHeader } from './layout.header.styles';

export const LayoutHeader: React.FC<{}> = () => {
  return (
    <HTMLHeader>
      <MenuOutlined style={{ fontSize: '1.3rem' }} />
    </HTMLHeader>
  );
};

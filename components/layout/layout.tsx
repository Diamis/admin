import React from 'react';
import { Layout as BASELayout, Menu } from 'antd';

import { Logo } from 'components/logo';
import { LayoutHeader } from './layout.header';
import { LayoutSidebar } from './layout.sidebar';
import { HTMLLayout, HTMLSider, HTMLContent, HTMLFooter } from './layout.styles';

import 'styles/antd.less';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <HTMLLayout>
      <HTMLSider>
        <Logo />
        <LayoutSidebar />
      </HTMLSider>
      <BASELayout>
        <LayoutHeader />
        <HTMLContent>{children}</HTMLContent>
        <HTMLFooter>©2020 Created by Admin Panel</HTMLFooter>
      </BASELayout>
    </HTMLLayout>
  );
};

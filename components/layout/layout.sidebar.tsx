import React from 'react';

import { HTMLMenuTitle, HTMLMenu, HTMLMenuItem, HTMLSubMenu } from './layout.sidebar.styles';
import IconUser from './svg/user.svg';
import IconApp from './svg/app.svg';
import 'styles/antd.less';

export const LayoutSidebar: React.FC<{}> = ({ children }) => {
  return (
    <>
      <HTMLMenuTitle>APPLICATIONS</HTMLMenuTitle>
      <HTMLMenu mode="inline">
        <HTMLSubMenu icon={<IconApp />} title="Apps">
          <HTMLMenuItem>Attributes</HTMLMenuItem>
          <HTMLMenuItem>Tasks</HTMLMenuItem>
          <HTMLMenuItem>Inbox</HTMLMenuItem>
          <HTMLMenuItem>Kanban</HTMLMenuItem>
          <HTMLMenuItem>Todo</HTMLMenuItem>
        </HTMLSubMenu>
      </HTMLMenu>
      <HTMLMenu mode="inline">
        <HTMLSubMenu icon={<IconUser />} title="User">
          <HTMLMenuItem>User profile</HTMLMenuItem>
          <HTMLMenuItem>Roles</HTMLMenuItem>
          <HTMLMenuItem>Permission</HTMLMenuItem>
          <HTMLMenuItem>Users</HTMLMenuItem>
        </HTMLSubMenu>
      </HTMLMenu>
    </>
  );
};

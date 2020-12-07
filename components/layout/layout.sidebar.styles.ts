import styled from 'styled-components';
import { Menu } from 'antd';

export const HTMLMenuTitle = styled.div(() => {
  return {
    padding: '0 1rem',
  };
});

export const HTMLMenu = styled(Menu)(() => {
  return {
    padding: '0 1rem',
  };
});

export const HTMLMenuItem = styled(Menu.Item)(() => {
  return {
    paddingLeft: '30px !important',
  };
});

export const HTMLSubMenu = styled(Menu.SubMenu)<{}>(() => {
  return {
    '.ant-menu-submenu-title': {
      display: 'flex',
      padding: '0 0 0 30px !important',
      alignItems: 'center',
      position: 'relative',

      svg: {
        position: 'absolute',
        transform: 'translateY(-50%)',
        top: '50%',
        left: 0,
      },
    },
  };
});

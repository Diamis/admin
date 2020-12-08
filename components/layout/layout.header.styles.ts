import { Layout, Button } from 'antd';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

export const HTMLMenuButton = styled(Button)(() => {
  return {
    marginLeft: '1rem',
    marginRight: '1rem',
  };
});

export const HTMLMenu = styled(MenuOutlined)(() => {
  return {
    fontSize: '1.45rem',
  };
});

export const HTMLHeader = styled(Layout.Header)(() => {
  return {
    padding: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
  };
});

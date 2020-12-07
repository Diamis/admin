import styled from 'styled-components';
import { Layout } from 'antd';

export const HTMLLayout = styled(Layout)<{}>(() => {
  return {
    height: '100vh',
    overflowY: 'hidden',
  };
});

export const HTMLSider = styled(Layout.Sider)<{}>(() => {
  return {
    left: 0,
    height: '100vh',
    overflowY: 'auto',
    backgroundColor: 'white',
    borderRight: '1px solid #eee',
  };
});

export const HTMLContent = styled(Layout.Content)<{}>(() => {
  return {
    padding: '1rem',
  };
});

export const HTMLFooter = styled(Layout.Footer)<{}>(() => {
  return {
    textAlign: 'center',
  };
});

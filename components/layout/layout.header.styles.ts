import styled from 'styled-components';
import { Layout } from 'antd';

export const HTMLHeader = styled(Layout.Header)(() => {
  return {
    padding: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid #eee',
  };
});

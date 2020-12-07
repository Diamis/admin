import React from 'react';
import Head from 'next/head';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import HTMLMain from 'pages/dashboard.styles';

export const Dashboard = () => {
  return (
    <HTMLMain>
      <Head>
        <title>Create Next App</title>
      </Head>
      HTMLMain
    </HTMLMain>
  );
};

export default Dashboard;

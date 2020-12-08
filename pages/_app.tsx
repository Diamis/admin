import React from 'react';
import NextApp from 'next/app';

import { Layout as AdminLayout } from 'components/layout';

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    // @ts-ignore
    const Layout = Component.layout || AdminLayout;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default App;

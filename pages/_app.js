import '../lib/polyfill';
import React from 'react';
import App from 'next/app';
import url from 'url';

import { setToken, removeToken, getToken, getTokenPayload } from '../lib/learn/authenticate';
import { UserProvider } from '../lib/learn/user';
import NProgress from '../components/nprogress';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const isLearnPage = ctx.pathname.startsWith('/learn');

    if (isLearnPage && !Component.getInitialProps) {
      // Make sure that learn pages have getInitialProps set so they don't get catched
      Component.getInitialProps = () => ({});
    }

    if (!process.browser) {
      const {
        res,
        asPath,
        query: { loginToken }
      } = ctx;

      if (loginToken && getTokenPayload(loginToken)) {
        const parsedAsPath = url.parse(asPath);

        setToken(ctx, loginToken);
        res.writeHead(302, { Location: parsedAsPath.pathname });
        res.end();
        return {};
      }

      if (!isLearnPage) {
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
      }
    }

    const props = { pageProps: {} };

    const loginToken = getToken(ctx);

    if (isLearnPage) {
      if (loginToken) {
        const user = getTokenPayload(loginToken);

        // If the user is null then the loginToken is invalid
        if (user === null) removeToken(ctx);

        props.user = user || undefined;
      }
    }

    if (Component.getInitialProps) {
      props.pageProps = await Component.getInitialProps(ctx);
    }

    return props;
  }

  render() {
    const { Component, pageProps, user } = this.props;

    return (
      <>
        <UserProvider user={user}>
          <Component {...pageProps} />
        </UserProvider>
        <NProgress />
      </>
    );
  }
}

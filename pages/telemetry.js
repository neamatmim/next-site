import React from 'react';
import { SkipNavContent } from '@reach/skip-nav';
import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Markdown from '../telemetry/about.mdx';
import { components } from '../components/blog/post-components';

const Content = React.memo(() => <Markdown components={components} />);

export default () => (
  <>
    <Header height={64} shadow defaultActive>
      <Navbar />
    </Header>
    <Page title="Next.js - Telemetry">
      <SkipNavContent />
      <Container>
        <Content />
      </Container>
      <Footer />
    </Page>
  </>
);

export const config = {
  amp: true
};

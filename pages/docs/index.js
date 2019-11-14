import { SkipNavContent } from '@reach/skip-nav';

import Page from '../../components/page';
import withPure from '../../components/hoc/pure';
import Container from '../../components/container';

import Sidebar from '../../components/docs/sidebar';
import Markdown, { headings } from '../../components/docs/docs.mdx';
import Documentation, { components } from '../../components/docs/documentation';

const Content = withPure(() => <Markdown components={components} />);

export default () => (
  <>
    <Sidebar headings={headings} mobile />
    <Page>
      <Container>
        <Documentation headings={headings}>
          <SkipNavContent />
          <Content />
        </Documentation>
      </Container>
    </Page>
  </>
);

export const config = {
  amp: true
};

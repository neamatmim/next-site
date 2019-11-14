import { SkipNavContent } from '@reach/skip-nav';
import { RecordsProvider } from '../../lib/learn/records';
import { MediaQueryConsumer } from '../media-query';
import Page from '../page';
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../footer';
import Container from '../container';
import SocialMeta from '../social-meta';
import Navigation from './Navigation';
import Lesson from './Lesson';
import Markdown from './Markdown';

const Layout = ({ meta, children }) => (
  <Page title={`Learn - ${meta.title} | ${process.env.SITE_NAME}`}>
    <MediaQueryConsumer>
      {({ isMobile }) => {
        return (
          <>
            <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
              <Navbar />
            </Header>
            <Container wide={isMobile}>
              <div className="content">
                <RecordsProvider>
                  <div className="navigation">
                    <Navigation meta={meta} />
                  </div>
                  <div className="lesson">
                    <Lesson meta={meta}>
                      <Markdown>{children}</Markdown>
                    </Lesson>
                  </div>
                </RecordsProvider>
              </div>
              <style jsx>{`
                .content {
                  display: flex;
                  margin-top: 1rem;
                  margin-bottom: 5rem;
                }

                .navigation {
                  padding: 1rem ${isMobile ? '0' : '3rem'} 0 0;
                }

                .lesson {
                  flex: 1;
                  width: 100%;
                  min-width: 0;
                  max-width: 600px;
                }
                // CSS only media query for mobile + SSR
                @media screen and (max-width: 640px) {
                  .content {
                    display: flex;
                    flex-direction: column;
                    padding: 0 1rem;
                    margin-bottom: 5rem;
                  }
                  .navigation {
                    margin: 0 -1rem;
                  }
                }
              `}</style>
            </Container>
          </>
        );
      }}
    </MediaQueryConsumer>
    <SocialMeta
      image="/static/twitter-cards/learn.png"
      title="Learn | Next.js"
      url="https://nextjs.org/learn"
      description="Production grade React applications that scale. The world’s leading companies use Next.js to build server-rendered applications, static websites, and more."
    />
    <SkipNavContent />
    <Footer />
  </Page>
);

export default Layout;

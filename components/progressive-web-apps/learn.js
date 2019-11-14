import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';
import Icon from '../icon-circle';
import Lightning from '../icons/lightning';

export default () => (
  <Container wide padding center divider>
    <div className="col">
      <Icon large>
        <Lightning />
      </Icon>

      <SectionHeader margin="1.5rem 0 0 0" title="Lightning Fast Navigation" />

      <div className="content">
        <p>
          Let janky scrolling and routing delays become a thing of the past. By intelligently
          caching app content, PWA's create a smooth user experience, no matter how sophisticated
          your application is. Eliminating navigation issues ensures you maximize user retainment.
        </p>
      </div>

      <div>
        <Button invert href="/learn/basics/getting-started">
          Learn Next.js
        </Button>
      </div>
    </div>

    <style jsx>{`
      p {
        margin: 0;
        line-height: 2rem;
      }
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .content {
        margin: 0 auto 1.5rem auto;
        max-width: 46rem;
        padding: 0 2rem;
      }
    `}</style>
  </Container>
);

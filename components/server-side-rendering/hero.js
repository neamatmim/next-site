import Container from '../container';
import Button from '../button';

export default () => (
  <Container wide padding center dotBackground>
    <h1>Server-Side Rendering Done Right</h1>

    <div className="content">
      <p>
        Take the pain out of creating Universal <br /> React apps with{' '}
        <b>Next.js</b>
      </p>
    </div>

    <Button invert href="#benefits">
      Learn More
    </Button>

    <style jsx>
      {`
        h1 {
          font-size: 2.887rem;
          line-height: 1.3;
        }

        h1 br {
          display: none;
        }

        .content {
          margin: 3rem 1rem;
        }

        @media screen and (max-width: 640px) {
          h1 br {
            display: initial;
          }

          h1 {
            font-size: 1.802032470703125em;
          }

          .content {
            margin: 2.5rem 1rem;
          }
        }

        @media screen and (max-width: 360px) {
          h1 {
            font-size: 40px;
          }

          p br {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);

import Container from '../container';
import Button from '../button';

export default () => (
  <Container wide padding center dotBackground>
    <h1>Level up Your Styles with CSS-in-JS</h1>

    <div className="content">
      <p>
        <b>Next.js</b> lets you modularize your
        <br />
        styles without the hassle
      </p>
    </div>

    <Button invert href="#unlock">
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

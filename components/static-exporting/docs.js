import Container from '../container';
import Button from '../button';

import NoSwitching from './svg/NoSwitching';

export default () => (
  <Container padding wide gray>
    <div className="flex">
      <div className="no-switching-container">
        <NoSwitching />
      </div>

      <div className="col">
        <h2 className="f0 fw6">No More Switching Frameworks</h2>
        <div className="content">
          <p>
            With the flexibility to target any frontend environment, choosing Next.js means your
            team can handle static site generation without needing to learn a new framework. If your
            requirements change down the road, Next.js makes the transition to a dynamic application
            a breeze.
          </p>
        </div>
        <div>
          <Button invert href="/docs" amp>
            View Documentation
          </Button>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h2 {
          line-height: 1.3;
        }

        .content {
          margin: 1rem 0 1.5rem;
          max-width: 25rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            justify-content: center;
          }

          .no-switching-container {
            display: none;
          }

          .col {
            align-items: center;
            text-align: center;
          }
        }
      `}
    </style>
  </Container>
);

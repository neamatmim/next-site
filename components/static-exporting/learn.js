import React from 'react';
import Container from '../container';
import Button from '../button';
import BoxOfFeatures from './svg/BoxOfFeatures';

export default () => (
  <Container padding wide gray>
    <div className="flex">
      <div className="col">
        <h2 className="f0 fw6">
          Powerful Features,
          <br /> Out of the Box
        </h2>

        <div className="content">
          <p>
            Just because it’s a static site, doesn’t mean it should act like it.
            With automatic code-splitting, dynamic imports, and page
            prefetching, Next.js creates static sites that load fast and feel
            fluid.
          </p>
        </div>

        <div>
          <Button invert href="/learn/excel/static-html-export">
            Learn Next.js
          </Button>
        </div>
      </div>

      <div>
        <div className="box-of-features-container">
          <BoxOfFeatures />
        </div>
      </div>
    </div>
    <style jsx>{`
      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 0 1rem;
        max-width: 1024px;
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

      .box-of-features-container {
        position: relative;
        width: 400px;
        height: 240px;
      }
      .box-of-features {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }

      @media screen and (max-width: 960px) {
        .flex {
          justify-content: center;
        }

        .box-of-features-container {
          display: none;
        }

        .col {
          align-items: center;
          text-align: center;
        }
      }
    `}</style>
  </Container>
);

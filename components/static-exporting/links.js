import React from 'react';

import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';

const Links = () => (
  <div>
    <Container padding>
      <SectionHeader
        anchor="links"
        title="Push Your Site to the Edge"
        description="Get your site to users faster, all while saving money, time, and headaches"
      />

      <div className="flex">
        <div className="column">
          <h3 className="f3 fw6">Unrivaled Performance</h3>
          <p>
            Static sites can be deployed to CDNs for minimal latency, zero server load, and faster
            global delivery.
          </p>
          <Button href="/showcase">View Showcase</Button>
        </div>

        <div className="column">
          <h3 className="f3 fw6">Deploy Anywhere</h3>
          <p>
            Host your static site cheaply and easily with any provider such as Now, Github Pages, or
            Amazon S3.
          </p>
          <Button href="/docs" amp>
            View Full Documentation
          </Button>
        </div>

        <div className="column">
          <h3 className="f3 fw6">Exceptionally Simple</h3>
          <p>
            With no moving parts, static sites are secure, effortless to maintain, and easy to
            reason about.
          </p>
          <Button href="/learn/excel/static-html-export">Learn Next.js</Button>
        </div>
      </div>
    </Container>
    <style jsx>
      {`
        .flex {
          display: flex;
          margin: 0 -1.5rem 1rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            flex-direction: column;
            align-items: center;
          }

          .column {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 20rem;
          }

          .column:last-child {
            margin-bottom: 0;
          }
        }

        @media screen and (max-width: 640px) {
          .earth-img {
            height: 180px;
          }
        }
      `}
    </style>
  </div>
);

export default Links;

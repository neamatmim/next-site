import React from 'react';

import Container from '../container';
import Checkmark from '../icons/checkmark';

import Animation from './terminal/animation';
import Result from './svg/Result';

export default function Build() {
  return (
    <Container wide dark center>
      <div className="col">
        <div className="content">
          <ul>
            <li>
              <Checkmark inverse />
              <h4>Faster Delivery</h4>
            </li>
            <li>
              <Checkmark inverse />
              <h4>Modern Frontend Features</h4>
            </li>
            <li>
              <Checkmark inverse />
              <h4>No Lock-In</h4>
            </li>
            <li>
              <Checkmark inverse />
              <h4>Painless Developer Workflow</h4>
            </li>
          </ul>
        </div>
        <Animation inView showResult>
          <Result />
        </Animation>
      </div>
      <style jsx>
        {`
          .content {
            display: flex;
            justify-content: center;
            max-width: 1024px;
            margin: 2.5rem auto;
          }

          .col {
            display: flex;
            flex-direction: column;
          }

          ul {
            padding: 0;
            margin: 0 1rem;
            display: flex;
            list-style-type: none;
            align-items: center;
            justify-content: space-between;
            width: 64rem;
          }

          li {
            display: flex;
            align-items: center;
          }

          h4 {
            margin: 0 0 0 0.5rem;
          }

          @media screen and (max-width: 1024px) {
            .content {
              margin: 1rem 0 2rem 0;
            }
            .col {
              flex-direction: column-reverse;
            }
            ul {
              width: auto;
              flex-direction: column;
              align-items: flex-start;
            }
            li {
              margin: 1rem 0;
            }
          }
        `}
      </style>
    </Container>
  );
}

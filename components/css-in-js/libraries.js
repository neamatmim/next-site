import React from 'react';
import { useAmp } from 'next/amp';
import Container from '../container';
import StyledComponents from './svg/styled-components';
import Emotion from './svg/emotion';
import JSS from './svg/jss';

export default () => {
  const isAmp = useAmp();
  const Img = props =>
    React.createElement(isAmp ? 'amp-img' : 'img', {
      ...props,
      ...(isAmp
        ? {
            className: undefined
          }
        : {
            width: undefined
          })
    });

  return (
    <Container wide center>
      <div className="col">
        <h2 className="f0 fw6">CSS for React that Just Works</h2>

        <div className="content">
          <p>
            Next.js provides <code>styled-jsx</code> out-of-the-box, with zero
            setup required, so you can stop endlessly configuring your tools and
            get back to building beautiful pages. Have another library of
            choice? Next.js also works great with every popular CSS-in-JS
            solution, like <em>Styled Components</em> and <em>Emotion</em>.
          </p>
        </div>

        <div className="icons">
          <div className="flex">
            <a href="https://github.com/zeit/next.js/tree/canary/examples/with-styled-components/">
              <StyledComponents />
            </a>
            <a href="https://github.com/zeit/next.js/tree/canary/examples/with-fela/">
              <Img
                src="/static/images/icons/fela.jpg"
                alt="fela"
                height={57.6}
                width={112}
              />
            </a>
          </div>
          <div className="flex">
            <a href="https://github.com/zeit/next.js/tree/canary/examples/with-react-jss/">
              <JSS />
            </a>
            <a href="https://github.com/zeit/next.js/tree/canary/examples/with-emotion/">
              <Emotion />
            </a>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          code {
            color: rgb(212, 0, 255);
          }

          .col {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding: 4rem 0;
          }

          .icons {
            display: flex;
          }

          .icons a {
            cursor: pointer;
            margin: 0 2.25rem;
          }

          .flex {
            display: flex;
            align-items: center;
          }

          .content {
            margin: 0 0 2.5rem 0;
            max-width: 40rem;
          }

          @media screen and (max-width: 960px) {
            .content {
              max-width: 27rem;
            }
          }

          @media screen and (max-width: 640px) {
            .icons {
              flex-direction: column;
              align-items: center;
            }
            .flex {
              justify-content: space-between;
            }
            .flex:last-child {
              margin: 2.5rem 0;
              flex-direction: row-reverse;
            }
            .content {
              margin: 0 1rem 2.5rem 1rem;
            }
          }
        `}
      </style>
    </Container>
  );
};

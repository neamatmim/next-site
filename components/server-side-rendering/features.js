import React from 'react';

import Container from '../container';
import Browser from '../browser';
import Terminal from '../static-exporting/terminal/terminal';
import Code from '../home/demos/code';
import Checkmark from '../icons/checkmark';
import Servers from './svg/servers';

const BrowserContent = () => (
  <div className="browser-content">
    <div className="toast">
      <p>
        This site is <b>Server Side Rendered</b>
      </p>
    </div>

    <style jsx>{`
      .browser-content {
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        background-image: radial-gradient(
          circle,
          #d7d7d7,
          #d7d7d7 1px,
          #fff 1px,
          #fff
        );
        background-size: 28px 28px;
      }

      .toast {
        background: white;
        margin-top: 1rem;
        position: absolute;
        border-radius: 0.5rem;
        width: 80%;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
      }
    `}</style>
  </div>
);

const browserData = {
  browserTabs: ['http://nextjs-site.now.sh'],
  browserMapping: {
    'http://nextjs-site.now.sh': BrowserContent
  }
};

const TERMINAL_CODE = `import Toast from './react-components/toast'

export default function HomePage() {
  return (
    <Toast>
      This site is
      <strong>Server Side Rendered</strong>
    </Toast>
  )
}`;

export default () => (
  <Container wide dark center>
    <div className="col">
      <ul>
        <li>
          <Checkmark inverse />
          <h4>Exceptional Performance</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>SEO Ready</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Deploy Anywhere</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Zero Configuration</h4>
        </li>
      </ul>

      <div className="animation-row">
        <div className="terminal-container">
          <svg className="line">
            <line
              x1="0"
              y1="127"
              x2="82"
              y2="127"
              stroke="#C7C7C7"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
          <Terminal height={256}>
            <Code style={{ padding: 0 }}>{TERMINAL_CODE}</Code>
          </Terminal>
        </div>
        <div className="servers-container">
          <Servers />
        </div>
        <div className="browser-container">
          <svg className="line">
            <line
              x1="-2"
              y1="127"
              x2="80"
              y2="127"
              stroke="#C7C7C7"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
          <Browser data={browserData} height="16rem" />
        </div>
      </div>
    </div>

    <style jsx>{`
      ul {
        padding: 0 1rem;
        margin: 2.5rem 0 0 0;
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 64rem;
      }

      li {
        display: flex;
        align-items: center;
      }

      h4 {
        margin: 0 0 0 0.5rem;
      }

      .col {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .animation-row {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 2.25em 0 3rem;
      }

      .browser-container {
        position: relative;
        width: 22rem;
      }

      .line {
        position: absolute;
        left: -5rem;
        animation: 7.5s shift linear forwards infinite;
      }

      .servers-container {
        margin: 0 0.5rem;
        z-index: 1;
      }

      .terminal-container {
        position: relative;
        border-radius: 5px;
        width: 352px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.48),
          0px 14px 50px rgba(0, 0, 0, 0.38);
      }

      .terminal-container .line {
        left: unset;
        right: -18.7rem;
      }

      @keyframes shift {
        from {
          stroke-dashoffset: 0%;
        }
        to {
          stroke-dashoffset: -100%;
        }
      }

      @media screen and (max-width: 1024px) {
        .animation-row {
          margin: 4.5rem 0 3rem;
        }
        .terminal-container {
          display: none;
        }
        .servers-container {
          margin-left: -3rem;
        }
        ul {
          width: auto;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 1rem 2.5rem 1rem;
        }
        li {
          margin: 1rem 0;
        }
        .col {
          flex-direction: column-reverse;
        }
      }

      @media screen and (max-width: 700px) {
        ul {
          margin: -1rem 1rem 2.5rem 1rem;
        }
        .animation-row {
          margin: 0;
        }
        .browser-container,
        .terminal-container {
          display: none;
        }
        .servers-container {
          margin: 0.8rem 0 0 0;
        }
      }
    `}</style>
  </Container>
);

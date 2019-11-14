import IObserver from '../intersection-observer';

import Icon from '../icon-circle'
import Discovery from './svg/discovery'
import Performance from './svg/performance'
import Lightning from '../icons/lightning'

const barStyle = {
  width: '6rem',
  borderRadius: '6px',
  height: '3.5rem'
};
const ssrStyle = {
  ...barStyle,
  background: '#007aff'
};
const nonSsrStyle = {
  ...barStyle,
  border: '1px solid #ccc'
};

const Graph = ({ viewable, innerRef }) => (
  <div className="container">
    <div className="bar-container ssr">
      <div className={viewable && 'ssrBar'} style={ssrStyle} />
      <span>SSR</span>
    </div>
    <div className="bar-container non-ssr">
      <div className={viewable && 'nonSsrBar'} style={nonSsrStyle} />
      <span>Non-SSR</span>
    </div>
    <svg
      width="431"
      height="6"
      viewBox="0 0 431 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M431 3L426 0.113249V5.88675L431 3ZM0 3.5L426.5 3.5V2.5L0 2.5V3.5Z"
        fill="black"
      />
    </svg>
    <div className="title subtitle" ref={innerRef}>
      Time to First Meaningful Paint
    </div>
    <style jsx>{`
      .title {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.875rem;
      }

      .container {
        padding-top: 1rem;
        margin-bottom: -1rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      .bar-container {
        display: flex;
        position: relative;
      }

      .bar-container > span {
        position: absolute;
        top: 1rem;
        left: 1rem;
      }

      .ssr {
        color: #fff;
      }

      .non-ssr {
        margin: 1.5rem 0 2rem 0;
        color: #999;
      }

      .ssrBar {
        animation: growSSR 500ms linear forwards;
      }
      .nonSsrBar {
        animation: growNonSSR 2500ms linear forwards;
      }
      @keyframes growSSR {
        to {
          width: 14.5rem;
        }
      }

      @keyframes growNonSSR {
        to {
          width: 24rem;
        }
      }

      @media screen and (max-width: 960px) {
        .container {
          margin: 3rem 0;
        }
      }

      @media screen and (max-width: 640px) {
        .container {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default class Benefits extends React.PureComponent {
  state = {
    viewable: false
  };

  setViewable = ({ isIntersecting: viewable }) => this.setState({ viewable });

  render() {
    const { isAmp } = this.props;
    const { viewable } = this.state;

    return (
      <div className="container" id="benefits">
        <div className="first">
          <div className="flex">
            <div className="col">
              <Icon><Performance /></Icon>
              <h3 className="f3 fw6">Superior Performance</h3>
              <p>
                On slower devices, rendering an initial page can take a long
                time and lead to a degraded experience. By offloading the
                computation to a more powerful server, you minimize the time
                users spend waiting and ensure your conversion rate does not
                suffer.
              </p>
            </div>
            {!isAmp ? (
              <IObserver
                onIntersect={this.setViewable}
                render={({ innerRef }) => (
                  <Graph viewable={viewable} innerRef={innerRef} />
                )}
              />
            ) : (
              <Graph viewable />
            )}
          </div>
        </div>

        <hr />

        <div className="flex">
          <div className="col">
            <Icon><Discovery /></Icon>
            <h3 className="f3 fw6">Optimized for Discovery</h3>
            <p>
              SSR guarantees your pages are easily indexable by search engines
              and previewable on social media platforms. Client-side routing
              solutions can delay web crawling and in turn, tarnish
              discoverability. Take your SEO to the next level and sidestep the
              issue entirely with Next.js.
            </p>
          </div>

          <hr />

          <div className="col">
            <Icon><Lightning /></Icon>
            <h3 className="f3 fw6">Lightning Fast Delivery</h3>
            <p>
              Prefetching initial data and building pages on the server
              drastically reduces the number of round trips required to view
              your site. This translates to lower latency and reduced bandwidth
              consumption. Both of which are essential for strong mobile
              experiences.
            </p>
          </div>
        </div>

        <style jsx>
          {`
            hr {
              border-top: 0;
              border-right: 0;
              border-style: solid;
              opacity: 0.1;
              margin: 0;
              align-self: stretch;
            }

            p {
              margin: 1rem 0 0 0;
            }

            h3 {
              margin: 1rem 0 0 0;
            }

            .container {
              width: 100%;
              margin: 0 auto;
              padding: 4rem 1rem 0;
              max-width: 64rem;
            }

            .flex {
              display: flex;
              justify-content: space-between;
            }

            .flex > hr {
              min-height: 100%;
            }

            .first {
              display: flex;
            }

            .first > .flex {
              flex: 1;
              justify-content: space-between;
              margin: 0 0 4rem;
            }

            .first > .flex > .col {
              margin: 0;
            }

            .col {
              display: flex;
              flex-direction: column;
              max-width: 27rem;
              margin: 4rem 0;
            }

            @media screen and (max-width: 960px) {
              .flex {
                flex-direction: column;
                align-items: center;
              }

              .flex > hr {
                display: block;
              }

              .flex > .col {
                margin: 3rem 0;
              }

              .first {
                justify-content: center;
              }

              .first > .flex {
                flex: 0;
                margin: 0;
                align-items: flex-start;
              }

              .first > .flex > .col {
                margin: 0;
              }

              .container {
                padding: 3rem 0 0;
              }
            }

            @media screen and (max-width: 640px) {
              .first > .flex {
                flex: 1;
                align-items: center;
                margin: 0 0 3rem 0;
              }
              .col {
                padding: 0 1rem;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

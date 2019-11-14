import React from 'react';
import Terminal from './terminal';
import Input from '../svg/Input';

function ResultRow({ children, showResult }) {
  return (
    <React.Fragment>
      <div className="result">{children}</div>
      <style jsx>
        {`
          @keyframes fade-in-right {
            from {
              transform: translate3d(-100%, 0, 0);
              opacity: 0;
            }
            to {
              transform: translate3d(0, 0, 0);
              opacity: 1;
            }
          }

          .result {
            visibility: ${showResult ? 'visible' : 'hidden'};
            z-index: 0;
            opacity: 0;
            animation: 1s fade-in-right ease forwards 50ms;
            transform: translateZ(0);
            backface-visibility: hidden;
            shape-rendering: auto;
          }

          .result .line-dash {
            z-index: 3;
          }

          @media screen and (max-width: 840px) {
            .result {
              display: none;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default class Animation extends React.Component {
  static defaultProps = {
    inView: true
  };

  state = {
    showResult: this.props.showResult
  };

  render() {
    const { inView } = this.props;

    return (
      <div ref={this.props.innerRef} className="animation-row">
        <div className="input">
          <Input />
        </div>
        <div className="terminal-wrapper">
          <Terminal showResult={() => this.setState({ showResult: true })} />
        </div>
        <ResultRow showResult={this.state.showResult}>
          {this.props.children}
        </ResultRow>
        <style jsx>
          {`
            @keyframes shift {
              from {
                stroke-dashoffset: 0%;
              }
              to {
                stroke-dashoffset: -100%;
              }
            }

            :global(.line-dash) {
              animation: 20s shift linear forwards infinite;
              transform: translateZ(0);
              backface-visibility: hidden;
            }

            .animation-row {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 0 0 1rem;
              max-width: 100%;
              height: 300px;
            }

            .terminal-wrapper {
              width: 480px;
              z-index: 1;
              /* tune position of terminal with respect to input and output */
              margin-top: -36px;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.48),
                0px 14px 50px rgba(0, 0, 0, 0.38);
            }

            .input {
              visibility: ${inView ? 'visible' : 'hidden'};
            }

            @media screen and (max-width: 1024px) {
              .animation-row {
                margin: 3rem 0 1rem 0;
              }
            }

            @media screen and (max-width: 840px) {
              .terminal-wrapper {
                margin: 0 2rem;
              }

              .input {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

import { PureComponent } from 'react';
import { categories, categoriesShort } from '../../showcase-manifest';
import Popover from '../popover';
import Container from '../container';
import HeartIcon from '../icons/heart';

const SUBMIT_URL = `https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541`;

export default class extends PureComponent {
  render() {
    const { onSelect, selectedId } = this.props;

    return (
      <Container center>
        <div className="indicator">
          {categoriesShort.map((_, index) => {
            const id = categories[index];
            return (
              <span className={`tab${selectedId === id ? ' selected' : ''} short f6`} key={id}>
                {_}
              </span>
            );
          })}
          {categories.map((_, index) => {
            const id = categories[index];
            return (
              <span className={`tab${selectedId === id ? ' selected' : ''} not-short f6`} key={id}>
                {_}
              </span>
            );
          })}
          <span className="tab f5 icon not-mobile">
            <HeartIcon />
          </span>
        </div>
        <div className="categories">
          {categoriesShort.map((_, index) => {
            const id = categories[index];
            return (
              <button
                type="button"
                className={`no-tap-highlight short tab${selectedId === id ? ' selected' : ''} f6`}
                onClick={() => onSelect(id)}
                key={id}
              >
                {_}
              </button>
            );
          })}
          {categories.map((_, index) => {
            const id = categories[index];
            return (
              <button
                type="button"
                className={`no-tap-highlight not-short tab${
                  selectedId === id ? ' selected' : ''
                } f6`}
                onClick={() => onSelect(id)}
                key={id}
              >
                {_}
              </button>
            );
          })}
          <span className="not-mobile">
            <Popover content={<div style={{ whiteSpace: 'nowrap' }}>Share your website!</div>}>
              <a
                href={SUBMIT_URL}
                aria-label="Submit Your Website"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="tab f5" style={{ verticalAlign: 'top' }}>
                  <HeartIcon />
                </span>
              </a>
            </Popover>
          </span>
        </div>
        <style jsx>{`
          .categories {
            display: flex;
            height: 32px;
            padding: 0 1rem;
            align-items: baseline;
            justify-content: center;
            font-weight: 500;
          }
          .categories {
            border-top: 1px solid transparent;
          }
          :global(.fixed) .categories {
            border-top: 1px solid transparent;
          }
          .categories *::selection {
            background-color: inherit;
            color: inherit;
          }
          .tab {
            background-color: transparent;
            border: none;
            font-weight: inherit;
            display: inline-block;
            height: 100%;
            line-height: 2rem;
            position: relative;
            text-align: center;
            padding: 0 1.25rem;
            cursor: pointer;
            transition: color 0.5s ease;
            white-space: nowrap;
            text-transform: uppercase;
          }
          .tab.selected {
            // font-weight: 900;
            color: #0070f3;
          }
          .indicator {
            position: absolute;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            top: 100%;
            left: 0;
            right: 0;
            height: 32px;
            padding: 0 1rem;
            font-weight: 500;
            z-index: 0;
            overflow: hidden;
            pointer-events: none;
          }
          .indicator .tab {
            color: transparent;
          }
          .indicator .tab.icon {
            opacity: 0;
            visibility: hidden;
          }
          .indicator .tab:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 100%;
            display: inline-block;
            width: 80%;
            height: 32px;
            border-radius: 20px;
            transition: all 0.5s ease;
            transform: translateX(-50%);
            z-index: 0;
          }
          .indicator .tab.selected:after {
            box-shadow: 0 4px 24px 0 rgba(0, 118, 255, 0.23);
          }
          .indicator *::selection {
            background: transparent;
            color: transparent;
          }
          .short {
            display: none;
          }

          @media screen and (max-width: 640px) {
            .categories {
              align-items: center;
              justify-content: space-around;
            }
            :global(.fixed) .categories {
              border-top: 1px solid #f5f5f5;
            }
            .tab {
              padding: 0 3px;
              text-transform: unset;
            }
            .indicator {
              justify-content: space-around;
            }
            .not-mobile,
            .not-short {
              display: none;
            }
            .short {
              display: unset;
            }
          }
        `}</style>
      </Container>
    );
  }
}

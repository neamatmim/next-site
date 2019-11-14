import Container from '../container';
import Button from '../button';

const Bullets = () => (
  <>
    <ul>
      <li>
        <amp-img
          src="/static/svg/checkmark-blue.svg"
          alt="checkmark"
          width={28}
          height={28}
        />
        <h4>Offline Support</h4>
      </li>
      <li>
        <amp-img
          src="/static/svg/checkmark-blue.svg"
          alt="checkmark"
          width={28}
          height={28}
        />
        <h4>Instantaneous Page Loads</h4>
      </li>
      <li>
        <amp-img
          src="/static/svg/checkmark-blue.svg"
          alt="checkmark"
          width={28}
          height={28}
        />
        <h4>Automatic Caching</h4>
      </li>
      <li>
        <amp-img
          src="/static/svg/checkmark-blue.svg"
          alt="checkmark"
          width={28}
          height={28}
        />
        <h4>Superior Engagement</h4>
      </li>
    </ul>

    <style jsx>
      {`
        ul {
          padding: 0 1rem;
          margin: 0;
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

        @media screen and (max-width: 1024px) {
          ul {
            width: auto;
            flex-direction: column;
            align-items: flex-start;
            margin: 2.5rem 1rem 2.5rem 1rem;
          }
          li {
            margin: 1rem 0;
          }
        }

        @media screen and (max-width: 760px) {
          ul {
            margin: -1rem 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </>
);

export default () => (
  <>
    <Container wide padding center dotBackground>
      <h1>Progressive Web Apps Made Easy</h1>

      <div className="content">
        <p>
          With <b>Next.js</b>, fully featured PWA's <br /> are only a few clicks
          away.
        </p>
      </div>

      <Button invert href="#offline-support">
        Learn More
      </Button>
    </Container>
    <Container wide dark center>
      <div className="col">
        <Bullets />

        <div className="devices">
          <amp-img
            src="/static/svg/tablet.svg"
            alt="Tablet"
            width={160}
            height={220}
          />
          <amp-img
            src="/static/svg/desktop.svg"
            alt="Desktop"
            width={526.6}
            height={270}
          />
          <amp-img
            src="/static/svg/mobile.svg"
            alt="Mobile"
            width={84}
            height={170}
          />
        </div>
      </div>
    </Container>

    <style jsx>
      {`
        h1 {
          font-size: 2.887rem;
          line-height: 1.3;
        }
        h1 br {
          display: none;
        }
        .col {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 0;
        }
        .content {
          margin: 3rem 1rem;
        }
        .devices {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 64rem;
          margin: 2rem 0 0 0;
        }
        @media screen and (max-width: 1024px) {
          .col {
            justify-content: unset;
            flex-direction: column-reverse;
          }
          .devices {
            margin: 0;
            transform: scale(0.8);
          }
        }
        @media screen and (max-width: 760px) {
          .devices {
            transform: scale(0.65);
          }
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
          .devices {
            margin: -2rem 0 0 0;
            transform: scale(0.5);
          }
        }
        @media screen and (max-width: 480px) {
          .devices {
            transform: scale(0.4);
          }
        }
        @media screen and (max-width: 380px) {
          h1 {
            font-size: 40px;
          }
          p br {
            display: none;
          }
          .devices {
            transform: scale(0.35);
          }
        }
      `}
    </style>
  </>
);

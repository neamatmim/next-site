import Container from '../container';
import SectionHeader from '../section-header';

const Bullets = () => (
  <>
    <ul>
      <div>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Full Screen Support</h4>
        </li>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Rich Offline Experiences</h4>
        </li>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Periodic Background Sync</h4>
        </li>
      </div>
      <div>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Push Notifications</h4>
        </li>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Install to Home Screen</h4>
        </li>
        <li>
          <amp-img
            src="/static/svg/checkmark-blue.svg"
            alt="checkmark"
            width={28}
            height={28}
          />
          <h4>Progressive Enhancement</h4>
        </li>
      </div>
    </ul>

    <style jsx>
      {`
        ul {
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          list-style-type: none;
          max-width: 52rem;
          width: 100%;
          margin: 0 auto;
        }
        li {
          display: flex;
          align-items: center;
          width: 18rem;
        }
        h4 {
          font-size: 0.8888875rem;
          font-weight: 600;
          margin: 0 0 0 0.4rem;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        div:last-child {
          margin-top: 1.5rem;
        }
        @media screen and (max-width: 840px) {
          li {
            width: unset;
            margin: 1rem 0;
          }
          div {
            width: unset;
            flex-direction: column;
            justify-content: unset;
            align-items: flex-start;
          }
          div:last-child {
            margin: 0;
          }
          ul {
            flex-direction: row;
            justify-content: space-between;
            max-width: 36rem;
          }
        }
        @media screen and (max-width: 640px) {
          ul {
            flex-direction: column;
            align-items: center;
          }
          li {
            margin: 1rem 0;
          }
          div {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}
    </style>
  </>
);

export default () => (
  <Container wide padding center divider>
    <SectionHeader title="Native Features" margin="0" />

    <div className="content">
      <p>
        On supported platforms, progressive web apps can live natively on a
        user's home screen. Coupled with full screen interactivity and push
        notifications, PWA's take web application experiences to the next level.
      </p>
    </div>

    <h4>Includes Support For</h4>

    <Bullets />

    <style jsx>{`
      h4 {
        text-transform: uppercase;
        font-size: 0.790125rem;
        font-weight: 600;
        letter-spacing: .1rem;
        line-height: 1.5625rem;
        margin: 0 0 2rem 0;
        color: #999999;
      }
      p {
        margin: 0;
        line-height: 2rem;
      }
      .content {
        margin: 0 auto 3rem auto;
        max-width: 38rem;
        padding 0 2rem;
      }
    `}</style>
  </Container>
);

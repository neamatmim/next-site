import Container from '../container';
import SectionHeader from '../section-header';
import Checkmark from '../icons/checkmark';

export default () => (
  <Container padding>
    <div className="center">
      <div className="max-width">
        <SectionHeader
          title="Best in Class Developer Experience"
          description={`
          Next.js puts development ergonomics front and center. Static exporting is as easy
          as running a single command — no configuration necessary.`}
        />
      </div>
    </div>

    <div className="list-container">
      <ul>
        <li>
          <Checkmark inverse />
          <h4>File system-based routing</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Hot-code reloading</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Zero-config production builds</h4>
        </li>
      </ul>
    </div>

    <style jsx>
      {`
        h2 {
          line-height: 1.3;
        }

        h4 {
          margin: 0 0 0 0.5rem;
          font-size: 1rem;
        }

        ul {
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: space-around;
          list-style-type: none;
        }

        li {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .max-width {
          max-width: 34rem;
        }

        .center {
          display: flex;
          justify-content: center;
        }

        .list-container {
          max-width: 900px;
          margin: 0 auto;
        }

        @media screen and (max-width: 960px) {
          ul {
            flex-direction: column;
            justify-content: flex-start;
          }

          li {
            flex: 1 0;
            margin: 1rem 0;
            justify-content: flex-start;
          }

          .list-container {
            display: flex;
            justify-content: center;
          }
        }
      `}
    </style>
  </Container>
);

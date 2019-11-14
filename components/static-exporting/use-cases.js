import Container from '../container';
import Checkmark from '../icons/checkmark';

export default () => (
  <Container gray wide>
    <div className="perfect-for">
      <h4>Perfect For:</h4>
      <ul>
        <li>
          <Checkmark />
          <span>Landing pages</span>
        </li>
        <li>
          <Checkmark />
          <span>Blogs</span>
        </li>
        <li>
          <Checkmark />
          <span>
            Documentation
            <span className="hidden-tablet"> and tutorials</span>
          </span>
        </li>
        <li>
          <Checkmark />
          <span>Style guides</span>
        </li>
      </ul>
    </div>
    <style jsx>
      {`
        .perfect-for {
          display: flex;
          width: 100%;
          align-items: center;
          margin: 0 auto;
          padding: 2rem 1rem;
          max-width: 64rem;
          flex-direction: row;
        }
        @media screen and (max-width: 640px) {
          .perfect-for {
            padding: 2rem 0.5rem;
            flex-direction: column;
          }
        }

        h4 {
          font-size: 1rem;
          margin: 0;
          margin-bottom: 0;
        }
        @media screen and (max-width: 640px) {
          h4 {
            margin-bottom: 1.5rem;
          }
        }

        ul {
          padding: 0 0 0 0;
          margin: 0 0 0 3.5em;
          display: flex;
          flex: 1;
          flex-wrap: wrap;
          justify-content: space-between;
          list-style-type: none;
        }
        @media screen and (max-width: 960px) {
          ul {
            margin: 0 0 0 0.5rem;
          }
        }
        @media screen and (max-width: 640px) {
          ul {
            padding: 0 0 0 0.5rem;
            justify-content: flex-start;
          }
        }

        li {
          display: flex;
          align-items: center;
          width: auto;
          padding-right: 0;
          margin-bottom: 0;
        }
        @media screen and (max-width: 640px) {
          li {
            width: 50%;
            padding-right: 1rem;
            margin-bottom: 1rem;
          }
        }

        li span {
          margin-left: 0.5rem;
        }

        ul > div {
          display: flex;
        }

        span .hidden-tablet {
          margin: 0;
        }
        @media screen and (max-width: 960px) {
          .hidden-tablet {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);

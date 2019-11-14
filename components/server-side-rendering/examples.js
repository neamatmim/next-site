import Container from '../container';
import Icon from '../icon-circle'
import Integrate from './svg/integrate'
import Express from './svg/frameworks/express';
import Koa from './svg/frameworks/koa';
import Electron from './svg/frameworks/electron';
import Nginx from './svg/frameworks/nginx';

export default () => (
  <Container wide padding gray center>
    <div className="col">
      <div className="icon">
        <Icon><Integrate /></Icon>
      </div>

      <h2 className="f0 fw6">Incrementally Adopt</h2>
      <p>
        Need a path for incremental adoption? No problem. With the ability to
        use Next.js programmatically, it’s simple to incorporate it into any
        existing application. Next.js also provides complete multi-zone support
        for exposing multiple deployments under a single domain.
      </p>

      <hr />

      <h2 className="f0 fw6">Integrate Anywhere</h2>
      <div className="integrate-content">
        <p>
          With over 170 examples to follow, server-side rendering with Next.js
          can be easily integrated with your current Node.js backend, such as
          Express, Koa, or even Electron.
        </p>
      </div>

      <div className="frameworks">
        <div className="logo express">
          <Express />
        </div>
        <div className="logo">
          <Koa />
        </div>
        <div className="logo">
          <Electron />
        </div>
        <div className="logo nginx">
          <Nginx />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        p {
          margin: 0 1rem;
          max-width: 44rem;
        }

        .integrate-content {
          max-width: 42rem;
        }

        h2 {
          margin: 1rem 0 1.5rem 0;
          line-height: 1.3;
        }

        hr {
          border-top: 0;
          border-right: 0;
          border-style: solid;
          opacity: 0.1;
          margin: 4rem 0;
          align-self: stretch;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon {
          display: flex;
          justify-content: center;
          transform: scale(1.25);
        }

        .frameworks {
          display: flex;
          margin: 3rem 1rem 0;
        }

        .logo {
          margin: 0 2.5rem;
          opacity: 0.25;
          height: 2rem;
        }

        .express {
          padding-top: 3px;
        }

        .nginx {
          padding-top: 6px;
        }

        @media screen and (max-width: 640px) {
          br,
          .frameworks {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);

import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';
import Editor from './editor';

const files = [
  {
    name: 'scoped.js',
    content: `export default () => (
  <div>
    <button>Click me</button>

    <style jsx>{\`
      div { display: flex; }
      button { padding: 20px; }
    \`}</style>
  </div>
)`
  },
  {
    name: 'global.js',
    content: `export default () => (
  <div>
    <style jsx global>{\`
      body { margin: 0; }
    \`}</style>
  </div>
)`
  },
  {
    name: 'dynamic.js',
    content: `export default ({ children, large, theme }) => (
  <button>
      { children }

      <style jsx>{\`
        button {
          padding: \${ large ? '50' : '20' }px;
          background: \${ theme.background };
        }
      \`}</style>
  </button>
)`
  },
  {
    name: 'external.js',
    content: `import css from 'styled-jsx/css'
    
const button = css\`button { color: hotpink; }\`

export default () => (
  <div>
    <button>Click me</button>

    <style jsx>{ button }</style>
  </div>
)`
  },
  {
    name: 'file.js',
    content: `import styles from './styles.css'

export default () => (
  <div>
    <button>Click me</button>

    <style jsx>{ styles }</style>
  </div>
)`
  },
  {
    name: 'fragment.js',
    content: `export default () => (
  <>
    <button>Click me</button>

    <style jsx>{\`
      button { background-color: blue; }
    \`}</style>
  </>
)`
  }
];

export default () => (
  <Container padding>
    <div className="col">
      <SectionHeader
        anchor="unlock"
        title="Unlock the Potential of CSS"
        description={`For Next.js applications, CSS-in-JS offers a compelling set of features to supercharge your developer experience and ensure your team can move fast.`}
      />

      <Button invert href="/learn/basics/styling-components">
        Learn Next.js
      </Button>

      <div className="editor-container">
        <Editor files={files} />
      </div>
    </div>

    <style jsx>
      {`
        h2 {
          margin: 0.5rem 0 1.5rem;
          line-height: 1.3;
        }

        .col :global(h3) {
          max-width: 40rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .editor-container {
          width: 100%;
          max-width: 40rem;
          margin-top: 6rem;
          font-size: 0.85rem;
        }
      `}
    </style>
  </Container>
);

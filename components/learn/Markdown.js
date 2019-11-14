import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
// import dynamic from 'next/dynamic';

// const Highlight = dynamic(import('react-highlight'), {
//   // Here we don't show any loading component.
//   // But instead, we'll show the markdown content without syntax-highlight
//   loading: ({ children }) => <div dangerouslySetInnerHTML={{ __html: children }} />
// });

const A = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const H2 = ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
      }
    `}</style>
  </h2>
);

const Hr = () => (
  <>
    <hr />
    <style jsx>{`
      hr {
        margin: 3rem 0;
        border: none;
        border-bottom: 1px solid #dadada;
      }
    `}</style>
  </>
);

const Img = ({ ...props }) => (
  <>
    <img {...props} alt={props.alt || ''} />
    <style jsx>{`
      img {
        max-width: 100%;
      }
    `}</style>
  </>
);

const Blockquote = ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      blockquote {
        margin: 2rem 0;
        padding: 1rem 1.25rem;
        background: #f7f7f7;
      }
      blockquote p {
        margin: 0;
      }
    `}</style>
  </blockquote>
);

const Code = ({ children }) => (
  <pre>
    <code>{children}</code>
    <style jsx>{`
      pre {
        padding: 1.25rem;
        margin: 40px 0;
        border: 1px solid #eaeaea;
        white-space: pre;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      pre code {
        padding: 0;
        border-radius: 0;
      }
      pre code::before {
        content: '';
      }
      pre code::after {
        content: '';
      }
    `}</style>
  </pre>
);

const InlineCode = ({ children }) => (
  <code>
    {children}
    <style jsx>{`
      code {
        color: rgb(212, 0, 255);
        font-size: 14px;
        white-space: pre-wrap;
      }
      code::before {
        content: '\`';
      }
      code::after {
        content: '\`';
      }
    `}</style>
  </code>
);

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  h2: H2,
  img: Img,
  hr: Hr,
  inlineCode: InlineCode
};

const Markdown = ({ children }) => <MDXProvider components={components}>{children}</MDXProvider>;

export default Markdown;

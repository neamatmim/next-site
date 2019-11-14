import React from 'react';
import Highlight from '../highlight';

import Window from '../window';
import File from './svg/file';

export default ({ files = [], height = 320, language = 'javascript' }) => {
  const [selected, select] = React.useState(0);
  const { content, name } = files[selected];
  const lines = ['', ...content.match(/\n/g)];

  return (
    <Window
      title={name}
      height={height}
      borderColor="#EEEEEE"
      boxShadow="0px 20px 50px rgba(0, 0, 0, 0.12)"
    >
      <div className="editor">
        <div className="files">
          {files.map(({ name }, i) => (
            <div
              key={name}
              className={i === selected ? 'selected' : ''}
              onClick={() => select(i)}
            >
              <File />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="content">
          <div className="line-numbers">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <Highlight className={language}>{content}</Highlight>
        </div>
      </div>
      <style jsx>
        {`
          .editor {
            display: flex;
            overflow: hidden;
          }

          .files {
            padding: 0 1rem;
            align-items: flex-start;
            display: flex;
            flex: 0 0 12rem;
            flex-direction: column;
          }

          .files > div {
            display: flex;
            align-items: center;
            margin: 0.2rem 0;
            cursor: pointer;
          }

          .files span {
            font-size: 12px;
            margin-left: 0.6rem;
          }

          .files :global(svg) {
            opacity: 0.3;
          }

          .files > .selected {
            cursor: auto;
          }

          .selected span {
            font-weight: 600;
          }

          .selected :global(svg) {
            opacity: 1;
          }

          .content {
            position: relative;
            display: flex;
            flex: 1;
            padding: 0 0.5rem;
          }

          .content :global(pre) {
            margin: 0;
          }

          .content :global(.hljs-meta) {
            color: blue;
          }
          .content :global(.hljs-tag),
          .content :global(.hljs-name),
          .content :global(.hljs-keyword),
          .content :global(.hljs-params) {
            font-weight: 600;
          }

          .line-numbers {
            left: -1rem;
            color: #222222;
            opacity: 0.2;
            position: absolute;
          }

          @media screen and (max-width: 700px) {
            .files {
              display: none;
            }
            .line-numbers {
              left: -1rem;
            }
            .content {
              margin: 0 0 0 2rem;
            }
          }
        `}
      </style>
    </Window>
  );
};

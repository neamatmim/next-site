import React from 'react';

export default function Prompt(props) {
  return (
    <span className="prompt">
      <span className="triangle">▲</span> ~/my-site{' '}
      <style jsx>
        {`
          .triangle {
            color: #fff;
          }
          .prompt {
            color: #ccc;
          }
        `}
      </style>
    </span>
  );
}

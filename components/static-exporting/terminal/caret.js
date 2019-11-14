import React from 'react';

export default function Caret(props) {
  return (
    <span className="caret">
      <style jsx>
        {`
          .caret {
            background: #0070f3;
            display: inline-block;
            width: 7px;
            height: 15px;
            vertical-align: middle;
          }
        `}
      </style>
    </span>
  );
}

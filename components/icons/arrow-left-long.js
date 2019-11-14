export default ({ color }) => (
  <svg height="16" width="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
    <g fill={color || '#111111'} stroke={color || '#111111'} strokeWidth="2">
      <line fill="none" strokeLinecap="round" x1="15.5" x2="0.5" y1="8.5" y2="8.5" />
      <polyline
        fill="none"
        points="5.5,3.5 0.5,8.5 5.5,13.5 "
        stroke={color || '#111111'}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

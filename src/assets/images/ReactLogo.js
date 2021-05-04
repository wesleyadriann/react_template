import * as React from 'react'

function ReactLogo (props) {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" {...props}>
      <circle r={2.05} fill="#fff" />
      <g stroke="#fff" fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  )
}

const MemoReactLogo = React.memo(ReactLogo)
export default MemoReactLogo

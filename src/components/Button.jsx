import React from 'react'

function Button({label, onClick}) {
  return (
    <div>
      <span>{label}</span>
      <button onClick={onClick}>GO</button>
    </div>
  )
}

export default Button

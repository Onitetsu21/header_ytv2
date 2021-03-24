import React from 'react'

function PageList({menu}) {
  return (
    <div>
      <ul>
        <li>{menu[0].label}</li>
        <li>{menu[1].label}</li>
        <li>{menu[2].label}</li>
        <li>{menu[3].label}</li>
        <li>{menu[4].label}</li>
      </ul>
    </div>
  )
}

export default PageList
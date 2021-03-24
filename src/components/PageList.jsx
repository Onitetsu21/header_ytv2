import React from 'react'

function PageList(props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li>{props.menu[0].label}</li>
        <li>{props.menu[1].label}</li>
        <li>{props.menu[2].label}</li>
        <li>{props.menu[3].label}</li>
        <li>{props.menu[4].label}</li>
      </ul>
    </div>
  )
}

export default PageList
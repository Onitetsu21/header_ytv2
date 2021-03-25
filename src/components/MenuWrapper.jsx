import React from 'react'


function MenuWrapper (props) {

  function printTitle(title) {
    if (title) {
      return <h1>{title}</h1>
    } else {
      return null
    }
  }

  return (
    <div>
      {printTitle(props.title)}
      {props.children}
      <hr/>
    </div>
  )
}
export default MenuWrapper
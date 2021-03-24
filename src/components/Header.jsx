import React from 'react'

function Header({children }) {

  let isOnline = true

  return (
    <header>
      <p>test</p>
      { children }
    </header>
  )
}

export default Header


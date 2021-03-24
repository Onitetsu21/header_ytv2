import React from 'react'

function Header({children }) {

  let isOnline = true

  return (
    <header>
      { children }
    </header>
  )
}

export default Header


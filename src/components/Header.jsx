import React from 'react'

function Header({ title, subtitle, children }) {

  return (
    <header>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>

      { children }
    </header>
  )
}

export default Header


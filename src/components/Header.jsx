import React from 'react'
import ButtonLogin from './ButtonLogin'
import Logo from './Logo'
import SearchBar from './SearchBar'
import DotsButton from './DotsButton';

function Header() {

  return (
    <header>
      <Logo />
      <SearchBar />
      <div className="header_rightSection">
        <DotsButton />
        <ButtonLogin value="SE CONNECTER"/>
      </div>
    </header>
  )
}

export default Header
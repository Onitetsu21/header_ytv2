import React from 'react'
import ReactDOM from 'react-dom'

function Header() {
  return (
    <header className="Header">
      <h1>Hello world!</h1>
      <ul>
	<li>Accueil</li>
	<li>À propos de nous</li>
	<li>Nous contacter</li>
      </ul>
    </header>
  )
}

ReactDOM.render(
  Header(),
  document.getElementById("wrapper")
)



import React, { Fragment } from 'react'

import Header from './components/Header'
import Button from './components/Button'


function App() {
  return (
    <Fragment>
      <Header title="Mon super blog !!" subtitle="mon sous-titre">
	<Button label="Login" onClick={() => console.log(1)} />
      </Header>
	
      <div>
	<aside></aside>
	<div></div>
      </div>

      <footer>
	<p>&copy;copyright 2021, Julien Oppliger, inc.</p>
      </footer>
    </Fragment>
  )
}

export default App

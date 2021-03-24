import React, { Fragment } from 'react'

import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header title="Mon super blog !!" subtitle="mon sous-titre"/>

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

import React, { Fragment } from 'react'

import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'



function App() {
  return (
    <Fragment>
      <Header />
      <div>
        <Aside>
          /*Attention gestion affichage, utilisation de children ? */
          <footer>
            <p>&copy;copyright 2021, Random guy, inc.</p>
          </footer>
        </Aside>
        <Main></Main>
      </div>

    </Fragment>
  )
}

export default App

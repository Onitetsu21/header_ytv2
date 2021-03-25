import React, { Fragment } from 'react'

import Header from './components/Header'
import Aside from './components/Aside'
import Main from './components/Main'
import Cookies from './components/Cookies'



function App() {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <Aside />
        <Main/>
      </div>
      <footer>
        <p>&copy;copyright 2021, Random guy, inc.</p>
      </footer>
      <Cookies >
        <p>ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! ILS SONT BEAUX MES COOKIES ! </p>
      </Cookies>

    </Fragment>
  )
}

export default App

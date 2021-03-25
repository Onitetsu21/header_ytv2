import React, { Fragment } from 'react'

function Cookies({children}){
  return (
    <div className="cookies">
      {children}
      <button>Accepter</button>
      <button>JAMAIS</button>
    </div>
  )
}

export default Cookies
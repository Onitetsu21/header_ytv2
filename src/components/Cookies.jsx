import React, { Fragment, useState } from 'react'

function Cookies({children}){

  const [accepted, setAccepted] = useState(false)


  return (
    <div className="cookies" style={{ display: (accepted ? "none" : "flex") }}>
      {children}
      <button onClick={() => setAccepted(true)}>Accepter</button>
      <button>JAMAIS</button>
    </div>
  )
}

export default Cookies

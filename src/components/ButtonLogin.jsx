import React, {Fragment} from 'react'


function ButtonLogin({value}) {
  return (
    <div>
      <button className="buttonLogin"> <img src="./images/profil.svg" alt="profilIcon"/> {value}</button>
    </div>
  )
}

export default ButtonLogin

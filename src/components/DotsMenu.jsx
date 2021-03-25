import React, {Fragment} from 'react'

let settings = [
  { label: "Langue", icon: "home", onClick: () => alert('Langue') },
  { label: "Pays", icon: "explore", onClick: () => alert('Pays') },
  { label: "Aide", icon: "subscriptions", onClick: () => alert('Aide') },
]


function DotsMenu() {
  return (
    <div className="dotsMenu">
      {settings.map(elm => 
        <span onClick={elm.onClick} >{elm.icon}{elm.label}</span>
      )}
    </div>
  )
}


export default DotsMenu

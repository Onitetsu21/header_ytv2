import React from 'react'

function SetList(props) {
  return (
    <div>
      <ul>
        {
          props.settings.map((elm, index)=>(
            <li key={index}>
              <p onClick={elm.onClick}>
                <span className="material-icons">{elm.icon}</span>
                {elm.label}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SetList
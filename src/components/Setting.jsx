import React, {Fragment} from 'react'

function Setting({label, icon, onClick}) {
    return (
      <Fragment>
        <span icon={icon} onClick={onClick} >{label}</span>
      </Fragment>
    )
  }

export default Setting
import React, {Fragment} from 'react'
import DotsMenu from './DotsMenu';

function DotsButton() {
  return (
    <div className="dotsSection">
        <img className="dotsButton" src="./images/dots.svg" alt="profilIcon" onClick="showMenu"/>
      <DotsMenu/>
    </div>
  )
}

export default DotsButton
